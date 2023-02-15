import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../public/sapd.png";
import { useState } from "react";
import LoginPopUp from "./login";

export default function Header() {
    const [loginPopUp, setLoginPopUp] = useState(false);

    const toggleLoginPopUp = (state?: boolean) => {
        setLoginPopUp(state == undefined ? !toggleLoginPopUp : state);
    }

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
                    <LoginPopUp toggleFunction={toggleLoginPopUp} />
                }
            </AnimatePresence>
            <div className={"flex flex-row gap-3 items-center text-amber-50 select-none"}>
                <Image className="w-12 md:w-14" src={Logo} alt={"SAPD Logo"} />
                <p className="uppercase">San Andreas Police Departement</p>
            </div>
            {
                !loginPopUp &&
                <div className="rounded-lg border-2 border-amber-50 p-8 py-0 h-8 text-amber-50 active:scale-95 uppercase cursor-pointer" onClick={() => toggleLoginPopUp(true)}>Connexion</div>
            }
        </motion.div>
    );
}
