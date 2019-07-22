export class Tile {
    x: number;
    y: number;
    styles: ITileStyle;
    innerText?: number
    hasVisited = false

    constructor(x: number, y: number, innerText = null) {
        this.x = x;
        this.y = y;
        this.styles = { backgroundColor: "#bfcde6" };
        this.innerText = innerText;
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
        this.styles.backgroundColor = "#2c2b2a"
    }
}