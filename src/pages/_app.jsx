import "@/styles/globals.css";
import { PT_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import NavBar from "@/components/NavBar";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider
            session={pageProps.session}
            className={`${ptsans.className} h-full`}
        >
            <NavBar />
            <Component {...pageProps} />
        </SessionProvider>
    );
}
