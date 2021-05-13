export interface ArtistSearchResult {
    created: Date;
    count: number;
    offset: number;
    artists: Artist[];
}

export interface Artist {
    id: string;
    score: number;
    name: string;
    "sort-name": string;
    "life-span": LifeSpan;
    aliases?: Alias[];
    tags?: Tag[];
    type?: string;
    "type-id"?: string;
    country?: string;
    area?: Area;
    "begin-area"?: Area;
    disambiguation?: string;
    isnis?: string[];
}

export interface Alias {
    "sort-name": string;
    name: string;
    locale: null;
    type: null | string;
    primary: null;
    "begin-date": null;
    "end-date": null;
    "type-id"?: string;
}

export interface Area {
    id: string;
    type: string;
    "type-id": string;
    name: string;
    "sort-name": string;
    "life-span": LifeSpan;
}

export interface LifeSpan {
    ended: null;
    begin?: string;
    end?: string;
}

export interface Tag {
    count: number;
    name: string;
}
