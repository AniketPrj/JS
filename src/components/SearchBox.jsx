"use client";
import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${encodeURIComponent(search)}`);
  };

  return (
    <Suspense>
      <form
        className="flex justify-between px-5 max-w-6xl mx-auto"
        onSubmit={handelSubmit}
      >
        <input
          className="w-full h-14 placeholder-gray-500 outline-none bg-transparent"
          type="text"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-amber-500 disabled:text-gray-400"
          disabled={search === ""}
        >
          Search
        </button>
      </form>
    </Suspense>
  );
};

export default SearchBox;
