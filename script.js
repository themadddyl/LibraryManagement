const books = [
    { title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
    { title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2021-06-15' },
    { title: 'Book 3', author: 'Author 1', subject: 'Subject 1', publishDate: '2020-09-20' },
    { title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2023-01-01' },
    { title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2023-02-01' },
    { title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2023-09-01' },
    { title: 'Book 4', author: 'Author 4', subject: 'Subject 2', publishDate: '2023-03-01' },
    { title: 'Book 5', author: 'Author 5', subject: 'Subject 9', publishDate: '2023-04-01' },
    { title: 'Book 6', author: 'Author 6', subject: 'Subject 2', publishDate: '2023-08-01' },
    { title: 'Book 7', author: 'Author 7', subject: 'Subject 9', publishDate: '2023-07-01' },
    { title: 'Book 8', author: 'Author 2', subject: 'Subject 2', publishDate: '2023-06-01' },
    { title: 'Book 9', author: 'Author 2', subject: 'Subject 4', publishDate: '2023-08-01' },
    { title: 'Book 10', author: 'Author 3', subject: 'Subject 4', publishDate: '2023-11-01' },
    { title: 'Book 12', author: 'Author 3', subject: 'Subject 4', publishDate: '2023-02-01' },
    { title: 'Book 13', author: 'Author 4', subject: 'Subject 4', publishDate: '2023-02-01' },
    { title: 'Book 14', author: 'Author 5', subject: 'Subject 2', publishDate: '2023-11-01' },
    { title: 'Book 15', author: 'Author 5', subject: 'Subject 5', publishDate: '2023-11-01' },
    { title: 'Book 16', author: 'Author 5', subject: 'Subject 2', publishDate: '2023-02-01' },
    { title: 'Book 17', author: 'Author 5', subject: 'Subject 4', publishDate: '2023-03-01' },
    { title: 'Book 18', author: 'Author 6', subject: 'Subject 6', publishDate: '2023-02-01' },
    { title: 'Book 19', author: 'Author 6', subject: 'Subject 2', publishDate: '2023-12-01' },
    { title: 'Book 20', author: 'Author 6', subject: 'Subject 2', publishDate: '2023-12-01' },
    { title: 'Book 21', author: 'Author 6', subject: 'Subject 4', publishDate: '2023-12-01' },
    { title: 'Book 22', author: 'Author 7', subject: 'Subject 2', publishDate: '2023-08-01' },
    { title: 'Book 23', author: 'Author 7', subject: 'Subject 2', publishDate: '2023-02-01' },
    { title: 'Book 24', author: 'Author 7', subject: 'Subject 7', publishDate: '2023-02-01' },
    { title: 'Book 25', author: 'Author 9', subject: 'Subject 4', publishDate: '2023-02-01' },
    { title: 'Book 26', author: 'Author 8', subject: 'Subject 2', publishDate: '2023-02-01' },
    { title: 'Book 27', author: 'Author 8', subject: 'Subject 4', publishDate: '2023-01-01' },
    { title: 'Book 28', author: 'Author 9', subject: 'Subject 7', publishDate: '2023-06-01' },
    { title: 'Book 29', author: 'Author 3', subject: 'Subject 1', publishDate: '2023-07-01' },
    { title: 'Book 30', author: 'Author 7', subject: 'Subject 2', publishDate: '2023-08-01' },
    { title: 'Book 31', author: 'Author 9', subject: 'Subject 8', publishDate: '2023-05-01' },
    { title: 'Book 32', author: 'Author 9', subject: 'Subject 2', publishDate: '2023-04-01' },
    { title: 'Book 33', author: 'Author 9', subject: 'Subject 2', publishDate: '2023-03-01' },
    { title: 'Book 34', author: 'Author 9', subject: 'Subject 1', publishDate: '2023-12-01' },
    { title: 'Book 35', author: 'Author 9', subject: 'Subject 2', publishDate: '2023-11-01' },
    { title: 'Book 36', author: 'Author 1', subject: 'Subject 2', publishDate: '2023-11-01' },
    // Add more books here...
  ];
  
  const resultsPerPage = 10;
  let currentPage = 1;
  
  function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
  
    const startIdx = (currentPage - 1) * resultsPerPage;
    const endIdx = startIdx + resultsPerPage;
  
    for (let i = startIdx; i < endIdx && i < books.length; i++) {
      const book = books[i];
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Subject: ${book.subject}</p>
        <p>Publish Date: ${book.publishDate}</p>
      `;
      bookList.appendChild(bookDiv);
    }
  
    displayPagination();
  }
  
  function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    const totalPages = Math.ceil(books.length / resultsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement('span');
      link.classList.add('pagination-link');
      link.innerText = i;
  
      if (i === currentPage) {
        link.classList.add('active');
      }
  
      link.onclick = () => {
        currentPage = i;
        displayBooks();
      };
  
      pagination.appendChild(link);
    }
  }
  
  function filterBooks() {
    const title = document.getElementById('title').value.toLowerCase();
    const author = document.getElementById('author').value.toLowerCase();
    const subject = document.getElementById('subject').value.toLowerCase();
    const publishDate = document.getElementById('publishDate').value;
  
    const filteredBooks = books.filter(book => {
      return (
        book.title.toLowerCase().includes(title) &&
        book.author.toLowerCase().includes(author) &&
        book.subject.toLowerCase().includes(subject) &&
        (publishDate === '' || book.publishDate === publishDate)
      );
    });
  
    currentPage = 1;
    books.length = 0; // Clear the books array
    books.push(...filteredBooks);
    displayBooks();
  }
  
  // Initial display
  displayBooks();
  