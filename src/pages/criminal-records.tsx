import { useEffect, useState } from "react";
import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import CriminalRecordItem from "../component/criminalRecordItem";
import { AnimatePresence, motion } from "framer-motion";
import { useToasts } from "../component/toastManager";
import { GetCriminalRecordsRes, GetPermsRes } from "./api/types";
import Plateforme from "../component/plateforme";
import Overlay from "../component/overlay";
import { useRouter } from "next/router";
import InputList from "../component/inputList";

export default function CriminalRecordsPage() {
    const [perm, setPerm] = useState(0);

    const createToast = useToasts();
    const [records, setRecords] = useState([] as GetCriminalRecordsRes);

    const [showPlateforme, setShowPlateforme] = useState(false)

    const [image, setImage] = useState([] as string[]);
    const [imageName, setImageName] = useState([] as string[]);

    const router = useRouter();

    const togglePlateforme = (state?: boolean) =>
        setShowPlateforme(state ?? !showPlateforme);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
            return;
        }

        fetch("/api/getPerms", { method: "GET", headers: { authorization: token } }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                router.push("/");
                return;
            }

            const body = await e.json() as GetPermsRes;
            if (!body.perms[body.actualPerm].pages.includes("/criminal-records")) {
                router.push("/");
                return;
            }

            setPerm(body.actualPerm);
        })

        fetch("/api/getCriminalRecords", {
            method: "GET",
            headers: { authorization: token }
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }
            const body = await e.json()
            setRecords(body);
        })
    }, [showPlateforme]);

    return (
        <>
            <Banner logo={Logo}>Casier Judiciaire</Banner>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-row gap-16 mt-8 flex-wrap max-w-users justify-start">
                    {
                        records.length > 0 && records.map((e) => <CriminalRecordItem key={e.id} record={e} perm={perm}></CriminalRecordItem>)
                    }
                    {perm !== 0 && perm !== 2 ?
                        <motion.div className="self-center border-4 py-4 px-5 border-[#0f2940] rounded-full mx-20 cursor-pointer flex justify-center items-center"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                        >
                            <i className="fas fa-plus text-6xl text-lspd" onClick={() => togglePlateforme()} />
                        </motion.div> : null
                    }

                    <AnimatePresence>
                        {showPlateforme &&
                            <>
                                <Overlay toggleFunction={togglePlateforme} />
                                <Plateforme title={"Ajouter un casier judiciaire"} type={"center"} toggleFunction={togglePlateforme}>
                                    <div className={"flex flex-col gap-2 mx-4"}>
                                        <div className={"flex flex-col gap-1"}>
                                            <label>Nom</label>
                                            <input type={"text"} placeholder={"Nom du suspect"} className="rounded-md pl-2 outline-none text-black" />
                                        </div>
                                        <div className={"flex flex-col gap-1"}>
                                            <label>Prénom</label>
                                            <input type={"text"} placeholder={"Prénom du suspect"} className="rounded-md pl-2 outline-none text-black" />
                                        </div>
                                        <div className={"flex flex-col gap-1"}>
                                            <label>Genre</label>
                                            <input type={"text"} placeholder={"Genre du suspect"} className="rounded-md pl-2 outline-none text-black" />
                                        </div>
                                        <div className={"flex flex-col gap-1"}>
                                            <label>N° de téléphone</label>
                                            <input type={"text"} placeholder={"N° de téléphone du suspect"} className="rounded-md pl-2 outline-none text-black" />
                                        </div>
                                        <div className={"flex flex-col gap-1"}>
                                            <label>Date de naissance</label>
                                            <input type={"text"} placeholder={"Date de naissance du suspect"} className="rounded-md pl-2 outline-none text-black" />
                                        </div>
                                        <div>
                                            <InputList placeholder={["URL", "Description de L'image"]} title={"Informations photographiques"} data={[{ setValues: setImage, values: image }, { setValues: setImageName, values: imageName }]} />
                                        </div>
                                        <button type="submit" className="border rounded-full text-white px-4 py-2 my-6 hover:border-blue-500 hover:text-blue-500 transition-colors">Valider</button>
                                    </div>
                                </Plateforme>
                            </>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
