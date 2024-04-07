import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Home = async function ({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url, {next:{revalidate:100}});
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results[1]);

  return <div>
    <Results  results={results}/>
  </div>;
};

export default Home;
