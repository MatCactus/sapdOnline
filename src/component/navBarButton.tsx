import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBarButton(props: { children: JSX.Element, target?: string, pagePath: string }) {
    const router = useRouter()

    if (router.pathname == props.pagePath)
        return <></>

    if (props.target)
        return (
            <motion.div
                className="cursor-pointer"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
            >
                <a target={props.target} href={props.pagePath}>{props.children}</a>
            </motion.div >
        )

    return (
        <motion.div
            className="cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
        >
            <Link href={props.pagePath}>{props.children}</Link>
        </motion.div >
    );
}
