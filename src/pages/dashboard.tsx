import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import MenuBox from "../component/menuBox";
import MenuItem from "../component/menuItem";

export default function Dashboard() {
    return (
        <>
            <Banner logo={Logo}>Tableau de Bord</Banner>
            <div className="flex flex-col md:flex-row w-full justify-around mt-10">
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
