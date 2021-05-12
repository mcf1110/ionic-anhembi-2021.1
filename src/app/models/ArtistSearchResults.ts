export interface ArtistSearchResult {
    created: Date;
    count: number;
    offset: number;
    artists: Artist[];
}

export interface Artist {
    id: string;
    type?: ArtistType;
    "type-id"?: string;
    score: number;
    name: string;
    "sort-name": string;
    country?: string;
    area?: Area;
    "begin-area"?: Area;
    disambiguation?: string;
    isnis?: string[];
    "life-span": LifeSpan;
    aliases?: Alias[];
    tags?: Tag[];
    "gender-id"?: string;
    gender?: string;
}

export interface Alias {
    "sort-name": string;
    "type-id"?: string;
    name: string;
    locale: null | string;
    type: null | string;
    primary: boolean | null;
    "begin-date": null | string;
    "end-date": null | string;
}

export interface Area {
    id: string;
    type: AreaType;
    "type-id": string;
    name: string;
    "sort-name": string;
    "life-span": LifeSpan;
}

export interface LifeSpan {
    ended: boolean | null;
    begin?: string;
    end?: string;
}

export enum AreaType {
    City = "City",
    Country = "Country",
    Subdivision = "Subdivision",
}

export interface Tag {
    count: number;
    name: string;
}

export enum ArtistType {
    Group = "Group",
    Person = "Person",
}
