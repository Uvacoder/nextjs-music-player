import { BsClock } from "react-icons/bs";

const TracksHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-player mx-auto py-2 px-4 mb-2 border-b-[1px] border-border">
        <span className="col-span-1 font-medium">#</span>
        <span className="col-span-5 font-medium">TITLE</span>
        <span className="col-span-5 font-medium">ALBUM</span>
        <span className="col-span-1 font-medium">
          <BsClock size="18px" />
        </span>
      </div>
    </div>
  );
};

export default TracksHeader;
