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
        this.hp = options.hp;
        this.strength = options.strength;
        this.agility = options.agility;
        this.intellect = options.intellect;
     }
}
class Humanoid extends NPC {
    constructor(options) {
        super(options);

    }
}
class Animal extends NPC {
    constructor(options) {
        super(options);
    }
}
class Plant extends NPC {
    constructor(options) {
        super(options);
    }
}
class Human extends Humanoid {
    constructor(options) {
        super(options);
        this.name = options.name;
        this.hairColor = options.hairColor;
        this.skinColor = options.skinColor;
        this.facialHair = options.facialHair;
        this.height = options.height;
    }
}
class Elf extends Humanoid {
    constructor(options) {
        super(options);
        this.name = options.name;
        this.hairColor = options.hairColor;
        this.skinColor = options.skinColor;
        this.height = options.height;
    }
}
class Orc extends Humanoid {
    constructor(options) {
        super(options);
        this.name = options.name;
        this.hairColor = options.hairColor;
        this.skinColor = options.skinColor;
        this.scars = options.scars;
        this.facialHair = options.facialHair;
        this.height = options.height;
    }
}
class Bear extends Animal {
    constructor(options) {
        super(options);
        this.typeOfBear = options.typeOfBear;
        this.size = options.size;
        this.ferocity = options.ferocity;
    }
    
} 
class Wolf extends Animal {
    constructor(options) {
        super(options);
        this.typeOfWolf = options.typeOfWolf;
        this.size = options.size;
        this.ferocity = options.ferocity;

    }
}
class FleshEatingdaisy extends Plant {
    constructor(options) {
        super(options);
        this.size = options.size;
        this.color = options.color;
    }
}
class Solider extends Human {
    constructor(options) {
        super(options);
        this.tacticalMind = options.tacticalMind;
        this.weaponMastery = options.weaponMastery;
        this.willToLive = options.willToLive;
    }
}
class Peasant extends Human {
    constructor(options) {
        super(options);
        this.workEthic = options.workEthic;
        this.barteringSkill = options.barteringSkill;
        this.woodWorking = options.woodWorking;
        this.fishing = options.fishing;
        this.hunting = options.hunting;
        this.blacksmithing = options.blacksmithing;
    }
}
class Bandit extends Human {
    constructor(options) {
        super(options);
        this.guile = options.guile;
        this.archery = options.archery;
        this.speed = options.speed;
        this.pickPocket = options.pickPocket;
        this.traps = options.traps;
        this.morality = options.morality;
    }
}