import { apiInstance } from "./api";
import { IUser } from "../../interfaces/users";

export class ApiUsersService {
    static async getUsers(): Promise<IUser[]> {
        return apiInstance.get(`/users`).then((res) => res.data);
    }
}