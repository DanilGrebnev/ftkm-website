/*
Высчитывает высоту блока с видео, 
отнимая высоту header от высотка рабочей области экрана пользователя
*/
class HeightHelper {
    private _height: number

    constructor() {
        this._height = 0
    }

    public set height(number: number) {
        try {
            if (Number.isFinite(number)) {
                this._height = window.innerHeight - number
            } else {
                throw new Error('Ошибка. Свойство Heigth может быть только числом')
            }
        } catch (err) {
            console.error(err)
        }
    }

    public get height(): number {
        return this._height
    }
}

export const HeightCalcHelper = new HeightHelper()
