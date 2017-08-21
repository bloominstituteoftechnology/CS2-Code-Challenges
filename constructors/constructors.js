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
    constructor() {
        this.humanoid = [];
        this.animal = [];
        this.plant = [];
    }
    humanoidClass(selectClass) {
        const humanoidClass = [`human`, 'Elf', 'Orc'];
        let selectedHumanClass = humanoidClass[selectClass];
        if (selectedHumanClass === `human`) {
            class Stats {
                constructor() {
                    this.hp = 125;
                    this.stregnth = 2;
                    this.agility = 3;
                    this.mana = 5;
            }
        }
        const stats = new Stats();
            this.humanoid.push(selectedHumanClass, new Stats);
        }
        if (selectedHumanClass === 'Elf') {
            class Stats {
                constructor() {
                    this.hp = 125;
                    this.stregnth = 2;
                    this.agility = 3;
                    this.mana = 5;
                }
            }
            this.humanoid.push(selectedHumanClass, new Stats);
        }
        if (selectedHumanClass === 'Orc') {
            class Stats {
                constructor() {
                    this.hp = 200;
                    this.strength = 5;
                    this.agility = 4;
                    this.mana = 0;
                }
            }
            this.humanoid.push(selectedHumanClass, new Stats);
        }
    }
    animalClass(selectClass) {
        const animalClass = ['Bear', 'Wolf'];
        let selectedAnimalClass = animalCLass[selectClass];
        if (selectedAnimalClass === 'Bear') {
             class Stats {
                 constructor() {
                     this.hp = 1000;
                     this.strength = 6;
                     this.agility = 4;
                     this.mana = 0;
                }
            }
            this.animal.push(selectedAnimalClass, new Stats);
        }
    }
     plantClass(selectClass) {
         const plantClass = ['Flesh Eating Daisy'];
         this.animal.push(plantClass[selectClass]);
    }
}

const npc = new NPC();
npc.humanoidClass(0);
//npc.humanoidClass(1);
//npc.humanoidClass(2);
console.log(npc.humanoid);

