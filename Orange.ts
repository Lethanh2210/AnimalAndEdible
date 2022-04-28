import {Fruit} from "./Fruit";
export class Orange implements Fruit{
    howToEat(): string {
        return "wash and cut and eat";
    }
}