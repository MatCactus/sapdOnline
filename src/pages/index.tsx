import Image from "next/image";
import LogoLSPD from "../../public/lspd.png";
import LogoBCSO from "../../public/bcso.png";
import Ltn74 from "../../public/ltn-74.jpg";
import SlideShow from "../component/slideShow";
import React from "react";


export default function Home() {
    let [showPlateforme, setShowPlateforme] = React.useState(false)

    function togglePlateforme() {
        setShowPlateforme(!showPlateforme)
    }

    return (
        <div className="bg-white h-full w-full">
            <SlideShow />

            {/*V1*/}

            <div className={"flex flex-row justify-between gap-16 font-lspd mx-72"}>
                <div className={"flex justify-center flex-col w-10/12 items-center gap-8"}>
                    <Image className={"w-40 mt-8"} src={LogoLSPD} alt={"LSPD Logo"} />
                    <div className={"text-center"}>
                        <h2 className={"text-3xl"}>LSPD</h2>
                        <h3 className={"text-xl"}>Obey & Survive</h3>
                    </div>
                    <p>Chers citoyens de Los Santos,
                        <br /><br />

                        Le Département de police de Los Santos est à la recherche de nouveaux agents déterminés et compétents pour rejoindre notre équipe. Si vous êtes passionné par la justice et souhaitez faire une différence positive dans notre communauté, nous voulons vous entendre!
                        <br /><br />
                        En tant qu'agent de police de Los Santos, vous serez chargé de maintenir l'ordre et la sécurité dans notre ville en veillant à ce que les lois soient respectées et en aidant les citoyens en besoin. Vous serez également appelé à résoudre les crimes, à enquêter sur les incendies criminels et à aider les unités d'urgence en cas de besoin.
                        <br /><br />
                        Les critères pour devenir agent de police incluent:
                        <br /><br />
                        Avoir au moins 21 ans<br />
                        Posséder un diplôme d'études secondaires<br />
                        Avoir une bonne conduite civique<br />
                        Avoir une forme physique adéquate pour accomplir les tâches requises<br />
                        Nous offrons des salaires compétitifs, des avantages sociaux, des opportunités de formation continue et des possibilités de progression de carrière à nos agents. Si vous êtes prêt à relever le défi et à servir notre communauté, n'hésitez pas à postuler aujourd'hui!<br />
                        <br />
                        Sincèrement,
                        <br /><br />
                        Le Département de police de Los Santos</p>
                    <button className={"rounded-2xl border-2 border-neutral-600 p-8 py-0 h-8 active:scale-95 text-black"}
                        onClick={() => { togglePlateforme() }}
                    >Rejoindre</button>
                </div>
                <div className={"mt-14 w-px bg-lspd"}></div>
                <div className={"flex justify-center flex-col w-10/12 items-center gap-8"}>
                    <Image className={"w-40 mt-8"} src={LogoBCSO} alt={"bcso Logo"} />
                    <div className={"text-center"}>
                        <h2 className={"text-3xl"}>BCSO</h2>
                        <h3 className={"text-xl"}>Survey & Protect</h3>
                    </div>
                    <p>Bonjour à vous habitants de San Andreas et citoyens Américains,
                        Le Blaine County Sheriff Office est actuellement ouvert aux recrutements.
                        <br /><br />
                        La culture du travail au sein du Blaine County Sheriff Office illustre cinq valeurs fondamentales : courage, loyauté, devoir, honnêteté et justice. Ces valeurs, et l’adage des Sheriff « Worthy of Trust and Confidence », trouvent écho chez tous les Américains qui ont juré de respecter ces principes.
                        <br /><br />
                        Les traits que nous recherchons:<br />
                        - Excellente condition physique.<br />
                        - Stabilité psychologique, sang froid.<br />
                        - Dépistage anti drogues, divulguer toute consommation antérieure de drogues,<br />
                        - La perte auditive, mesurée par un audiomètre, ne doit pas dépasser 25 décibels.<br />
                        - Posséder une acuité visuelle corrigée d’au moins 20/20 pour chaque œil.<br />
                        - Être âgé d’au moins 21 ans et de moins de 37 ans.<br />
                        <br />
                        Une carrière au sein du Blaine County Sheriff Office offre aux employés un ensemble complet d’avantages sociaux. En tant qu’employé de police, vous et votre famille aurez accès à une gamme d’avantages sociaux conçus pour rendre votre carrière de deputy très enrichissante.
                        <br /><br />
                        Bénéfices:<br />
                        - Assurance maladie<br />
                        - Comptes de dépenses flexibles, salaire variable.<br />
                        <br />
                        Explorez les nombreuses possibilités offertes par le Blaine County Sheriff Office.</p>
                    <button className={"rounded-2xl border-2 border-neutral-600 p-8 py-0 h-8 active:scale-95 text-black"}>Rejoindre</button>
                </div>
            </div>

            {/*V2*/}

            {/*<div className={"flex flex-col items-center gap-8 font-lspd mx-72"}>*/}
            {/*    <Image className={"w-40 mt-8"} src={LogoLSPD} alt={"LSPD Logo"} />*/}
            {/*    <div className={"h-px w-full bg-black"}></div>*/}
            {/*    <div className={"text-center"}>*/}
            {/*        <h2 className={"text-3xl"}>LSPD</h2>*/}
            {/*        <h3 className={"text-xl"}>Obey & Survive</h3>*/}
            {/*    </div>*/}
            {/*    <div className={"h-px w-full bg-black"}></div>*/}
            {/*    <div className={""}>*/}
            {/*        <p>Chers citoyens de Los Santos,*/}
            {/*            <br/><br/>*/}

            {/*            Le Département de police de Los Santos est à la recherche de nouveaux agents déterminés et compétents pour rejoindre notre équipe. Si vous êtes passionné par la justice et souhaitez faire une différence positive dans notre communauté, nous voulons vous entendre!*/}
            {/*            <br/><br/>*/}
            {/*            En tant qu'agent de police de Los Santos, vous serez chargé de maintenir l'ordre et la sécurité dans notre ville en veillant à ce que les lois soient respectées et en aidant les citoyens en besoin. Vous serez également appelé à résoudre les crimes, à enquêter sur les incendies criminels et à aider les unités d'urgence en cas de besoin.*/}
            {/*            <br/><br/>*/}
            {/*            Les critères pour devenir agent de police incluent:*/}
            {/*            <br/><br/>*/}
            {/*            Avoir au moins 21 ans<br/>*/}
            {/*            Posséder un diplôme d'études secondaires<br/>*/}
            {/*            Avoir une bonne conduite civique<br/>*/}
            {/*            Avoir une forme physique adéquate pour accomplir les tâches requises<br/>*/}
            {/*            Nous offrons des salaires compétitifs, des avantages sociaux, des opportunités de formation continue et des possibilités de progression de carrière à nos agents. Si vous êtes prêt à relever le défi et à servir notre communauté, n'hésitez pas à postuler aujourd'hui!<br/>*/}
            {/*            <br/>*/}
            {/*            Veuillez envoyer votre curriculum vitae et une lettre de motivation sur notre intranet en ouvrant un dossier de recrutement. Nous nous réjouissons de recevoir votre candidature et de vous aider à devenir un membre clé du Département de police de Los Santos.*/}
            {/*            <br/><br/>*/}
            {/*            Sincèrement,*/}
            {/*            <br/><br/>*/}
            {/*            Le Département de police de Los Santos</p>*/}
            {/*    </div>*/}

            {/*    <Image className={"w-40 mt-8"} src={LogoBCSO} alt={"BCSO Logo"} />*/}
            {/*    <div className={"h-px w-full bg-black"}></div>*/}
            {/*    <div className={"text-center"}>*/}
            {/*        <h2 className={"text-3xl"}>BCSO</h2>*/}
            {/*        <h3 className={"text-xl"}>Survey & Protect</h3>*/}
            {/*    </div>*/}
            {/*    <div className={"h-px w-full bg-black"}></div>*/}
            {/*    <div className={""}>*/}
            {/*        <p>Chers citoyens de Los Santos,*/}
            {/*            <br/><br/>*/}

            {/*            Le Département de police de Los Santos est à la recherche de nouveaux agents déterminés et compétents pour rejoindre notre équipe. Si vous êtes passionné par la justice et souhaitez faire une différence positive dans notre communauté, nous voulons vous entendre!*/}
            {/*            <br/><br/>*/}
            {/*            En tant qu'agent de police de Los Santos, vous serez chargé de maintenir l'ordre et la sécurité dans notre ville en veillant à ce que les lois soient respectées et en aidant les citoyens en besoin. Vous serez également appelé à résoudre les crimes, à enquêter sur les incendies criminels et à aider les unités d'urgence en cas de besoin.*/}
            {/*            <br/><br/>*/}
            {/*            Les critères pour devenir agent de police incluent:*/}
            {/*            <br/><br/>*/}
            {/*            Avoir au moins 21 ans<br/>*/}
            {/*            Posséder un diplôme d'études secondaires<br/>*/}
            {/*            Avoir une bonne conduite civique<br/>*/}
            {/*            Avoir une forme physique adéquate pour accomplir les tâches requises<br/>*/}
            {/*            Nous offrons des salaires compétitifs, des avantages sociaux, des opportunités de formation continue et des possibilités de progression de carrière à nos agents. Si vous êtes prêt à relever le défi et à servir notre communauté, n'hésitez pas à postuler aujourd'hui!<br/>*/}
            {/*            <br/>*/}
            {/*            Veuillez envoyer votre curriculum vitae et une lettre de motivation sur notre intranet en ouvrant un dossier de recrutement. Nous nous réjouissons de recevoir votre candidature et de vous aider à devenir un membre clé du Département de police de Los Santos.*/}
            {/*            <br/><br/>*/}
            {/*            Sincèrement,*/}
            {/*            <br/><br/>*/}
            {/*            Le Département de police de Los Santos</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <h1 className="text-3xl mt-20  font-semibold text-center">États-majors de San Andreas</h1>
            <div className="flex flex-row gap-10 justify-center mt-8 mb-20">
                <div className="flex flex-row gap-8 w-1/3">
                    <div className="text-center text-lg font-semibold mt-10">
                        <Image className="rounded-full bg-gray-200 w-60 select-none" src={LogoLSPD} alt={"LSPD Logo"} />
                        <p className="my-4">M. MOSS Lewis</p>
                    </div>
                    <div className="text-center text-lg font-semibold">
                        <Image className="rounded-full bg-gray-200 w-60 select-none" src={LogoLSPD} alt={"LSPD Logo"} />
                        <p className="my-4">M. KYLE Jude</p>
                    </div>
                    <div className="text-center text-lg font-semibold mt-10">
                        <Image className="rounded-full bg-gray-200 w-60 select-none" src={Ltn74} alt={"LSPD Logo"} />
                        <p className="my-4">M. MURPHY Wyatt</p>
                    </div>
                </div>
            </div>
        </div>
    );
}