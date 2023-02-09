import { motion } from "framer-motion"
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../component/navBar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const [displayNavBar, setDisplayNavBar] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (["/dashboard"].includes(router.pathname))
            setDisplayNavBar(true);
        else setDisplayNavBar(false);
    }, [router.basePath]);

    return (
        <>
            <Head>
                <title>SAPD Online</title>
            </Head>
            <div className="h-screen w-screen bg-creme">
                {displayNavBar ?
                    <>
                        <NavBar />
                        <motion.div
                            className="ml-16 md:mx-16"
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Component {...pageProps} />
                        </motion.div>
                    </> :
                    <motion.div
                        className="w-screen h-screen"
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>}

            </div>
        </>
    );
}
