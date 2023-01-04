import { Role } from "../roles/role";

export class Script {
    constructor (
    public id: number,
    public name: string,
    public roles: Role[]
    ) {}
}