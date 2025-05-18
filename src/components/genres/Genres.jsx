import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto py-4 flex gap-6 overflow-auto">
      {data?.genres?.map((genre) => (
        <div
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString()) ? "bg-gray-500 text-white" : ""
          } text-nowrap cursor-pointer select-none px-4 py-[3px] rounded-2xl bg-[#1e1d1f]`}
          key={genre.id}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
