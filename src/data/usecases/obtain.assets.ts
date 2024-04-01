import { HttpStatusCode } from '../../@types/http.response';
import NotFoundError from '../../domain/errors/not.found';
import UnexpectedError from '../../domain/errors/unexpected';
import { ResponseAPI } from '../../infra/features/types';
import { IHttpClient } from '../../infra/protocols/http.client.protocol';
import { IobtainAssets, IobtainAssetsParams } from '../protocols/obtain.assets.protocol';

export default class ObtainAssets implements IobtainAssets {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient,
    ) {}

    public async perform({ id }: IobtainAssetsParams): Promise<ResponseAPI> {
        const httpResponse = await this.httpClient.request({
            url: `${this.url}/${id}`,
            method: 'GET',
        });
        switch (httpResponse.statusCode) {
        case HttpStatusCode.ok: return httpResponse.body as ResponseAPI;
        case HttpStatusCode.notFound: throw new NotFoundError();
        default: throw new UnexpectedError();
        }
    }
}
