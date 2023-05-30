export interface INewsItem<S = string, N = number> {
    _id: S
    title: S
    body: S
    createdDay: N
    createdMonth: N
    createdYear: N
    createdDate: N
    updatedAt?: N
    createdAt?: N
    imgName?: S
}

export interface INewsStore {
    loading: boolean
    error: any
    news: INewsItem[]
    documentsCount: number
    fetchNews: boolean
    imgLoading: boolean
    showNewsResponseModal: boolean
    newsResponseModalContent: string
    newsFields: {
        title: string
        body: string
        imgName: string
    }
}

export interface INewsData {
    title: string
    body: string
    imgName: string
}

export interface INewsDataResponse {
    data: INewsData
}

export interface INewsEditInputs {
    onChange: (e: any) => void
}
