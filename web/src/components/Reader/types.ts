import { SerializedBookData } from "@/types";

export interface ReaderOptions {
    book: SerializedBookData;
    currentChapter: number;
    options: {
        lineHeight: number;
        fontFamily: string;
        backgroundColor: string;
        fontColor: string;
    }
}