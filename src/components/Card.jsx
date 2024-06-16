"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { RiThumbUpFill } from "react-icons/ri";

const Card = ({ result }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLiked((prevLiked) => !prevLiked);
  };

  const handleDoubleClick = () => {
    // e.stopPropagation();
    // e.preventDefault();
    setLiked(true);
  };

  return (
    <div
      className="group cursor-pointer rounded-lg hover:shadow-slate-400 shadow-md  border border-slate-400 m-2 transition-shadow duration-200"
      onDoubleClick={handleDoubleClick}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        width={500}
        height={300}
        alt={`Image: ${result.title || result.name}`}
        className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
      ></Image>
      <Link href={`/${result.media_type || "movie"}/${result.id}`}>
        <div className="p-2">
          <p className="hidden   sm:line-clamp-2  text-md ">
            {result.overview}
          </p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date} {" | "}
            {liked ? (
              <RiThumbUpFill
                className="h-5 mr-1 ml-3 text-blue-500"
                onClick={handleLike}
              />
            ) : (
              <FiThumbsUp className="h-5 mr-1 ml-3" onClick={handleLike} />
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
