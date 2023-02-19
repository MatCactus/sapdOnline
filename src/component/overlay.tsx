import { motion } from "framer-motion";

export default function Overlay(props: { children: JSX.Element, toggleFunction: (state?: boolean) => void }) {
    return (
        <>
            <motion.div
                className="fixed h-full w-screen bg-sapd top-0 bottom-0 left-0 right-0 z-30 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { delay: 0.05, duration: 0.2 } }}
                whileHover={{ opacity: 0.4, transition: { duration: 0.05 } }}
                onClick={() => props.toggleFunction(false)}
            />
            {props.children}
        </>
    );
}