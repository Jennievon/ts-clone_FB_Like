export class Like {
    constructor(private _likesCount: number, private _isSelected: boolean) { }


    public get likesCount(): number {
        return this._likesCount;
    }


    public get isSelected(): boolean {
        return this._isSelected;
    }

    onClick() {
        this._likesCount += (this.isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected
    }

}