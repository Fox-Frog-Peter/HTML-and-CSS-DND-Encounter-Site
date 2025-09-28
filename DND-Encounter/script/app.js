// --- Comprehensive Encounter Data ---
// Wild Magic Effects (1-100)
const wildMagic = {
  1: "A tankard falls from the sky a knocks you unconscious.",
  2: "You cast Fireball at 3rd level, centered on yourself.",
  3: "You turn into a pillar of salt for 6 seconds. You cannot take damage during that time.",
  4: "Gain disadvantage on your next roll.",
  5: "Gain advantage on your next roll.",
  6: "You cast light on an object you are carrying.",
  7: "You cast Cure Wounds at 3rd level, on yourself.",
  8: "You cast gentle repose in a 30 foot diameter sphere around you.",
  9: "Cast Chill Touch on a creature you can see within 30 feet of you.",
  10: "Gain 1d6 temporary hit points.",
  11: "(For the next day) You forget how to speak or read any languages you know and can only communicate in Under-common.",
  12: "A Borun Beast appears near you. (It attacks if you are hostile towards you, it naps if you are friendly.",
  13: "Your armor suddenly falls off of you.",
  14: "Your gain a point of exhaustion.",
  15: "Regain 1d4 levels worth of spells slots.",
  16: "Your current spell or ability activates opposite of your intent.",
  17: "A devil appears and asks for your help. Taking a spell slot or equivalent class or racial ability. They appear in 3 d4 days to repay (DMs discretion).",
  18: "A small mole wearing glasses burrows out from the ground beneath you. It curses at you.",
  19: "Your hair turns blue. If your hair is already blue, it falls out instead. It does not change back or grown back except naturally.",
  20: "Your armor (or clothing) is magically enchanted and turned into 'smoldering clothing'.",
  21: "You turn invisible for 1d4 hours.",
  22: "Any flowering plant within 100 feet of you blossoms immediately.",
  23: "A Dwarf magically appears near you, he starts a cook fire and makes dinner for your group.",
  24: "Spiders burst from your bag and leap away.",
  25: "Your skin turns green until your next long rest.",
  26: "You cast Darkness, centered on yourself.",
  27: "You cast Daylight, centered on yourself.",
  28: "A spring bubbles up from the ground at your feet - it tastes sweet and clean.",
  29: "A Willow tree magically grows into existence within an unoccupied space within 30 feet of you. It is 1 d10+10 ft. thick and 1 d10 + 30 feet tall.",
  30: "The scents and sounds of a party travel on the wind to your nose and ears.",
  31: "You cast the Spell Detect Magic as a free action.",
  32: "An arrow sails out of the distance and hits you in the shoulder. Once pulled from your body it turns into a bird an flies away.",
  33: "Your eyebrows transform into flowers.",
  34: "A friendly creature you can see gains 4d6 temporary HP. You gain a point of exhaustion.",
  35: "A Baobab tree magically grows into existence within an unoccupied space within 30 feet of you. It is 1 d10+10 ft. thick and 1 d100 + 30 feet tall.",
  36: "You cast zone of truth centered on yourself.",
  37: "For the next minute you can cast Fey Step as a bonus action. You can cast it a number of times equal to your player level.",
  38: "You cast invisibility on yourself.",
  39: "You grow incredibly hot, your skin is steaming.",
  40: "You cast the spell ice knife as a free action.",
  41: "A god you believe in appears before you in a vision and offers to impart knowledge to you. They il answer a single question.",
  42: "The cantrip Bonfire is cast 5 times, leading in a line away from you.",
  43: "You transform into a giant indestructible glowing mushroom for 1d4 minutes.",
  44: "A chained ghostly figure flickers into existence nearby and begs for your help. It vanishes with a wail.",
  45: "Ghostly shadows of humanoid shapes appear all around you, visible to anyone. They cannot be interacted with and pass through any non-stone objects around you.",
  46: "You cast the spell Enlarge on yourself.",
  47: "You cast the spell Reduce on yourself.",
  48: "You move into a realm of stars and mist for 1d4 rounds. The real world is visible to you as a ghostly image. Where you are when the time runs out, you reappear.",
  49: "You polymorph into a Paraceratherium.",
  50: "If you are holding a weapon, it turns into a snake with 1d4 hit points. After 1d6 rounds OR if it reduced to 0 HP, it reverts into its weapon form.",
  51: "You cast Thunderstep at 3rd level.",
  52: "A message comes to you psychically. A panicked message demanding payment for services rendered.",
  53: "You smell fresh strawberries. For 1 minute, everywhere you step, fresh strawberries grow.",
  54: "Your eyes turn a deep black for 1d4 weeks.",
  55: "If you are engaged in a battle, a group of centaurs come charging through, attack both sides equally. If you aren't in battle, the centaurs offer assistance/demand payment.",
  56: "You cast the spell Good-berry, in your mouth.",
  57: "Fairies appear around you, repeating words you have recently said, mocking you.",
  58: "A Raven attempts to land on your shoulder. If you let it, it casts death-ward on you. If you don't let it it curses at you.",
  59: "A gale force wind swirls around you. Anyone within 3d10 feet of you needs to make a dc 16 strength save or be thrown 10 feet an knocked prone.",
  60: "A small, 1 room house materializes around you.",
  61: "The next time you sleep, you dream of the future. You gain a point of inspiration.",
  62: "A cat comes near you an meows. If you follow it, it leads you to a coin pouch containing 3d6 gold coins.",
  63: "A dog runs up to you and whimpers. If you give it food of some kind it throws up a greater healing potion.",
  64: "Clouds swirl above you and form into the face of someone from your past. It vanishes as soon as you notice it.",
  65: "You cast Faerie Fire, centered on yourself.",
  66: "You cast comprehend languages on yourself.",
  67: "You cast speak with animals on yourself.",
  68: "You cast dancing lights.",
  69: "Your next attack (before a long rest) deals an additional 1d8 poison damage.",
  70: "A shadowy figure appears near you. It is incorporeal and cannot be dispersed. It follows you and watched you for 1d12 hours.",
  71: "Four chickens appear around you and dash off in different directions. Blue, White, Green, and Gold. If you catch and cook any of the chickens, you gain the following bonuses: Blue: Regain 1 d4 worth of spell slots or class/racial abilities. White: Regain 2 d8 HP. Green: Until your next full rest, you have advantage on Int & Wis & Char saving throws. Gold: You vomit up 3 d10 gold coins.",
  72: "You grow devil horns. They fall off after a day or the next time you reach 0 hp, and you return to full health.",
  73: "For 1 minute you turn into glass. You are resistant to piercing and poison damage, and vulnerable to bludgeoning damage.",
  74: "You see a vision of a terrifying beast. You fall prone.",
  75: "Your clothing turns to metal.",
  76: "A goblin wearing fine attire appears next to you, he offers you a calling card. If you take the card he tips his hat and vanishes.(Card Text is DM discretion)",
  77: "Butterflies flutter around you.",
  78: "Plants within 15 feet of you extrude glowing spores. Anyone near the spores must make a DC 15 dexterity saving throw or take 3d6 poison damage.",
  79: "A bugbear claws his way out of the ground 15 feet from you and attack you. He is insensate.",
  80: "You magically displace 15 feet in a random direction.",
  81: "You immediately cast Leomund's Tiny Hut Centered on yourself.",
  82: "You sink into the ground up to your waist.",
  83: "You grow a tail, like that of a lion. If you already have a tail, the tail changes color and length, becoming brighter and longer.",
  84: "You fall asleep and cannot be woken for 1 minute. You sleep walk and attacks against you have dis-advantage.",
  85: "Water Pours out of your mouth for 24 hours. You cast underwater breathing on up to 6 willing creatures, but you cannot speak.",
  86: "All water within 30 feet of you becomes holy water.",
  87: "All food within 30 feet of you become poisoned.",
  88: "Your closest ally within 30 feet of you travels 30 feet in your direction. They keep moving until the 30 feet of movement is completed.",
  89: "You Tongues on yourself.",
  90: "Wings sprout from your back. Feather wings for good aligned creatures, bat wings for evil aligned creatures, faerie wings for unaligned creatures.",
  91: "You polymorph into an Owl.",
  92: "You cast invisibility on yourself.",
  93: "You cast feather fall on yourself.",
  94: "All plant matter within 15 feet of you immediately starts to decay.",
  95: "You glow with divine radiance. You next attack deals an additional 1d12 radiant damage.",
  96: "You cast disguise self on yourself. You look like the character nearest you.",
  97: "You grow tusks like that of an Orcs. They do not fall off or go away naturally. Add 1 d4 to your intimidation checks.",
  98: "You fall unconscious and fall prone. You immediately wake up. You have completed a full rest.",
  99: "You sneeze out 1d6 gold coins and take the same amount of bludgeoning damage.",
  100: "Womeck the traveler and offers a trade to you in a 4 minute ling time stop."
};

