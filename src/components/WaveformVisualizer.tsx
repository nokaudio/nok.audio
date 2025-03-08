import { useEffect, useRef } from 'react'

interface WaveformVisualizerProps {
  audioUrl: string
  width?: number
  height?: number
  barWidth?: number
  barGap?: number
  barColor?: string
  backgroundColor?: string
  onLoad?: () => void
  onError?: (error: Error) => void
}

export const WaveformVisualizer = ({
  audioUrl,
  width = 800,
  height = 200,
  barWidth = 2,
  barGap = 1,
  barColor = '#2563eb',
  backgroundColor = '#f8fafc',
  onLoad,
  onError,
}: WaveformVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioContextRef = useRef<AudioContext>()
  const sourceNodeRef = useRef<AudioBufferSourceNode>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawWaveform = async () => {
      try {
        // Initialize audio context
        audioContextRef.current = new AudioContext()
        const audioContext = audioContextRef.current

        // Fetch and decode audio data
        const response = await fetch(audioUrl)
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

        // Create source node
        sourceNodeRef.current = audioContext.createBufferSource()
        sourceNodeRef.current.buffer = audioBuffer

        // Get audio data
        const data = audioBuffer.getChannelData(0)
        const step = Math.ceil(data.length / width)
        const amp = height / 2

        // Clear canvas
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)

        // Draw waveform
        ctx.beginPath()
        ctx.strokeStyle = barColor
        ctx.lineWidth = barWidth

        for (let i = 0; i < width; i++) {
          const min = Math.min(...data.slice(i * step, (i + 1) * step))
          const max = Math.max(...data.slice(i * step, (i + 1) * step))

          ctx.moveTo(i * (barWidth + barGap), (1 + min) * amp)
          ctx.lineTo(i * (barWidth + barGap), (1 + max) * amp)
        }

        ctx.stroke()
        onLoad?.()
      } catch (error) {
        onError?.(error as Error)
      }
    }

    drawWaveform()

    return () => {
      if (audioContextRef.current?.state !== 'closed') {
        audioContextRef.current?.close()
      }
      sourceNodeRef.current?.disconnect()
    }
  }, [audioUrl, width, height, barWidth, barGap, barColor, backgroundColor, onLoad, onError])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-auto"
    />
  )
}