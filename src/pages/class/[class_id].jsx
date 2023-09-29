import { useRouter } from "next/router";

export default function Class() {
    const router = useRouter();
    const { class_id } = router.query;

    return (
        <>
            <h1>Class {class_id}</h1>
        </>
    );
}
