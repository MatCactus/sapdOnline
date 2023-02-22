import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CriminalRecordItems, GetCriminalRecordRes } from "../pages/api/types";
import Plateforme from "./plateforme";
import { useToasts } from "./toastManager";
import Overlay from "./overlay";
import CriminalRecordDetail from "./criminalRecordDetail";
import InputList from "./inputList";
import { useRouter } from "next/router";

export default function CriminalRecordItem(props: { record: CriminalRecordItems, perm: number }) {
    const createToast = useToasts();
    const [showPlateforme, setShowPlateforme] = useState(false);
    const [showPlateforme2, setShowPlateforme2] = useState(false);

    const [fact, setFact] = useState([] as string[]);
    const [bill, setBill] = useState([] as string[]);
    const [jail, setJail] = useState("");
    const [images, setImages] = useState([] as string[]);
    const [imagesTitle, setImagesTitle] = useState([] as string[]);

    const [record, setRecord] = useState({} as GetCriminalRecordRes);

    const router = useRouter();

    useEffect(() => {
        fetch("/api/getCriminalRecord", {
            method: "POST",
            headers: { authorization: localStorage.getItem("token") ?? "" },
            body: JSON.stringify({ recordId: props.record.id })
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }
            setRecord(await e.json());
        })
    }, []);

    function togglePlateforme(state?: boolean) {
        setShowPlateforme(state ?? !showPlateforme);
    }

    function togglePlateforme2(state?: boolean) {
        setShowPlateforme2(state ?? !showPlateforme2);
    }


    const addEntry = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
            return;
        }

        let body = {
            recordId: props.record.id,
            records: [...record.records as any].push({
                facts: fact,
                bills: bill,
                jail: jail,
                creationdate: Date.now(),
            }),
            photos: [...record.photos as any].push({
                title: imagesTitle,
                images: images,
                recordEntryId: props.record.records
            })
        }

        fetch("/api/inserIntoCriminalRecord", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify(body)
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }

            const body = await e.json() as GetCriminalRecordRes;
            setRecord(body);
        })
    }

    return (
        <>
            <motion.div className="w-96 h-fit bg-lspd rounded-lg p-4 text-white cursor-pointer"
                initial={{ y: 0, boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
                whileHover={{ y: "-0.5rem", boxShadow: " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 17px 25px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
                onClick={() => togglePlateforme()}
            >
                {
                    props.record && <>
                        <div className={"relative w-full flex flex-row gap-4"}>
                            <Image src={props.record.photos[0].photo}
                                alt={props.record.photos[0].title}
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
                    <Plateforme toggleFunction={togglePlateforme} title={`Casier Judiciaire #${props.record.id}`} type="full">
                        <div className={"flex flex-row"}>
                            <div className={"w-full"}>
                                <div className={"pl-6 pt-6 flex flex-col gap-4 mb-4"}>
                                    <p className={"text-4xl"}>Informations sur le suspect : </p>
                                    <p className={"text-3xl"}><strong>Nom</strong> : {record.owner_name.toUpperCase()}</p>
                                    <p className={"text-3xl"}><strong>Prénom</strong> : {record.owner_surname}</p>
                                    <p className={"text-3xl"}><strong>Genre</strong> : {record.owner_gender}</p>
                                    <p className={"text-3xl"}><strong>N° de téléphone</strong> : {record.owner_phone}</p>
                                    <p className={"text-3xl"}><strong>Date de naissance</strong> : {new Date(record.owner_dob).toLocaleDateString()}</p>
                                </div>
                                <div className={"pl-6"}>
                                    <p className={"text-4xl mb-4"}>Informations photographiques :</p>
                                    <div className={"flex flex-row flex-wrap justify-center gap-4 max-w-4xl"}>
                                        {
                                            record.photos && record.photos.map((e: { photo: string, title: string }, i: number) => {
                                                return (
                                                    <Image src={e.photo} key={i} alt={"Criminal User"} width={400} height={216} className="object-cover rounded-md" />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={"mt-4 w-1 bg-white rounded-full"}></div>
                            <div className={"pt-6 px-6 w-full flex flex-col gap-4"}>
                                <CriminalRecordDetail recordId={props.record.id} />
                                {props.perm !== 0 && props.perm !== 2 ?
                                    <motion.div className="self-center border-4 py-4 px-5 border-white rounded-full mx-20 cursor-pointer flex justify-center items-center"
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        onClick={() => togglePlateforme2(true)}
                                    >
                                        <i className="fas fa-plus text-6xl text-white" />
                                    </motion.div> : null
                                }
                                <AnimatePresence>
                                    {showPlateforme2 &&
                                        <>
                                            <Overlay toggleFunction={togglePlateforme2} />
                                            <Plateforme title="Ajouter une Entrée" type="right" className={"border-l-2 border-blue-700 rounded-l-xl w-1/3 h-full bg-lspd fixed top-0 right-0 z-30 overflow-x-hidden overflow-y-auto"}>
                                                <div className="p-8 flex flex-col gap-4">
                                                    <InputList title="Faits reprochés" placeholder={["Nom de l'infraction, du crime ou du délits"]} data={[{ setValues: setFact, values: fact }]} />

                                                    <InputList title="Amendes" placeholder={["Montant de l'amende"]} data={[{ setValues: setBill, values: bill }]} />

                                                    <InputList title="Preuves / Informations photographiques" placeholder={["URL", "Description de l'Image"]} data={[{ setValues: setImages, values: images }, { setValues: setImagesTitle, values: imagesTitle }]} />

                                                    <div className="flex flex-col">
                                                        <p className="font-semibold">Durée de la garde à vue</p>
                                                        <div className="flex flex-row gap-4 w-full">
                                                            <div className="w-full">
                                                                <p>Début de la garde à vue</p>
                                                                <input type="time" placeholder="Début de la garde à vue" className="rounded-md w-full outline-none text-black text-center"></input>
                                                            </div>
                                                            <div className="w-full">
                                                                <p>Fin de la garde à vue</p>
                                                                <input type="time" placeholder="Fin de la garde à vue" className="rounded-md w-full outline-none text-black text-center"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="border rounded-full text-white px-4 py-2 my-6  hover:text-blue-500 hover:border-blue-500 transition-colors">Valider</button>
                                                </div>
                                            </Plateforme>
                                        </>
                                    }
                                </AnimatePresence>
                            </div>
                        </div>
                    </Plateforme>}
            </AnimatePresence>
        </>
    );
}
