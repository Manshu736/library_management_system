# Library Management System

## Overview

This project is a simple **Library Management System** that enables users to perform core operations, including:
- Adding new books to the library.
- Borrowing books (only when available).
- Returning borrowed books.
- Viewing the current list of available books.

### Features

- **Add Books:** Users can add new books with details such as ISBN, title, author, and publication year.
- **Borrow Books:** Users can borrow books if they are in stock. The system checks availability before allowing a book to be borrowed.
- **Return Books:** Users can return borrowed books, and the system updates the book’s availability accordingly.
- **View Available Books:** Users can see a list of all books currently available for borrowing.

### Requirements

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Jest** for unit testing

### Setup

1. **Clone the repository:**
   
```bash
git clone https://github.com/Manshu736/library_management_system.git
cd library_management_system
```
2. **Install dependencies:**
```
npm install
```
3. **Run Application:**
```
tsc
node index.js
```
4. **Run Tests**
```
npm test
```
