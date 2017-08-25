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
  constructor(hp, strength, speed){
    this.hp = hp;
    this.strength = strength;
    this.speed = speed;
  }
}

class Humanoid extends NPC {
  constructor(hp, strength, speed){
    super(hp, strength, speed);
  }
}

class Animal extends NPC {
  constructor(hp, strength, speed){
    super(hp, strength, speed);
  }
}

class Plant extends NPC {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class Humanoid extends Human {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class Elf extends Humanoid {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class Orc extends Humanoid {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class Bear extends Animal {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class Wolf extends Animal {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}

class FleshEatingDaisy extends Plant {
  constructor(hp, strength, speed) {
    super(hp, strength, speed);
  }
}
