/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject{
    constructor(arg) {
        this.createdAt = arg.createdAt;
        this.name = arg.name;
        this.dimensions = arg.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(arg) {
        super(arg);
        this.healthPoints = arg.healthPoints;
        this.currentHealth = this.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }

    lostHealth(damage) {
        if (damage >= this.currentHealth) {
            this.destroy();
        }
    }
}


/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats{
    constructor(arg) {
        super(arg);
        this.team = arg.team;
        this.weapons = arg.weapons;
        this.language = arg.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
    constructor(arg) {
        super(arg);
        this.power = arg.power;
        this.weapon = arg.weapon;
        
    }

    attack(enemy) {
        console.log(`${this.name} uses ${this.weapon} to finish off the king.`);
        enemy.lostHealth(this.power * 10);
    }
}

class Villain extends Humanoid {
    constructor(arg) {
        super(arg);
        this.power = arg.power;
        this.weapon = arg.weapon;
    }

    attack(enemy) {
        console.log(`${this.name} uses ${this.weapon} to tries to slay the hero.`);
        enemy.lostHealth(this.power);
    }
}

const theHero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 6,
    height: 8
  },
  healthPoints: 350,
  power: 35,
  name: "Sir Lancelot",
  team: "The Knights of the Round Table",
  weapon: "The Sword of Camelot",
  language: "Middle English"
});

const theSlayerOfDreams = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 6,
    height: 9
  },
  healthPoints: 225,
  power: 15,
  name: "The Fisher King",
  team: "Grail Kings",
  weapon: "Large Sword",
  language: "Middle English"
});

console.log(`${theHero.name} sieges upon ${theSlayerOfDreams.name}.`);
console.log(
  `${theHero.name} gets some quick strikes in with ${theHero.weapon} causing ${theHero.power} damage to ${theSlayerOfDreams.name}.`
);
console.log(
  `${theSlayerOfDreams.name} responds with some powerful blows himself to ${theHero.name}.`
);
console.log(`${theHero.team} watches on with a mixture of concern and pride.`);
console.log(
  `After a back and forth struggle ${theHero.name} delivers a devastating blow to ${theSlayerOfDreams.name}.`
);
theHero.attack(theSlayerOfDreams);
console.log(theSlayerOfDreams.destroy());
