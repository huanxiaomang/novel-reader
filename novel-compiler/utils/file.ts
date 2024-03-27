import { readFile, writeFile } from 'node:fs/promises';

export const myReadFile = async (path: string) => {
    try {
        const data = await readFile(path, 'utf-8');
        return data.toString();
    } catch (err) {
        console.log(err);
    }

}

export const myWriteFile = async (path: string, data: string) => {
    try {
        await writeFile(path, data, 'utf-8');
    } catch (err) {
        console.log(err);
    }
}

export const toJSON = (data: object): string => {
    return JSON.stringify(data, null, 2);
}