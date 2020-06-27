import {ApiService} from "../services/api.service";

class AuthController {
    private apiService = ApiService.getInstance();

    login(user: {
        email: string,
        password: string
    }) {
        this.apiService.post('user/login', user, false)
            .subscribe((res: any) => {
                console.log('[Login]', res.message, res.user);
            })
    }

    register(user: {
        name: string,
        email: string,
        password: string
    }) {
        this.apiService.post('user/signup', user, false)
            .subscribe((res: any) => {
                console.log('[Signup]', res.message, res.user);
            })
    }
}

export const authController = new AuthController();
