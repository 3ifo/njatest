import Statistiche from "@/components/statistiche";
import { toggleStatistiche } from "@/features/statisticheSlice";
import { AppDispatch, RootState } from "@/store";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.statistiche.isVisible
  );

  const handleClick = () => {
    dispatch(toggleStatistiche());
  };

  return (
    <>
      <section>
        <ul className="flex items-center gap-8">
          <li className="font-semibold text-2xl ">Account</li>
          <li className="text-sl text-gray-500">Profilo</li>
          <li className="text-sl text-gray-500">Abbonamento</li>
          <li className="text-sl text-gray-500">Prezzi</li>
          <li className="text-sl text-gray-500">Impostazioni</li>
          <li className="text-sl text-gray-500">Team</li>
          <li className="text-sl font-semibold relative after:content-[''] after:absolute after:w-full after:bg-[#F40F67] after:-bottom-2 after:h-1 after:left-0  ">
            Referral
          </li>
        </ul>
      </section>
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
      <section className="flex flex-col gap-6 bg-white rounded-2xl mt-4 p-2 px-6 drop-shadow">
        <div className="flex items-center justify-between mt-2">
          <h4 className="text-xl font-semibold">Risultati</h4>
          <button
            className="border p-1 px-6 rounded-full font-bold text-sm bg-gradient-to-r from-pink-500 to-blue-500 border-[#f0136f]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F40F67, #C73BC2, #04FBFA)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Richiedi Commissioni
          </button>
        </div>
        <div className="flex items-center justify-between gap-8 ">
          <div className="flex flex-col gap-3 bg-[#F5F7FF] w-full p-8 rounded-2xl bg-[url('/main-imgs/vector-1.png')] bg-no-repeat bg-right relative">
            <div className="absolute top-0 left-48 -mt-10 ">
              <Image
                src={"/main-imgs/tooltip.png"}
                width={200}
                height={200}
                alt="tooltip"
              />
            </div>
            <span className="text-xl text-zinc-400 flex items-center gap-2">
              Crediti Totali{" "}
              <Image
                src={"/main-imgs/circle-icon.png"}
                width={20}
                height={20}
                alt="info"
                className="mt-1"
              />
            </span>
            <p className="text-4xl font-semibold">€715,34</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#F5F7FF] w-full p-8 rounded-2xl bg-[url('/main-imgs/vector-2.png')] bg-no-repeat bg-right relative">
            <div className="absolute top-0 left-52 -mt-10 -ml-2">
              <Image
                src={"/main-imgs/tooltip2.png"}
                width={200}
                height={200}
                alt="tooltip"
              />
            </div>
            <span className="text-xl text-zinc-400 flex items-center gap-2">
              Sconto sul prossimo rinnovo
              <Image
                src={"/main-imgs/circle-icon.png"}
                width={20}
                height={20}
                alt="info"
                className="mt-1"
              />
            </span>
            <p className="text-4xl font-semibold">€15,34</p>
          </div>
          <div className="flex flex-col gap-3 bg-[#F5F7FF] w-full p-8 rounded-2xl bg-[url('/main-imgs/vector-3.png')] bg-no-repeat bg-right">
            <span className="text-xl text-zinc-400 flex items-center gap-2">
              Sconto in attesa{" "}
              <Image
                src={"/main-imgs/circle-icon.png"}
                width={20}
                height={20}
                alt="info"
                className="mt-1"
              />{" "}
            </span>
            <p className="text-4xl font-semibold">€9,34</p>
          </div>
        </div>
        <div className="flex items-center justify-between border p-1 rounded-full px-4 border-[#f0136f] mb-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/main-imgs/lamp.png"}
              width={32}
              height={32}
              alt="lamp"
            />
            <p className="text-sm">
              Se hai domande o vuoi saperne di più sul programma di referral,
              visita la nostra sezione FAQ. Troverai tutto spiegato nel
              dettaglio
            </p>
          </div>
          <div>
            <button className="border-2 p-0 text-black font-semibold px-4 rounded-full text-sm border-black">
              Portami alle Faq
            </button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between mt-8">
        <div
          onClick={() => handleClick()}
          className="flex items-center  gap-2 cursor-pointer"
        >
          <Image
            src={"/main-imgs/freccia.png"}
            width={35}
            height={35}
            alt="freccia"
            className="mt-1"
          />
          <h2 className="text-3xl font-semibold cursor-pointer">Statistiche</h2>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-4 bg-white p-1 px-5 rounded-xl drop-shadow">
            <span className="font-medium">7 giorni</span>
            <span className="font-medium">1 mese</span>
            <span className="font-medium">3 mesi</span>
            <span className="bg-[#F40F67] text-white p-1 px-4 rounded-xl">
              6 mesi
            </span>
            <span className="font-medium">Sempre</span>
          </div>
          <div className="flex items-center gap-2 border p-2 px-5 rounded-xl">
            <Image
              src={"/main-imgs/calendario.png"}
              width={20}
              height={20}
              alt="calendario"
            />
            <span>Date personalizzate</span>
            <Image
              src={"/main-imgs/freccia.png"}
              width={20}
              height={20}
              alt="freccia"
            />
          </div>
        </div>
      </section>
      {isVisible && <Statistiche />}
    </>
  );
}
