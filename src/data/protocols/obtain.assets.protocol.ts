import { ResponseAPI } from '../../features/types';

export interface IobtainAssetsParams {
    id: string
}

export interface IobtainAssets {
    perform: ({ id }: IobtainAssetsParams) => Promise<ResponseAPI>
}
