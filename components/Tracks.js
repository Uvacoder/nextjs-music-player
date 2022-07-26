import Track from "./Track";
import TracksHeader from "./TracksHeader";

const tracks = [
  {
    id: 1,
    src: "track1.mp3",
    title: "Red-skies-laugh-now",
    artist: "Ed",
    album: "Ed's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "2:37",
  },
  {
    id: 2,
    src: "track2.mp3",
    title: "A-sinister-power-rising-epic-dark-gothic",
    artist: "Sinister",
    album: "Sinister's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:52",
  },
  {
    id: 3,
    src: "track3.mp3",
    title: "Energy-pil",
    artist: "Ron",
    album: "Ron's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "2:31",
  },
  {
    id: 4,
    src: "track4.mp3",
    title: "Ukulele-trip",
    artist: "Elli",
    album: "Elli's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "1:31",
  },
  {
    id: 5,
    src: "track5.mp3",
    title: "Instrument",
    artist: "Trapcity",
    album: "Trapcity's Album",
    imgSrc: "https://unsplash.it/40/40",
    duration: "3:31",
  },
];

const Tracks = ({ playing, setPlaying, selectedHowl, setSelectedHowl }) => {
  return (
    <div className="w-full mx-auto px-4 py-2">
      <TracksHeader />
      {tracks.map((track, idx) => {
        return (
          <Track
            key={track.id}
            track={track}
            selectedHowl={selectedHowl}
            setSelectedHowl={setSelectedHowl}
            playing={playing}
            setPlaying={setPlaying}
            isFirstTrack={idx === 0}
          />
        );
      })}
    </div>
  );
};

export default Tracks;
