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
 * this.value = [Humanoid, Animal, Plant];
  this.Humanoid = [Human, Elf, Orc];
  this.Animal =[Bear, Wolf];
  this.Plant = [FleshEatingDaisy];
 */

 class NPC {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  class Humanoid {
    constructor(value) {
      this.value = value;
      this.children = [Human, Elf, Orc];
    }
  }
  class Animal {
    constructor(value) {
      this.value = value;
      this.children = [Bear, Wolf];
    }
  }
  class Plant {
    constructor(value) {
      this.value = value;
      this.children = [FleshEatingDaisy];
    }
  }
  class Human {
    constructor(value) {
      this.value = value;
      this.children = [Soldier, Peasant, Bandit];
    }
  }


 } // end of class NPC