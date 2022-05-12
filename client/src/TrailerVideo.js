import "./styles/video.css";
import { useEffect, useState } from 'react'
function TrailerVideo({ setModalOpen, movie }) {
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    const url = `https://imdb-api.com/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_KEY}/${movie.imdb_id}`;
    fetch(url, { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((data) => setTrailer(data.videoId));
      console.log('fetching video')
  }, [movie]);

  return (

    <>
      <div
        className="modal-background-mask"
        onClick={() => setModalOpen(false)}
      />
      <div className="modal">
        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </>
  );
}

export default TrailerVideo;
