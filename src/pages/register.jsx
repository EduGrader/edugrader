import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';

import background from "../assets/OIP.png";


export default function Register() {
    return (
        <main className="flex flex-col flex-wrap content-center justify-center flex-1 min-h-full">
            <Head>
                <meta name="google-signin-client_id" content="626574468291-s9oqsl2rf7oldhf3p23outenek1urlib.apps.googleusercontent.com" />
            </Head>
            <Script src="https://apis.google.com/js/platform.js" />

            <Image
                className="absolute w-full h-full -z-10"
                src={background}
                alt="heheh"
                fill
            />

            <div className="flex flex-col justify-center mt-5 bg-slate-100 min-w-[400px] min-h-[500px] self-center rounded-lg bg-opacity-75">
                <h2 className="p-12 text-5xl font-bold leading-9 tracking-tight text-center text-black">
                    Register an Account
                </h2>
                <form className="flex flex-col self-center w-[250px] mt-5">
                    <label className="block text-lg font-semibold">
                        Email:
                    </label>
                    <input
                        className="block pl-1 mt-1 text-lg rounded"
                        id="email"
                        type="email"
                        placeholder="email@domain.com"
                        required
                    />

                    <label className="block mt-4 text-lg font-semibold">
                        Password:
                    </label>
                    <input
                        className="block pl-1 mt-1 text-lg rounded"
                        id="password"
                        type="password"
                        placeholder="Password"
                        minLength={4}
                        maxLength={20}
                        required
                    />

                    <label className="block mt-4 text-lg font-semibold">
                        Confirm password:
                    </label>
                    <input
                        className="block pl-1 mt-1 text-lg rounded"
                        id="confimrpassword"
                        type="password"
                        placeholder="Confirm Password"
                        minLength={4}
                        maxLength={20}
                        required
                    />

                    <button
                        className="block bg-slate-400 hover:bg-slate-500 mt-6 rounded-md self-center text-lg p-0.5 px-3"
                        type="submit"
                    >
                        Create an Account
                    </button>
                </form>

                <div className="flex self-center flex-col flex-1 w-3/4 mt-5 border-t min-h-[150px] border-zinc-300">
                    <div className="block pt-1 text-sm text-center text-zinc-600">
                        Or continue with:
                    </div>

                    <div className="g-signin2 self-center pt-5" 
                    data-width="180" 
                    data-height="35" 
                    data-longtitle="true" 
                    data-onsuccess="onSignIn"/>
                </div>
            </div>
        </main>
    );
}
