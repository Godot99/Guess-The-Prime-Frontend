export class Tile {
    x: number;
    y: number;
    styles: ITileStyle;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.styles = { backgroundColor: "#6C6F93" };
    }
}

export interface ITileStyle {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    backgroundColor?: string;
    backgroundImage?: string;
    tranform?: string;
}

export class NumberTile extends Tile {
    numberToShow: string
    isPrime: boolean

    constructor(x: number, y: number, numberToShow: string, isPrime: boolean) {
        super(x, y)
        this.numberToShow = numberToShow
        this.isPrime = isPrime
    }
}

export class Player extends Tile {
    constructor(x: number, y: number) {
        super(x, y)
        this.styles.backgroundColor = "#F43E5C"
    }
}