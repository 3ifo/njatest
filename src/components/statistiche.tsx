import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import chartRef from "./chart";

const Chart = dynamic(() => import("./chart") as any, { ssr: false });

const Statistiche = () => {
  return (
    <>
      <section className="flex items-center justify-between gap-8 mt-8">
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
            <p className="text-2xl font-semibold">41.391</p>
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
            <p className="text-2xl font-semibold">12.568</p>
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
            <p className="text-2xl font-semibold">346</p>
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
      <section className="mt-4 bg-white rounded-2xl pt-4 drop-shadow">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-semibold pl-4">Dettaglio</h4>
          <span className="flex items-center gap-2 mr-4 border p-1 rounded-lg cursor-pointer text-sm">
            <Image
              src={"/main-imgs/calendario.png"}
              width={20}
              height={20}
              alt="calendario"
            />
            7/2/2023 - 7/8/2023
          </span>
        </div>
        <div className=" grid grid-cols-6 mt-4 bg-[#f5f6fa] pl-4 py-3">
          <h5 className="flex items-center gap-2 font-medium">
            Data{" "}
            <Image
              src={"/main-imgs/table-arrow.png"}
              width={20}
              height={20}
              alt="arrow"
            />{" "}
          </h5>
          <h5 className="flex items-center gap-2 font-medium">
            Azione{" "}
            <Image
              src={"/main-imgs/table-filter.png"}
              width={20}
              height={20}
              alt="filter"
            />
          </h5>
          <h5 className="flex items-center gap-2 font-medium">
            Abbonamento{" "}
            <Image
              src={"/main-imgs/table-filter.png"}
              width={20}
              height={20}
              alt="filter"
            />
          </h5>
          <h5 className="flex items-center gap-2 font-medium text-gray-400">
            Prezzo{" "}
            <Image
              src={"/main-imgs/table-arrow.png"}
              width={20}
              height={20}
              alt="arrow"
            />
          </h5>
          <h5 className="flex items-center gap-2 font-medium">
            Credito{" "}
            <Image
              src={"/main-imgs/table-arrow.png"}
              width={20}
              height={20}
              alt="arrow"
            />
          </h5>
          <h5 className="flex items-center gap-2 font-medium">
            Stato Credito{" "}
            <Image
              src={"/main-imgs/table-filter.png"}
              width={20}
              height={20}
              alt="filter"
            />
          </h5>
        </div>
        <div className="flex flex-col ml-4">
          <div className="grid grid-cols-6 border-b py-3">
            <span>10/06/2020</span>
            <span>Registrazione</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <div className="grid grid-cols-6 border-b py-3">
            <span>10/06/2020</span>
            <span>Acquisto</span>
            <span className="font-medium">PRO mensile</span>
            <span className="text-gray-400">€49.00</span>
            <span>€4.90</span>
            <span>Confermato</span>
          </div>
          <div className="grid grid-cols-6 border-b py-3">
            <span>10/06/2020</span>
            <span>Cancellato</span>
            <span className="font-medium">Light mensile</span>
            <span className="text-gray-400">€8.54</span>
            <span>€0</span>
            <span>-</span>
          </div>
          <div className="grid grid-cols-6 border-b py-3">
            <span>10/06/2020</span>
            <span>Acquisto</span>
            <span className="font-medium">Standard Annuale</span>
            <span className="text-gray-400">€240.00</span>
            <span>€24.00</span>
            <span>In attesa</span>
          </div>
          <div className="grid grid-cols-6 py-3">
            <span>10/06/2020</span>
            <span>Rimborso</span>
            <span className="font-medium">Standard mensile</span>
            <span className="text-gray-400">€240.00</span>
            <span>€0</span>
            <span>Annullato</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistiche;
