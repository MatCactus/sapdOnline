import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Plateforme from "./plateforme";
import { useToasts } from "./toastManager";

export default function MenuBox(props: { children?: any, title?: string; type: "news" | "ressource" | "blank" }) {
    const [showPlateforme, setShowPlateforme] = useState(false);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const createToast = useToasts();

    function togglePlateforme(state?: boolean) {
        setShowPlateforme(state ?? !showPlateforme);
    }

    function createElement(type: string) {
        if (!title || !message) {
            createToast("Veuillez remplir tous les champs obligatoirs", "error");
            return;
        }
        togglePlateforme(false);

        fetch("/api/createElement", {
            method: "POST",
            headers: {
                authorization: localStorage.getItem("token") ?? "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                message: message,
                type: type
            })
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }
            createToast(type.charAt(0).toUpperCase() + type.slice(1) + " créé avec succès", "success");
        })
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative">
                <motion.div
                    whileHover={{ scale: 1 }}
                    onClick={() => togglePlateforme(true)}
                >
                    <button className="absolute -right-6 top-4 rounded-full bg-lspd text-white p-2 w-10 h-10 flex items-center justify-center"><i className="fas fa-plus" /></button>
                </motion.div>
                <AnimatePresence>
                    {
                        showPlateforme &&
                        <Plateforme toggleFunction={togglePlateforme} title="Ajouter un Élément" type="center">
                            <div className="flex flex-col gap-2 px-6">
                                <div className="flex flex-col">
                                    <label className="py-1">Titre</label>
                                    <input name="title" placeholder="Titre" className="rounded-md pl-2 outline-none text-black" value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="py-1">Message</label>
                                    <textarea name="message" maxLength={350} placeholder="Message (350 charactère)" className="rounded-md pl-2 outline-none text-black resize-y max-h-56" value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <button type="submit" className="border rounded-full text-white px-4 py-2 my-6" onClick={() => createElement(props.type)}>Ajouter</button>
                            </div>
                        </Plateforme>
                    }
                </AnimatePresence>
                {props.title ? <p className="w-full min-w-menu flex text-2xl">{props.title}</p> : <></>}
                <div className="w-full min-h-menu max-h-menu overflow-y-hidden rounded-lg  p-2 flex flex-row gap-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

