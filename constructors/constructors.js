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
    constructor (hp, strength, speed, intelligence, isFriendly, build, attackType, fight) {
        this.hp = hp;
        this.strength = strength;
        this.speed = speed;
        this.intelligence = intelligence;
        this.isFriendly = isFriendly;
        this.build = build;
        this.attackType = attackType;
        this.fight = fight;
    }
    attack(enemy) {
        enemy.hp -= (Math.floor(Math.random() * 30));
        enemy = enemy.toUpperCase();
        console.log(`${enemy}'s hp is now at ${enemy.hp}!`);
    }
 }

 class Humanoid extends NPC {
    constructor (roboOrBio, speaksEnglish, speaksOther, faveWeapon) {
        this.roboOrBio = roboOrBio;
        this.speaksEnglish = speaksEnglish;
        this.speaksOther = speaksOther;
        this.faveWeapon = faveWeapon;
    }
 }

class Animal extends NPC {
    constructor (hasHair, isOmnivore, numLegs, hasTail) {
        this.hasHair = hasHair;
        this.isOmnivore = isOmnivore;
        this.numLegs = numLegs;
        this.hasTail = hasTail;
    }
}

class Plant extends NPC {
    constructor(isPoisonous, isPretty, isTasty, color) {
        this.isPoisonous = isPoisonous;
        this.isPretty = isPretty;
        this.isTasty = isTasty;
        this.color = color;
    }
}

class Human extends Humanoid {
    constructor (isMultilingual, isMarried, birthCity) {
        this.isHuman = true;
        this.isMultilingual = isMultilingual;
        this.isMarried = isMarried;
        this.birthCity = birthCity;
    }
}

class Elf extends Humanoid {
    constructor (earType, height, houseStyle) {
        this.earType = earType;
        this.height = height;
        this.houseStyle = houseStyle;
    }
}

class Orc extends Humanoid {
    constructor (naughtyOrNice, fightingStyle) {
        this.naughtyOrNice = naughtyOrNice;
        this.fightingStyle = fightingStyle;
    }
}

class Bear extends Animal {
    constructor (wildOrTamed, cubOrMama) {
        this.wildOrTamed = wildOrTamed;
        this.cubOrMama = cubOrMama;
    }
}

class Wolf extends Animal {
    constructor (howlsAtTheMoon) {
        this.hasFangs = true;
        this.howlsAtTheMoon = howlsAtTheMoon;
    }
}

class FleshEatingDaisy extends Plant {
    constructor (name) {
        this.isPoisonous = true;
        this.isHorrible = true;
        this.sucks = true;
        this.worstFear = 'Roundup';
        this.name = name;
        if (this.name !== 'Tulip') {
            this.name = 'Tulip';
        }
    }
}

class Soldier extends Human {
    constructor (faveGun, camoColor) {
        this.isAwesome = true;
        this.faveGun = faveGun;
        this.camoColor = camoColor;
    }
}

class Peasant extends Soldier {
    constructor (isHungry, isLoyal) {
        this.isHungry = isHungry;
        this.isLoyal = isLoyal;
    }
}

class Bandit extends Human {
    constructor () {
        this.thief = true;
    }
    steal() {
        console.log('The bandit robbed you and got away!');
    }
}
