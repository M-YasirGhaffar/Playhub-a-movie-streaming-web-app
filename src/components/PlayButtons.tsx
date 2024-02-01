import { ExternalLink } from "lucide-react";
import type MovieDB from "node-themoviedb";
import { Button } from "./ui/button";
import { useState } from "react";

function PlayButtons({ movie }: { movie: MovieDB.Responses.Movie.GetDetails }) {
  
  const [playClicked, setPlayClicked] = useState(false);
  const [foundKey, setFoundKey] = useState(false);

  const handleTrailer = async () => {
    setPlayClicked(true);
    setTimeout(() => {
      setPlayClicked(false);
      setFoundKey(false);
    }, 3000);

    try {
      // Fetch movie details with videos
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=151e4c68b02a7a70f9c920feb8b4d776&append_to_response=videos`
      );
      const data = await response.json();
  
      // Extract the desired key
      const desiredKey =
        data?.videos?.results && data.videos.results[2]?.key;
  
      if (desiredKey) {
        // Open YouTube link with the desired key
        window.open(`https://www.youtube.com/watch?v=${desiredKey}`);
      } else {
        console.error("Desired key not found in the response.");
        setFoundKey(true);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }

    // window.open(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=151e4c68b02a7a70f9c920feb8b4d776&append_to_response=videos`);
  };

  const handlePlay = () => {
    const url = `/watch/${movie.id}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Button
        onClick={handleTrailer}
        // style={ {margin: "0rem"} }
        RightIcon={ExternalLink}
      >
        Trailer
      </Button>

      <span>
        { foundKey && playClicked && <p style={ {color:"red", fontSize:"0.75rem", fontStyle:"italic"} } >Production company of this movie didn't allow to play trailer.</p> }
      </span>

      <Button
        onClick={handlePlay}
        style={ {marginLeft: "1rem" } }
        RightIcon={ExternalLink}
        // rightIconStyle={{margin: '0.5rem'}}
        // className="group"
      >
        Play
        {/* <ExternalLink style={ {zoom: '80%', marginLeft: '0.5rem'} }/> */}
      </Button>
    </>



  );
}

export default PlayButtons;
