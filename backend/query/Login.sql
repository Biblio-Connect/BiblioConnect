CREATE TABLE Users (
    User_id INTEGER PRIMARY KEY AUTOINCREMENT,
    Email TEXT NOT NULL,
    Password TEXT NOT NULL
);

CREATE TABLE SwipeOutput (
    User_id INTEGER FOREIGN KEY
        REFERENCES Users(User_id),
);