import { useEffect, useState } from "react";
import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import InfoBox from "../component/infoBox";
import MenuBox from "../component/menuBox";
import MenuItem from "../component/menuItem";

export default function Dashboard() {
    const [usersCounts, setUsersCount] = useState({ activeUsers: 0, dept: "SAPD" });

    useEffect(() => {
        fetch("/api/getUsersCount", { method: "GET", headers: { authorization: localStorage.getItem("token") ?? "" } }).then(async e => {
            if (e.status != 200)
                return;
            const body: { activeUsers: number, dept: string } = await e.json();
            setUsersCount(body);
        })
    }, [])

    return (
        <>
            <Banner logo={Logo}>Tableau de Bord</Banner>
            <div className="flex flex-row gap-16 justify-center my-4">
                <InfoBox title={`Nombre d'agent | ${usersCounts.dept}`} icon="fa-solid fa-shield" data={usersCounts.activeUsers} />
                <InfoBox title="Nombre de casier judiciare" icon="fa-solid fa-folder-open" data={78} />
                <InfoBox title="Nombre de plainte" icon="fa-solid fa-file" data={53} />
            </div>
            <div className="flex flex-col justify-center w-full mt-10">
                <MenuBox title="News">
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                    <MenuItem title={"Information 08"}>Lorem .</MenuItem>
                </MenuBox>
                <MenuBox title="Ressources">
                    <MenuItem title={"Trello"}>Lorem .</MenuItem>
                    <MenuItem title={"Trello"}>Lorem .</MenuItem>
                    <MenuItem title={"Trello"}>Lorem .</MenuItem>
                    <MenuItem title={"Trello"}>Lorem .</MenuItem>
                </MenuBox>
            </div>
        </>
    );
}
