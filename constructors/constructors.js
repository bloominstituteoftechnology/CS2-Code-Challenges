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
 * This is how you would structure the game objectsme in an actual game
 * application in Unity or another similar framework.
 */

class NPC {
  constructor(name) {
    this.alive = true;
    this.name = name;
  }
  attack(target) {
    console.log(`${this.name} attacks ${target}`);
  }
  describe() {
    if (this.alive) console.log(`${this.name} is alive`);
    else console.log(`${this.name} is dead....`);
  }
  /*get name() {
    return this.name;
  }*/
}

class Humanoid extends NPC {
  constructor(name) {
    super();
  }
}
class Animal extends NPC {

}
class Plant extends NPC {

}
class Elf extends Humanoid {
}

class Human extends Humanoid {

}
class Orc extends Humanoid {

}
class Peasant extends Humanoid {

}
class Bandit extends Humanoid {

}
class Soldier extends Humanoid {

}
class FleshEatingDaisy extends Plant {

}
class Wolf extends Animal {

}
class Bear extends Animal {

}

const me = new Humanoid('Matt');
const me2 = new Elf('Lego');
const me3 = new NPC('test');
me3.describe();
me.attack('nic');
me.describe();
me.name;

//console.log(me2.name;)