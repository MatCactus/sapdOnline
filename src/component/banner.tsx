import Image, { StaticImageData } from "next/image";

export default function Banner(props: { children: string, logo: StaticImageData }) {
    return (
        <div className="flex h-full w-full justify-center items-center my-auto select-none">
            <div className="absolute w-2/4 h-10 md:h-32 m-auto l-0 r-0  shadow-box z-10">
                <div className="flex flex-row h-full w-full">
                    <div className="w-1/4 h-full rounded-l-xl" style={{
                        background: "linear-gradient(90deg, rgba(11,29,40,0) 0%, rgba(11,29,40,0.5) 100%)"
                    }} />
                    <div className="w-2/4 bg-sapd bg-opacity-50 flex justify-center items-center text-xs md:text-3xl font-lspd text-white tracking-wider uppercase">{props.children}</div>
                    <div className="w-1/4 h-full rounded-r-xl" style={{
                        background: "linear-gradient(90deg, rgba(11,29,40,0.5) 0%, rgba(11,29,40,0) 100%)"
                    }} />
                </div>
            </div>
            <Image className="w-28 md:w-15" src={props.logo} alt={"SAPD Logo"} />
        </div>
    );
}
