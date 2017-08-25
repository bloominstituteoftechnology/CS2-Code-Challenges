

/* 
* Design several classes and their relationships for an RPG videogame.
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
  constructor(attr) {
    this.hp = attr.hp;
    this.strength = attr.strength;
    this.speed= attr.speed;
    this.attack = attr.attack;
    this.defend = attr.defend;
  }
}

class Humanoid extends NPC {
  constructor(attr) {
    super(attr)
    // Humanoid Attributes
    this.weapon = attr.weapon;
  }
}

class Animal extends NPC {
  constructor(attr) {
    super(attr)
    // Animal Attributes
  }
}

class Plant extends NPC {
  constructor(attr) {
    super(attr)
    // Plant Attributes
  }
}

class Human extends Humanoid {
  constructor(attr) {
    super(attr)
    // Human Attributes
  }
}

class Elf extends Humanoid {
  constructor(attr) {
    super(attr)
    // Elf Attributes
  }
}

class Orc extends Humanoid {
  constructor(attr) {
    super(attr)
    // Orc Attributes
  }
}

class Bear extends Animal {
  constructor(attr) {
    super(attr)
    // Bear Attributes
  }
}

class Wolf extends Animal {
  constructor(attr) {
    super(attr)
    // Wolf Attributes
  }
}

class FleshEatingDaisy extends Plant {
  constructor(attr) {
    super(attr)
    // FleshEatingDaisy Attributes
  }
}

class Soldier extends Humanoid {
  constructor(attr) {
    super(attr)
    // Soldier Attributes
  }
}

class Peasant extends Humanoid {
  constructor(attr) {
    super(attr)
    // Peasant Attributes
  }
}

class Bandit extends Humanoid {
  constructor(attr) {
    super(attr)
    // Bandit Attributes
  }
}

const sl = new Soldier({hp: 100})

console.log(sl)