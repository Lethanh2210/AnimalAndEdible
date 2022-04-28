import {Edible} from "./Edible";
export class Fruit implements Edible{
    howToEat(): string {
        return "wash and eat directly"
    }
}