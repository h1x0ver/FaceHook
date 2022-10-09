import { HttpClient } from "../HttpClient";

class AuthService extends HttpClient {
    constructor() {
        super("https://localhost:44347/api/Post");
    }

    //get all
    GetAll(body){
        return this.get("", body);
    }
    //:id
    GetById(body) {
        return this.get(":id", body)
    }
}

export const authService = new AuthService();