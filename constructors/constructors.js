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
  constructor(stats) {
    this.hp = stats.hp;
    this.strength = stats.strength;
    this.speed = stats.speed;
    this.luck = stats.luck;
    this.dexterity = stats.dexterity;
    this.defense = stats.defense;
  }
}

class Humanoid extends NPC {
  constructor(stats) {
    super(stats);
    this.weapon = stats.weapon;
    this.armor = stats.armor;
    this.inventory = stats.inventory;
  }
}

class Human extends Humanoid {
  constructor(stats) {
    super(stats);
    this.defenseBoost = stats.defense + 25;
  }
}

class Soldier extends Human {
  constructor(stats) {
    super(stats);
  }
}

class Peasant extends Human {
  constructor(stats) {
    super(stats);
  }
}

class Bandit extends Human {
  constructor(stats) {
    super(stats);
  }
}

class Elf extends Humanoid {
  constructor(stats) {
    super(stats);
    this.dexterityBoost = stats.dexterity + 25;
  }
}

class Orc extends Humanoid {
  constructor(stats) {
    super(stats);
    this.StrengthBoost = stats.strength + 25;
  }
}

class Animal extends NPC {
  constructor(stats) {
    super(stats);
    this.hostility = stats.hostility;
  }
}

class Bear extends Animal {
  constructor(stats) {
    super(stats);
  }
}

class Wolf extends Animal {
  constructor(stats) {
    super(stats);
  }
}

class Plant extends NPC {
  constructor(stats) {
    super(stats);
    this.magicProperties = stats.magicProperties;
  }
}

class FleshEatingDaisy extends Plant {
  constructor(stats) {
    super(stats);
  }
}