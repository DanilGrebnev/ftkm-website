import { INewsStore } from '@interfaces/News'

type TAction = {
    payload: any
    type: string
}

class NewsServices<S extends INewsStore> {
    clearState(state: S, action: TAction) {
        state.news = []
        console.log(action.payload)
    }

    resetSkip(state: S) {
        state.skip = 0
    }
}

export const NewsServicesActions = new NewsServices()
