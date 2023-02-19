export default function MenuBox(props: { children?: any, title?: string }) {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative">
                {/* <button className="absolute -right-6 -bottom-6 rounded-full bg-lspd text-white p-2 w-10 h-10 flex items-center justify-center"><i className="fas fa-plus" /></button> */}
                {props.title ? <p className="w-full min-w-menu flex text-2xl">{props.title}</p> : <></>}
                <div className="w-fit max-w-menu min-h-menu max-h-menu overflow-y-hidden rounded-lg bg-white p-2 flex flex-row gap-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
