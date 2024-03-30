import { IobtainAssets } from '../../../data/protocols/obtain.assets.protocol';
import ObtainAssets from '../../../data/usecases/obtain.assets';
import makeHttpClient from '../infra/http.client.factory';

const makeObtainAssets = (): IobtainAssets => {
    const url = 'https://studio-api.vtru.dev/assets/show';
    const httpClient = makeHttpClient();
    return new ObtainAssets(url, httpClient);
};
export default makeObtainAssets;
