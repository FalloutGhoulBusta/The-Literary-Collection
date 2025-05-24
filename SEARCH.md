# Search Functionality

## Overview
The search functionality in the Library application allows users to find books by searching through titles and authors. The search is implemented using vanilla JavaScript and works independently of the category filtering system.

## Implementation Details

### Event Listeners
The search can be triggered in two ways:
1. Clicking the search button
2. Pressing Enter while in the search input field

### Search Logic
The main search functionality is implemented in the `handleSearch` function:

```javascript
function handleSearch() {
    // Get and clean the search term (convert to lowercase and remove extra spaces)
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // If search is empty, restore to current category filter
    if (searchTerm === '') {
        filterByCategory(currentCategory);
        return;
    }
    
    // Search in title and author
    filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    
    // Display the filtered results
    displayBooks(filteredBooks);
}
```

### Key Features

#### Case Insensitive Search
- All searches are case-insensitive
- Both search terms and book data are converted to lowercase before comparison

#### Partial Matching
- Finds partial matches in both titles and authors
- Example: Searching for "rowl" will find "J.K. Rowling"

#### Integration with Category Filters
- Search works independently of category filters
- After a search, category filters can still be used to narrow down results

#### Empty Search Handling
- An empty search box reverts to showing books filtered by the current category
- No results are shown if no books match the search criteria

### Example Use Cases

#### Successful Searches
- Title search: Typing "harry" finds "Harry Potter and the Philosopher's Stone"
- Author search: Typing "orwell" finds books by George Orwell

#### No Results
- Shows "No books found" message when no matches are found
- Example: Typing "xyz123" will show no results