// Items
const items = {
  1: "weapon",
  2: "bag",
  3: "wand",
  4: "torch",
  5: "book",
  6: "orb",
  7: "lamp",
  8: "tinderbox",
  9: "potion",
  10: "scroll",
  11: "coin pouch",
  12: "armor",
  13: "clothing",
  14: "tools kit",
  15: "magic weapon or magic scroll"
};

// People/Professions
const people = {
  1: "Priest",
  2: "Guard",
  3: "Farmer",
  4: "Shop Owner",
  5: "Noble",
  6: "Wizard",
  7: "Knight",
  8: "Scholar",
  9: "Doctor",
  10: "Sailor",
  11: "Cook",
  12: "Miner",
  13: "Author",
  14: "Blacksmith",
  15: "Messenger"
};

// Buildings
const buildings = {
  1: "Religious Building",
  2: "Guard House",
  3: "Farmstead",
  4: "Shop",
  5: "Mansion",
  6: "Tower",
  7: "Manor",
  8: "Library",
  9: "Hospital",
  10: "Map & Chart Store",
  11: "Restaurant",
  12: "Workshop",
  13: "Bookstore",
  14: "Blacksmith",
  15: "Post Office"
};

// Species/Races
const species = {
  0: "Human", 1: "Human", 2: "Aasimar", 3: "Human", 4: "Human", 5: "Human", 6: "Human", 7: "Human", 8: "Human",
  9: "Dwarf", 10: "Dwarf", 11: "Dwarf", 12: "Dwarf", 13: "Dwarf",
  14: "Elf", 15: "Elf", 16: "Elf",
  17: "Triton", 18: "Triton", 19: "Triton", 20: "Triton",
  21: "Halfling", 22: "Halfling", 23: "Halfling",
  24: "Orc", 25: "Half-Orc", 26: "Half-Orc",
  27: "Duergar", 28: "Duergar",
  29: "Aarakocra", 30: "Aarakocra",
  31: "Tabaxi", 32: "Tabaxi", 40: "Tabaxi",
  33: "Tortle",
  34: "Tiefling", 35: "Tiefling",
  36: "Harengon", 37: "Harengon", 38: "Harengon",
  39: "Ratatosk",
  41: "Kenku",
  42: "Lizardfolk",
  43: "Red Dragonborn",
  44: "Satyr",
  45: "Water Genasi",
  46: "Felidarian",
  47: "Loxodon",
  48: "Earth Genasi",
  49: "Fire Genasi",
  50: "Air Genasi",
  51: "Gold Dragonborn",
  52: "White Dragonborn",
  53: "Blue Dragonborn",
  54: "Green Dragonborn",
  55: "Black Dragonborn",
  56: "Purple Dragonborn",
  57: "Minotaur",
  58: "Gnome",
  59: "Human"
};

