class HeightHelper {
    private height: number

    constructor() {
        this.height = 0
    }

    public setHeight(componentHeight: number): void {
        if (componentHeight) {
            this.height = window.innerHeight - componentHeight
        }
    }

    public getHeight(): number {
        return this.height
    }
}

export const HeightHelperHeight = new HeightHelper()
