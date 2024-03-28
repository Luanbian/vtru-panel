import { Assets } from '../../domain/entitties/assets';

export interface IobtainAssetsParams {
    id: string
}

export interface IobtainAssets {
    perform: ({ id }: IobtainAssetsParams) => Promise<Assets>
}
