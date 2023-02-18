import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../public/sapd.png";
import { useEffect, useState } from "react";
import LoginPopUp from "./login";
import Link from "next/link";

export default function Header() {
    const [loginPopUp, setLoginPopUp] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const toggleLoginPopUp = (state?: boolean) => {
        setLoginPopUp(state == undefined ? !toggleLoginPopUp : state);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            if (isLogged)
                return setIsLogged(false);
            return;
        }

        fetch("/api/isLogged", { method: "GET", headers: { authorization: token } }).then(e => {
            if (e.status != 200) {
                if (isLogged)
                    return setIsLogged(false);
                return;
            }

            setIsLogged(true);
        })

    }, [isLogged])

    return (
        <motion.div
            className={"p-3 px-6 flex flex-row justify-between items-center bg-lspd font-lspd fixed left-0 right-0 m-auto z-20"}
            initial={{ y: "-5rem" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
            exit={{ y: "-5rem" }}
        >
            <AnimatePresence>
                {
                    loginPopUp &&
                    <LoginPopUp toggleFunction={toggleLoginPopUp} setLogStateFunction={setIsLogged} />
                }
            </AnimatePresence>
            <motion.div
                drag dragConstraints={{}}
                className={"flex flex-row gap-3 items-center text-amber-50"}
            >
                <Image className="w-12 md:w-14 touch-none" src={Logo} alt={"SAPD Logo"} />
                <p className="uppercase">San Andreas Police Departement</p>
            </motion.div>
            {
                !loginPopUp && !isLogged &&
                <div className="rounded-full border border-amber-50 px-6 py-1 text-amber-50 active:scale-95 uppercase cursor-pointer" onClick={() => toggleLoginPopUp(true)}>Connexion</div>
            }
            {
                !loginPopUp && isLogged &&
                <Link href="/dashboard" className="rounded-full border border-amber-50 px-6 py-1 text-amber-50 active:scale-95 uppercase cursor-pointer">
                    Tableau de Bord
                </Link>
            }
        </motion.div>
    );
}
