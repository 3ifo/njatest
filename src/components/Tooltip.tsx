import Image from "next/image";

type TooltipProps = {
  text?: string;
};

const Tooltip = ({ text }: TooltipProps) => {
  return (
    <>
      <div className="w-56 h-20 bg-[#585858] rounded-xl pl-2 pt-1">
        <p className="text-white text-sm p-1">{text}</p>
      </div>
      <Image
        src={"/main-imgs/tooltip-down.png"}
        width={10}
        height={10}
        alt="arrow"
        className="relative left-2/4"
      />
    </>
  );
};

export default Tooltip;
