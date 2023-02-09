import Logo from "../../public/sapd.png"
import Banner from "../component/banner";

export default function Dashboard() {
    return (
        <>
            <Banner title="tableau de bord" logo={Logo} />
            <div className="flex flex-row w-full justify-around">
                <div className="w-1/6 h-full">
                    <p>Menu</p>
                </div>

                <div className="w-1/6 h-full">
                    <p>Menu</p>
                </div>
            </div>
        </>
    );
}
