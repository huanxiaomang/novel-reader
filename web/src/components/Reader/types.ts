import { SerializedBookData } from "@/types";

export interface ReaderOptions {
    book: SerializedBookData;
    currentPage: number;
    options: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
        backgroundColor: string;
        fontColor: string;
    }
}