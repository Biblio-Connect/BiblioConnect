DROP Table IF EXISTS Books;
DROP Table IF EXISTS SwipeOutput;
DROP Table IF EXISTS Users;

CREATE TABLE Books (
    BookID INTEGER PRIMARY KEY,
    Name TEXT,
    Author TEXT,
    Description TEXT,
    Chapters TEXT,
    Guidance TEXT,
    ImageURL TEXT,
    Genres TEXT
);

INSERT INTO Books (BookID, Name, Author, Description, Chapters, Guidance, ImageURL, Genres) VALUES
(1, 'The Lord of the Rings', 'J.R.R. Tolkien', 'An epic journey to destroy a powerful ring and save Middle-earth.', '50+', 'PG-13', 'https://m.media-amazon.com/images/I/51uHK++IekL._SY445_SX342_.jpg', 'Fantasy'),
(2, 'The Wizard of Earthsea', 'Ursula K. Le Guin', 'A young mage discovers his true power and confronts darkness.', '9', 'PG', 'https://m.media-amazon.com/images/I/81VxGPk9YFL._SY522_.jpg', 'Fantasy'),
(3, 'Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'A boy discovers he''s a wizard and begins his magical education.', '17', 'PG', 'https://m.media-amazon.com/images/I/71RVt35ZAbL._SY522_.jpg', 'Fantasy'),
(4, 'Dune', 'Frank Herbert', 'Political intrigue and battles for resources on a desert planet.', 'Multiple Books', 'PG-13', 'https://m.media-amazon.com/images/I/41KnOXaLyuL._SY445_SX342_.jpg', 'Science Fiction'),
(5, 'The Martian', 'Andy Weir', 'An astronaut stranded on Mars must use science to survive.', '40', 'PG-13', 'https://m.media-amazon.com/images/I/41b8Ema-f9L._SY445_SX342_.jpg', 'Science Fiction'),
(6, 'Ender''s Game', 'Orson Scott Card', 'Child soldiers are trained to battle an alien threat.', '15', 'PG-13', 'https://m.media-amazon.com/images/I/51sfTXF6eUL._SY445_SX342_.jpg', 'Science Fiction'),
(7, 'Pride and Prejudice', 'Jane Austen', 'A clash of personalities and social expectations leads to love.', '61', 'All Ages', 'https://m.media-amazon.com/images/I/51zj+e-O+pL._SY445_SX342_.jpg', 'Romance'),
(8, 'Outlander', 'Diana Gabaldon', 'A WWII nurse time-travels to 18th-century Scotland and falls in love.', '60+', 'Mature', 'https://m.media-amazon.com/images/I/31TTcJWPTnL._SY445_SX342_.jpg', 'Romance'),
(9, 'The Notebook', 'Nicolas Sparks', 'A decades-spanning love story told in flashbacks.', '14', 'PG-13', 'https://m.media-amazon.com/images/I/41JPno0aqPL._SY445_SX342_.jpg', 'Romance'),
(10, 'Gone Girl', 'Gillian Flynn', 'A woman disappears, leaving a trail of clues that implicate her husband.', '40', 'Mature', 'https://m.media-amazon.com/images/I/71FZo7-3BnL._SY522_.jpg', 'Thriller'),
(11, 'The Silent Patient', 'Alex Michaelides', 'A famous painter stops speaking after killing her husband, and a therapist tries to uncover the truth.', '32', 'PG-13', 'https://m.media-amazon.com/images/I/91lslnZ-btL._SY522_.jpg', 'Thriller'),
(12, 'The Girl on the Train', 'Paula Hawkins', 'A woman witnesses something disturbing from her daily train commute.', '45', 'Mature', 'https://m.media-amazon.com/images/I/91xGOrzbzhL._SY522_.jpg', 'Thriller'),
(13, 'The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe', 'C.S. Lewis', 'Children enter a magical land through a wardrobe.', '17', 'All Ages', 'https://m.media-amazon.com/images/I/81QUw81WcoL._SY522_.jpg', 'Fantasy'),
(14, 'The NeverEnding Story', 'Michael Ende', 'A boy journeys into the world of a magical book.', '26', 'PG', 'https://m.media-amazon.com/images/I/91+KXvykHfL._SY522_.jpg', 'Fantasy'),
(15, 'The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'Humorous adventures across space after Earth is destroyed.', '27', 'PG', 'https://m.media-amazon.com/images/I/61ncQJKgB8L._SX342_SY445_.jpg', 'Science Fiction'),
(16, 'Fahrenheit 451', 'Ray Bradbury', 'In a dystopian future, a "fireman" burns books.', 'One Piece', 'PG-13', 'https://m.media-amazon.com/images/I/61z7RDG3OIL._SY522_.jpg', 'Science Fiction'),
(17, 'The Time Traveler''s Wife', 'Audrey Niffeneggar', 'A love story complicated by the husband''s involuntary time travel.', '30', 'PG-13', 'https://m.media-amazon.com/images/I/51fLudhA2tL._SY445_SX342_.jpg', 'Romance'),
(18, 'Red, White & Royal Blue', 'Casey McQuiston', 'The First Son of the U.S. and a British prince fall in love.', '42', 'Mature', 'https://m.media-amazon.com/images/I/51Su7WOGTzL.jpg', 'Romance'),
(19, 'And Then There Were None', 'Agatha Christie', 'Guests on an isolated island are murdered one by one.', '16', 'PG-13', 'https://m.media-amazon.com/images/I/81B9LhCS2AL._SY522_.jpg', 'Thriller'),
(20, 'Rebecca', 'Daphne du Maurier', 'A young woman marries a wealthy widower, but the shadow of his deceased wife looms large.', '27', 'PG-13', 'https://m.media-amazon.com/images/I/51-OsLmkHBL._SY445_SX342_.jpg', 'Thriller');

CREATE TABLE Users  (
    Email TEXT PRIMARY KEY,
    Password TEXT NOT NULL
);

CREATE TABLE SwipeOutput (
    BookID INTEGER,
    Email TEXT,
    FOREIGN KEY (email) REFERENCES Users(Email),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);