// Combat Encounters by Biome and Challenge Rating
const encounters = {
  // Wild environments
  forest: { 
    0.125: "Bandit", 
    0.25: "Bandit", 
    0.5: "Bear", 
    1: "Sickly Troll", 
    2: "Sickly Troll", 
    4: "Treant", 
    7: "Giant Snake", 
    10: "Forest Guardian" 
  },
  tundra: { 
    0.5: "Polar Bear", 
    0.25: "Dire Wolf", 
    2.0: "Injured Juvenile White Drake", 
    4.0: "Ice Elemental", 
    7.0: "Ice Oni", 
    10.0: "Frost Giant" 
  },
  desert: { 
    0.25: "Awakened Cactus", 
    0.5: "Desert Mercenary", 
    2.0: "Juvenile Dune Worm", 
    4.0: "Desert Dragon", 
    7.0: "Sand Hydra", 
    10.0: "Sand Elemental" 
  },
  mountain: { 
    0.25: "Harpy", 
    0.5: "Dire Wolf", 
    2.0: "Hill Giant", 
    4.0: "Goliath", 
    7.0: "Stone Giant", 
    10.0: "Felidar" 
  },
  underground: { 
    0.25: "Kobold", 
    0.5: "Giant Lizard", 
    2.0: "Plague Bearer", 
    4.0: "Duergar Mercenary", 
    7.0: "Mind Flayer", 
    10.0: "Water Weird" 
  },
  grassland: { 
    0.25: "Bandit", 
    0.5: "Carnivorous Grassling", 
    2.0: "Faun", 
    4.0: "Adult Rock Mole", 
    7.0: "Thorn Giant", 
    10.0: "Roc" 
  },
  // Urban environments
  hamlet: { 
    0.25: "Bandit", 
    0.5: "Cultist", 
    2.0: "Gnoll", 
    4.0: "Manticore", 
    7.0: "Barbarian", 
    10.0: "Vampire" 
  },
  town: { 
    0.25: "Bandit", 
    0.5: "Grung", 
    2.0: "Injured Lesser Bone Devil", 
    4.0: "Guard", 
    7.0: "Umbrageist", 
    10.0: "Werewolf" 
  },
  city: { 
    0.25: "Thugs", 
    0.5: "Corrupt Priest", 
    2.0: "Zombie", 
    4.0: "Guard", 
    7.0: "Crime Boss", 
    10.0: "Succubus & Incubus" 
  },
  port: { 
    0.25: "Drunk Sailor", 
    0.5: "Smuggler", 
    2.0: "Pirate", 
    4.0: "Triton Raider", 
    7.0: "Water Elemental", 
    10.0: "Young Dragon Turtle" 
  }
};

