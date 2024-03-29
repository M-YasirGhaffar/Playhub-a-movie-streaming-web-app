import type MovieDB from "node-themoviedb";
import MoviePreview, { MoviePreviewSkeleton } from "./MoviePreview";

function MovieGrid({
  movies,
  title,
}: {
  title: string;
  movies: MovieDB.Responses.Movie.GetDetails[];
}) {
  return (
    <div className="mb-8" data-testid="movie-grid">
      <h1 className="mb-4 text-2xl font-medium capitalize">{title}</h1>
      {movies?.length > 0 ? (
        <div className="flex flex-wrap items-center gap-5">
          {movies?.slice(0, 18)?.map((movie) => (
            <MoviePreview key={movie.id} movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="flex h-[300px] items-center justify-center text-3xl rounded-xl bg-orange-600">
          No movies found. Make sure the name is correct.
        </div>
      )}
    </div>
  );
}

export default MovieGrid;

export function MovieRowSkeleton({ amount }: { amount: number }) {
  const MoviesSkeleton = [];
  for (let i = 0; i < amount; i++) {
    MoviesSkeleton.push(<MoviePreviewSkeleton key={"skeleton" + i} />);
  }
  return (
    <div className="mb-8">
      <h1 className="mb-4 text-2xl font-medium capitalize">Loading...</h1>
      <div className="flex flex-wrap items-center gap-5">{MoviesSkeleton}</div>
    </div>
  );
}
