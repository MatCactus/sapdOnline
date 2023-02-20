export interface User {
    username: string
    passwd: string,
    perm: number,
    active: boolean,
    name: string,
    surname: string,
    dob: Date,
    dorecruitment: Date,
    rank: string,
    service: null | Date,
    dept: string
}

interface Record {
    creationdate: Date,
    author: {
        name: string,
        surname: string,
        pon: string,
    }
    desc: string,
    bills: string[],
    jail: string[],
}

export interface CriminalRecordItems {
    id: number,
    name: string,
    surname: string,
    pon: string,
    owner_name: string,
    owner_surname: string,
    docreation: Date,
    records: number
}

export interface CriminalRecord {
    name: string,
    surname: string,
    pon: string,
    owner_name: string,
    owner_surname: string,
    owner_dob: Date,
    owner_gender: string,
    owner_phone: string,
    docreation: Date,
    records: Record[]
};

export type Users = User[];

export type GetCriminalRecordsRes = CriminalRecordItems[];

export type GetCriminalRecordRes = CriminalRecord[];

export type LoginRes = { message: string } | { token: string };

export type IsLoggedRes = { message: string };

export type GetUsersRes = { active: boolean, dept: string, pp: string, pon: string, name: string, surname: string, rank: string, username: string }[];

export type GetPermsRes = { actualPerm: number, perms: { [key: number]: { pages: string[], desc: string } } };
