import { motion } from "framer-motion"
import { useRouter } from "next/router";

export default function NavBarButton(props: { children: JSX.Element, pagePath?: string }) {
    const router = useRouter();

    return (
        <motion.div
            className="cursor-pointer"
            whileTap={{ zoom: 0.95 }}
            whileHover={{ zoom: 1.1 }}
            onClick={() => props.pagePath ? router.push(props.pagePath) : undefined}
        >
            {props.children}
        </motion.div>
    );
}
