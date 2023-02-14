import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import MenuBox from "../component/menuBox";

export default function Dashboard() {
    return (
        <>
            <Banner logo={Logo}>Tableau de Bord</Banner>
            <div className="flex flex-col md:flex-row w-full justify-around mt-10 gap-y-4 md:gap-0">
                <MenuBox title="Menu">Content</MenuBox>
                <MenuBox title="Menu"></MenuBox>
            </div>
        </>
    );
}