// D&D 5e CR Table for monster stats
const crTable = {
  "0": { prof: "+2", ac: "10-13", hp: "1-3", toHit: "+0 to +2", dmg: "0-2", xp: 10 },
  "1/8": { prof: "+2", ac: "10-13", hp: "3-6", toHit: "+2 to +4", dmg: "2-4", xp: 25 },
  "1/4": { prof: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", dmg: "4-6", xp: 50 },
  "1/2": { prof: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", dmg: "6-8", xp: 100 },
  "1": { prof: "+2", ac: "12-15", hp: "15-30", toHit: "+3 to +5", dmg: "8-12", xp: 200 },
  "2": { prof: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", dmg: "12-15", xp: 450 },
  "4": { prof: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", dmg: "20-25", xp: 1100 },
  "7": { prof: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", dmg: "35-40", xp: 2900 },
  "10": { prof: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", dmg: "50-55", xp: 5900 }
};

// Generate ability score modifiers based on CR
function generateStats(cr) {
  let str, dex, con, int, wis, cha;

  if (cr <= 0.5) {
    str = 0; dex = +1; con = 0; int = -1; wis = 0; cha = -1;
  } else if (cr <= 2) {
    str = +2; dex = +1; con = +2; int = 0; wis = 0; cha = 0;
  } else if (cr <= 5) {
    str = +3; dex = +1; con = +3; int = +1; wis = +1; cha = +1;
  } else if (cr <= 10) {
    str = +4; dex = +2; con = +4; int = +2; wis = +2; cha = +2;
  } else {
    str = +6; dex = +3; con = +6; int = +3; wis = +3; cha = +4;
  }

  return { str, dex, con, int, wis, cha };
}

// Convert CR string to number for calculations
function crToNumber(crString) {
  if (crString === "1/8") return 0.125;
  if (crString === "1/4") return 0.25;
  if (crString === "1/2") return 0.5;
  return parseFloat(crString);
}

// Convert number to CR string for display
function numberToCr(num) {
  if (num === 0.125) return "1/8";
  if (num === 0.25) return "1/4";
  if (num === 0.5) return "1/2";
  return num.toString();
}

// Enhanced monster data with detailed stats
const monsters = [
  // Forest
  { name: "Bandit", biome: "Forest", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Scimitar Slash", "Crossbow Bolt"], description: "A desperate outlaw who survives on theft.", img: "../img/Bandit.png" },
  { name: "Bear", biome: "Forest", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Claw Attack", "Bite Attack", "Roar"], description: "A territorial predator of the forest.", img: "../img/Bear.png" },
  { name: "Sickly Troll", biome: "Forest", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Claw", "Bite", "Regeneration"], description: "A weakened troll, still dangerous but not at full strength.", img: "../img/Troll i.png" },
  { name: "Treant", biome: "Forest", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Slam", "Rock Throw", "Animate Trees"], description: "An ancient tree guardian of the forest.", img: "../img/Treant.png" },
  { name: "Giant Snake", biome: "Forest", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Constrict", "Bite", "Poison"], description: "A massive serpent that can crush its prey.", img: "../img/Giant snake.png" },
  { name: "Forest Guardian", biome: "Forest", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Nature's Wrath", "Tree Stride", "Command Plants"], description: "A powerful nature spirit that protects the forest.", img: "../img/Forest guardian.png" }
];

// Additional monsters to cover all encounters
const extraMonsters = [
  // Tundra
  { name: "Polar Bear", biome: "Tundra", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Maul", "Rend"], description: "A powerful white bear adapted to icy climates." },
  { name: "Dire Wolf", biome: "Tundra", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Pack Tactics", "Bite"], description: "A large wolf that hunts in coordinated packs." },
  { name: "Injured Juvenile White Drake", biome: "Tundra", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Frost Breath", "Claw"], description: "A young white drake nursing wounds, still dangerous." },
  { name: "Ice Elemental", biome: "Tundra", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Freezing Slam", "Ice Shard"], description: "A spirit of living frost and cutting wind." },
  { name: "Ice Oni", biome: "Tundra", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Cold Magic", "Cleave"], description: "A horned fiend wielding chilling magic and heavy steel." },
  { name: "Frost Giant", biome: "Tundra", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Greataxe", "Rock Throw"], description: "A towering giant from the frozen wastes." },

  // Desert
  { name: "Awakened Cactus", biome: "Desert", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Spines", "Prickly Grasp"], description: "A cactus animated by strange magic." },
  { name: "Desert Mercenary", biome: "Desert", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Scimitar", "Crossbow"], description: "A sellsword hardened by sun and sand." },
  { name: "Juvenile Dune Worm", biome: "Desert", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Burrow", "Sand Bite"], description: "A young sand-burrowing predator." },
  { name: "Desert Dragon", biome: "Desert", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Scouring Breath", "Wing Buffet"], description: "A drake that rides the heated winds." },
  { name: "Sand Hydra", biome: "Desert", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Multihead Bite", "Sand Spray"], description: "Many-headed serpent lurking beneath dunes." },
  { name: "Sand Elemental", biome: "Desert", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Suffocating Swirl", "Sandstorm"], description: "A raging storm given form by desert spirits." },

  // Mountain
  { name: "Harpy", biome: "Mountain", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Luring Song", "Claws"], description: "A winged predator with a haunting song." },
  { name: "Dire Wolf", biome: "Mountain", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Pack Tactics", "Bite"], description: "A large wolf that hunts in coordinated packs." },
  { name: "Hill Giant", biome: "Mountain", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Club Smash", "Rock Throw"], description: "A brutish giant that favors raw strength." },
  { name: "Goliath", biome: "Mountain", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Greatclub", "Stone Endurance"], description: "A towering warrior of the high peaks." },
  { name: "Stone Giant", biome: "Mountain", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Boulder Hurl", "Stone Fist"], description: "A reclusive giant sculptor and sentinel." },
  { name: "Felidar", biome: "Mountain", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Pounce", "Roaring Charge"], description: "A mythical feline guardian of the crags." },

  // Underground
  { name: "Kobold", biome: "Underground", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Pack Tactics", "Dagger"], description: "A cunning reptilian tunnel-dweller." },
  { name: "Giant Lizard", biome: "Underground", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Climb", "Bite"], description: "A massive reptile adapted to caverns." },
  { name: "Plague Bearer", biome: "Underground", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Toxic Cloud", "Claw"], description: "A diseased horror spreading corruption." },
  { name: "Duergar Mercenary", biome: "Underground", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Enlarge", "War Pick"], description: "A grim dwarf-for-hire from the deep." },
  { name: "Mind Flayer", biome: "Underground", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Mind Blast", "Tentacles"], description: "A psionic aberration that feeds on thoughts." },
  { name: "Water Weird", biome: "Underground", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Drowning Grasp", "Water Form"], description: "An elemental serpent of animate water." },

  // Grassland
  { name: "Bandit", biome: "Grassland", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Scimitar", "Crossbow"], description: "An outlaw roaming the open road." },
  { name: "Carnivorous Grassling", biome: "Grassland", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Ambush", "Bite"], description: "A camouflaged predator hiding among tall grass." },
  { name: "Faun", biome: "Grassland", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Pipes", "Shortbow"], description: "A capricious fey with a mischievous tune." },
  { name: "Adult Rock Mole", biome: "Grassland", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Burrow", "Stone Bite"], description: "A burrowing beast with rocky plates." },
  { name: "Thorn Giant", biome: "Grassland", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Thorn Volley", "Rend"], description: "A hulking plant-giant bristling with spines." },
  { name: "Roc", biome: "Grassland", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Snatch", "Beak & Talons"], description: "A colossal bird that can carry off livestock and wagons." },

  // Hamlet
  { name: "Bandit", biome: "Hamlet", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Scimitar", "Crossbow"], description: "A petty criminal prowling village lanes." },
  { name: "Cultist", biome: "Hamlet", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Dagger", "Dark Blessing"], description: "A fanatic serving a shadowy power." },
  { name: "Gnoll", biome: "Hamlet", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Glaive", "Rampage"], description: "A hyena-headed raider hungry for chaos." },
  { name: "Manticore", biome: "Hamlet", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Tail Spines", "Bite & Claws"], description: "A leonine monster with a barbed tail." },
  { name: "Barbarian", biome: "Hamlet", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Rage", "Reckless Attack"], description: "A ferocious warrior fighting with primal fury." },
  { name: "Vampire", biome: "Hamlet", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Charm", "Life Drain"], description: "A nocturnal predator with a thirst for blood." },

  // Town
  { name: "Bandit", biome: "Town", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Scimitar", "Crossbow"], description: "An outlaw lurking in back alleys." },
  { name: "Grung", biome: "Town", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Poisoned Darts", "Leap"], description: "A toxic tree frog humanoid far from its jungle home." },
  { name: "Injured Lesser Bone Devil", biome: "Town", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Sting", "Spined Lash"], description: "A wounded fiend still bristling with malice." },
  { name: "Guard", biome: "Town", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Spear", "Shield Bash"], description: "A trained defender of the town watch." },
  { name: "Umbrageist", biome: "Town", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Shadow Claw", "Phase"], description: "A phantasmal terror woven from living gloom." },
  { name: "Werewolf", biome: "Town", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Claws", "Regeneration"], description: "A cursed shapeshifter driven by the moon." },

  // City
  { name: "Thugs", biome: "City", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Mace", "Pack Beatdown"], description: "Street toughs who overwhelm with numbers." },
  { name: "Corrupt Priest", biome: "City", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Dark Prayer", "Mace"], description: "A faith leader who has fallen to vice." },
  { name: "Zombie", biome: "City", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Undead Fortitude", "Slam"], description: "A mindless corpse animated by foul magic." },
  { name: "Guard", biome: "City", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Spear", "Shield Bash"], description: "A disciplined city watch soldier." },
  { name: "Crime Boss", biome: "City", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Command Thugs", "Twin Blades"], description: "A ruthless leader of the underworld." },
  { name: "Succubus & Incubus", biome: "City", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Charm", "Draining Kiss"], description: "Tempters who feed on life-force and desire." },

  // Port
  { name: "Drunk Sailor", biome: "Port", cr: "1/4", profBonus: "+2", ac: "11-14", hp: "6-10", toHit: "+2 to +4", damage: "4-6", xp: 50, abilities: ["Bottle Smash", "Swinging Hook"], description: "A rowdy mariner spoiling for a fight." },
  { name: "Smuggler", biome: "Port", cr: "1/2", profBonus: "+2", ac: "11-14", hp: "10-15", toHit: "+2 to +4", damage: "6-8", xp: 100, abilities: ["Sneak Attack", "Dagger"], description: "A sly criminal moving illicit cargo." },
  { name: "Pirate", biome: "Port", cr: "2", profBonus: "+2", ac: "12-15", hp: "30-45", toHit: "+3 to +5", damage: "12-15", xp: 450, abilities: ["Cutlass", "Pistol Shot"], description: "A sea rogue with a taste for plunder." },
  { name: "Triton Raider", biome: "Port", cr: "4", profBonus: "+2", ac: "12-15", hp: "60-75", toHit: "+4 to +6", damage: "20-25", xp: 1100, abilities: ["Trident", "Wavecall"], description: "A warrior of the deep striking from the surf." },
  { name: "Water Elemental", biome: "Port", cr: "7", profBonus: "+3", ac: "14-17", hp: "105-120", toHit: "+6 to +8", damage: "35-40", xp: 2900, abilities: ["Whelm", "Tidal Slam"], description: "A roiling mass of living water." },
  { name: "Young Dragon Turtle", biome: "Port", cr: "10", profBonus: "+4", ac: "15-18", hp: "150-165", toHit: "+8 to +10", damage: "50-55", xp: 5900, abilities: ["Steam Breath", "Bite & Claws"], description: "A fiery-shelled leviathan of the sea." }
];

monsters.push(...extraMonsters);

// --- Helpers ---
function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomFromObject(obj) {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return obj[randomKey];
}

function randomWildMagic() {
  const randomKey = Math.floor(Math.random() * 100) + 1;
  return wildMagic[randomKey];
}

function randomItem() {
  const randomKey = Math.floor(Math.random() * 15) + 1;
  return items[randomKey];
}

function randomPerson() {
  const randomKey = Math.floor(Math.random() * 15) + 1;
  return people[randomKey];
}

function randomBuilding() {
  const randomKey = Math.floor(Math.random() * 15) + 1;
  return buildings[randomKey];
}

function randomSpecies() {
  const randomKey = Math.floor(Math.random() * 60);
  return species[randomKey];
}

// --- DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  // Generate Encounter
  const generateBtn = document.getElementById("generateBtn");
  const output = document.getElementById("encounterOutput");
  const typeSelect = document.getElementById("typeSelect");
  const combatFields = document.getElementById("combatFields");

  // Handle conditional field visibility
  if (typeSelect && combatFields) {
    typeSelect.addEventListener("change", () => {
      const type = typeSelect.value;
      if (type === "combat") {
        combatFields.classList.add("show");
      } else {
        combatFields.classList.remove("show");
      }
    });
  }

  if (generateBtn && output) {
    generateBtn.addEventListener("click", () => {
      const type = document.getElementById("typeSelect").value;
      const biome = document.getElementById("biomeSelect").value;
      const cr = parseFloat(document.getElementById("crSelect").value);

      let resultHTML = "";

      if (type === "combat") {
        const monster = encounters[biome]?.[cr] || "Unknown Creature";
        // Find detailed monster stats
        const monsterData = monsters.find(m => m.name === monster && m.biome.toLowerCase() === biome);
        
        if (monsterData) {
          resultHTML = `
            <div class="monster-encounter ${biome}">
              <h3>You encounter a CR ${monsterData.cr} <strong>${monsterData.name}</strong></h3>
              <div class="monster-stats">
                <p><strong>Armor Class:</strong> ${monsterData.ac}</p>
                <p><strong>Hit Points:</strong> ${monsterData.hp}</p>
                <p><strong>To Hit:</strong> ${monsterData.toHit}</p>
                <p><strong>Damage:</strong> ${monsterData.damage}</p>
                <p><strong>XP Value:</strong> ${monsterData.xp}</p>
                <p><strong>Abilities:</strong> ${monsterData.abilities.join(", ")}</p>
                <p><strong>Description:</strong> ${monsterData.description}</p>
              </div>
            </div>
          `;
        } else {
          resultHTML = `
            <div class="monster-encounter ${biome}">
              <h3>You encounter a CR ${cr} <strong>${monster}</strong></h3>
              <p>Basic encounter information available.</p>
            </div>
          `;
        }
      } else if (type === "wildmagic") {
        resultHTML = `
          <div class="encounter-card ${biome}">
            <h3>Wild Magic Surge</h3>
            <p><strong>${randomWildMagic()}</strong></p>
          </div>
        `;
      } else if (type === "npc") {
        const species = randomSpecies();
        const profession = randomPerson();
        resultHTML = `
          <div class="encounter-card ${biome}">
            <h3>NPC Encounter</h3>
            <p>You encounter a <strong>${species} ${profession}</strong>.</p>
          </div>
        `;
      } else if (type === "item") {
        resultHTML = `
          <div class="encounter-card ${biome}">
            <h3>Item Found</h3>
            <p>You find a <strong>${randomItem()}</strong>.</p>
          </div>
        `;
      } else if (type === "building") {
        resultHTML = `
          <div class="encounter-card ${biome}">
            <h3>Building Discovered</h3>
            <p>You turn and there you see a <strong>${randomBuilding()}</strong>.</p>
          </div>
        `;
      }

      output.innerHTML = resultHTML;
    });
  }

  // Load Monster Glossary
  const monsterList = document.getElementById("monsterList");
  if (monsterList) {
    monsters.forEach(m => {
      const card = document.createElement("div");
      card.className = "monster-card";
      card.innerHTML = `
        <img src="${m.img || '../img/Logo.png'}" alt="${m.name}">
        <div class="monster-info">
          <h2>${m.name}</h2>
          <p><strong>CR:</strong> ${m.cr}</p>
          <p><strong>HP:</strong> ${m.hp}</p>
          <p><strong>Abilities:</strong> ${m.abilities.join(", ")}</p>
          <p>${m.description}</p>
        </div>
      `;
      monsterList.appendChild(card);
    });
  }
});
