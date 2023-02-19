import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../component/navBar";
import Header from "../component/header";
import ToastsManager from "../component/toastManager";
import { RecoilRoot } from "recoil";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    const [displayNavBar, setDisplayNavBar] = useState(true);
    const [displayHeader, setDisplayHeader] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (["/dashboard", "/manual", "/users"].includes(router.pathname))
            setDisplayNavBar(true);
        else setDisplayNavBar(false);

        if (["/"].includes(router.pathname))
            setDisplayHeader(true);
        else setDisplayHeader(false);

    }, [router.route, router.pathname]);

    return (
        <RecoilRoot>
            <Head>
                <title>SAPD Online</title>
            </Head>
            <div className="w-full min-h-screen bg-creme">
                <Script src="https://kit.fontawesome.com/9626785de0.js" crossOrigin="anonymous"></Script>
                <ToastsManager />
                <AnimatePresence>
                    {displayNavBar &&
                        <NavBar />
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {displayHeader &&
                        <motion.div
                            className="pb-20"
                            initial={{ y: "-5rem", paddingBottom: 0 }}
                            animate={{ y: 0, paddingBottom: "5rem", transition: { delay: 1, duration: 0.6, type: "tween" } }}
                            transition={{ delay: 0.4, duration: 0.6, type: "tween" }}
                            exit={{ y: "-5rem", paddingBottom: 0 }}
                        >
                            <Header />
                        </motion.div>
                    }
                </AnimatePresence>

                {displayNavBar &&
                    <motion.div
                        className="ml-9 md:ml-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                }

                {!displayNavBar &&
                    <motion.div
                        className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                }
            </div>
        </RecoilRoot>
    );
}
