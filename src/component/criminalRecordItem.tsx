import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CriminalRecordItems } from "../pages/api/types";
import Plateforme from "./plateforme";
import CriminalRecordDetail from "./criminalRecordDetail";

export default function CriminalRecordItem(props: { record: CriminalRecordItems }) {
    const [showPlateforme, setShowPlateforme] = useState(false);

    function togglePlateforme(state?: boolean) {
        setShowPlateforme(state ?? !showPlateforme);
    }

    return (
        <>
            <motion.div className="w-96 h-fit bg-lspd rounded-lg p-4 text-white "
                initial={{ y: 0, boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
                whileHover={{ y: "-0.5rem", boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 17px 25px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
                onClick={() => togglePlateforme()}
            >
                {
                    props.record && <>
                        <div className={"relative w-full flex flex-row gap-4"}>
                            <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"}
                                alt={"Criminal User"}
                                width={100}
                                height={100}
                                className="rounded-full object-cover w-24 h-24"
                            />
                            <div className={"text-2xl self-center"}>
                                <p>{props.record.owner_name.toUpperCase()}</p>
                                <p>{props.record.owner_surname}</p>
                            </div>
                            <i className={"fas fa-arrow-up text-4xl absolute right-0"}></i>
                        </div>
                        <div className={"mt-4 text-lg"}>
                            <p>Créateur : {props.record.pon} | {props.record.name.toUpperCase()} {props.record.surname}</p>
                            <p>Nombre de modifications : {props.record.records}</p>
                        </div>
                        <div className={"mt-4 flex flex-row gap-2 items-center"}>
                            <i className={"fas fa-calendar-alt text-xl"}></i>
                            <p className={"text-base"}>Créer le : {new Date(props.record.docreation).toLocaleDateString()}</p>
                        </div>
                    </>
                }
            </motion.div>


            <AnimatePresence>
                {
                    showPlateforme &&
                    <CriminalRecordDetail recordId={props.record.id} togglePlateforme={togglePlateforme} />
                }
            </AnimatePresence>
        </>
    );
}
