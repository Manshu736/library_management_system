type Book = {
    isbn: string;
    title: string;
    author: string;
    year: number;
    isAvailable: boolean;
  };
  
  class Library {
    private books: Book[] = [];
  
    

    viewAvailableBooks(): Book[] {
        return this.books.filter((book) => book.isAvailable);
      }
    
  }
  
  


  export default Library;