type Book = {
    isbn: string;
    title: string;
    author: string;
    year: number;
    isAvailable: boolean;
  };
  
  class Library {
    private books: Book[] = [];
  
    // Add a new book to the library
    addBook(isbn: string, title: string, author: string, year: number): void {
        const book: Book = { isbn, title, author, year, isAvailable: true };
        this.books.push(book);
      }
    // Borrow a book if it is available
    borrowBook(isbn: string): void {
        const book = this.books.find((book) => book.isbn === isbn);
        if (!book) {
              throw new Error(`Book with ISBN ${isbn} not found.`);
                   }
        if (!book.isAvailable) {
              throw new Error(`Book with ISBN ${isbn} is already borrowed.`);
                   }
        book.isAvailable = false;
      }

    viewAvailableBooks(): Book[] {
        return this.books.filter((book) => book.isAvailable);
      }
    
  }
  
  


  export default Library;