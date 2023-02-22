import Logo from "../../public/lspd.png";
import Banner from "../component/banner";
import Image from "next/image";

export default function Dashboard() {
    return (
        <>
            <Banner logo={Logo}>Documentation</Banner>
            <div className="flex flex-col md:flex-row mx-auto w-fit mt-10 break-words bg-lspd text-white rounded-lg p-4">
                <div>
                    <p className={"text-2xl text-center mb-4"}>Règlement interne</p>
                    <p className={"mb-2"}>Vous devez obligatoirement prendre connaissance du règlement interne l'accepter ainsi que l'appliquer dans toute circonstance.
                        Tout manquement à celui-ci sera lourdement sanctionné !</p>
                    <a target="_blank" rel="noreferrer" className={"hover:text-blue-700 transition-colors"} href="https://docs.google.com/document/d/16HdtDBXYlN8EBfQOaOvCbpDEivDvP9DDpVm8__0P-LU/edit">
                        <i className={"fas fa-arrow-right pr-2"}></i>
                        Voir le règlement interne
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-around mt-10 gap-y-4 md:gap-0">

                <div>
                    <div className={"bg-lspd text-white rounded-lg p-4 mb-12 h-fit w-fit"}>
                        <p className={"text-xl mb-4"}>Codes d'État de Patrouille :</p>
                        <ul className="flex flex-col gap-y-4">
                            <li>Code 4 : Aucune autre Assitance requise, situation stable</li>
                            <li>Code 5 : Surveillance en cours (patrouille dans le secteur)</li>
                            <li>Code 6 : Sortie du Véhile pour investigation</li>
                            <li>Code 10 : Libérez la fréquence pour diffusion d&#3information importante</li>
                            <li>Code 12 : Fausse Alerte</li>
                            <li>Code 14 : Reprise d'activité normale</li>
                            <li>Code 37 : Le véhicule est déclaré volé</li>
                            <li>Code 99 : Officier en danger, toutes les unités demandées sur les lieux</li>
                        </ul>
                    </div>
                    <div>
                        <Image src={"https://cdn.discordapp.com/attachments/1076142419554353245/1077585867603988550/Capture_decran_2023-02-21_144045.png"}
                            alt={"Secteur de patrouille"}
                            width={650}
                            height={300}
                            className={"rounded-lg w-96 h-fit mx-auto"}
                        />
                    </div>
                </div>
                <div className={"bg-lspd text-white rounded-lg p-4 mb-20"}>
                    <p className={"text-xl mb-4"}>Codes de Communication :</p>
                    <ul className="flex flex-col gap-y-4">
                        <li>10-4 : Bien reçu / ok</li>
                        <li>10-9 : Répétez le dernier message</li>
                        <li>10-10 : Négatif</li>
                        <li>10-12 : En attente de dispatch</li>
                        <li>10-15 : Suspect arrêté</li>
                        <li>10-19 : Retour PDP (précisez lieux)</li>
                        <li>10-20 : partage de localisation</li>
                        <li>10-21 : Demande d&#3appel téléphonique</li>
                        <li>10-24 : Demande de renfort (précisez si la demande est urgente le cas échéant)</li>
                        <li>10-25 : Annuler la demande de renfort</li>
                        <li>10-30 : Refus d&#3obtempérer / Délit de fuite</li>
                        <li>10-37 : Véhicule Suspect</li>
                        <li>10-39 : Braquage en Cours (précisez la nature)</li>
                        <li>10-40 : Vente de drogue</li>
                        <li>10-41 : Début de patrouille</li>
                        <li>10-50 : Accident de la Route</li>
                        <li>10-76 : En route vers l&#3emplacement</li>
                        <li>10-78 : On reçoit des tirs / Shot Fire</li>
                        <li>10-82 : Standby (réparation / commande / ...)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
