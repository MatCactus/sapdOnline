import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react";
import Plateforme from "./plateforme";

export default function CriminalRecord(props: {name: string, surname: string, creator: string, date: string, editNumber: number}) {
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
                <div className={"relative w-full flex flex-row gap-4"}>
                    <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"}
                           alt={"Criminal User"}
                           width={100}
                           height={100}
                           className="rounded-full object-cover w-24 h-24"
                    />
                    <div className={"text-2xl self-center"}>
                        <p>{props.name}</p>
                        <p>{props.surname}</p>
                    </div>
                    <i className={"fas fa-arrow-up text-4xl absolute right-0"}></i>
                </div>
                <div className={"mt-4 text-lg"}>
                    <p>Créateur : {props.creator}</p>
                    <p>Nombre de modifications : {props.editNumber}</p>
                </div>
                <div className={"mt-4 flex flex-row gap-2 items-center"}>
                    <i className={"fas fa-calendar-alt text-xl"}></i>
                    <p className={"text-base"}>Créer le : {props.date}</p>
                </div>
            </motion.div>

            <AnimatePresence>
                {
                    showPlateforme &&
                    <Plateforme toggleFunction={togglePlateforme} title="Casier Judiciaire #1" type="full">
                        <div className={"flex flex-row"}>
                            <div className={"w-full"}>
                                <div className={"pl-6 pt-6 flex flex-col gap-4 mb-4"}>
                                    <p className={"text-4xl"}>Informations sur le suspect : </p>
                                    <p className={"text-3xl"}><strong>Prénom</strong> : Wesson</p>
                                    <p className={"text-3xl"}><strong>Nom</strong> : Colt</p>
                                    <p className={"text-3xl"}><strong>Genre</strong> : Homme</p>
                                    <p className={"text-3xl"}><strong>N° de téléphone</strong> : 555-4943</p>
                                    <p className={"text-3xl"}><strong>Date de naissance</strong> : 08/12/1995</p>
                                </div>
                                <div className={"pl-6"}>
                                    <p className={"text-4xl mb-4"}>Informations photographiques: </p>
                                    <div className={"flex flex-row flex-wrap justify-center gap-4 max-w-4xl"}>
                                        <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"} alt={"Criminal User"} width={400} height={216} className="object-cover rounded-md" />
                                        <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"} alt={"Criminal User"} width={400} height={216} className="object-cover rounded-md" />
                                        <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"} alt={"Criminal User"} width={400} height={216} className="object-cover rounded-md" />
                                        <Image src={"https://cdn.discordapp.com/attachments/1056960362739675156/1075514005428391966/image.png"} alt={"Criminal User"} width={400} height={216} className="object-cover rounded-md" />
                                    </div>
                                </div>
                            </div>
                            <div className={"mt-4 w-1 bg-white rounded-full"}></div>
                            <div className={"pt-6 px-6 w-full"}>
                                <div className={"w-full h-fit bg-cjs flex flex-col gap-4 p-3 border-l-2 border-blue-700 rounded-lg"}>
                                    <p className={"text-2xl"}>Chef d'inculpation #1 :</p>
                                    <div>
                                        <div className={"flex flex-row gap-2 items-center"}>
                                            <i className={"fas fa-arrow-right"}></i>
                                            <p>Faits reprocher :</p>
                                        </div>
                                        <ul className={"list-disc ml-10"}>
                                            <li>Vol</li>
                                            <li>Vol</li>
                                            <li>Vol</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className={"flex flex-row gap-2 items-center"}>
                                            <i className={"fas fa-arrow-right"}></i>
                                            <p>Amende :</p>
                                        </div>
                                        <ul className={"list-disc ml-10"}>
                                            <li>25 000 $</li>
                                            <li>25 000 $</li>
                                            <li>25 000 $</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className={"flex flex-row gap-2 items-center"}>
                                            <i className={"fas fa-arrow-right"}></i>
                                            <p>Garde à vu : 15min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Plateforme>
                }
            </AnimatePresence>
        </>
    );
}