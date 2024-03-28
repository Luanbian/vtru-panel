import HttpClient from '../../../infra/adapters/http.client.adapter';
import { IHttpClient } from '../../../infra/protocols/http.client.protocol';

const makeHttpClient = (): IHttpClient => new HttpClient();
export default makeHttpClient;
