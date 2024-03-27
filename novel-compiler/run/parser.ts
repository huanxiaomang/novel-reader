import { Chapter, Roll, SerializedBookData } from "../types";
const rollReg = /---(\D+)---/gi;
const chapterReg = /第(\d+)章：([\s\S]*?)(?=第\d+章：|$)/g;

type ParserContext = {
    result: SerializedBookData
}

function findRoll(topic: string, { result }: ParserContext) {
    const res = rollReg.exec(topic);
    if (res) {
        const roll: Roll = {
            isRoll: true,
            title: res[1]
        }
        res && result.data.push(roll);
    }
}

function findChapter(topic: string, { result }: ParserContext) {
    let texts = topic.split('\r\n')
    texts = texts.filter(text => text.trim().length != 0)
    texts = texts.map(text => text.trim())
    texts.forEach((text) => {
        const res1 = chapterReg.exec(text);
        if (res1) {
            const chapterName = res1[0];
            const str = topic.split(chapterName)[1];


            const lines = str.split('\r\n').filter(line => line.trim().length != 0).map((line) => line.trim());
            const chapter: Chapter = {
                title: chapterName,
                content: [...lines]
            }

            result.data.push(chapter);


        }

    });
}

export function parser(book: string): SerializedBookData {
    const topics = book.split('------------');

    const topic = topics.shift()!;
    const title = topic.split('\r\n')[0];
    const result: SerializedBookData = {
        name: title,
        data: []
    };

    const context = {
        result: result
    }

    for (const topic of topics) {

        findRoll(topic, context);
        findChapter(topic, context);

    }
    return result;

}