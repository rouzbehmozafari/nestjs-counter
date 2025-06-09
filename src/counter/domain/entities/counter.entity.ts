export class Counter {
    constructor(private _value: number = 0) {}

    get value(): number {
        return this._value
    }

    increment(): void {
        this._value++
    }
}