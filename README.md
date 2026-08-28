# Employee Management System

A full-stack Employee Management System built using Angular and ASP.NET Core Web API.

## Features

- Employee listing
- Add new employee
- Edit employee details
- Delete employee
- Search employees by name, department or email
- Sort employees by name and salary
- Pagination
- Active / In-Active employee status
- Form validation
- API-based CRUD operations
- Loading and error handling

## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- SQL Server

## Project Structure

```text
EmployeeManagement
│
├── src
│   └── app
│       ├── Component
│       │   ├── employee
│       │   ├── employee-form
│       │   ├── home
│       │   └── home-crud
│       │       ├── employee-add
│       │       └── employee-list
│       │
│       ├── models
│       └── services
│
├── public
├── angular.json
├── package.json
└── README.md