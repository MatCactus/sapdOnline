export default function MenuBox(props: { children?: any, title?: string }) {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="relative">
                <button className="absolute -right-6 -bottom-6 rounded-full bg-lspd text-white p-2 w-10 h-10 flex items-center justify-center"><i className="fas fa-plus" /></button>
                {props.title ? <p className="w-full min-w-menu flex text-2xl">{props.title}</p> : <></>}
                <div className="w-4/5 min-w-full min-h-menu max-h-menu overflow-auto rounded-lg bg-white p-2 flex flex-col">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
