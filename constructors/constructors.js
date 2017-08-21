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
 * This class will probably include general attributes like hp, str, speed, etc.
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
    this.con = options.con;
    this.str = options.str;
    this.dex = options.dex;
    this.int = options.int;
    this.wis = options.wis;
    this.cha = options.cha;
  }
}

// Humanoid
// ↳ Human 
//   ↳ Fighter → Thief → Wizard
// ↳ Elf 
//   ↳ Ranger → Rogue → Druid
// ↳ Orc 
//   ↳ Barbarian → Warlock → Shaman
class Humanoid extends NPC {
  constructor(options) {
    super(options);
  }
}

class Human extends Humanoid {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
}

class Fighter extends Human {
  constructor(options) {
    super(options);
  }
}

class Thief extends Human {
  constructor(options) {
    super(options);
  }
}

class Wizard extends Human {
  constructor(options) {
    super(options);
    this.abilities = ['Magic Missile', 'Shock Pulse', 'Spectral Blade', 'Electrocute'];
  }
}
class Elf extends NPC {
  constructor(options) {
    super(options);
  }
}

class Ranger extends Elf {
  constructor(options) {
    super(options);
  }
}

class Rogue extends Elf {
  constructor(options) {
    super(options);
  }
}

class Druid extends Elf {
  constructor(options) {
    super(options);
  }
}

class Orc extends NPC {
  constructor(options) {
    super(options);
  }
}

class Barbarian extends Orc {
  constructor(options) {
    super(options);
  }
}

class Warlock extends Orc {
  constructor(options) {
    super(options);
  }
}

class Shaman extends Orc {
  constructor(options) {
    super(options);
  }
}
// Animal
// ↳ Tiny 
//   ↳ Rat → Lizard → Hawk
// ↳ Large 
//   ↳ Brown Bear → Dire Wolf → Horse
// ↳ Huge 
//   ↳ Giant Octopus → Nemean Lion → Roc
class Animal extends NPC {
  constructor(options) {
    super(options);
    }
  }

// Monster
// ↳ Dragon
//   ↳ Adult Dragon → Wyrm → Faerie Dragon
// ↳ Giant
//   ↳ Ogre → Ettin → Cyclops
// ↳ Undead 
//   ↳ Lich → Zombie → Ghoul
class Monster extends NPC {
  constructor(options) {
    super(options);
    }
  }

var frank = new Wizard({ name: 'Frank', con: 4, str: 3, dex: 3, int: 10, wis: 10, cha: 8 });
console.log(frank);