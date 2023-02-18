import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LogoSAPD from "../../public/sapd.png";

export default function LoginPopUp(props: { toggleFunction: (state?: boolean) => void, setLogStateFunction: (state: boolean) => void }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = (): void => {
        if (!username || !password)
            return;

        fetch("/api/login", { method: "POST", body: JSON.stringify({ username: username, password: password }) }).then(async (res) => {
            const { message, token } = await res.json();
            if (message || !token)
                return;

            localStorage.setItem("token", token);
            props.setLogStateFunction(true);
            props.toggleFunction(false);
        })

    }

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
                className="fixed h-fit w-4/6 md:w-2/12 bg-sapd top-0 bottom-0 left-0 right-0 m-auto rounded-xl flex flex-col p-8 px-11 md:p-11 md:pt-8 z-40"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.3 } }}
                exit={{ opacity: 0, y: "-5rem", transition: { duration: 0.3 } }}
            >
                <motion.div
                    className="text-white text-2xl font-lspd uppercase text-center mb-8 md:mb-8 flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.3 } }}
                >
                    <Image src={LogoSAPD} alt="sapd logo" className="w-24" />
                    se connecter
                </motion.div>
                <motion.div
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
                >
                    <div
                        className="text-sapd text-xl flex flex-col gap-6"

                    >
                        <input type="email" className="bg-white rounded px-2 outline-none text-base h-8" placeholder="Identifiant" value={username} onChange={e => setUsername(e.target.value)} />
                        <input type="password" className="bg-white rounded px-2 outline-none text-base h-8" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div
                        className="w-full flex flex-row justify-end"
                    >
                        <button type="submit" className="w-full rounded-full border border-amber-50 px-6 py-1 text-amber-50 active:scale-95 uppercase cursor-pointer" onClick={submit}>
                            connexion
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
