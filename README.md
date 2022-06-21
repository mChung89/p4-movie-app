# Movie Rater App

This Movie Rater App utilizes React for the front-end and Ruby on Rails for the backend.
Users can query based on Movie title names using the search bar. They can select movies to bring up a detailed movie page where users can see movie details which include:
- Short summary
- Runtime
- Movie rating pulled from themoviedb API
- Movie trailer that appears as a modal

Users can login or create new accounts to share their ratings and comments regarding the movie. These ratings/comments are stored in the postgresQL database. User login information is securely stored in the database using the bcrypt gem. Users can remain logged in due to the use of session_id stored in cookies

