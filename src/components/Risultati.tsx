import Image from "next/image";
import Box from "./Box";
import Tooltip from "./Tooltip";

const Risultati = () => {
  return (
    <section className="flex w-full flex-col gap-6 bg-white rounded-2xl mt-4 p-2 px-6 drop-shadow">
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-xl font-semibold">Risultati</h4>
        <button
          className="border p-1 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-pink-500 to-blue-500 border-[#f0136f]"
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative ">
        <div className="absolute top-0 left-40 -mt-14 z-10 hidden sm:block">
          <Tooltip text="Somma totale dei crediti accumulati grazie agli acquisti effettuati dal tuo link referral" />
        </div>
        <Box
          title="Crediti Totali"
          amount="€715,34"
          bgUrl="/main-imgs/vector-1.png"
        />
        <div className="absolute top-0 left-1/2 -ml-28 -mt-14 z-10 hidden sm:block">
          <Tooltip text="Somma che verrà detratta in automatico sul prossimo rinnovo del tuo abbonamento" />
        </div>
        <Box
          title="Sconto sul prossimo rinnovo"
          amount="€15,34"
          bgUrl="/main-imgs/vector-2.png"
        />
        <Box
          title="Sconto in attesa"
          amount="€9,34"
          bgUrl="/main-imgs/vector-3.png"
        />
      </div>
      <div className="flex items-center sm:flex-row flex-col justify-between sm:border p-1 rounded-full px-4 sm:border-[#f0136f] mb-4">
        <div className="flex items-center gap-4 sm:gap-2">
          <Image
            src={"/main-imgs/lamp.png"}
            width={32}
            height={32}
            alt="lamp"
          />
          <p className="text-sm">
            Se hai domande o vuoi saperne di più sul programma di referral,
            visita la nostra sezione FAQ. Troverai tutto spiegato nel dettaglio
          </p>
        </div>
        <div>
          <button className="border-2 p-0 text-black font-semibold sm:mt-0 mt-6 px-4 rounded-full text-sm border-black">
            Portami alle Faq
          </button>
        </div>
      </div>
    </section>
  );
};
export default Risultati;
