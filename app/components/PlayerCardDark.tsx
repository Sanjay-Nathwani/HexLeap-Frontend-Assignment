import Image from "next/image";

type Props = {
    name: string;
    event: number;
    sport: string;
    src: string;
}

const PlayerCardDark = ({name,event,sport,src}:Props) => {
    return (
      <div className="flex flex-col p-2 bg-[#3B3E47] shadow-lg">
        {/* image */}
        <div className="">
          <Image src={src} width={218} height={385} alt="player1" />
        </div>
        <h3 className="m-2 font-medium text-sm">{name}</h3>
        {/* stats */}
        <div className="w-full mx-auto bg-[#292B32] flex gap-6 text-black rounded-md p-2.5">
          <div className="flex flex-col gap-1">
            <p className="text-[#DFDFDF] text-xs">Total Events</p>
            <p className="font-semibold text-sm text-white">{event} Events</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#DFDFDF] text-xs">Sport</p>
            <p className="font-semibold text-sm text-white">{sport}</p>
          </div>
        </div>
      </div>
    );
}
 
export default PlayerCardDark;