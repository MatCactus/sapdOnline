import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Banner from "../component/banner";
import Logo from "../../public/sapd.png";

export default function PageNotFound() {
    const [counter, setCounter] = useState(5);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setCounter(counter - 1), 1000);

        if (counter <= 0) router.push("/");
    }, [counter]);

    return (
        <div className="h-full w-full">
            <div>
                <Banner logo={Logo}>Page Introuvable</Banner>
            </div>
            <div className="fixed w-full flex flex-col justify-center items-center text-lspd text-2xl font-semibold bottom-44">
                Vous allez être redigé vers la page d'accueil dans {counter}{" "}
                seconde{counter > 1 ? "s" : ""}
            </div>
        </div>
    );
}
