import indexLinks from "../data/indexLinks";

const IndexMenu = () => {
  return (
    <section>
      <ul className="flex items-center sm:justify-normal justify-between gap-8">
        <li className="font-semibold text-2xl ">Account</li>
        {indexLinks.map((link, index) => {
          return (
            <li className="hidden sm:block" key={index}>
              {link.name}
            </li>
          );
        })}
        <li className="text-sl font-semibold relative after:content-[''] after:absolute after:w-full after:bg-[#F40F67] after:-bottom-2 after:h-1 after:left-0  ">
          Referral
        </li>
      </ul>
    </section>
  );
};

export default IndexMenu;
