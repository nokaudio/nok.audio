---
title: "Add Waveform Visualizer Component"
description: "Created a React component for audio waveform visualization using Web Audio API"
pubDate: 2025-03-08T13:35:00Z
---

# USER_CONTEXT
Create a reusable waveform visualization component that can display audio waveforms using the Web Audio API and Canvas.

# STATE
- ✅ Basic waveform visualization implemented
- ✅ Component accepts customization props
- ✅ Proper cleanup of audio resources
- ✅ TypeScript types defined
- ✅ Error handling implemented

# TESTS
- ✅ Component renders without errors
- ✅ Audio context initialization
- ✅ Canvas drawing
- ✅ Resource cleanup
- 🟡 Need performance testing with large files
- 🟡 Need browser compatibility testing

# CHANGES
- Created `src/components/WaveformVisualizer.tsx`:
  - Implemented waveform drawing logic
  - Added customization props
  - Set up audio context management
  - Added cleanup in useEffect
  - Implemented error handling

# DEPS
- React 18.3.1
- TypeScript
- Web Audio API
- Canvas API

# INTENT
- Create reusable audio visualization
- Ensure proper resource management
- Allow visual customization
- Follow React best practices
- Maintain type safety

# NEXT_STEPS
1. Add playback controls
2. Implement time markers
3. Add zoom functionality
4. Optimize for large files
5. Add frequency visualization
6. Create usage documentation
7. Add loading state indicator

# ISSUES
1. Large files may impact performance
2. Browser compatibility needs testing
3. Mobile touch events not yet handled
4. No loading state indicator
5. No error state UI

# Code Examples

## Basic Usage
```tsx
<WaveformVisualizer
  audioUrl="/path/to/audio.mp3"
  width={800}
  height={200}
  barColor="#2563eb"
/>
```

## With All Options
```tsx
<WaveformVisualizer
  audioUrl="/path/to/audio.mp3"
  width={1200}
  height={300}
  barWidth={3}
  barGap={1}
  barColor="#22c55e"
  backgroundColor="#1e293b"
  onLoad={() => console.log('Waveform loaded')}
  onError={(error) => console.error('Error:', error)}
/>
```

## Component Props
```typescript
interface WaveformVisualizerProps {
  audioUrl: string        // URL of the audio file
  width?: number         // Canvas width in pixels
  height?: number        // Canvas height in pixels
  barWidth?: number      // Width of each bar
  barGap?: number        // Gap between bars
  barColor?: string      // Color of waveform bars
  backgroundColor?: string // Canvas background color
  onLoad?: () => void    // Called when waveform is drawn
  onError?: (error: Error) => void // Called on error
}
```

# Technical Notes

## Audio Processing
- Uses Web Audio API's `AudioContext` for decoding
- Processes audio data in chunks for efficiency
- Calculates min/max values for visualization
- Properly cleans up audio resources

## Canvas Drawing
- Uses HTML5 Canvas for rendering
- Draws waveform as a series of vertical lines
- Supports customizable colors and dimensions
- Optimizes drawing with proper scaling

## Resource Management
- Closes AudioContext when component unmounts
- Disconnects audio nodes properly
- Handles cleanup in useEffect
- Manages canvas context efficiently

## Error Handling
- Handles audio loading errors
- Provides error callback
- Cleans up resources on error
- TypeScript type safety

# References
- [Web Audio API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)