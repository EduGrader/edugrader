import Image from "next/image";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function Profile() {
    const { data, status } = useSession();
    const [profileOpen, setProfileOpen] = useState(false);

    function toggleProfile() {
        setProfileOpen(!profileOpen);
    }

    if (status == "unauthenticated") {
        return (
            <button
                className="flex self-end gap-2 px-2 py-1 mx-3 transition duration-150 bg-white border rounded-lg border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow"
                onClick={() => signIn("google")}
            >
                <Image
                    width="25"
                    height="25"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google logo"
                />
                <span>Sign In</span>
            </button>
        );
    } else if (status == "authenticated") {
        return (
            <div className="flex items-center self-end px-2 mx-3 ml-3">
                <span className="mx-3 text-lg font-semibold text-white">
                    {data.user.name}
                </span>
                <button
                    type="button"
                    onClick={toggleProfile}
                    className="text-sm transition duration-75 bg-gray-800 rounded-full hover:ring-4 hover:ring-white"
                >
                    <Image
                        height="8"
                        width="8"
                        className="w-8 h-8 rounded-full"
                        src={data.user ? data.user.image : ""}
                        alt=""
                        unoptimized
                    />
                </button>

                {profileOpen && (
                    <div className="absolute right-0 z-10 mt-[100px] mx-2 w-48 origin-top-right rounded-md bg-white py-1">
                        <a
                            href="#"
                            className="block px-4 py-2 text-base text-textcolor"
                            onClick={signOut}
                        >
                            Sign out
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default function NavBar() {
    return (
        <div className="fixed h-16">
            <div className="fixed z-50 flex flex-col justify-center w-full h-16 mb-16 bg-accent">
                <Profile />
            </div>
        </div>
    );
}
