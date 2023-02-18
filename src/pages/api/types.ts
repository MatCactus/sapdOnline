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