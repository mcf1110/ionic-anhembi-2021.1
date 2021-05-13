import { Area, LifeSpan } from "./ArtistSearchResult";

export interface ArtistReleasesResult {
    name: string;
    "gender-id": null;
    end_area: null;
    "end-area": null;
    country: string;
    ipis: any[];
    begin_area: Area;
    "begin-area": Area;
    "sort-name": string;
    "life-span": LifeSpan;
    "type-id": string;
    disambiguation: string;
    gender: null;
    id: string;
    "release-groups": ReleaseGroup[];
    isnis: string[];
    area: Area;
    type: string;
}

export interface ReleaseGroup {
    title: string;
    "secondary-type-ids": string[];
    "primary-type-id": string;
    "secondary-types": string[];
    "first-release-date": string;
    disambiguation: string;
    id: string;
    "primary-type": string;
}
