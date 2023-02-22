import { motion } from "framer-motion";
import NavBarButton from "./navBarButton";
import { useToasts } from "./toastManager";

export default function NavBar(props: any) {
    const createToasts = useToasts();

    const logOut = () => {
        localStorage.removeItem("token");
        createToasts("Déconnecté !", "success")
    }

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
                <div className="flex flex-col items-center gap-y-6 md:gap-y-8 h-full">
                    <NavBarButton tooltip="Tableau de Bord" pagePath="/dashboard">
                        <i className="fas fa-house fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Recherche Citoyen" pagePath="/research-citizen" disabled={true}>
                        <i className="fa-solid fa-magnifying-glass fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Recensement Citoyen" pagePath="/census" disabled={true}>
                        <i className="fa-solid fa-user fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Déposition de Plainte" pagePath="/complaint" disabled={true}>
                        <i className="fa-solid fa-file fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Dispatch" target="_blank" pagePath="https://trello.com/b/47gNKwnX/dispatch-lspd-7life">
                        <i className="fa-regular fa-map fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Casiers Judiciraire" pagePath="/criminal-records">
                        <i className="fa-regular fa-folder-open fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Éditer un Rapport" pagePath="/report" disabled={true}>
                        <i className="fa-regular fa-clipboard fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Lois" target="_blank" pagePath="https://docs.google.com/spreadsheets/d/1fzqRlpxPR8dKqVmzsfuvDuI5Awniv_xrhv1ogqk2jrA/edit?usp=sharing">
                        <i className="fa-solid fa-scale-unbalanced fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Documentation" pagePath="/manual">
                        <i className="fa-solid fa-book fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Gestion Utilisateurs" pagePath="/users">
                        <i className="fa-solid fa-user-gear fa-lg" />
                    </NavBarButton>
                </div>
                <div className="flex flex-col justify-end items-center gap-y-6 md:gap-y-8 h-full">
                    <NavBarButton tooltip="Voir son profil" pagePath="/profile" disabled={true}>
                        <i className="fa-solid fa-user fa-lg" />
                    </NavBarButton>
                    <NavBarButton tooltip="Se déconnecter" pagePath="/" onClick={logOut}>
                        <i className="fa-solid fa-right-from-bracket fa-lg" />
                    </NavBarButton>
                </div>
            </div>
        </motion.nav >
    );
}
