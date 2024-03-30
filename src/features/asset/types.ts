export interface AssetInitialState {
    loading: boolean;
    error: null | string;
    asset: Record<string, unknown>;
}

export interface Asset {
    _id: string;
}
