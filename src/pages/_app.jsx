import "@/styles/globals.css";
import { PT_Sans } from "next/font/google";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <div className={`${ptsans.className}`}>
            <Component {...pageProps} />
        </div>
    );
}
