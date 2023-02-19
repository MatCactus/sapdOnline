import { useCallback } from "react";
// import Toast from "./toast";
import { atom, useRecoilState } from "recoil";
import Toast from "./toast";

const allToasts = atom({
    key: "allToasts",
    default: [] as { id: number; title: string; type: "error" | "warning" | "success" }[]
});

export function useToasts(): (title: string, type: "error" | "warning" | "success") => void {
    const [toasts, setToasts] = useRecoilState(allToasts);

    return useCallback(
        (title, type) => {
            setToasts([
                ...toasts,
                {
                    title,
                    type,
                    id: Date.now(),
                },
            ]);
        },
        [toasts, setToasts]
    );
}

export default function ToastsManager() {
    const [toastsList, setToastsList] = useRecoilState(allToasts);

    return (
        <div className="fixed top-8 right-8 z-50 flex h-fit flex-col items-end w-fit gap-5">
            {toastsList.map((p, i) => (
                <Toast type={p.type} title={p.title} key={p.id} onDismiss={() => {
                    let tt = [...toastsList];
                    tt.splice(i, 1);
                    setToastsList(tt);
                }} />
            ))}
        </div>
    )
}
