import Image from "next/image";

type Props = {
    name: string;
    address: string;
    text: string;
    src: string;
}

const CollectionCard = ({name,address,text,src}:Props) => {
  return (
    <div className="rounded-md sm:w-[230px] bg-white p-2 shadow-xl relative before:-left-[10px] before:z-10 before:top-[355px] before:bg-[#efecff] before:rounded-full before:w-[20px] before:absolute before:h-[20px] after:bg-[#efecff] after:z-10 after:-right-[10px] after:top-[355px] after:rounded-full after:w-[20px] after:absolute after:h-[20px]">
      <div className="flex items-center justify-center">
        <Image
          src={src}
          width={250}
          height={120}
          alt={name}
          style={{ height: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[80%] border border-spacing-x-4 border-dashed border-[#A9ACB2]" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black font-medium text-center py-3.5">{name}</p>
        <p className="text-black text-center">OCT 15 | SUN | 4:30 PM </p>
        <p className="text-[#525965] text-center">{address}</p>
        <button className="bg-black mx-3 py-2 mt-2">{text}</button>
      </div>
    </div>
  );
};

export default CollectionCard;
