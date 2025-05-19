# Password Strength Checker

A modern React application that helps users create secure passwords by providing real-time strength assessment and feedback.

## Features

- Real-time password strength evaluation
- Visual strength meter with color indicators
- Password visibility toggle
- Dynamic criteria checking
- Helpful tips to improve password strength
- Clean, responsive UI built with Tailwind CSS

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

### Development

Start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

### Build for Production

```bash
npm run build
```
or
```bash
yarn build
```

## How It Works

The application evaluates password strength based on several criteria:
- Minimum length (8 characters)
- Contains uppercase letters
- Contains lowercase letters
- Contains numbers
- Contains special characters
- Not a common password

Additional strength points are awarded for:
- Good length (12+ characters)
- Excellent length (16+ characters)

The password is analyzed locally in the browser and is never transmitted to any server.

## Project Structure

- `src/components/` - React components
- `src/context/` - React context for password state management
- `src/utils/` - Utility functions for password analysis
- `src/types/` - TypeScript type definitions
- `src/constants/` - Application constants

## License

MIT 