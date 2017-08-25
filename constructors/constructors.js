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

 class npc {
    constructor(options) {
        this.hp = options.hp;
        this.strength = options.strength;
        this.speed = options.speed;
        this.health = options.health;
        
    }
/*******************************************/
 }

 class humanoid extends npc {
    constructor (options){
        super(options);
        this.weapon = options.weapons;
        this.armor = options.armor;
    }

 }

 class human extends humanoid {
     constructor (options) {
        super(options);
        this.height = options.height;

     }
    
 }
 class soldier extends human {
     constructor (options) {
        super(options);

     }

 }
 class peasant extends human {
     constructor (options) {
         super(options);


     }

 }

 class bandit extends human {
     constructor (options) {
         super(options);

     }

 }
 /*******************************************/
 class elf extends humanoid {
    constructor (options) {
        super(options);
    }
 }

/*******************************************/
 class orc extends humanoid {
    constructor (options) {
        super(options);
    }
 }
/*******************************************/
 class animal extends npc {
    constructor(options) {
        super(options);
        this.damage = options.damage;
        
    }

 }

 class bear extends animal {
    constructor (options) {
        super(options);
    }
 }
 class wolf extends animal {
    constructor (options) {
        super(options);
    }
 }
 /*******************************************/
 class plant extends npc {
    constructor (options) {
        super(options);
    }
 }
 class fleshEatingDaisy extends plant {
    constructor (options) {
        super(options);
    }
 }
 /*******************************************/