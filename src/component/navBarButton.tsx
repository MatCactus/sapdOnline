import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Tooltip from "./tooltip";

export default function NavBarButton(props: { children: JSX.Element, target?: string, pagePath: string, tooltip: string, onClick?: () => any }) {
    const router = useRouter()
    const [tooltipDisplayState, setTooltipDisplayState] = useState(false);

    if (router.pathname == props.pagePath)
        return <></>

    if (props.target)
        return (
            <motion.div
                className="cursor-pointer"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setTooltipDisplayState(true)}
                onMouseLeave={() => setTooltipDisplayState(false)}
                onClick={() => setTooltipDisplayState(false)}
            >
                <AnimatePresence>
                    {
                        tooltipDisplayState &&
                        <Tooltip>{props.tooltip}</Tooltip>
                    }
                </AnimatePresence>
                <a target={props.target} href={props.pagePath} onClick={props.onClick}>{props.children}</a>
            </motion.div >
        )

    return (
        <motion.div
            className="cursor-pointer flex justify-center align-middle"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setTooltipDisplayState(true)}
            onMouseLeave={() => setTooltipDisplayState(false)}
            onClick={() => setTooltipDisplayState(false)}
        >
            <Link href={props.pagePath} onClick={props.onClick}>{props.children}</Link>
            <AnimatePresence>
                {
                    tooltipDisplayState &&
                    <Tooltip>{props.tooltip}</Tooltip>
                }
            </AnimatePresence>
        </motion.div >
    );
}
