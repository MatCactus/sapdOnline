import { motion } from "framer-motion"
import Link from "next/link";

export default function NavBarButton(props: { children: JSX.Element, pagePath: string }) {
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
