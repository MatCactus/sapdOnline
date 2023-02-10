import Image, { StaticImageData } from "next/image";

export default function MenuBox(props: { children?: any, title?: string }) {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-4/5 h-4/5 rounded-lg bg-white p-4 px-14 flex flex-col">
                {props.title ? <p className="w-full flex justify-center">{props.title}</p> : <></>}
                {props.children ? <span className="mb-9" /> : <></>}
                {props.children}
            </div>
        </div>
    );
}
