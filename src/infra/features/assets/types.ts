export type AssetStatus = 'draft' | 'published' | 'archived' | 'preview' | '';

export interface LicensesFormValues {
    nft: {
        version: string;
        added: boolean;
        license: string;
        elastic: {
            editionPrice: number;
            numberOfEditions: number;
            totalPrice: number;
            editionDiscount: boolean;
        };
        single: {
            editionPrice: number;
        };
        unlimited: {
            editionPrice: number;
        };
        editionOption: 'elastic' | 'single' | 'unlimited' | string;
    };
    stream: {
        version: string;
        added: boolean;
    };
    print: {
        version: string;
        added: boolean;
        unitPrice: number;
    };
    remix: {
        version: string;
        added: boolean;
        unitPrice: number;
    };
}

interface Format {
    size?: number;
    load?: boolean;
    path: string;
    name?: string;
}

export interface Icontext {
    title: string;
    description: string;
    culture: string;
    mood: string[];
    colors: string;
    copyright: string;
    orientation: string;
}

export interface Icreators {
    name: string;
    roles: string[];
    bio: string;
    nationality: string;
    profileUrl: string;
}

export interface Iprovenance {
    country: string;
    blockchain: string;
    exhibitions: string[];
    awards: string[];
}

export interface Itaxonomy {
    objectType: string;
    category: string;
    tags: string[];
    collections: string[];
    medium: string[];
    style: string[];
    subject: string[];
    aiGeneration: string;
    arenabled: string;
    nudity: string;
}

export interface Asset {
    _id: string;
    mediaAuxiliary: {
        description: string;
        formats: {
            arImage: Format;
            arVideo: Format;
            btsImage: Format;
            btsVideo: Format;
            codeZip: Format;
        };
    };
    formats: {
        original: Format;
        display: Format;
        exhibition: Format;
        preview: Format;
        print: Format;
    };
    isOriginal: boolean;
    generatedArtworkAI: boolean;
    notMintedOtherBlockchain: boolean;
    contract: boolean;
    assetMetadata?: {
        context: {
            formData: Icontext;
        };
        creators: {
            formData: Icreators[];
        };
        provenance: {
            formData: Iprovenance;
        };
        taxonomy: {
            formData: Itaxonomy;
        };
    };
    licenses: LicensesFormValues;
    status: AssetStatus;
    framework: {
        createdAt: Date | null;
        updatedAt: Date | null;
        createdBy: string | null;
        updatedBy: string | null;
    };
}
