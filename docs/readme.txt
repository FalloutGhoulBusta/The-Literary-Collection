# The Literary Collection Library

A responsive online library application built with vanilla HTML, CSS, and JavaScript. This project showcases modern frontend development techniques without relying on external frameworks, making it an excellent learning resource for web development fundamentals.

## 🚀 Features

### Core Functionality
- **Interactive Book Grid**: Displays a responsive grid of books with cover images, titles, and authors
- **Category Filtering**: Filter books by categories (Fiction, Non-Fiction, Science, Fantasy)
- **Real-time Search**: Search functionality that filters books by title or author as you type
- **Book Details**: Click any book to view detailed information in a sidebar
- **Responsive Design**: Fully responsive layout that works on all device sizes

### User Experience
- **Hover Effects**: Hover over books to see brief descriptions
- **Visual Feedback**: Interactive elements provide clear visual feedback
- **Accessible**: Built with accessibility in mind, including proper ARIA labels and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Project Structure
project/ ├── index.html # Main application entry point ├── info.html # About/Information page ├── styles.css # Global styles and responsive design ├── script.js # Core application logic └── images/ # Contains book covers and icons ├── book-covers/ # Book cover images └── icons/ # UI icons (search, etc.)


## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly in the browser

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
Navigate to the project directory
Open index.html in your preferred web browser
🎨 Customization
Adding New Books
Open script.js
Add a new book object to the books array with the following structure:
{
    id: [unique-number],
    title: "Book Title",
    author: "Author Name",
    category: "category-name",
    cover: "images/book-cover.jpg",
    description: "Detailed book description...",
    published: "Year",
    pages: [page-count],
    language: "Language",
    shortDescription: "Brief description for hover effect"
}
Add the corresponding book cover image to the images/ directory
Styling
Main styles are in styles.css
Color scheme and design tokens are defined at the top of the file
The layout uses CSS Grid and Flexbox for responsive design
Adding New Categories
Add a new filter button in index.html:
<button class="filter-btn" data-category="new-category">New Category</button>
The filtering logic in script.js will automatically handle the new category
🧠 Technical Implementation
Key JavaScript Functions
displayBooks(booksToDisplay): Renders books to the DOM
handleSearch(): Implements real-time search functionality
filterByCategory(category): Handles category filtering
setupEventListeners(): Manages all event listeners
State Management
filteredBooks: Tracks currently displayed books
currentCategory: Tracks active category filter
Search is performed in real-time as the user types
📱 Responsive Design
Mobile-first approach
Responsive grid layout
Adaptive typography and spacing
Touch-friendly interactive elements
🛠️ Built With
Vanilla JavaScript (ES6+)
CSS3 (Grid, Flexbox, Variables)
HTML5 (Semantic Elements)
📚 Learning Points
This project demonstrates:

Modern JavaScript (ES6+ features)
DOM Manipulation
Event Delegation
Responsive Web Design principles
CSS Grid and Flexbox
Performance Optimization
Accessibility Best Practices
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is open source and available under the MIT License.

🙏 Credits
Book cover images are for demonstration purposes only
Custom icons are downloaded from the internet.
Inspired by modern library and e-book platforms