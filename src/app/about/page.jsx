import React from "react";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4">
      <h1 className="text-4xl font-medium text-amber-500">About</h1>
      <h2 className="text-3xl font-bold mb-4">Welcome to MovieBase: Ultimate Movie Database</h2>
      <p>
        Welcome to MovieBase, your go-to destination for all things movies! Created by the talented developer {' '}
        <a href="https://www.linkedin.com/in/aniketprj" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">Aniket Prajapati</a>, 
        MovieBase is an IMDb clone built with cutting-edge technologies like Next.js and Tailwind CSS. Powered by the TMDB API, MovieBase offers a comprehensive database of movies, TV shows, actors, directors, and much more. Whether you're a cinephile looking for your next film to watch or a casual moviegoer seeking information about your favorite actors, MovieBase has got you covered.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Sets MovieBase Apart</h3>
      <p>
        At MovieBase, we strive to provide an intuitive and seamless user experience. Our platform leverages the TMDB API to gather the latest and most accurate information about movies, ensuring that you have access to up-to-date data at all times. With our sleek and modern design powered by Tailwind CSS, browsing through movies and discovering new favorites has never been easier.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Key Features of MovieBase</h3>
      <ul className="list-disc pl-6">
        <li>
          <strong>Comprehensive Movie Database:</strong> Explore a vast collection of movies spanning various genres, languages, and decades. From timeless classics to the latest blockbusters, MovieBase has something for everyone.
        </li>
        <li>
          <strong>Detailed Information:</strong> Get detailed information about each movie, including plot summaries, cast and crew details, ratings, reviews, and more. Our comprehensive database ensures that you have all the information you need at your fingertips.
        </li>
        <li>
          <strong>Advanced Search:</strong> Use our advanced search functionality to find movies based on specific criteria such as genre, release year, rating, and more. Whether you're looking for a particular film or simply browsing for inspiration, our search feature makes it easy to find what you're looking for.
        </li>
        <li>
          <strong>Personalized Recommendations:</strong> Discover new movies tailored to your preferences with our personalized recommendation engine. Based on your viewing history and ratings, MovieBase suggests movies that you're likely to enjoy, making it easier than ever to find your next favorite film.
        </li>
        <li>
          <strong>User Reviews and Ratings:</strong> Share your thoughts and opinions about movies by writing reviews and giving ratings. Read reviews from other users to get insights and recommendations from fellow movie enthusiasts.
        </li>
        <li>
          <strong>Save Favorites:</strong> Keep track of your favorite movies by saving them to your profile. Whether it's a classic you love or a recent discovery, you can easily access your favorite films whenever you want.
        </li>
      </ul>

      {/* <h3 className="text-2xl font-bold mt-8 mb-4">Join the MovieBase Community</h3>
      <p>
        Join our growing community of movie lovers and enthusiasts! Connect with other users, discuss your favorite films, and stay up-to-date with the latest movie news and releases. Whether you're a casual viewer or a dedicated cinephile, MovieBase is the perfect place to indulge your passion for movies.
      </p> */}

      <h3 className="text-2xl font-bold mt-8 mb-4">Start Exploring with MovieBase Today</h3>
      <p>
        Ready to dive into the world of movies? Sign up for a free account and start exploring MovieBase today! Whether you're searching for your next movie night pick or simply want to learn more about your favorite films, MovieBase has everything you need to fuel your love for cinema. Happy watching!
      </p>
    </div>
  );
}
