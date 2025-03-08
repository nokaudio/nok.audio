---
name: repo
type: repo
agent: CodeActAgent
---

Repository: nok.audio

Description: A React-based audio application built with Vite and TypeScript, focusing on audio processing and visualization.

Directory Structure:
- src/: Main application source code
  - components/: React components for audio interface
  - content/: Documentation and session summaries
    - sessions/: Development session logs
    - instruction.md: Documentation guidelines
  - utils/: Audio processing utilities
  - types/: TypeScript type definitions
- .openhands/: OpenHands AI configuration
  - microagents/: Agent-specific documentation
- .bolt/: Configuration files
- public/: Static files and audio assets
- tests/: Test suites for audio features

Setup:
- Run `pnpm install` to install dependencies
- Use `pnpm dev` for development with Web Audio API
- Configure audio input/output in browser settings
- Enable necessary browser permissions for audio

Commands:
- `pnpm install`: Installs dependencies
- `pnpm dev`: Starts local development server
- `pnpm build`: Builds production site
- `pnpm preview`: Preview production build
- `pnpm lint`: Run ESLint
- `pnpm test`: Run audio feature tests

Technologies:
- React 18: Frontend framework
- TypeScript: Type-safe JavaScript
- Vite: Build tool and dev server
- TailwindCSS: Styling
- Web Audio API: Audio processing
- ESLint: Code quality
- Lucide React: Icons
- Jest: Testing framework

Guidelines:

Code Style:
- Use TypeScript for all components
- Implement functional React components
- Follow ESLint configuration
- Document audio processing functions
- Use TailwindCSS for styling

Audio Processing:
- Initialize AudioContext properly
- Handle audio buffer management
- Implement proper cleanup
- Consider browser compatibility
- Monitor performance impact

Documentation:
- Create session summaries
- Document audio features
- Include code examples
- Reference Web Audio API docs

Testing:
- Write unit tests for audio functions
- Test with various audio formats
- Verify memory management
- Check browser compatibility

Development Flow:
- Create feature branches
- Document changes in sessions/
- Test audio features thoroughly
- Submit focused pull requests

Performance:
- Monitor audio processing load
- Optimize visualization rendering
- Handle large audio files efficiently
- Clean up audio resources

Browser Support:
- Test in modern browsers
- Verify Web Audio API support
- Handle fallback scenarios
- Check audio codec support

Security:
- Validate audio file uploads
- Implement CORS policies
- Secure audio processing
- Monitor resource usage