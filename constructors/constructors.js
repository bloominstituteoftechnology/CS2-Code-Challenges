/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */ 
class NPC {
    constructor(options) {
        this.Humanoid = options.Humanoid;
        this.Animal = options.Animal;
        this.plant = options.plant;
    } 
    speak(str) {
        const talk = (str) => {
            console.log(str);
        }
        return talk; 
    }
    Attack(num) {
        const swing = Math.floor(num * 100);
        console.log(`${swing} attack dmg!!`);
    }
    animalSpeak(str) {
        return this.Animal.speak(str);
    }
    plantNothing() {
        return this.plant.doNothing;
    }
}
//NPC class 


class Humanoid {
    constructor(options, name) {
        super(options);
        this.orc = options.orc;
        this.elf = options.elf; 
        this.Human = options.Human; 
        this.name = options.name; 
    } 

}