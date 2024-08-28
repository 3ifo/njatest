import Navbar from "@/components/Navbar";
import Sidemenu from "@/components/Sidemenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <section
        className="grid grid-cols-12 min-h-screen "
        style={{ gridTemplateColumns: "4rem auto" }}
      >
        <header className="col-span-12">
          <Navbar />
        </header>
        <aside className="col-span-1 sm:block hidden">
          <Sidemenu />
        </aside>
        <main className="col-start-1 sm:col-start-2 col-span-11 p-6 h-full rounded-tl-3xl bg-[#f5f6fa]">
          <Component {...pageProps} />
        </main>
      </section>
    </Provider>
  );
}
