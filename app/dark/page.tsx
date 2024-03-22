import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CollectionCardDark from "../components/CollectionCardDark";
import PlayerCardDark from "../components/PlayerCardDark";
import AddCardDark from "../components/AddCardDark";

export default function DarkPage() {
  return (
    <div className="max-h-full max-w-full bg-[#292B32] py-12 flex flex-col gap-3">
      {/* upper div */}
      <div className="flex flex-col gap-2 w-[80%] mx-auto">
        <h2 className="text-xl font-bold underline underline-offset-8 decoration-[#738FFF] decoration-2">
          Sports
        </h2>
        <div className="w-full flex gap-2 mt-3 items-center flex-wrap">
          <PlayerCardDark
            name="Sacramento River Cats"
            event={48}
            sport="Baseball"
            src="player1.svg"
          />
          <PlayerCardDark
            name="Las Vegas Aviators"
            event={28}
            sport="Baseball"
            src="player2.svg"
          />
          <PlayerCardDark
            name="New Jersey Devils"
            event={15}
            sport="Ice Hockey"
            src="player3.svg"
          />
          <PlayerCardDark
            name="Las Vegas Aviators"
            event={28}
            sport="Baseball"
            src="player2.svg"
          />
          <AddCardDark />
        </div>

        <div className="flex items-center justify-center mt-5">
          <button className="bg-[#2C9CF0] px-6 py-3 rounded-sm">
            See More
          </button>
        </div>
      </div>

      {/* lower div */}
      <div className="mx-auto my-3 w-[72%] bg-[#18282A] p-3">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl md:text-5xl text-center">
            Collection Spotlight
          </h1>
          <div className="text-sm sm:text-lg mt-2 flex justify-center px-10 text-center">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </div>

          <div className="w-full flex justify-between p-2 items-center">
            <span className="hidden xl:block py-2 px-1 text-blue-500 border-2 border-blue-400 text-center">
              <ChevronLeft />
            </span>
            <div className="flex-1 gap-10 flex justify-center flex-wrap">
              <CollectionCardDark
                name="Las Vegas Aviators"
                address="Las Vegas Ballpark, Las Vegas, Nevada"
                text="Take Flight Collection"
                src="/collection1.svg"
              />
              <CollectionCardDark
                name="Sacramento River Cats"
                address="Sutter Health Park, Sacramento, California"
                text="Orange Collection"
                src="/collection2.svg"
              />
              <CollectionCardDark
                name="Las Vegas Aviators"
                address="Las Vegas Ballpark, Las Vegas, Nevada"
                text="Take Flight Collection"
                src="/collection1.svg"
              />
            </div>
            <span className="hidden xl:block py-2 px-1 text-blue-500 border-2 border-blue-400 text-center">
              <ChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
