import {Animal} from "./Animal";
import {Edible} from "./Edible";

export class Chicken  extends Animal implements Edible{
    makeSound(): string {
        return "Meo";
    }
    howToEat(): string {
        return 'hap xa';
    }
}