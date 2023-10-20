import Image from "next/image";

// Main color: bg-sky-400
// Secondary color:z

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <div className="bg-primary h-[550px] w-full flex justify-center content-center flex-wrap flex-col">
                <h1 className="text-white text-7xl">EduGrader</h1>
                <button className="text-white bg-green-500 rounded-sm">
                    Get Started
                </button>
            </div>
            <div className="w-[600px] flex flex-col flex-wrap justify-center items-center space-y-10 text-center">
                <h1 className="text-5xl">A simple and intuitive way to grade</h1>
                <h2 className="text-lg">EduGrader takes all the features you need and packs them in an intuitive and easy-to-use environment.</h2>
            </div>
        </main>
    );
}
