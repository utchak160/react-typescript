import axios, {AxiosRequestConfig} from 'axios';
import {from, Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {EConstants} from "../utils/constants";

export class ApiService {

    static _instance: ApiService;

    constructor() {
        axios.defaults.baseURL = 'http://localhost:5000/api/'
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new ApiService();
        }
        return this._instance;
    }

    get<T>(endPoint: string, params?: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders),
            params
        };
        return from(axios.get<T>(endPoint, config))
            .pipe(
                tap(res => console.log(res)),
                map(res => res.data),
                catchError(this._handleError)
            );
    }

    post<T>(endPoint: string, body: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders)
        };
        return from(axios.post<T>(endPoint, body, config))
            .pipe(
                map(d => d.data),
                tap(d => console.log(d)),
                catchError(this._handleError)
            );
    }

    put<T>(endPoint: string, body: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders)
        };
        return from(axios.put<T>(endPoint, body, config))
            .pipe(
                map(d => d.data),
                catchError(this._handleError)
            );
    }

    private _buildHeaders(useAuthHeaders: boolean): { [key: string]: string } {
        let headers: any = {contentType: 'application/json'};
        if (useAuthHeaders) {
            headers = {
                ...headers,
                authorization: `Bearer ${localStorage.getItem(EConstants.AUTH_TOKEN)}`
            }
        }
        return headers;
    }

    private _handleError(error: any): Observable<never> {
        return throwError(error);
    }
}
