import { useEffect, useState } from "react";
import { GetCriminalRecordRes } from "../pages/api/types";
import { useToasts } from "./toastManager";

export default function CriminalRecordDetail(props: { recordId: number }) {
    const createToast = useToasts();
    const [detailedRecord, setDetailedRecord] = useState({} as GetCriminalRecordRes);

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

            setDetailedRecord(await e.json());
        })
    }, []);

    if (detailedRecord == undefined || detailedRecord.record == undefined) {
        console.log(detailedRecord)
        return <></>;
    }

    return (
        <>
            {
                (detailedRecord.record.length > 0) &&
                detailedRecord.record.map((e, i) => {
                    <div key={i} className={"w-full h-fit bg-cjs flex flex-col gap-4 p-3 border-l-2 border-blue-700 rounded-lg"}>
                        <p className={"text-2xl"}>Chef d'inculpation #{i} :</p>
                        <div>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <i className={"fas fa-arrow-right"}></i>
                                <p>Faits reprochés :</p>
                            </div>
                            <ul className={"list-disc ml-10"}>
                                {e.facts.map((f, j) => <li key={j}>{f}</li>)}
                            </ul>
                        </div>

                        <div>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <i className={"fas fa-arrow-right"}></i>
                                <p>Amende :</p>
                            </div>
                            <ul className={"list-disc ml-10"}>
                                {e.bills.map((f, j) => <li key={j}>$ {f}</li>)}
                            </ul>
                        </div>

                        <div>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <i className={"fas fa-arrow-right"}></i>
                                <p>Garde à vue : {e.jail}</p>
                            </div>
                        </div>
                    </div>
                })
            }

        </>

    );
}