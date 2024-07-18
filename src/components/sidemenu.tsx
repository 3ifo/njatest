import Image from "next/image";

const Sidemenu = () => {
  return (
    <section className="h-screen w-16 flex flex-col items-center gap-5">
      <section className="mt-8">
        <Image
          width={20}
          height={20}
          src={"/aside-imgs/menu.png"}
          alt="menu"
          className="cursor-pointer"
        />
      </section>
      <section>
        <Image
          width={100}
          height={100}
          src={"/aside-imgs/item.png"}
          alt="menu"
          className="cursor-pointer"
        />
      </section>
      <section>
        <Image
          width={100}
          height={100}
          src={"/aside-imgs/foglio.png"}
          alt="menu"
          className="cursor-pointer"
        />
      </section>
      <section>
        <Image
          width={100}
          height={100}
          src={"/aside-imgs/cartella.png"}
          alt="menu"
          className="cursor-pointer"
        />
      </section>
      <section>
        <Image
          width={100}
          height={100}
          src={"/aside-imgs/cancelletto.png"}
          alt="menu"
          className="cursor-pointer"
        />
      </section>
      <section className="mt-80">
        <section>
          <Image
            width={100}
            height={100}
            src={"/aside-imgs/watch.png"}
            alt="menu"
            className="cursor-pointer"
          />
        </section>
        <section>
          <Image
            width={100}
            height={100}
            src={"/aside-imgs/info.png"}
            alt="menu"
            className="cursor-pointer"
          />
        </section>
      </section>
    </section>
  );
};

export default Sidemenu;
