import { INewsStore } from '@interfaces/News'

type TAction = {
    payload: any
    type: string
}

class NewsServices<S extends INewsStore> {
    setInputData(state: S, action: TAction) {
        const name = action.payload.name as 'title' | 'body' | 'imgName'

        state.editNews[name] = action.payload.value
    }

    clearState(state: S) {
        state.news = []
    }

    resetSkip(state: S) {
        state.skip = 0
    }
}

export const NewsServicesActions = new NewsServices()
