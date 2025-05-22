// Sample book data (in a real application, this might come from an API or database)
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "fiction",
        cover: "images/To_Kill_a_Mockingbird.jpg",
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
        published: "1960",
        pages: 281,
        language: "English",
        shortDescription: "A classic tale of racial injustice in the American South."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        cover: "images/1984.jpg",
        description: "1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 as Orwell's ninth and final book completed in his lifetime.",
        published: "1949",
        pages: 328,
        language: "English",
        shortDescription: "A dystopian novel about totalitarianism and surveillance."
    },
    {
        id: 3,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "non-fiction",
        cover: "images/A_Brief_History_of_Time.jpg",
        description: "A Brief History of Time: From the Big Bang to Black Holes is a theoretical physics book by English physicist Stephen Hawking. It was first published in 1988. Hawking wrote the book for readers who had no prior knowledge of physics.",
        published: "1988",
        pages: 212,
        language: "English",
        shortDescription: "An introduction to cosmology by renowned physicist Stephen Hawking."
    },
    {
        id: 4,
        title: "The Cosmos",
        author: "Carl Sagan",
        category: "science",
        cover: "images/cosmos.jpg",
        description: "Cosmos is a 1980 popular science book by astronomer and Pulitzer Prize-winning author Carl Sagan. Its 13 illustrated chapters, correspond to the 13 episodes of the Cosmos TV series.",
        published: "1980",
        pages: 365,
        language: "English",
        shortDescription: "A journey through the universe with astronomer Carl Sagan."
    },
    {
        id: 5,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        category: "fantasy",
        cover: "images/harry_potter_and_the_philosopher_stone.jpg",
        description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday.",
        published: "1997",
        pages: 223,
        language: "English",
        shortDescription: "The beginning of Harry Potter's magical journey at Hogwarts."
    },
    {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        category: "fantasy",
        cover: "images/the-lord-of-the-rings.jpg",
        description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
        published: "1954",
        pages: 1178,
        language: "English",
        shortDescription: "An epic fantasy journey through Middle-earth."
    },
    {
        id: 7,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "non-fiction",
        cover: "images/sapiens.jpg",
        description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures given at The Hebrew University of Jerusalem.",
        published: "2011",
        pages: 443,
        language: "English",
        shortDescription: "A thought-provoking exploration of human history."
    },
    {
        id: 8,
        title: "The Origin of Species",
        author: "Charles Darwin",
        category: "science",
        cover: "images/the_origin_of_species.jpg",
        description: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.",
        published: "1859",
        pages: 502,
        language: "English",
        shortDescription: "The groundbreaking work that introduced the theory of evolution."
    }
];

// DOM elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterButtons = document.querySelectorAll('.filter-btn');

// Variables to track current state
let filteredBooks = [...books];
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);
    setupEventListeners();
});

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            currentCategory = category;
            filterByCategory(category);
        });
    });
}

// Display books in the container
function displayBooks(booksToDisplay) {
    booksContainer.innerHTML = '';

    if (booksToDisplay.length === 0) {
        booksContainer.innerHTML = '<p class="no-results">No books found. Try a different search.</p>';
        return;
    }

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.setAttribute('data-id', book.id);

        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <span class="book-category">${book.category}</span>
                <a href="info.html?bookId=${book.id}" class="read-more-btn">Read More</a>
            </div>
        `;

        booksContainer.appendChild(bookCard);
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // If search is empty, restore to current category filter
        filterByCategory(currentCategory);
        return;
    }
    
    // Search in title and author
    filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    
    displayBooks(filteredBooks);
}

// Filter books by category
function filterByCategory(category) {
    if (category === 'all') {
        filteredBooks = [...books];
    } else {
        filteredBooks = books.filter(book => book.category === category);
    }
    
    displayBooks(filteredBooks);
}