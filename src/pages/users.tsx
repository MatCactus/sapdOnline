import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../public/sapd.png";
import Banner from "../component/banner";
import Overlay from "../component/overlay";
import Plateforme from "../component/plateforme";
import { useToasts } from "../component/toastManager";
import UserProfile from "../component/userProfile";
import { GetUsersRes, GetPermsRes } from "./api/types";

export default function User() {
    const [showPlateforme, setShowPlateforme] = useState(false);
    const [getUsers, setGetUsers] = useState([] as GetUsersRes);

    const createToast = useToasts();
    const router = useRouter();
    const [perm, setPerm] = useState(0);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [pon, setPon] = useState("");
    const [rank, setRank] = useState("");
    const [permissions, setPermissions] = useState("");
    const [dept, setDept] = useState("");
    const [pp, setPp] = useState("");

    function togglePlateforme(state?: boolean) {
        setShowPlateforme(state ?? !showPlateforme);
    }

    function createUser() {
        if (!name || !surname || !dob || !rank || !permissions || !dept) {
            createToast("Veuillez remplir tous les champs obligatoirs", "error");
            return;
        }
        togglePlateforme(false);

        fetch("/api/createUser", {
            method: "POST",
            headers: {
                authorization: localStorage.getItem("token") ?? "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                dob: dob,
                pon: pon,
                rank: rank,
                perm: permissions,
                dept: dept,
                pp: pp,
                username: (surname[0] + name).toLowerCase(),
                password: password
            })
        }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                return;
            }
            const Users = getUsers;
            Users.push({ active: true, name: name, surname: surname, pon: pon, rank: rank, dept: dept, pp: pp ?? "https://img.freepik.com/premium-vector/police-avatar-icon-flat-color-style-vector-illustration_755164-6618.jpg", username: (surname[0] + name).toLowerCase() })
            setGetUsers(Users);
            createToast("Utilisateur cr???? avec succ??s", "success");
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
            return;
        }

        fetch("/api/getUsers", { method: "GET", headers: { authorization: localStorage.getItem("token") ?? "" } }).then(async e => {
            if (e.status != 200)
                return;
            const body: GetUsersRes = await e.json();
            setGetUsers(body);
        })

        fetch("/api/getPerms", { method: "GET", headers: { authorization: token } }).then(async e => {
            if (e.status != 200) {
                createToast(`Une erreur est survenue (${JSON.stringify(await e.json())})`, "error");
                router.push("/");
                return;
            }

            const body = await e.json() as GetPermsRes;
            if (!body.perms[body.actualPerm].pages.includes("/criminal-records")) {
                router.push("/");
                return;
            }

            console.log(body.actualPerm);


            if (body.actualPerm < 4) {
                router.push("/");
                return;
            }
        })
    }, [showPlateforme]);

    return (
        <>
            <Banner logo={Logo}>Gestion des agents</Banner>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-row gap-16 mt-8 flex-wrap max-w-users justify-start">
                    {...getUsers.map((user) =>
                        <UserProfile key={user.username} active={user.active} image={user.pp}
                            name={user.name} surname={user.surname} matricule={user.pon} dept={user.dept} grade={user.rank} username={user.username} />
                    )}
                    <motion.div className="self-center border-4 py-4 px-5 border-[#0f2940] rounded-full mx-20 cursor-pointer flex justify-center items-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        onClick={() => togglePlateforme(true)}
                    >
                        <i className="fas fa-plus text-6xl text-lspd" />
                    </motion.div>
                    <AnimatePresence>
                        {
                            showPlateforme &&
                            <>
                                <Overlay toggleFunction={togglePlateforme} />
                                <Plateforme title="Ajouter un Agent" type="center">
                                    <div className="flex flex-col gap-2 px-6">
                                        <div className="flex flex-col">
                                            <label className="py-1">Nom</label>
                                            <input name="nom" placeholder="Nom" className="rounded-md pl-2 outline-none text-black" value={name} onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Pr??nom</label>
                                            <input name="prenom" placeholder="Pr??nom" className="rounded-md pl-2 outline-none text-black" value={surname} onChange={e => setSurname(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Mot de Passe</label>
                                            <input name="mdp" type="password" placeholder="Mot de Passe (Temporaire)" className="rounded-md pl-2 outline-none text-black" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Date de Naissance</label>
                                            <input name="dob" type="date" placeholder="Date de Naissance" className="rounded-md pl-2 outline-none text-black" value={dob} onChange={e => setDob(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Matricule</label>
                                            <input name="matricule" placeholder="Matricule (Facultatif)" className="rounded-md pl-2 outline-none text-black" value={pon} onChange={e => setPon(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Grade</label>
                                            <input name="grade" placeholder="Grade" className="rounded-md pl-2 outline-none text-black" value={rank} onChange={e => setRank(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Permissions</label>
                                            <input name="permissions" placeholder="Permissions" className="rounded-md pl-2 outline-none text-black" value={permissions} onChange={e => setPermissions(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">D??partement</label>
                                            <input name="departement" placeholder="D??partement" className="rounded-md pl-2 outline-none text-black" value={dept} onChange={e => setDept(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="py-1">Photo de Profil</label>
                                            <input name="image" placeholder="Photo de Profil (Facultatif)" className="rounded-md pl-2 outline-none text-black" value={pp} onChange={e => setPp(e.target.value)} />
                                        </div>
                                        <button type="submit" className="border rounded-full text-white px-4 py-2 my-6" onClick={createUser}>Ajouter</button>
                                    </div>
                                </Plateforme>
                            </>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
