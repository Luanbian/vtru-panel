import { HttpStatusCode } from '../../@types/http.response';
import { Assets } from '../../domain/entitties/assets';
import { IHttpClient } from '../../infra/protocols/http.client.protocol';
import { IobtainAssets, IobtainAssetsParams } from '../protocols/obtain.assets.protocol';

export default class ObtainAssets implements IobtainAssets {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient,
    ) {}

    public async perform({ id }: IobtainAssetsParams): Promise<Assets> {
        const httpResponse = await this.httpClient.request({
            url: `${this.url}/${id}`,
            method: 'GET',
        });
        switch (httpResponse.statusCode) {
        case HttpStatusCode.ok: return httpResponse.body as Assets;
        default: throw new Error('request error');
        }
    }
}
