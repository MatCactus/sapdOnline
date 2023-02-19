import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useToasts } from "./toastManager";
import Tooltip from "./tooltip";

export default function UserProfile(props: { image: string, name: string, surname: string, matricule: string, dept: string, grade: string, active: boolean, username: string }) {

    const [tooltipDisplayState, setTooltipDisplayState] = useState(false);
    const [tooltipDisplayState2, setTooltipDisplayState2] = useState(false);
    const [isActive, setIsActive] = useState(props.active);

    const createToasts = useToasts();

    const toggleActive = async (state?: boolean) => {
        if (state == undefined)
            return setIsActive(!isActive);

        const res = await fetch("/api/toggleUser", {
            method: "POST",
            headers: {
                authorization: localStorage.getItem("token") ?? ""
            },
            body: JSON.stringify({ username: props.username, state: state })
        })
        if (res.status == 401)
            return createToasts("Vous n'êtes pas autorisé à faire cela!", "error")
        if (res.status == 200) {
            setIsActive(state);
            createToasts("Le compte a été " + (state ? "activé" : "désactivé") + " avec succès !", "success");
        }
    }

    return (
        <motion.div
            className="w-64 h-44 p-4 text-white rounded-lg"
            style={{ backgroundColor: { sapd: "#0B1D28", lspd: "#0f2940", bcso: "#617650" }[props.dept.toLowerCase() ?? "sapd"], opacity: isActive ? 1 : 0.6 }}
            initial={{ y: 0, boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
            whileHover={{ y: "-0.5rem", boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 17px 25px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
        >
            <div className={"flex flex-row gap-4"}>
                <Image src={props.image} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                <div className="flex flex-row gap-4 text-lg">
                    <p className="self-center text-2xl">{props.matricule}</p>
                    <div className={"w-px h-full bg-white"}></div>
                    <p>{props.name.toUpperCase()}<br />{props.surname}</p>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <p>Département : {props.dept}</p>
                <p>Grade : {props.grade}</p>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
                <motion.div
                    className="cursor-pointer flex"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setTooltipDisplayState2(true)}
                    onMouseLeave={() => setTooltipDisplayState2(false)}
                    onClick={() => setTooltipDisplayState2(false)}
                >
                    <AnimatePresence>
                        {
                            tooltipDisplayState2 &&
                            <Tooltip position={{ y: "2.25rem" }}>Éditer le compte</Tooltip>
                        }
                    </AnimatePresence>
                    <i className="fa-solid fa-user-pen"></i>
                </motion.div >
                <motion.div
                    className="cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setTooltipDisplayState(true)}
                    onMouseLeave={() => setTooltipDisplayState(false)}
                    onClick={() => { setTooltipDisplayState(false); toggleActive(!isActive) }}
                >
                    <AnimatePresence>
                        {
                            tooltipDisplayState &&
                            <Tooltip position={{ y: "2.5rem" }}>{isActive ? "Désactiver le Compte" : "Activer le Compte"}</Tooltip>
                        }
                    </AnimatePresence>
                    {isActive ?
                        <i className="fa-solid fa-toggle-on" /> :
                        <i className="fa-solid fa-toggle-off"></i>
                    }
                </motion.div >
            </div>
        </motion.div>
    );
}