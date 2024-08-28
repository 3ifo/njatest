import Image from "next/image";

interface TableRow {
  data: string;
  azione: string;
  abbonamento: string;
  prezzo: string;
  credito: string;
  statoCredito: string;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      <section className="mt-4 bg-white rounded-2xl pt-4 drop-shadow hidden sm:block">
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
          <h5 className="flex items-center gap-2 font-medium">
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
          {data.map((item: TableRow, index: number) => (
            <div key={index} className="grid grid-cols-6 border-b py-3">
              <span>{item.data}</span>
              <span>{item.azione}</span>
              <span className="font-medium">{item.abbonamento}</span>
              <span className="text-gray-400">{item.prezzo}</span>
              <span>{item.credito}</span>
              <span>{item.statoCredito}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Table;
