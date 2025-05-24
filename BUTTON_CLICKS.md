# Button Click Functionality

## Overview
The library application uses modern JavaScript event handling to manage various button clicks and user interactions. All event listeners are set up using `addEventListener` with arrow functions for concise and modern code.

## Search Functionality

### Search Button Click
```javascript
searchButton.addEventListener('click', handleSearch);
```

When you click the search button:
1. The `handleSearch` function is triggered
2. It performs a case-insensitive search through book titles and authors
3. Displays filtered results in the book container

### Enter Key in Search Input
```javascript
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
```

When you press Enter in the search input:
- The `handleSearch` function is triggered
- Behaves exactly like clicking the search button
- Maintains consistent user experience across different input methods

## Category Filtering

### Filter Buttons Click
```javascript
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
```

When you click a category filter button:
1. Removes 'active' class from all filter buttons
2. Adds 'active' class to the clicked button
3. Retrieves the category from the button's `data-category` attribute
4. Updates the current category state
5. Calls `filterByCategory` to display books in that category

## Book Interaction

### Book Card Click
When you click a book's "Read More" button:
1. Navigates to `info.html` with the book's ID as a query parameter
2. The URL format is: `info.html?bookId=[book-id]`
3. This allows for detailed book information to be displayed on the info page

## Event Handling Implementation

### DOM Event Listeners
```javascript
// DOM elements
const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);
    setupEventListeners();
});
```

### Event Types Used
1. `click` - For button clicks
2. `keyup` - For keyboard events
3. `DOMContentLoaded` - For initialization

## State Management

### Current State Variables
```javascript
let filteredBooks = [...books];
let currentCategory = 'all';
```

These variables track:
- The current filtered set of books
- The currently selected category

## Best Practices Used
1. Modern event handling with `addEventListener`
2. Arrow functions for concise syntax
3. DOMContentLoaded for proper initialization
4. Clean separation of concerns between event handlers and business logic
5. Proper state management with global variables

This documentation provides a comprehensive overview of all button click functionality in the library application, including search, filtering, and navigation.
Read More buttons: Navigates to book details page