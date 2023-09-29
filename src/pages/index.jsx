import Image from "next/image";

// Main color: bg-sky-400
// Secondary color:

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <div className="bg-sky-400 h-[400px] w-full flex justify-center content-center flex-wrap">
                <h1 className="text-white text-7xl">EduGrader</h1>
            </div>
        </main>
    );
}
