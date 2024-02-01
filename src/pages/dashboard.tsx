import { getList, movieSectionTypes } from "@/utils/GetMovieData";
import type MovieDB from "node-themoviedb";
import DashboardLayout from "@/components/DashboardLayout";
import DiscoverGrid from "@/components/DiscoverGrid";

function Dashboard({
  nowPlaying,
  upcoming,
  popular,
  topRated,
}: {
  nowPlaying: MovieDB.Responses.Movie.GetDetails[];
  upcoming: MovieDB.Responses.Movie.GetDetails[];
  popular: MovieDB.Responses.Movie.GetDetails[];
  topRated: MovieDB.Responses.Movie.GetDetails[];
}) {
  return (
    <DashboardLayout>
      <section className=" container py-10">
        <DiscoverGrid movies={nowPlaying} type="NOWPLAYING" />
        <DiscoverGrid movies={upcoming} type="UPCOMING" />
        <DiscoverGrid movies={popular} type="POPULAR" />
        <DiscoverGrid movies={topRated} type="TOPRATED" />
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;

export async function getStaticProps() {
  const promises = movieSectionTypes.map((type) => getList({ type, page: 1 }));
  const [nowPlaying, upcoming, popular, topRated] = await Promise.all(promises);
  return {
    props: {
      nowPlaying,
      upcoming,
      popular,
      topRated,
    },
  };
}