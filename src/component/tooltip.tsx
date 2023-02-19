import { motion, MotionStyle } from "framer-motion";

export default function Tooltip(props: { children: JSX.Element | string, position?: MotionStyle }) {


    return (
        <motion.div
            className="absolute bg-lspd bg-opacity-70 rounded min-w-fit truncate px-1.5 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            style={props.position ?? { x: "2.7rem" }}
        >
            {props.children}
        </ motion.div>
    );
}
