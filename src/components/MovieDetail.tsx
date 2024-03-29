import { motion } from "framer-motion";
import type MovieDB from "node-themoviedb";
import ImageWithFallback from "./ImageWithFallback";
import { ExternalLinkIcon } from "lucide-react";

function MovieDetail({
  movie,
  children,
}: {
  movie: MovieDB.Responses.Movie.GetDetails;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-10">
      <motion.div className="w-[250px]" layoutId={`image:${movie.id}`}>
        <ImageWithFallback
          unoptimized
          placeholder="blur"
          blurDataURL="/placeholder.png"
          height={300}
          width={200}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="h-full w-full rounded-lg object-cover bg-[292929]"
        />
      </motion.div>
      <div className="max-w-[700px]  p-6">

      {/* <a href={`/watch/${movie.id}`} target="_blank" rel="noopener noreferrer" className="group"> */}
        <h2 className="mb-2 text-2xl font-semibold md:text-4xl inline-block group-hover:underline transition-transform duration-200">
          {movie.title}
          <ExternalLinkIcon className="h-5 w-5 inline-block ml-1 opacity-0 group-hover:opacity-100" />        </h2>
        {/* </a> */}

        <div className="text-md flex items-center gap-5">
          <p className="text-gray-200  ">Released: {movie.release_date}</p>
          <p className="text-gray-200  ">Rating: {movie.vote_average}/10</p>
        </div>
        <p className="mb-4 mt-10 leading-8 text-gray-300">
          Synopsis: {movie.overview}
        </p>
        {children}
      </div>
    </div>
  );
}

export default MovieDetail;

export function MovieDetailSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-10">
      <div className="h-[300px] w-[250px] animate-pulse rounded-lg bg-gray-400" />
      <div className="max-w-[700px] p-6">
        <div className="mb-2 h-10 animate-pulse rounded-xl bg-gray-400 text-2xl font-semibold md:text-4xl"></div>
        <div className="text-md mt-5 flex items-center gap-5">
          <div className="h-5 w-52 animate-pulse rounded-xl bg-gray-400 text-gray-600"></div>
          <div className="h-5 w-52 animate-pulse rounded-xl bg-gray-400 text-gray-600"></div>
        </div>
        <div className="mb-4 mt-5 h-5 animate-pulse rounded-xl bg-gray-400 leading-8 text-gray-700"></div>
        <div className="mb-4  mt-5 h-5 animate-pulse rounded-xl bg-gray-400 leading-8 text-gray-700"></div>
      </div>
    </div>
  );
}
