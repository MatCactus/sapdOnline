import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/sapd.png";

export default function Header() {
    return (
        <div className={"p-3 px-6 flex flex-row justify-between items-center bg-lspd font-lspd"}>
            <div className={"flex flex-row gap-3 items-center text-amber-50"}>
                <Image className="w-12 md:w-14" src={Logo} alt={"SAPD Logo"} />
                <p className="uppercase">San Andreas Police Departement</p>
            </div>
            <Link className="rounded-lg border-2 border-amber-50 p-8 py-0 h-8 text-amber-50 active:scale-95 uppercase" href="/dashboard">Connexion</Link>
        </div>
    );
}
