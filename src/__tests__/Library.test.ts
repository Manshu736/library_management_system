import Library from '../Library';

describe('Library Management System', () => {
    let library: Library;
  
    beforeEach(() => {
      library = new Library();
    });
  
  test('should add a book to the library', () => {
    library.addBook('345', 'Fundamentals of Physics', 'HC Verma', 2000);
    expect(library.viewAvailableBooks().length).toBe(1);
  });

  test('should allow borrowing an available book', () => {
    library.addBook('123', 'TypeScript Basics', 'John Doe', 2020);
    library.borrowBook('123');
    expect(library.viewAvailableBooks().length).toBe(0);
  });

  test('should throw error when borrowing a non-existent book', () => {
    expect(() => library.borrowBook('999')).toThrow('Book with ISBN 999 not found.');
  });

});