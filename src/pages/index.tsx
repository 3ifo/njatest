import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <ul className="flex items-center gap-6">
        <li className="font-semibold text-lg">Account</li>
        <li className="text-sm">Profilo</li>
        <li className="text-sm">Abbonamento</li>
        <li className="text-sm">Prezzi</li>
        <li className="text-sm">Impostazioni</li>
        <li className="text-sm">Team</li>
        <li className="text-sm font-semibold">Referral</li>
      </ul>
    </section>
  );
}
