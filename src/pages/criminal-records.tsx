import { useEffect, useState } from "react";
import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import CriminalRecord from "../component/criminalRecord";
import {motion} from "framer-motion";

export default function CriminalRecordsPage() {

    return (
        <>
            <Banner logo={Logo}>Casier Judiciaire</Banner>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-row gap-16 mt-8 flex-wrap max-w-users justify-start">
                    <CriminalRecord name={"Jospeh"} surname={"pain"} creator={"08 | Wesson Colt"} editNumber={25} date={"02/02/2023"}></CriminalRecord>
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
