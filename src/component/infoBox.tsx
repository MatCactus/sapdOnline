export default function InfoBox(props: { title: string, icon: string, data: number }) {
    return (
        <div className="min-w-fit w-96 h-2/3 p-4 pb-8 bg-lspd rounded-lg text-white">
            <p className="p-2 pl-20 font-semibold mb-2">{props.title}</p>
            <div className="flex flex-row gap-4 justify-center">
                <i className={props.icon + " text-6xl text-white"}></i>
                <p className="text-6xl">{props.data}</p>
            </div>
        </div>
    );
}
