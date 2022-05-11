import "./styles/video.css";
function TrailerVideo({ trailer, setModalOpen }) {
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
