import Image from "next/image";

const AddCard = () => {
    return (
      <div className="flex flex-col p-2 bg-white shadow-lg">
        <div className="">
          <Image src={"/add.svg"} width={218} height={380} alt="player1" />
        </div>
      </div>
    );
}
 
export default AddCard;