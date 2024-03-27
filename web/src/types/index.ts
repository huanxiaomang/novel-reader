export interface SerializedBookData {
    name: string,
    data: (Chapter | Roll)[]
}

export interface Roll {
    isRoll: boolean,
    title: string
}


export interface Chapter {
    title: string,
    content: string[]
}

