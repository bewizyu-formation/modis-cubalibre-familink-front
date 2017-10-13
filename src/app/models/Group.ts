export class Group {
    private _name: string;

    constructor(name?: string, owner?: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        console.log('SET GROUP NAME', value);
        this._name = value;
    }
}
