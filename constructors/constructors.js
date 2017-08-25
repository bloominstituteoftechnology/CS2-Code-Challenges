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

 /* create initial NPC class
 each class than extends the proper class
 use super to bring over the attributes from the previous class
 pass in arguements
 */
 class NPC {
     constructor(hp, strength, speed) {
         this.hp = hp;
         this.strength = strength;
         this.speed = speed;
     }
 }
 class Humanoid extends NPC {
     constructor(hp, strength, speed, swordsmanship, bowSkills) {
       super(hp, strength, speed);
       this.swordmanship = swordsmanship;
       this.bowSkills = bowSkills
     }
 }
 class Animal extends NPC {
     constructor(hp, strength, speed) {
       super(hp, strength, speed);
     }
 }
 class Plant extends NPC {
     constructor(hp, strength, speed) {
       super(hp, strength, speed);
     }
 }
class Human extends Humanoid {
    constructor(swordmanship, hp, strength) {
      super(hp || 8, strength || 5, 3, 7, 4);
      this.swordmanship = swordmanship || 5;
    }
}
class Elf extends Humanoid {
    constructor() {
      super(7, 4, 5, 3, 9);
      this.swordmanship = 5;
    }
}
class Orc extends Humanoid {
    constructor() {
      super(9, 9, 2, 3, 1);
      this.swordmanship = 5;
    }
}
class Bear extends Animal {
  constructor() {
    super(10, 8, 3);
  }
}
class Wolf extends Animal {
  constructor() {
    super(3, 3, 8);
  }
}
class FleshEatingDaisy extends Plant {
  constructor() {
    super(10, 10, 10);
    this.hunger = 10;
    this.size = 1;
  }
  playerNearby() {
    this.size = 10;
  }
}
//The playernearby method can be used to increase the size of the daisy when a player enters within a certain range
class Soldier extends Human {
  constructor() {
    super(8, 7, 7);
    this.defense = 6;
  }
}
class Peasant extends Human {
  constructor() {
    super(3, 2, 1);
  }
}
class Bandit extends Human {
  constructor() {
    super(3, 3, 3);
    this.thiefery = 8;
  }
}