import { motion } from "framer-motion";
import Overlay from "./overlay";

export default function Plateforme(props: { title: string, children: JSX.Element, type: "right" | "center" | "full", toggleFunction: (state?: boolean) => void }) {
    switch (props.type) {
        case "right":
            return (
                <>
                    <Overlay toggleFunction={props.toggleFunction}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-1/3 h-full bg-white fixed top-0 right-0 z-30"
                        >
                            <p className="border-b-px">{props.title}</p>
                            <p>{props.children}</p>
                        </motion.div>
                    </Overlay>
                </>
            );
        case "center":
            return (
                <>
                    <Overlay toggleFunction={props.toggleFunction}>
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed w-1/4 h-fit z-30 top-0 bottom-0 left-0 right-0 m-auto rounded-lg bg-lspd text-white p-4"
                        >
                            <p className="text-center text-3xl font-semibold p-4">{props.title}</p>
                            <div className="w-4/6 h-px bg-white flex m-auto mb-4"></div>
                            {props.children}
                        </motion.div>
                    </Overlay>
                </>
            );
        case "full":
            return (
                <></>
            );
    }
}