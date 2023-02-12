import Image, { StaticImageData } from "next/image";
import Logo from "../../public/sapd.png";
import LogoLSPD from "../../public/lspd.png";
import SlideShow from "../component/slideShow";


export default function Home() {
    return (
        <>
            <div className={" p-2 flex flex-row justify-between items-center"}>
                <div className={"flex flex-row gap-3 items-center"}>
                    <Image className="w-12 md:w-14" src={Logo} alt={"SAPD Logo"} />
                    <p className="">San Andreas Police Departement</p>
                </div>
                <button className={"rounded-lg bg-lspd bg-opacity-60 p-4 py-0 h-fit text-amber-50"}>Connexion</button>
            </div>
            <SlideShow/>
            <div className={"flex flex-row mx-72 justify-between gap-16 "}>
                <div className={"flex justify-center flex-col w-10/12 items-center gap-6"}>
                    <Image className={"w-40 mt-8"} src={LogoLSPD} alt={"LSPD Logo"} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className={"rounded-lg bg-lspd bg-opacity-60 p-4 py-0 h-fit text-amber-50"}>Rejoindre</button>
                </div>
                <div className={"mt-8 w-1 bg-lspd"}></div>
                <div className={"flex justify-center flex-col w-10/12 items-center gap-6"}>
                    <Image className={"w-40 mt-8"} src={LogoLSPD} alt={"LSPD Logo"} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className={"rounded-lg bg-lspd bg-opacity-60 p-4 py-0 h-fit text-amber-50"}>Rejoindre</button>
                </div>
            </div>
        </>
    );
}