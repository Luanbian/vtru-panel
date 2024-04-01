import axios, { type AxiosResponse } from 'axios';
import { HttpResponse } from '../../@types/http.response';
import { HttpParams, IHttpClient } from '../protocols/http.client.protocol';

export default class HttpClient implements IHttpClient {
    public async request(params: HttpParams): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.request({
                url: params.url,
                method: params.method,
                data: params.body,
                headers: params.headers,
            });
        } catch (error) {
            axiosResponse = (error as any).response;
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data,
        };
    }
}
