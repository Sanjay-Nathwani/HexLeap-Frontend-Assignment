import Image from "next/image";

const AddCardDark = () => {
    return (
      <div className="flex flex-col p-2 shadow-lg bg-[#292B32]">
        <div className="">
          <Image src={"/add-dark.svg"} width={220} height={380} alt="player1" />
        </div>
      </div>
    );
}
 
export default AddCardDark;