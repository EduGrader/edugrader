import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
    const router = useRouter();

    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/register");
        },
    });

    const createClass = () => {
        // Create a class
    };

    // Make this actually retrieve data from db
    const classData = {
        1: {
            name: "SPH4U1",
            colour: "",
        },
    };

    // Same here
    const fetchClassData = (classID) => {
        return classData[classID];
    };

    const [currentClassData, setCurrentClassData] = useState(null);

    return (
        <section
            id="dashboard"
            className="flex flex-row justify-between w-full h-full"
        >
            <div className="fixed top-0 flex flex-col flex-wrap content-center p-4 mt-16 border-2 border-black h-navbar w-80">
                <h1 className="text-center">H1 TEXT</h1>
                <div className="overflow-y-auto border-2 border-black h-96 w-80"></div>
                <div className="mx-auto mt-auto">
                    <button
                        className="px-4 py-2 text-3xl text-white transition duration-500 bg-green-400 border-2 border-white rounded-lg hover:bg-green-500"
                        onClick={createClass}
                    >
                        Create Class
                    </button>
                </div>
            </div>
            <div className="relative flex flex-col w-full h-auto border-2 border-black ml-80">
                <div className="relative flex flex-row flex-wrap content-center justify-center w-auto h-64 transition bg-green-500 border-2 border-black">
                    {currentClassData ? (
                        <h1 className="text-center text-7xl">
                            {currentClassData}
                        </h1>
                    ) : (
                        <div className="w-2/3 h-32 rounded-lg animate-pulse bg-slate-300"></div>
                    )}
                </div>
                <div className="relative flex flex-row flex-wrap content-center justify-center w-auto h-full m-2 border-2 border-black "></div>
            </div>
        </section>
    );
}
