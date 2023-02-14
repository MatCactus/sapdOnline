import Image, { StaticImageData } from "next/image";

export default function MenuBox(props: { children?: any, title?: string }) {
    return (
        <div className="w-full h-full flex justify-center">
            <div>
                {props.title ? <p className="w-full min-w-menu flex text-2xl">{props.title}</p> : <></>}
                <div className="w-4/5 min-w-full min-h-menu max-h-menu overflow-auto rounded-lg bg-white p-2 flex flex-col">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
