import { AnimatePresence, motion } from "framer-motion";
import Overlay from "./overlay";

export default function Plateforme(props: { title: string, className?: string, children: JSX.Element, type: "right" | "center" | "full", toggleFunction?: (state?: boolean) => void }) {
    switch (props.type) {
        case "right":
            return (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className={props.className ?? "w-1/3 h-full bg-lspd fixed top-0 right-0 z-30"}
                >
                    <p className="text-center text-3xl font-semibold p-4">{props.title}</p>
                    <div className="w-72 h-px bg-white m-auto"></div>
                    <p>{props.children}</p>
                </motion.div>
            );
        case "center":
            return (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ y: "100%", opacity: 0 }}
                    className={props.className ?? "fixed w-1/4 h-fit z-30 top-0 bottom-0 left-0 right-0 m-auto rounded-lg bg-lspd text-white p-4"}
                >
                    <p className="text-center text-3xl font-semibold p-4">{props.title}</p>
                    <div className="w-4/6 h-px bg-white flex m-auto mb-4"></div>
                    {props.children}
                </motion.div>
            );
        case "full":
            return (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5 }}
                    className={props.className ?? "w-full h-full bg-lspd fixed top-0 right-0 z-30 text-white"}
                >
                    <p className="border-b-2 text-4xl p-4">{props.title}</p>
                    <div>{props.children}</div>
                    <i className={"fas fa-times text-4xl absolute top-5 right-5 cursor-pointer"}
                        onClick={() => props.toggleFunction ? props.toggleFunction() : null}
                    ></i>
                </motion.div>
            );
    }
}