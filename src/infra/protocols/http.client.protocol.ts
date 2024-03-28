import { HttpResponse } from '../../@types/http.response';

export interface HttpParams {
    url: string
    method: 'POST' | 'GET' | 'PUT' | 'DELETE'
    body?: object
    headers?: object
}

export interface IHttpClient {
    request: (params: HttpParams) => Promise<HttpResponse>;
}
