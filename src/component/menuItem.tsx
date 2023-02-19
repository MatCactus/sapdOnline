export default function MenuItem(props: { children?: any, title?: string }) {
    return (
        <div className={"bg-lspd bg-opacity-90 rounded mb p-2 text-white"}>
            {props.title ? <p className="w-full flex text-lg border-b p-2 font-semibold">{props.title}</p> : <></>}
            <div className="w-96 min-w-full max-w-lg rounded-lg p-2 flex flex-col">
                {props.children}
            </div>
        </div>
    );
}
