# Task Management Tool

A task management application that allows users to create, add, edit, and set due dates for tasks. This project is built with React and styled using Tailwind CSS. The application also has an API developed with Node.js and Express, using MySQL as the database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Frontend](#frontend-setup)
  - [Backend](#backend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
  - [SQL](#sql-code)
  - [Table](#tasks-table)

## Features

- Create, edit, and delete tasks.
- Set due dates for tasks.
- Mark tasks as completed.
- Drag and drop tasks between columns (incomplete and completed).
- Add tasks to favorites.
- Responsive design with mobile support.

## Tech Stack

### Frontend

- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for fast UI development.
- **React Router DOM** - For routing between different pages.
- **React DayPicker** - For date picking functionality.

### Backend

- **Node.js** - JavaScript runtime for server-side code.
- **Express** - Web framework for building APIs.
- **MySQL** - Relational database for storing task data.
- **bcrypt** - Library for hashing passwords.
- **cors** - Middleware for enabling CORS.
- **mysql2** - MySQL client for Node.js.

## Installation

### Prerequisites

- Node.js and npm installed.
- MySQL installed and running.

### Frontend Setup

1. Clone the repository and navigate to the frontend folder:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   node --watch ./app.js
   ```

## API Endpoints

- Get All Tasks
  - **GET** `http://localhost:1234/tasks`
- Get All Favorite Tasks
  - **GET** `http://localhost:1234/tasks/favorites`
- Update Task Favorite Status
  - **PATCH** `http://localhost:1234/tasks/favorites/:taskId`
- Update Task Reminder Date
- **PATCH** `http://localhost:1234/tasks/reminder/:taskId`
- Update Task Due Date
- **PATCH** `http://localhost:1234/tasks/dueDate/:taskId`
- Delete a Task
- Update Task Status
- **PATCH** `http://localhost:1234/tasks/status/:taskId`
- Create a New Task
- **POST** `http://localhost:1234/tasks`
- Update a Task
- **PATCH** `http://localhost:1234/tasks/:taskId`

## Database Schema

### SQL Code

- This is the code with which you can create the table in MySQL

  ```bash
  CREATE TABLE tasks (
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(70) NOT NULL,
    description TEXT,
    due_date DATE,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  ```

### Tasks Table

- This is the schematic of the Task table

| Column      | Type                         | Description                                                                      |
| ----------- | ---------------------------- | -------------------------------------------------------------------------------- |
| id          | BINARY(16)                   | Unique identifier for each task, stored as a binary UUID.                        |
| title       | VARCHAR(70)                  | Title of the task (maximum 70 characters).                                       |
| description | TEXT                         | Detailed description of the task.                                                |
| due_date    | DATE                         | Due date for the task.                                                           |
| status      | ENUM('pending', 'completed') | Current status of the task, defaults to 'pending'.                               |
| created_at  | TIMESTAMP                    | Timestamp of when the task was created. Defaults to the current timestamp.       |
| updated_at  | TIMESTAMP                    | Timestamp of the last update to the task. Automatically updates on modification. |
