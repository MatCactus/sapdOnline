import Image from "next/image";
import { useEffect, useState } from "react";
import { CriminalRecord } from "../pages/api/types";
import Plateforme from "./plateforme";
import { useToasts } from "./toastManager";

export default function CriminalRecordDetail(props: { recordId: number, togglePlateforme: () => void }) {
    const createToast = useToasts();

    const [record, setRecord] = useState({} as CriminalRecord);

    useEffect(() => {
        fetch("/api/getCriminalRecord", {
            method: "POST",
            headers: { authorization: localStorage.getItem("token") ?? "" },
            body: JSON.stringify({ recordId: props.recordId })
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }
            setRecord(await e.json());
        }
        )
    }, []);

    return (
        <Plateforme toggleFunction={props.togglePlateforme} title={`Casier Judiciaire #${props.recordId}`} type="full">
            <div className={"flex flex-row"}>
                <div className={"w-full"}>
                    <div className={"pl-6 pt-6 flex flex-col gap-4 mb-4"}>
                        <p className={"text-4xl"}>Informations sur le suspect : </p>
                        <p className={"text-3xl"}><strong>Prénom</strong> : {record.owner_surname}</p>
                        <p className={"text-3xl"}><strong>Nom</strong> : {record.owner_name}</p>
                        <p className={"text-3xl"}><strong>Genre</strong> : {record.owner_gender}</p>
                        <p className={"text-3xl"}><strong>N° de téléphone</strong> : {record.owner_phone}</p>
                        <p className={"text-3xl"}><strong>Date de naissance</strong> : {new Date(record.owner_dob).toLocaleDateString()}</p>
                    </div>
                    <div className={"pl-6"}>
                        <p className={"text-4xl mb-4"}>Informations photographiques: </p>
                        <div className={"flex flex-row flex-wrap justify-center gap-4 max-w-4xl"}>
                            {
                                record.records && <></>
                            }
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
    );
}