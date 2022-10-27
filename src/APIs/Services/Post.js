import { HttpClient } from "../HttpClient";

class AuthService extends HttpClient {
    constructor() {
        super("https://localhost:44347/api/Post");
    }
}

export const authService = new AuthService();