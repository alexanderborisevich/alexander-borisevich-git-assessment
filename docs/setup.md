# Project Setup Guide

This document explains how to set up, configure, and run the project locally.

---

## 1. Prerequisites

Before starting, ensure the following tools are installed:

- **Node.js** v18 or newer  
  Verify installation:
  ```bash
  node -v
npm (bundled with Node.js)
Verify installation:
npm -v

## 2. Project Structure

```
project/
├── main.js      # Application entry point
├── utils.js     # Shared utility functions
├── setup.md     # Setup instructions
└── package.json # Project configuration
```

## 3. Initial Setup

### 3.1 Initialize the Project

Create a package.json file:

`npm init -y`

Edit package.json to enable ES Modules:
```
{
  "name": "example-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node main.js"
  }
}
```

## 4. Running the Application

Start the application using:

`npm run start`

Example output:
```
App started at: 2026-01-14T09:00:00.000Z
User name: Alex
Simulating async work...
Done at: 2026-01-14T09:00:01.000Z
```

## 5. Code Overview
```
main.js
Entry point of the application
Controls application flow
Centralized error handling
```
```
utils.js
Contains reusable helper functions
No side effects
Designed for easy testing and reuse
```

## 6. Common Issues

Cannot use import statement outside a module

 - Cause: ES Modules are not enabled
 - Solution: Ensure "type": "module" exists in package.json

## 7. Next Steps

You can extend the project by:
 - Adding unit tests
 - Introducing environment variables
 - Converting into a CLI tool
 - Adding structured logging 
