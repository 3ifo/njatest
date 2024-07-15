import Navbar from "@/components/navbar";
import Sidemenu from "@/components/sidemenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section
      className="grid grid-cols-12 min-h-screen "
      style={{ gridTemplateColumns: "4rem auto" }}
    >
      <header className="col-span-12">
        <Navbar />
      </header>
      <div className="col-span-1">
        <Sidemenu />
      </div>
      <main className="col-start-2 col-span-11 p-4 h-full rounded-tl-3xl bg-[#f5f6fa]">
        <Component {...pageProps} />
      </main>
    </section>
  );
}
