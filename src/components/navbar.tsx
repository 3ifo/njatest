import Image from "next/image";
import { socialLinks, settingsLinks } from "../data/navLinks";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-16 flex justify-between items-center p-4">
      <section className="flex">
        <div>
          <Image
            width={35}
            height={35}
            src="/navbar-imgs/logo.png"
            alt="logo"
          />
        </div>
        <div className="hidden sm:flex items-center justify-center gap-2 border border-gray-300 py-1 rounded-full ml-10">
          <Image
            className="ml-2"
            width={15}
            height={15}
            src="/navbar-imgs/search.png"
            alt="search"
          />
          <input
            placeholder="Analizza un profilo instagram"
            className="bg-white w-60 outline-none rounded-full text-sm"
            type="text"
          />
        </div>
      </section>
      <section className="hidden sm:flex gap-4 mr-40">
        {socialLinks.map((link) => (
          <div key={link.alt}>
            <Image
              width={link.width}
              height={link.height}
              src={link.src}
              alt={link.alt}
            />
          </div>
        ))}
      </section>
      <section className="flex items-center gap-4">
        {settingsLinks.map((link) => (
          <div key={link.alt}>
            <Image
              width={link.width}
              height={link.height}
              src={link.src}
              alt={link.alt}
              className="cursor-pointer"
            />
          </div>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
