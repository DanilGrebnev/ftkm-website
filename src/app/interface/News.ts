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
    error: boolean
    news: INewsItem[]
    documentsCount: number
    searchMode: boolean
    skip: number
    limit: number
}
