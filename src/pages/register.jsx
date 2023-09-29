import Image from "next/image";
import background from "../images/OIP.png";

export default function Register() {
    return (
        <main className="flex flex-1 min-h-full flex-col justify-center ">
            <Image
                className="absolute h-full w-full -z-10"
                src={background}
                alt="heheh"
                fill
            />

            <div className=" mt-36">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register an Account
                </h2>
            </div>

            <div className="flex flex-col justify-center mt-5 bg-slate-100 min-w-[400px] min-h-[500px] self-center rounded-lg bg-opacity-75">
                <form className="flex flex-col self-center w-[250px] mt-5">
                    <label className="block font-semibold text-lg">
                        Email:
                    </label>
                    <input
                        className="block mt-1 rounded text-lg pl-1"
                        id="email"
                        type="email"
                        placeholder="email@domain.com"
                        required
                    />

                    <label className="mt-4 block font-semibold text-lg">
                        Password:
                    </label>
                    <input
                        className="block mt-1 rounded text-lg pl-1"
                        id="password"
                        type="password"
                        placeholder="Password"
                        minLength={4}
                        maxLength={20}
                        required
                    />

                    <label className="mt-4 block font-semibold text-lg">
                        Confirm password:
                    </label>
                    <input
                        className="block mt-1 rounded text-lg pl-1"
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

                <div className="flex flex-1 mt-5 border-t border-zinc-300 w-3/4 self-center">
                    <div className="w-full text-center text-sm text-zinc-600 pt-1">
                        Or continue with:
                    </div>
                </div>
            </div>
        </main>
    );
}
