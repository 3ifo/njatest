import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-16 flex justify-between items-center p-4">
      <section className="flex">
        <div>
          <Image
            width={35}
            height={35}
            src={"/navbar-imgs/logo.png"}
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-full ml-10">
          <Image
            className="ml-2"
            width={15}
            height={15}
            src={"/navbar-imgs/search.png"}
            alt="search"
          />
          <input
            placeholder="Analizza un profilo instagram"
            className="bg-white w-60 outline-none rounded-full text-sm"
            type="text"
          />
        </div>
      </section>
      <section className="flex gap-4 mr-40">
        <div>
          <Image
            width={25}
            height={25}
            src={"/navbar-imgs/instagram.png"}
            alt="instagram"
          />
        </div>
        <div>
          <Image
            width={25}
            height={25}
            src={"/navbar-imgs/facebook.png"}
            alt="facebook"
          />
        </div>
        <div>
          <Image
            width={25}
            height={25}
            src={"/navbar-imgs/linkedin.png"}
            alt="linkedin"
          />
        </div>
        <div>
          <Image
            width={25}
            height={25}
            src={"/navbar-imgs/tiktok.png"}
            alt="tiktok"
          />
        </div>
      </section>
      <section className="flex items-center gap-4">
        <div>
          <Image
            width={20}
            height={20}
            src={"/navbar-imgs/impostazioni.png"}
            alt="impostazioni"
          />
        </div>
        <div>
          <Image width={20} height={20} src={"/storm.png"} alt="fulmine" />
        </div>
        <div>
          <Image
            width={20}
            height={20}
            src={"/navbar-imgs/notifiche.png"}
            alt="notifiche"
          />
        </div>
        <div>
          <Image
            width={40}
            height={40}
            src={"/navbar-imgs/utente.png"}
            alt="utente"
          />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
