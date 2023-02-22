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
    facts: string[],
    bills: string[],
    jail: string,
}

export interface CriminalRecordItems {
    id: number,
    name: string,
    surname: string,
    pon: string,
    owner_name: string,
    owner_surname: string,
    docreation: Date,
    photos: { title: string, photo: string, recordEntryId?: number }[],
    records: number
}

export interface GetCriminalRecordRes {
    name: string,
    surname: string,
    pon: string,
    owner_name: string,
    owner_surname: string,
    owner_dob: Date,
    owner_gender: string,
    owner_phone: string,
    docreation: Date,
    photos: { title: string, photo: string, recordEntryId?: number }[],
    record: Record[]
};

export type Users = User[];

export type GetCriminalRecordsRes = CriminalRecordItems[];

export type LoginRes = { message: string } | { token: string };

export type IsLoggedRes = { message: string };

export type GetUsersRes = { active: boolean, dept: string, pp: string, pon: string, name: string, surname: string, rank: string, username: string }[];

export type GetPermsRes = { actualPerm: number, perms: { [key: number]: { pages: string[], desc: string } } };
