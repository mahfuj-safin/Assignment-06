# FitLog — Workout Library

FitLog is a dark-themed workout library built with Next.js. It helps users
explore workouts, view exercise details, create a daily workout plan, and save
exercises for later.

## Features

- **Workout Library:** Browse workouts covering different muscle groups.
- **Workout Details:** View workout descriptions, equipment, difficulty, sets,
  reps, duration, calories, rating, and instructions.
- **Sort Workouts:** Sort workouts in My Plan by duration, calories, or rating.
- **Daily Workout Plan:** Add workouts to today's plan with a maximum limit of
  five exercises.
- **Save for Later:** Save workouts and access them from the Saved tab.
- **Workout Tracking:** Mark workouts as completed and remove workouts from
  lists.
- **Dynamic Statistics:** View exercise count, total duration, and estimated
  calories.
- **Local Storage:** Keep workout plans, saved exercises, and completion status
  in the browser.
- **Responsive Design:** Use the application on mobile, tablet, and desktop
  screens.
- **Toast Notifications:** Receive feedback when adding, saving, completing, or
  removing workouts.
- **Custom 404 Page:** Display a custom page when a route cannot be found.

## Technologies Used

- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- Next.js Image
- React Toastify
- Browser Local Storage
- FitLog Workout API

## Installation and Setup

### Prerequisites

- Node.js
- npm

### 1. Clone the repository

```bash
git https://github.com/mahfuj-safin/Assignment-06
```

## Available Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Create a production build.

## Data Source

Workout information is retrieved from the FitLog API:

`https://api.abcz.workers.dev/api/fitlog`

Workout details are retrieved using the corresponding workout ID.

## Project Structure

```text

── src/
   │
   ├── app/
   │   ├── my-plan/
   │   ├── workouts/
   │   │
   │   ├── layout.jsx
   │   ├── page.jsx
   │   ├── not-found.jsx
   │   └── globals.css
   │
   └── components/
       ├── home/
       ├── my-plan/
       ├── WorkoutActions.jsx
       ├── Navbar.jsx
       └── Footer.jsx


```

_Note: Update the file extensions and structure above to match the actual
project files._

## Live Demo

https://assignment-6-silk-rho.vercel.app

## Author

Mahfujur Rahman Safin
