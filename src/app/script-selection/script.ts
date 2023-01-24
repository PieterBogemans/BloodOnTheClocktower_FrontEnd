import { Role } from "../roles/roles";

export class Script {
    constructor (
        public name: string,
        public roles: Role[],
        public id?: number
    ) {}
}