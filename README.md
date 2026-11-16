# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Project Manager - React Application

Description

Project Manager is a React application that allows users to add, view, search, and filter their software development projects. Users can submit project details through a form and organise projects according to the programming language used.

Features

Add Projects: Users can add new projects by providing a project name, programming language, and description.

Search Projects: Search for projects using their names or programming languages.

Filter Projects: Filter projects by programming language (Python, HTML, Java, and React).

Dynamic Updates: Newly added projects are displayed immediately without refreshing the page.

Form Validation: Required fields ensure users provide all the necessary project information.

Technologies Used

React.js

JavaScript

HTML

Tailwind CSS

Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Projectitem.jsx
│   └── Form.jsx
│
├── data.js
├── App.jsx
└── main.jsx
How to Use

Open the application.

Navigate to the Projects section.

Enter a project name.

Enter the programming language used.

Provide a short project description.

Click Submit to add the project.

Use the search bar to find specific projects.

Use the category buttons to filter projects by programming language.

Future Improvements

Store projects permanently using a database or browser storage.

Allow users to edit existing projects.

Allow users to delete projects.

Add user authentication.

Improve the application's responsive design.

Author

Giggs Muturi

