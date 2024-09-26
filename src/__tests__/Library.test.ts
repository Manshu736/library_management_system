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


});