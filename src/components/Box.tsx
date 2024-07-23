import Image from "next/image";
import { ComponentProps } from "react";

interface BoxProps extends ComponentProps<"div"> {
  title: string;
  amount: string;
  bgUrl: string;
  tooltip?: string;
}

const Box = ({ title, amount, bgUrl, tooltip, ...props }: BoxProps) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${bgUrl}')`,
  };

  return (
    <div
      style={backgroundImageStyle}
      className="flex flex-col gap-3 bg-[#F5F7FF] w-full p-8 rounded-2xl bg-no-repeat bg-right relative"
      {...props}
    >
      {tooltip && (
        <div className="absolute top-0 left-48 -mt-10">
          <Image src={tooltip} width={200} height={200} alt="tooltip" />
        </div>
      )}
      <span className="text-xl text-zinc-400 flex items-center gap-2">
        {title}
        <Image
          src={"/main-imgs/circle-icon.png"}
          width={20}
          height={20}
          alt="info"
          className="mt-1"
        />
      </span>
      <p className="text-4xl font-semibold">{amount}</p>
    </div>
  );
};

export default Box;
