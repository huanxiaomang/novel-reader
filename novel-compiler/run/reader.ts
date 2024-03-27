import { SerializedBookData } from "../types";
import { myReadFile, myWriteFile, toJSON } from "../utils/file";
import { parser } from "./parser";

async function reader() {
    const book = await myReadFile('./lib/book.txt');
    if (!book) return;
    const data: SerializedBookData = parser(book);
    const json = toJSON(data);
    await myWriteFile('./lib/book.json', json);

}


reader();