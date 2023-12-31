import Image from "next/image";
import background from "../assets/OIP.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useSession, signIn } from "next-auth/react";

export default function Register() {
    const { data, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        //checking status on server
        //maybe make custom component for this
        return <h1> loading... please wait</h1>;
    }
    if (status === "authenticated") {
        //user is logged in
        router.push("/dashboard");
        // return (
        //     //redirect to homepage or something

        //     <div className="flex flex-col flex-wrap content-center justify-center h-full">
        //         <h1 className="p-2 text-center">{data.user.name}</h1>
        //         <Image
        //             src={data.user.image}
        //             alt={data.user.name + " Photo"}
        //             width={200}
        //             height={200}
        //             className="mx-auto my-8"
        //         />
        //         <button className="px-8 text-lg bg-red-500 border-2 border-black rounded-lg" onClick={signOut}>Sign Out</button>
        //     </div>
        // );
    }

    // User is not logged in
    return (
        <main className="flex flex-col flex-wrap content-center justify-center flex-1 min-h-full">
            <Image
                className="absolute w-full h-full -z-10"
                src={background}
                alt="heheh"
                fill
                unoptimized
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

                    <button
                        className="flex self-center gap-2 px-4 py-2 mt-3 transition duration-150 bg-white border rounded-lg border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow"
                        onClick={() => signIn("google")}
                    >
                        <Image
                            width="25"
                            height="25"
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google logo"
                        />
                        <span>Sign In with Google</span>
                        {/* this button sucks make it better */}
                    </button>
                </div>
            </div>
        </main>
    );
}
