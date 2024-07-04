# Unsplash Image Gallery App

![Project Image](path/to/your/project/image.png)

## Overview

This project is a simple web application that fetches and displays images from the Unsplash API. It allows users to search for images based on keywords and view them in a grid layout.

### Features

- Fetches images from the Unsplash API.
- Displays images in a responsive grid using Material-UI (MUI).
- Implements search functionality to filter images by keywords.
- Uses Redux for state management.
- Integrates Redux Saga for handling asynchronous actions.

## Technologies Used

- React
- Redux
- Redux Saga
- Material-UI (MUI)
- Axios (for API requests)
- Vite (for project setup)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samaila-bashir/unsplash-app.git

   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables::**

Create a .env file in the root directory and add your Unsplash API key:

```bash
VITE_UNSPLASH_API_KEY=your_unsplash_api_key_here
```

4. **Start the development server:**

   ```bash
   npm run dev
   ```
