import { motion } from "framer-motion";

export default function LoginPopUp(props: { toggleFunction: (state?: boolean) => void }) {
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
            <motion.div
                className="fixed h-2/6 w-4/6 md:h-1/3 md:w-1/6 bg-sapd top-0 bottom-0 left-0 right-0 m-auto rounded-xl flex flex-col p-8 px-11 md:p-11 z-40"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.3 } }}
                exit={{ opacity: 0, y: "-5rem", transition: { duration: 0.3 } }}
            >
                <motion.div
                    className="text-white text-xl font-lspd uppercase text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
                >
                    se connecter
                </motion.div>
                <motion.div
                    className="flex flex-col gap-10"
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
                >
                    <div
                        className="text-sapd text-xl flex flex-col gap-6"

                    >
                        <input type="email" className="bg-white rounded px-2" placeholder="Identifiant" />
                        <input type="password" className="bg-white rounded px-2" placeholder="Mot de Passe" />
                    </div>
                    <div
                        className="w-full flex flex-row justify-end"
                    >
                        <button type="submit" className="font-lspd uppercase text-white px-2 rounded border">
                            connexion
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
