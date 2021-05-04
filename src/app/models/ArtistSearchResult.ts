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
    "begin-area"?: BeginArea;
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

export interface BeginArea {
    id: string;
    type: AreaType;
    "type-id": string;
    name: string;
    "sort-name": string;
    "life-span": LifeSpan;
}

export interface Tag {
    count: number;
    name: string;
}

export enum ArtistType {
    Group = "Group",
    Person = "Person",
}

export interface ReleaseListResult {
    "type-id": string;
    name: string;
    isnis: string[];
    area: Area;
    "gender-id": null;
    "release-groups": ReleaseGroup[];
    "begin-area": Area;
    ipis: any[];
    "life-span": LifeSpan;
    gender: null;
    disambiguation: string;
    "end-area": null;
    id: string;
    end_area: null;
    type: string;
    "sort-name": string;
    country: string;
    begin_area: Area;
}

export interface ReleaseGroup {
    disambiguation: string;
    title: string;
    id: string;
    "first-release-date": string;
    "secondary-type-ids": string[];
    "secondary-types": SecondaryType[];
    "primary-type-id": string;
    "primary-type": PrimaryType;
}

export enum PrimaryType {
    Album = "Album",
}

export enum SecondaryType {
    Compilation = "Compilation",
}
