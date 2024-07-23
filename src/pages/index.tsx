import { useState } from "react";
import Statistiche from "@/components/Statistiche";
import { setStatistiche, toggleStatistiche } from "@/features/statisticheSlice";
import { AppDispatch, RootState } from "@/store";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Referral from "@/components/Referral";
import Risultati from "@/components/Risultati";
import IndexMenu from "@/components/IndexMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activePeriod, setActivePeriod] = useState("6 mesi");
  const dispatch: AppDispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.statistiche.isVisible
  );

  const handleClick = () => {
    dispatch(toggleStatistiche());
  };

  const handlePeriodClick = (period: string) => {
    setActivePeriod(period);
    let nuoviDati;

    switch (period) {
      case "7 giorni":
        nuoviDati = {
          clickSulLink: 7500,
          personeRegistrate: 2200,
          conversioni: 80,
        };
        break;
      case "1 mese":
        nuoviDati = {
          clickSulLink: 15000,
          personeRegistrate: 4500,
          conversioni: 150,
        };
        break;
      case "3 mesi":
        nuoviDati = {
          clickSulLink: 35000,
          personeRegistrate: 12000,
          conversioni: 450,
        };
        break;
      case "6 mesi":
        nuoviDati = {
          clickSulLink: 41391,
          personeRegistrate: 12568,
          conversioni: 346,
        };
        break;
      default:
        nuoviDati = {
          clickSulLink: 84150,
          personeRegistrate: 22500,
          conversioni: 1235,
        };
        break;
    }

    dispatch(setStatistiche(nuoviDati));
  };

  return (
    <>
      <IndexMenu />
      <Referral />
      <Risultati />
      <section className="flex items-center justify-between mt-8">
        <div
          onClick={() => handleClick()}
          className="flex items-center  gap-2 cursor-pointer"
        >
          <Image
            src={
              isVisible
                ? "/main-imgs/freccia.png"
                : "/main-imgs/freccia-destra.png"
            }
            width={20}
            height={20}
            alt="freccia"
            className="mt-1"
          />
          <h2 className="text-3xl font-semibold cursor-pointer">Statistiche</h2>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-4 bg-white p-1 px-5 rounded-xl drop-shadow ">
            <span
              onClick={() => handlePeriodClick("7 giorni")}
              className={`font-medium cursor-pointer ${
                activePeriod === "7 giorni"
                  ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                  : ""
              }`}
            >
              7 giorni
            </span>
            <span
              onClick={() => handlePeriodClick("1 mese")}
              className={`font-medium cursor-pointer ${
                activePeriod === "1 mese"
                  ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                  : ""
              }`}
            >
              1 mese
            </span>
            <span
              onClick={() => handlePeriodClick("3 mesi")}
              className={`font-medium cursor-pointer ${
                activePeriod === "3 mesi"
                  ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                  : ""
              }`}
            >
              3 mesi
            </span>
            <span
              onClick={() => handlePeriodClick("6 mesi")}
              className={`font-medium cursor-pointer ${
                activePeriod === "6 mesi"
                  ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                  : ""
              }`}
            >
              6 mesi
            </span>
            <span
              onClick={() => handlePeriodClick("Sempre")}
              className={`font-medium cursor-pointer ${
                activePeriod === "Sempre"
                  ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                  : ""
              }`}
            >
              Sempre
            </span>
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
              src={"/main-imgs/freccia-1.png"}
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
