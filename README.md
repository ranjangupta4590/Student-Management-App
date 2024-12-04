# Student Management App

This is a Student Management App built with React and Tailwind CSS. The app allows users to view and manage student data. It supports both desktop and mobile views with pagination and infinite scrolling. The app provides a dynamic interface for listing student information, either in a table format for desktop users or as cards for mobile users.

# Live Demo : https://student-management-app-nine.vercel.app/

## Features

- **Pagination (Desktop)**: Users can navigate through student data in pages.
- **Infinite Scrolling (Mobile)**: On mobile devices, more students are loaded automatically as the user scrolls down.
- **Responsive Design**: The app adapts to both mobile and desktop screen sizes.
- **Loading State**: A loading message is displayed while data is being fetched.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Live Demo

You can view the live demo of the application at:  
[Student Management App](https://student-management-app-nine.vercel.app/)

## Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ranjangupta4590/Student-Management-App.git
```

### 2. Install Dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd Student-Management-App
npm install
# OR
yarn install
```

### 3. Start the Development Server

To run the app locally in development mode, use the following command:

```bash
npm start
# OR
yarn start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

### 4. Environment Variables

There are no specific environment variables required for this app, as it fetches the student data from a mock API.

### 5. Build the Project

To create a production build of the app, run:

```bash
npm run build
# OR
yarn build
```

After building, you can serve the app with:

```bash
npm run serve
# OR
yarn serve
```

## File Structure

```
/src
  /components
    StudentCard.js      // Displays student data as cards (mobile view)
    StudentTable.js     // Displays student data in a table (desktop view)
    Pagination.js       // Pagination component for navigating through pages
  /utils
    getStudents.js      // Mock API function to fetch student data
  App.js                // Main app file
  index.js              // Entry point for React application
```

## Contributing

Feel free to fork this repository, submit issues, and open pull requests. Contributions are always welcome!

## License

This project is open-source and available under the MIT License.
