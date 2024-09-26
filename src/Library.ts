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

    viewAvailableBooks(): Book[] {
        return this.books.filter((book) => book.isAvailable);
      }
    
  }
  
  


  export default Library;