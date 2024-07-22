import Image from "next/image";
import { sideLinks, middleSideLinks } from "../data/sideLinks";

const Sidemenu = () => {
  return (
    <>
      <section className="h-screen w-16 flex flex-col items-center gap-5 mt-8">
        {sideLinks.map((item, index) => (
          <section key={index}>
            <Image
              width={item.width}
              height={item.height}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer"
            />
          </section>
        ))}
        <section className="mt-80">
          {middleSideLinks.map((item, index) => {
            return (
              <section key={index}>
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Sidemenu;
