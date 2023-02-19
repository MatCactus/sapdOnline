export default function MenuItem(props: { children?: any, title?: string }) {
    return (
        <div className={"bg-lspd bg-opacity-40 rounded mb-2"}>
            {props.title ? <p className="w-full flex text-lg border-b-2 p-2 font-semibold">{props.title}</p> : <></>}
            <div className="w-56 min-w-full max-w-lg h-24 rounded-lg p-2 flex flex-col">
                {props.children}
            </div>
        </div>
    );
}
