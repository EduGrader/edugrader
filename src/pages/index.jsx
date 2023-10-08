import Image from "next/image";

// Main color: bg-sky-400
// Secondary color:z

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <div className="bg-sky-400 h-[550px] w-full flex justify-center content-center flex-wrap flex-col">
                <h1 className="text-white text-7xl">EduGrader</h1>
                <button className="text-white rounded-sm bg-cyan-800">
                    Get Started
                </button>
            </div>
        </main>
    );
}
