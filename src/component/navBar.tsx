import { motion } from "framer-motion"

export default function NavBar(props: any) {
    return (
        <motion.nav
            className="fixed top-0 bottom-0 m-auto w-14 h-nav bg-sapd rounded-r-lg z-20 shadow-2xl shadow-black"
            initial={{ x: "-5rem" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        >
            <div className="flex h-full w-full flex-col items-center justify-between py-10 text-yellow-50">
                <div className="flex flex-col items-center gap-y-11 h-2/5">
                    <i className="fas fa-house fa-lg cursor-pointer"></i>
                    <i className="fas fa-handcuffs fa-lg cursor-pointer"></i>
                </div>
                <div className="flex flex-col justify-end items-center gap-y-11 h-3/5">
                    <i className="fas fa-gear fa-lg cursor-pointer"></i>
                    <i className="fa-solid fa-right-from-bracket fa-lg cursor-pointer"></i>
                </div>
            </div>
        </motion.nav >
    );
}
