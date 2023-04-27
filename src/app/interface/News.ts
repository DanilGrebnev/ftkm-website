export interface INewsItem<S = string, N = number> {
    _id: S
    title: S
    description: S
    body: S
    createdDay: N
    createdMonth: N
    createdYear: N
    updatedAt?: S
    createdAt?: S
    imgUrl?: S
}

export interface INewsStore {
    loading: true | false
    error: true | false
    news: INewsItem[]
    documentsCount: number
}
