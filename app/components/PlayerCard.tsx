import Image from "next/image";

type Props = {
    name: string;
    event: number;
    sport: string;
    src: string;
}

const PlayerCard = ({name,event,sport,src}:Props) => {
    return (
      <div className="flex flex-col p-2 bg-white shadow-lg">
        {/* image */}
        <div className="">
          <Image src={src} width={218} height={385} alt="player1" />
        </div>
        <h3 className="text-black m-2 font-medium text-sm">{name}</h3>
        {/* stats */}
        <div className="w-full mx-auto bg-gray-200 flex gap-6 text-black rounded-md p-2.5">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-xs">Total Events</p>
            <p className="font-semibold text-sm">{event} Events</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-xs">Sport</p>
            <p className="font-semibold text-sm">{sport}</p>
          </div>
        </div>
      </div>
    );
}
 
export default PlayerCard;