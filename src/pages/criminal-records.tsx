import { useEffect, useState } from "react";
import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import CriminalRecordItem from "../component/criminalRecordItem";
import { motion } from "framer-motion";
import { useToasts } from "../component/toastManager";
import { GetCriminalRecordsRes } from "./api/types";

export default function CriminalRecordsPage() {
    const createToast = useToasts();
    const [records, setRecords] = useState([] as GetCriminalRecordsRes);

    useEffect(() => {
        fetch("/api/getCriminalRecords", {
            method: "GET",
            headers: { authorization: localStorage.getItem("token") ?? "" }
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }

            setRecords(await e.json());
        }
        )
    }, []);

    return (
        <>
            <Banner logo={Logo}>Casier Judiciaire</Banner>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-row gap-16 mt-8 flex-wrap max-w-users justify-start">
                    {
                        records.length > 0 && records.map((e) => <CriminalRecordItem key={e.id} record={e}></CriminalRecordItem>)
                    }
                    <motion.div className="self-center border-4 py-4 px-5 border-[#0f2940] rounded-full mx-20 cursor-pointer flex justify-center items-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                        <i className="fas fa-plus text-6xl text-lspd" />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
