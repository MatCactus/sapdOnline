import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import NavBarButton from "./navBarButton";

export default function NavBar(props: any) {
    const router = useRouter();

    return (
        <motion.nav
            className="fixed top-0 bottom-0 m-auto w-10 md:w-14 h-nav bg-sapd rounded-r-lg z-20 shadow-2xl shadow-black"
            initial={{ x: "-5rem" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
            exit={{ x: "-5rem" }}
            key="navBar"
        >
            <div className="flex h-full w-full flex-col items-center justify-between py-10 text-yellow-50">
                <div className="flex flex-col items-center gap-y-6 md:gap-y-11 h-full">
                    <NavBarButton pagePath="/dashboard">
                        <i className="fas fa-house fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/research-citizen">
                        <i className="fa-solid fa-magnifying-glass fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/census">
                        <i className="fa-solid fa-user fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/complaint">
                        <i className="fa-solid fa-file fa-lg" />
                    </NavBarButton>
                    <NavBarButton target="_blank" pagePath="https://trello.com/b/qTbZMmvJ/dispatch-lspd-7life">
                        <i className="fa-regular fa-map fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/criminal-records">
                        <i className="fa-regular fa-folder-open fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/report">
                        <i className="fa-regular fa-clipboard fa-lg" />
                    </NavBarButton>
                    <NavBarButton target="_blank" pagePath="https://docs.google.com/spreadsheets/d/1fzqRlpxPR8dKqVmzsfuvDuI5Awniv_xrhv1ogqk2jrA/edit?usp=sharing">
                        <i className="fa-solid fa-scale-unbalanced fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/manual">
                        <i className="fa-solid fa-book fa-lg" />
                    </NavBarButton>
                </div>
                <div className="flex flex-col justify-end items-center gap-y-6 md:gap-y-11 h-full">
                    <NavBarButton pagePath="/profile">
                        <i className="fa-solid fa-user fa-lg" />
                    </NavBarButton>
                    <NavBarButton pagePath="/login">
                        <i className="fa-solid fa-right-from-bracket fa-lg" />
                    </NavBarButton>
                </div>
            </div>
        </motion.nav >
    );
}
