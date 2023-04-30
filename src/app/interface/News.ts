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
    imgUrl?: S
}

export interface INewsStore {
    loading: true | false
    error: true | false
    news: INewsItem[]
    documentsCount: number
}
