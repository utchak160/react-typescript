import {ApiService} from "../services/api.service";
import { User } from '../models/user';
import {Observable} from 'rxjs';

class UserController {
    private apiService = ApiService.getInstance();

    getAllUsers(): Observable<User[]> {
        return this.apiService.get<User[]>('user')
    }
}

export const userController = new UserController();
