"use Client";
import Results from "@/components/Results";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react";

const API_KEY = process.env.API_KEY;

const SearchPage = async function ({ params }) {
  // const searchTerm = params.searchTerm;
  const searchTerm = params.searchTerm
    .trim()
    .replace(/spinner.svg|\s+/g, "%20");
  console.log({ params });
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  // console.log(url);

  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  const results = data.results;

  return (
    <div>
      {results &&
        results.length === 0 &&
        <h1 className="text-center pt-6">No Results Found</h1>}
      {results && results && <Results results={results} />}
    </div>
  );
};
export default SearchPage;
