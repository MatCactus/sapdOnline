import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../component/navBar";
import Header from "../component/header";

export default function App({ Component, pageProps }: AppProps) {
    const [displayNavBar, setDisplayNavBar] = useState(true);
    const [displayHeader, setDisplayHeader] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (["/dashboard", "/manual"].includes(router.pathname))
            setDisplayNavBar(true);
        else setDisplayNavBar(false);

        if (["/"].includes(router.pathname))
            setDisplayHeader(true);
        else setDisplayHeader(false);

    }, [router.route]);

    return (
        <>
            <Head>
                <title>SAPD Online</title>
            </Head>
            <div className="h-full w-full bg-creme">
                <AnimatePresence>
                    {displayNavBar &&
                        <NavBar />
                    }
                    {displayHeader &&
                        <Header />
                    }
                </AnimatePresence>

                {displayNavBar &&
                    <motion.div
                        className="ml-9 md:ml-16"
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                }

                {!displayNavBar &&
                    <motion.div
                        className="w-full h-full"
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                }
            </div>
        </>
    );
}
