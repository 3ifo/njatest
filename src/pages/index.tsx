import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Statistiche from "@/components/Statistiche";
import Referral from "@/components/Referral";
import Risultati from "@/components/Risultati";
import IndexMenu from "@/components/IndexMenu";
import { setStatistiche, toggleStatistiche } from "@/features/statisticheSlice";
import { AppDispatch, RootState } from "@/store";
import { periodData } from "../data/periodData";

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
    const nuoviDati = periodData[period];
    dispatch(setStatistiche(nuoviDati));
  };

  return (
    <>
      <IndexMenu />
      <Referral />
      <Risultati />
      <section className="flex sm:flex-row flex-col sm:items-center justify-between mt-8">
        <div
          onClick={handleClick}
          className="flex items-center gap-2 cursor-pointer"
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
        {isVisible && (
          <div className="flex sm:flex-row flex-col sm:items-center gap-4">
            <div className="flex mt-8 sm:mt-0 items-center gap-4 bg-white p-2 px-5 rounded-xl drop-shadow">
              {Object.keys(periodData).map((period) => (
                <span
                  key={period}
                  onClick={() => handlePeriodClick(period)}
                  className={`font-medium sm:text-base text-xs cursor-pointer ${
                    activePeriod === period
                      ? "bg-[#F40F67] text-white p-1 px-4 rounded-xl"
                      : ""
                  }`}
                >
                  {period}
                </span>
              ))}
            </div>
            <div className=" items-center gap-2 hidden sm:flex border p-3 px-5 rounded-xl">
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
        )}
      </section>
      {isVisible && <Statistiche />}
    </>
  );
}
