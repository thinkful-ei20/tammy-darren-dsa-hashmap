const HashMap = require('./hashmap');

let lor = new HashMap();
lor.set("Hobbit","Bilbo");
lor.set("Hobbit","Frodo");
lor.set("Wizard","Gandalf");
lor.set("Human","Aragorn");
lor.set("Elf","Legolas");
lor.set("Maiar","The Necromancer");
lor.set("Maiar","Sauron");
// lor.set("RingBearer","Gollum");
// lor.set("LadyOfLight","Galadriel");
// lor.set("HalfElven","Arwen");
// lor.set("Ent","Treebeard");
// console.log(lor._slots.length);

// console.log(lor);

console.log(lor.get('Maiar'));