import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setStatistiche } from "@/features/statisticheSlice";
import Table from "./Table";
import { dataExample } from "../data/tableData";

const Chart = dynamic(() => import("./Chart") as any, { ssr: false });

const Statistiche = () => {
  const dispatch = useDispatch();
  const { clickSulLink, personeRegistrate, conversioni } = useSelector(
    (state: RootState) => state.statistiche
  );

  return (
    <>
      <section className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-8">
        <div className="flex w-full bg-white p-8 rounded-2xl items-center gap-6 drop-shadow">
          <div>
            <Image
              src={"/main-imgs/click.png"}
              width={45}
              height={45}
              alt="click"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl text-gray-400">Click sul link</span>
            <p className="text-2xl font-semibold">{clickSulLink}</p>
          </div>
        </div>
        <div className="flex w-full bg-white p-8 rounded-2xl items-center gap-6 drop-shadow">
          <div>
            <Image
              src={"/main-imgs/persone.png"}
              width={45}
              height={45}
              alt="persone"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl text-gray-400">Persone registrate</span>
            <p className="text-2xl font-semibold">{personeRegistrate}</p>
          </div>
        </div>
        <div className="flex w-full bg-white p-8 rounded-2xl items-center gap-6 drop-shadow">
          <div>
            <Image
              src={"/main-imgs/conversioni.png"}
              width={45}
              height={45}
              alt="conversioni"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl text-gray-400">Conversioni</span>
            <p className="text-2xl font-semibold">{conversioni}</p>
          </div>
        </div>
      </section>
      <section className="bg-white mt-6 rounded-2xl drop-shadow">
        <div className="px-4">
          <h4 className="flex items-center gap-2 mb-4 pt-4 text-2xl font-semibold">
            Statistiche{" "}
            <Image
              src={"/main-imgs/circle-icon.png"}
              width={20}
              height={20}
              alt="info"
              className="mt-1"
            />{" "}
          </h4>
        </div>
        <div id="chartdiv" className="w-full min-h-96">
          <Chart />
        </div>
      </section>
      <Table data={dataExample} />
    </>
  );
};

export default Statistiche;
