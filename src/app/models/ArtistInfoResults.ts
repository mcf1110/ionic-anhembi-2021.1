import { Area, LifeSpan } from "./ArtistSearchResults";

export interface ArtistInfoResults {
    "end-area": null;
    begin_area: Area;
    area: Area;
    "life-span": LifeSpan;
    country: string;
    "begin-area": Area;
    "sort-name": string;
    ipis: string[];
    id: string;
    "gender-id": string;
    type: string;
    name: string;
    isnis: string[];
    "release-groups": ReleaseGroup[];
    end_area: null;
    "type-id": string;
    gender: string;
    disambiguation: string;
}

export interface ReleaseGroup {
    "first-release-date": string;
    "secondary-type-ids": string[];
    "primary-type-id": string;
    id: string;
    disambiguation: string;
    "primary-type": PrimaryType;
    title: string;
    "secondary-types": string[];
}

export enum PrimaryType {
    Album = "Album",
    Single = "Single",
}
