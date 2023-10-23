import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/register");
        },
    });

    return (
        <section
            id="dashboard"
            className="flex flex-row justify-between w-full h-full p-4"
        >
            <div className="relative flex flex-col flex-wrap content-center h-full p-4 m-2 border-2 border-black rounded-lg w-80">
                <h1 className="text-center">H1 TEXT</h1>
            </div>
            <div className="relative flex flex-col w-full h-full p-4 m-2 border-2 border-black rounded-lg">
                <div className="relative flex flex-row flex-wrap content-center justify-center w-auto h-64 m-2 border-2 border-black rounded-lg"></div>
                <div className="relative flex flex-row flex-wrap content-center justify-center w-auto h-full m-2 border-2 border-black rounded-lg"></div>
            </div>
        </section>
    );
}
