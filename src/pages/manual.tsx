import Logo from "../../public/lspd.png";
import Banner from "../component/banner";
import MenuBox from "../component/menuBox";

export default function Dashboard() {
    return (
        <>
            <Banner logo={Logo}>Documentation</Banner>
            <div className="flex flex-col md:flex-row w-full justify-around mt-10 break-words">
                <MenuBox title="Règlement">
                    <a target="_blank" href="https://docs.google.com/document/d/16HdtDBXYlN8EBfQOaOvCbpDEivDvP9DDpVm8__0P-LU/edit">
                        https://docs.google.com/document/d/16HdtDBXYlN8EBfQOaOvCbpDEivDvP9DDpVm8__0P-LU/edit
                    </a>
                </MenuBox>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-around mt-10 gap-y-4 md:gap-0">
                <MenuBox title="Codes d'État de Patrouille">
                    <ul className="flex flex-col gap-y-3">
                        <li>Code 2 : Demande de Renfort</li>
                        <li>Code 3 : Demande de renfort Importante</li>
                        <li>Code 4 : Aucune autre Assitance requise, situation stable</li>
                        <li>Code 5 : Surveillance en cours (patrouille dans le secteur)</li>
                        <li>Code 6 : Sortie du Véhile pour investigation</li>
                        <li>Code 10 : Libérez la fréquence pour diffusion d'information importante</li>
                        <li>Code 12 : Fausse Alerte</li>
                        <li>Code 14 : Reprise d'activité normale</li>
                        <li>Code 37 : Le véhicule est déclaré volé</li>
                        <li>Code 99 : Officier en danger, toutes les unités demandées sur les lieux</li>
                    </ul></MenuBox>
                <MenuBox title="Codes 10">
                    <ul>
                        <li>10-4 : Bien reçu / ok</li>
                        <li>10-9 : Répétez le dernier message</li>
                        <li>10-10 : Négatif</li>
                        <li>10-12 : En attente de dispatch</li>
                        <li>10-15 : Suspect arrêté</li>
                        <li>10-15 : Retour PDP (précisez lieux)</li>
                        <li>10-20 : partage de localisation</li>
                        <li>10-21 : Demande d'appel téléphonique</li>
                        <li>10-24 : Demande de renfort (précisez si la demande est urgente le cas échéant)</li>
                        <li>10-25 : Annuler la demande de renfort</li>
                        <li>10-30 : Refus d'obtempérer / Délit de fuite</li>
                        <li>10-37 : Véhicule Suspect</li>
                        <li>10-39 : Braquage en Cours (précisez la nature)</li>
                        <li>10-40 : Vente de drogue</li>
                        <li>10-41 : Début de patrouille</li>
                        <li>10-50 : Accident de la Route</li>
                        <li>10-76 : En route vers l'emplacement</li>
                        <li>10-78 : On reçoit des tirs / Shot Fire</li>
                        <li>10-82 : Standby (réparation / commande / ...)</li>
                    </ul>
                </MenuBox>
            </div>
        </>
    );
}
