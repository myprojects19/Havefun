// 1. Quote Data (Over 100 quotes)
const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
    { text: "We become what we think about.", author: "Earl Nightingale" },
    { text: "Life is 10% what happens to me and 90% of how I react to it.", author: "Charles R. Swindoll" },
    { text: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" },
    { text: "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.", author: "Arnold Schwarzenegger" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { text: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso" },
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
    { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "Your life is what your thoughts make it.", author: "Marcus Aurelius" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama XIV" },
    { text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author: "Henry Ford" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "Rosa Parks" },
    { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The function of leadership is to produce more leaders, not more followers.", author: "Ralph Nader" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
    { text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", author: "Helen Keller" },
    { text: "Always bear in mind that your own resolution to succeed is more important than any other one thing.", author: "Abraham Lincoln" },
    { text: "The question isn’t who is going to let me; it’s who is going to stop me.", author: "Ayn Rand" },
    { text: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
    { text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farraj Najim" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not wait for a leader; do it alone, person to person.", author: "Mother Teresa" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { text: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso" },
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
    { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "Your life is what your thoughts make it.", author: "Marcus Aurelius" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama XIV" },
    { text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author: "Henry Ford" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "Rosa Parks" },
    { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
     { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much.", author: "Jim Rohn" },
    { text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
    { text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
    { text: "The indispensable first step to getting the things you want out of life is this: decide what you want.", author: "Ben Stein" },
    { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { text: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { text: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
    { text: "Certain things catch your eye, but pursue only those that capture the heart.", author: "Native American Proverb" },
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
    { text: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.", author: "Wayne Dyer" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "An obstacle is often a stepping stone.", author: "William Prescott" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The only way to discover the limits of the possible is to go beyond them into the impossible.", author: "Arthur C. Clarke" },
    { text: "If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.", author: "Dr. Roopleen" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.", author: "Joshua Marine" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { text: "Either run the day or the day runs you.", author: "Jim Rohn" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
     { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { text: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.", author: "Steve Jobs" },
    { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Life is short, and it is here to be lived.", author: "Kate Winslet" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Life is short, and it is here to be lived.", author: "Kate Winslet" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
    // Add many more quotes to reach 100+
];


// 2. DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const bookmarkBtn = document.getElementById('bookmark-btn');
const copyBtn = document.getElementById('copy-btn');
const downloadBtn = document.getElementById('download-btn');
const modeToggleBtn = document.getElementById('mode-toggle');
const savedQuotesList = document.getElementById('saved-quotes-list');
const quoteCard = document.getElementById('quote-card'); // Get the card element
const copyFeedback = document.getElementById('copy-feedback');


// Variables
let currentQuote = null; // To store the quote object currently displayed
let bookmarkedQuotes = []; // Array to hold bookmarked quote objects


// 3. Load Bookmarks and Theme from localStorage
function loadBookmarks() {
    const saved = localStorage.getItem('bookmarkedQuotes');
    if (saved) {
        bookmarkedQuotes = JSON.parse(saved);
    }
    renderSavedQuotes(); // Display them on load
}

function saveBookmarks() {
    localStorage.setItem('bookmarkedQuotes', JSON.stringify(bookmarkedQuotes));
    renderSavedQuotes(); // Update display after saving
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        modeToggleBtn.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    } else {
         // Default to light mode if nothing saved or saved as light
         document.body.classList.remove('dark-mode');
         modeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}


// 4. Core Functions

// Generate and Display a Random Quote
function displayRandomQuote() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    currentQuote = quote; // Store the current quote

    // Display the quote and author
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;

    // Update bookmark icon based on whether the current quote is bookmarked
    updateBookmarkIcon();

     // Optional: Apply gradient background (if implemented)
     // applyRandomGradient();
}

// Check if a quote is bookmarked
function isQuoteBookmarked(quote) {
     // Compare based on text and author (assuming they are unique enough)
    return bookmarkedQuotes.some(bQuote => bQuote.text === quote.text && bQuote.author === quote.author);
}

// Update Bookmark Icon Appearance
function updateBookmarkIcon() {
    const icon = bookmarkBtn.querySelector('i');
    if (currentQuote && isQuoteBookmarked(currentQuote)) {
        icon.classList.replace('far', 'fas'); // Outline to solid heart
        bookmarkBtn.classList.add('bookmarked');
    } else {
        icon.classList.replace('fas', 'far'); // Solid to outline heart
        bookmarkBtn.classList.remove('bookmarked');
    }
}

// Toggle Bookmark
function toggleBookmark() {
    if (!currentQuote) return; // Do nothing if no quote is displayed

    if (isQuoteBookmarked(currentQuote)) {
        // Remove bookmark
        bookmarkedQuotes = bookmarkedQuotes.filter(bQuote =>
            !(bQuote.text === currentQuote.text && bQuote.author === currentQuote.author)
        );
    } else {
        // Add bookmark
        bookmarkedQuotes.push(currentQuote);
    }

    saveBookmarks(); // Save updated list to localStorage
    updateBookmarkIcon(); // Update the icon for the current quote
}

// Render Saved Quotes List
function renderSavedQuotes() {
    savedQuotesList.innerHTML = ''; // Clear existing list

    if (bookmarkedQuotes.length === 0) {
        savedQuotesList.innerHTML = '<p style="text-align: center;">No bookmarked quotes yet.</p>';
        return;
    }

    bookmarkedQuotes.forEach((quote, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('saved-quote-item');

        listItem.innerHTML = `
            <div class="text">"${quote.text}"<span>- ${quote.author}</span></div>
            <button class="remove-btn" data-index="${index}" aria-label="Remove bookmark"><i class="fas fa-times"></i></button>
        `;

        savedQuotesList.appendChild(listItem);
    });
}

// Remove Bookmark from Saved List
function removeBookmarkFromList(index) {
    if (index >= 0 && index < bookmarkedQuotes.length) {
        const removedQuote = bookmarkedQuotes[index];
        bookmarkedQuotes.splice(index, 1); // Remove from array
        saveBookmarks(); // Save updated list

        // If the removed quote was the one currently displayed, update its icon
        if (currentQuote && currentQuote.text === removedQuote.text && currentQuote.author === removedQuote.author) {
             updateBookmarkIcon();
        }
    }
}


// Toggle Light/Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update button icon
    const icon = modeToggleBtn.querySelector('i');
    if (isDarkMode) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

// Copy Quote to Clipboard
function copyQuote() {
    if (!currentQuote) return;

    const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Show feedback message
            copyFeedback.classList.add('show');
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 1500); // Hide after 1.5 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            // Could show a different feedback message for error
        });
}

// Download Quote as Image
function downloadQuoteAsImage() {
    if (!currentQuote) return;

    // Use html2canvas to render the quote card
    html2canvas(quoteCard, {
        scale: 2, // Increase scale for better resolution
        logging: false, // Disable logging
         useCORS: true, // Important if background images/fonts are from different origin
         backgroundColor: null // Allow transparency or match element background
    }).then(canvas => {
        // Create a data URL for the image
        const imgData = canvas.toDataURL('image/png');

        // Create a dummy link element
        const link = document.createElement('a');
        link.download = 'quote.png'; // Set download filename
        link.href = imgData; // Set href to the image data

        // Append link to body, click it, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error('Error generating image:', err);
        alert('Could not generate image. Please try again.');
    });
}


// 5. Event Listeners
newQuoteBtn.addEventListener('click', displayRandomQuote);
bookmarkBtn.addEventListener('click', toggleBookmark);
copyBtn.addEventListener('click', copyQuote);
downloadBtn.addEventListener('click', downloadQuoteAsImage);
modeToggleBtn.addEventListener('click', toggleTheme);

// Add event delegation for remove buttons in the saved list
savedQuotesList.addEventListener('click', function(event) {
    if (event.target.closest('.remove-btn')) {
        const button = event.target.closest('.remove-btn');
        const index = parseInt(button.dataset.index, 10);
        removeBookmarkFromList(index);
    }
});


// 6. Initialization
loadTheme(); // Load saved theme first
loadBookmarks(); // Load saved bookmarks
displayRandomQuote(); // Display an initial quote on page load


/* --- Optional Enhancements (Implement if desired) --- */

// Optional: Typing Animation (Requires changes to displayRandomQuote)
// This is a simplified example. A full implementation involves
// clearing text, then using setTimeout/setInterval to add characters.
/*
function typeQuote(text, element, callback) {
    element.textContent = ''; // Clear current text
    let i = 0;
    const speed = 50; // typing speed in ms

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    type();
}

// Modify displayRandomQuote to use typing:
// function displayRandomQuote() {
//    ...get quote...
//    currentQuote = quote;
//    quoteAuthor.textContent = ''; // Clear author initially if typing author too
//    quoteText.textContent = ''; // Clear quote text initially
//    typeQuote(quote.text, quoteText, () => {
//        // Callback when typing is done
//        typeQuote(`- ${quote.author}`, quoteAuthor);
//        updateBookmarkIcon();
//    });
// }
*/

// Optional: Gradient Backgrounds (Add more gradients to the array)
/*
const gradients = [
    'linear-gradient(to right, #ff9966, #ff5e62)', // Example 1
    'linear-gradient(to right, #4facfe, #00f2fe)', // Example 2
    'linear-gradient(to right, #a1c4fd, #c2e9fb)', // Example 3
    'linear-gradient(to right, #d4fc79, #96e6a1)', // Example 4
     // Add many more...
];

function applyRandomGradient() {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.backgroundImage = randomGradient;
    document.body.classList.add('gradient-bg'); // Add class for animation if desired
}

// Call applyRandomGradient in displayRandomQuote
// function displayRandomQuote() {
//     ...get quote...
//      applyRandomGradient(); // Apply gradient here
//     ...display text and author...
//     ...update bookmark icon...
// }

// You might want to remove the gradient class or change background-image when switching to/from dark mode
// or add dark mode specific gradients/logic to toggleTheme.
*/

// Optional: Quote Categories (Requires modifying quotes array structure)
/*
// Example quote structure with category
const quotesWithCategories = [
    { text: "...", author: "...", category: "Motivation" },
    { text: "...", author: "...", category: "Life" },
    { text: "...", author: "...", category: "Humor" }, // Add some fun ones!
];

// Need UI elements for category filtering and logic in displayRandomQuote
// to filter the quotes array before picking a random one.
*/

// Optional: Progress Bar (Displaying seen quotes - more complex storage needed)
// Simple approach: Display total quotes and bookmarked count
// Can add elements to HTML and update their text content in renderSavedQuotes
// and on initial load/displayRandomQuote.
/*
// Add HTML: <div class="progress">Seen: <span id="seen-count">0</span> / <span id="total-quotes">0</span></div>
// JS:
// const seenCountSpan = document.getElementById('seen-count');
// const totalQuotesSpan = document.getElementById('total-quotes');
// totalQuotesSpan.textContent = quotes.length; // Set total count on load

// To accurately track *seen* quotes across sessions would require storing
// a large array or Set of seen quote identifiers in localStorage, which
// adds complexity and storage overhead. Displaying bookmark count vs total
// is a simpler alternative for user engagement tracking.
*/