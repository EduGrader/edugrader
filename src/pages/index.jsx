import React, { useState } from "react";
import { BsBarChart, BsPercent } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import backgroundImage from "@/assets/school_classroom.jpg";
// Main color: bg-sky-400
// Secondary color:z

export default function Home() {
    const [selectedButton, setSelectedButton] = useState(null);

    const buttons = [
        { id: 0, icon: <BsPercent size={78} className="p-4" /> , content: "Mark under whatever grading system you wish." },
        { id: 1, icon: <AiOutlineMail  size={78} className="p-4" />, content: "Send marks to students without hassle." },
        { id: 2, icon: <BsBarChart size={78} className="p-4" /> , content: "Display meaningful statistics." },
    ];

    const handleButtonClick = (id) => {
        setSelectedButton(id);
    };

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <div className="bg-primary h-[550px] w-full flex justify-center content-center flex-wrap flex-col"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className="text-white text-7xl">
                    EduGrader - Replace background with image
                </h1>
                <button className="text-white rounded-lg bg-accent">
                    Get Started
                </button>
            </div>
            <div className="w-[600px] flex flex-col flex-wrap justify-center items-center space-y-10 text-center my-10">
                <h1 className="text-5xl">
                    A simple and intuitive way to grade
                </h1>
                <h2 className="text-lg">
                    EduGrader takes all the features you need and packs them in
                    an intuitive and easy-to-use environment.
                </h2>
                <div className="flex space-x-20">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleButtonClick(button.id)}
                            className={`text-white rounded-lg transition duration-300 ease-in-out ${
                                selectedButton === button.id
                                    ? "bg-accent"
                                    : "bg-primary"
                            }`}
                        >
                            {button.icon}
                        </button>
                    ))}
                </div>
                {selectedButton !== null && (
                    <div className="mt-4 transition duration-500">
                        <p>{buttons[selectedButton].content}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
