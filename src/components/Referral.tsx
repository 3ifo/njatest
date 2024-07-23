import Image from "next/image";

const Referral = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-200 to-blue-200 p-8 px-10 flex items-center justify-between mt-8 rounded-2xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl text-white font-normal">
          Invita un amico e ottieni il{" "}
          <strong className="font-semibold relative">
            15% di commissioni!{" "}
            <Image
              className="absolute right-0 mt-1"
              src={"/main-imgs/line.png"}
              width={350}
              height={350}
              alt="linee"
            />
          </strong>
        </h2>
        <p className="text-white font-light">
          Guadagna crediti consigliando NJL e paga di meno i prossimi rinnovi
          del <br /> tuo abbonamento. L'importo verrà scalato in automatico!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center bg-white rounded-3xl p-1">
          <input
            type="text"
            placeholder="https://business.ninjalitics.com/landing?ref+st..."
            name=""
            id=""
            className="w-96 h-8 p-1 bg-transparent outline-none"
          />
          <button className="mr-1 bg-[#F5C8DD] text-white p-2 rounded-3xl px-7 flex items-center text-sm opacity-90">
            Copia Link
          </button>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-white">Condividilo su:</p>
          <div className="flex items-center gap-2 relative">
            <Image
              src={"/main-imgs/hand.png"}
              width={22}
              height={22}
              alt="mano"
              className="absolute left-0 -ml-3 top-6"
            />{" "}
            <Image
              src={"/main-imgs/main-fb.png"}
              width={28}
              height={28}
              alt="icon"
            />
            <Image
              src={"/main-imgs/main-ig.png"}
              width={28}
              height={28}
              alt="icon"
            />
            <Image
              src={"/main-imgs/main-in.png"}
              width={28}
              height={28}
              alt="icon"
            />
            <Image
              src={"/main-imgs/main-tw.png"}
              width={28}
              height={28}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
