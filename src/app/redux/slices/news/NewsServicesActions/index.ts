import { INewsStore } from '@interfaces/News'

type TAction = {
    payload: any
    type: string
}

class NewsServices<S extends INewsStore> {
    setInputData(state: S, action: TAction) {
        const name = action.payload.name as 'title' | 'body' | 'imgName'

        state.newsFields[name] = action.payload.value
    }

    clearState(state: S) {
        state.news = []
    }

    closeModal(state: S) {
        state.showNewsResponseModal = false
    }

    clearNewsFields(state: S) {
        state.newsFields = {
            title: '',
            body: '',
            imgName: '',
        }
    }
}

export const NewsServicesActions = new NewsServices()
