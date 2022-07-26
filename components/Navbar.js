import { BsMusicPlayerFill, BsPlayFill, BsPauseFill } from "react-icons/bs";

const Navbar = ({ selectedHowl, playing, setPlaying }) => {
  const handleVolumeChange = (e) => {
    Howler.volume(parseInt(e.target.value, 10) / 100);
  };

  const togglePlay = () => {
    if (!selectedHowl) return;

    if (playing) {
      selectedHowl.pause();
      setPlaying(false);
    } else {
      selectedHowl.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-[#0B111F] shadow-2xl w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <BsMusicPlayerFill className="text-textLight" size="30px" />
        <h1 className="text-textLight ml-2 font-bold text-2xl">Music Mazza</h1>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          max="100"
          onChange={handleVolumeChange}
          defaultValue="100"
          className="w-full h-2 bg-green-600 rounded-lg appearance-none cursor-pointer dark:bg-green-600"
        ></input>
        <button
          onClick={togglePlay}
          className="text-textLight bg-green-600 p-2 rounded-full ml-4 hover:scale-95"
        >
          {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
