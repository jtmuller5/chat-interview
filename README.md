# TypeScript Echo Bot

A simple command-line bot that echoes back everything you type. Press "q" to quit the application.

## Prerequisites

- Node.js (version 14 or higher)
- npm

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode (with TypeScript directly)
```bash
npm run dev
```

### Production Mode (compiled JavaScript)
1. Build the project:
   ```bash
   npm run build
   ```

2. Run the compiled version:
   ```bash
   npm start
   ```

## How to Use

1. Start the bot using one of the commands above
2. Type any message and press Enter - the bot will echo it back
3. Type "q" and press Enter to quit the application

## Project Structure

```
├── src/
│   └── index.ts          # Main bot implementation
├── dist/                 # Compiled JavaScript (after npm run build)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled JavaScript version
- `npm run dev` - Run directly with ts-node (development)