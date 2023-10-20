import "@/styles/globals.css";
import { PT_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider
            session={pageProps.session}
            className={`${ptsans.className} h-full`}
        >
            <Component {...pageProps} />
        </SessionProvider>
    );
}
