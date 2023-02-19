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

export type Users = User[]

export type LoginRes = { message: string } | { token: string };

export type IsLoggedRes = { message: string };

export type GetUsersRes = { active: boolean, dept: string, pp: string, pon: string, name: string, surname: string, rank: string, username: string }[];

export type GetPermsRes = { actualPerm: number, perms: { [key: number]: { pages: string[], desc: string } } };