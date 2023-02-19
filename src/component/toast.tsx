import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Toast(props: { title?: string, type: "error" | "warning" | "success", onDismiss: () => void }) {
    const [open, setOpen] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (!isHovered)
            setTimeout(() => setCounter(counter + 1), 3);

        if (counter >= 600) {
            setOpen(false);
            props.onDismiss()
        }

    }, [isHovered, counter, props])


    switch (props.type) {
        case "error":
            return (
                <AnimatePresence>
                    {
                        open &&
                        <motion.div
                            initial={{ x: "15rem" }}
                            animate={{ x: "0" }}
                            transition={{
                                type: "tween",
                                duration: 0.3
                            }}
                            exit={{ x: "15rem" }}
                            className="flex flex-row items-center rounded-lg p-2 max-w-xs border-l-4 border-l-red-400 bg-red-500 text-white font-bold cursor-pointer overflow-hidden select-none"
                            onClick={() => { setOpen(false); props.onDismiss() }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="absolute left-0 bottom-0 h-0.75 bg-red-400 z-70 rounded-2xl" style={{ width: `${counter / 600 * 100}%` }} />
                            <div className="flex items-center w-full h-full z-50 gap-2">
                                <i className="fa-solid fa-circle-xmark fa-lg"></i>
                                {props.title}
                            </div>

                        </motion.div >
                    }
                </AnimatePresence>
            );
        case "warning":
            return (
                <AnimatePresence>
                    {
                        open &&
                        <motion.div
                            initial={{ x: "15rem" }}
                            animate={{ x: "0" }}
                            transition={{
                                type: "tween",
                                duration: 0.5
                            }}
                            exit={{ x: "15rem" }}
                            className=" flex flex-row items-center rounded-lg p-2 w-fit border-l-4 border-l-orange-400 bg-orange-500 text-white font-bold cursor-pointer overflow-hidden"
                            onClick={() => { setOpen(false); props.onDismiss() }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="absolute left-0 bottom-0 h-0.75 bg-orange-400 z-70 rounded-2xl" style={{ width: `${counter / 600 * 100}%` }} />
                            <div className="flex items-center w-full h-full z-50 gap-2">
                                <i className="fa-sharp fa-solid fa-circle-exclamation fa-lg"></i>
                                {props.title}
                            </div>

                        </motion.div >
                    }
                </AnimatePresence >
            );
        case "success":
            return (
                <AnimatePresence>
                    {
                        open &&
                        <motion.div
                            initial={{ x: "15rem" }}
                            animate={{ x: "0" }}
                            transition={{
                                type: "tween",
                                duration: 0.5
                            }}
                            exit={{ x: "15rem" }}
                            className="flex flex-row items-center rounded-lg p-2 w-fit border-l-4 border-l-green-400 bg-green-500 text-white font-bold cursor-pointer overflow-hidden"
                            onClick={() => { setOpen(false); props.onDismiss() }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="absolute left-0 bottom-0 h-0.75 bg-green-400 z-70 rounded-2xl" style={{ width: `${counter / 600 * 100}%` }} />
                            <div className="flex items-center w-full h-full z-50 gap-2">
                                <i className="fa-solid fa-circle-check fa-lg"></i>
                                {props.title}
                            </div>

                        </motion.div >
                    }
                </AnimatePresence>
            );
    }
}
