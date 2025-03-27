# Web Scrapper (Airbnb)

This repository contains both the frontend and backend components of a web scraping application designed to fetch and display property listings.

## Table of Contents

- [Web Scrapper (Airbnb)](#web-scrapper-airbnb)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Usage](#usage)
    - [Running the Backend](#running-the-backend)
    - [Running the Frontend](#running-the-frontend)

## Overview

The Web Scrapper project is a full-stack application that scrapes property listings from a specified website and displays them in a user-friendly interface. The backend handles the scraping logic using Playwright, while the frontend is built with React and Vite for a seamless user experience.

## Features

-   **Scrape Listings**: Automatically fetch property listings from a target website.
-   **Responsive UI**: A clean and responsive user interface built with React and Tailwind CSS.
-   **Error Handling**: Robust error handling to ensure smooth operation even when issues arise.
-   **Local Storage**: Persist listings data using local storage for offline access.

## Technologies Used

-   **Frontend**: React, Vite, Tailwind CSS
-   **Backend**: Node.js, Express, Playwright
-   **Build Tools**: TypeScript, Vite, Bun
-   **Linting**: ESLint with TypeScript support

## Installation

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    bun install
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    bun install
    ```

## Usage

### Running the Backend

To start the backend server, run the following command in the backend directory:

```bash
bun run dev
```

### Running the Frontend

To start the frontend development server, run the following command in the frontend directory:

```bash
bun run dev
```
