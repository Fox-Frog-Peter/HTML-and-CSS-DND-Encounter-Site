// Original Java D&D Encounter Generator
// This is the inspiration for the website version

package org.peterjordahl;

import java.util.*;

public class App {
    // Combat encounter maps for different biomes
    static Map<Double, String> forestFights = new HashMap<>();
    static Map<Double, String> tundraFights = new HashMap<>();
    static Map<Double, String> desertFights = new HashMap<>();
    static Map<Double, String> mountainFights = new HashMap<>();
    static Map<Double, String> undergroundFights = new HashMap<>();
    static Map<Double, String> grasslandFights = new HashMap<>();
    static Map<Double, String> hamletFights = new HashMap<>();
    static Map<Double, String> townFights = new HashMap<>();
    static Map<Double, String> cityFights = new HashMap<>();
    static Map<Double, String> portFights = new HashMap<>();

    // Non-combat encounter maps
    static Map<Integer, String> wildMagic = new HashMap<>();
    static Map<Integer, String> items = new HashMap<>();
    static Map<Integer, String> buildings = new HashMap<>();
    static Map<Integer, String> people = new HashMap<>();
    static Map<Integer, String> species = new HashMap<>();

    // Key arrays for random selection
    static double[] challengeRatingKeys = new double[6];
    static int[] itemKeys = new int[15];
    static int[] wildMagicKeys = new int[100];
    static int[] peopleKeys = new int[15];
    static int[] buildingKeys = new int[15];
    static int[] speciesKeys = new int[60];

    // Get random challenge rating
    public static double getChallengeRating() {
        Random random = new Random();
        int index = random.nextInt(challengeRatingKeys.length);
        double challengeRatingKey = challengeRatingKeys[index];
        return challengeRatingKey;
    }

    // Get random wild magic effect
    public static String getRandomWildMagic() {
        int index = getRandomIndex(wildMagic.size()) + 1;
        return wildMagic.get(index);
    }

    // Get random item
    public static String getRandomItem() {
        int index = getRandomIndex(items.size()) + 1;
        return items.get(index);
    }

    // Get random person
    public static String getRandomPerson() {
        int index = getRandomIndex(people.size()) + 1;
        return people.get(index);
    }

    // Get random building
    public static String getRandomBuilding() {
        int index = getRandomIndex(buildings.size()) + 1;
        return buildings.get(index);
    }

    // Get random species
    public static String getRandomSpecies() {
        int index = getRandomIndex(species.size());
        return species.get(index);
    }

    // Helper method to get random index
    public static int getRandomIndex(int size) {
        Random random = new Random();
        return random.nextInt(size) + 1;
    }

    // Populate all the maps with data
    public static void populateMaps() {
        // Populate challenge rating keys
        challengeRatingKeys[0] = 0.25;
        challengeRatingKeys[1] = 0.5;
        challengeRatingKeys[2] = 2.0;
        challengeRatingKeys[3] = 4.0;
        challengeRatingKeys[4] = 7.0;
        challengeRatingKeys[5] = 10.0;

        // Initialize key arrays
        for (int i = 0; i < speciesKeys.length; i++) {
            speciesKeys[i] = i;
        }
        for (int i = 0; i < wildMagicKeys.length; i++) {
            wildMagicKeys[i] = i;
        }
        for (int i = 0; i < itemKeys.length; i++) {
            itemKeys[i] = i;
        }
        for (int i = 0; i < peopleKeys.length; i++) {
            peopleKeys[i] = i;
        }
        for (int i = 0; i < buildingKeys.length; i++) {
            buildingKeys[i] = i;
        }

        // Populate forest encounters
        forestFights.put(0.25, "Bandit");
        forestFights.put(0.5, "Bear");
        forestFights.put(2.0, "Sickly Troll");
        forestFights.put(4.0, "Treant");
        forestFights.put(7.0, "Giant Snake");
        forestFights.put(10.0, "Forest Guardian");

        // Populate tundra encounters
        tundraFights.put(0.5, "Polar Bear");
        tundraFights.put(0.25, "Dire Wolf");
        tundraFights.put(2.0, "Injured Juvenile White Drake");
        tundraFights.put(4.0, "Ice Elemental");
        tundraFights.put(7.0, "Ice Oni");
        tundraFights.put(10.0, "Frost Giant");

        // Populate desert encounters
        desertFights.put(0.25, "Awakened Cactus");
        desertFights.put(0.5, "Desert Mercenary");
        desertFights.put(2.0, "Juvenile Dune Worm");
        desertFights.put(4.0, "Desert Dragon");
        desertFights.put(7.0, "Sand Hydra");
        desertFights.put(10.0, "Sand Elemental");

        // Populate mountain encounters
        mountainFights.put(0.25, "Harpy");
        mountainFights.put(0.5, "Dire Wolf");
        mountainFights.put(2.0, "Hill Giant");
        mountainFights.put(4.0, "Goliath");
        mountainFights.put(7.0, "Stone Giant");
        mountainFights.put(10.0, "Felidar");

        // Populate underground encounters
        undergroundFights.put(0.25, "Kobold");
        undergroundFights.put(0.5, "Giant Lizard");
        undergroundFights.put(2.0, "Plague Bearer");
        undergroundFights.put(4.0, "Duergar Mercenary");
        undergroundFights.put(7.0, "Mind Flayer");
        undergroundFights.put(10.0, "Water Weird");

        // Populate grassland encounters
        grasslandFights.put(0.25, "Bandit");
        grasslandFights.put(0.5, "Carnivorous Grassling");
        grasslandFights.put(2.0, "Faun");
        grasslandFights.put(4.0, "Adult Rock Mole");
        grasslandFights.put(7.0, "Thorn Giant");
        grasslandFights.put(10.0, "Roc");

        // Populate urban encounters
        // Hamlet
        hamletFights.put(0.25, "Bandit");
        hamletFights.put(0.5, "Cultist");
        hamletFights.put(2.0, "Gnoll");
        hamletFights.put(4.0, "Manticore");
        hamletFights.put(7.0, "Barbarian");
        hamletFights.put(10.0, "Vampire");

        // Town
        townFights.put(0.25, "Bandit");
        townFights.put(0.5, "Grung");
        townFights.put(2.0, "Injured Lesser Bone Devil");
        townFights.put(4.0, "Guard");
        townFights.put(7.0, "Umbrageist");
        townFights.put(10.0, "Werewolf");

        // City
        cityFights.put(0.25, "Thugs");
        cityFights.put(0.5, "Corrupt Priest");
        cityFights.put(2.0, "Zombie");
        cityFights.put(4.0, "Guard");
        cityFights.put(7.0, "Crime Boss");
        cityFights.put(10.0, "Succubus & Incubus");

        // Port
        portFights.put(0.25, "Drunk Sailor");
        portFights.put(0.5, "Smuggler");
        portFights.put(2.0, "Pirate");
        portFights.put(4.0, "Triton Raider");
        portFights.put(7.0, "Water Elemental");
        portFights.put(10.0, "Young Dragon Turtle");

        // Populate wild magic effects (1-100)
        wildMagic.put(1, "A tankard falls from the sky a knocks you unconscious.");
        wildMagic.put(2, "You cast Fireball at 3rd level, centered on yourself.");
        wildMagic.put(3, "You turn into a pillar of salt for 6 seconds. You cannot take damage during that time.");
        wildMagic.put(4, "Gain disadvantage on your next roll.");
        wildMagic.put(5, "Gain advantage on your next roll.");
        wildMagic.put(6, "You cast light on an object you are carrying.");
        wildMagic.put(7, "You cast Cure Wounds at 3rd level, on yourself.");
        wildMagic.put(8, "You cast gentle repose in a 30 foot diameter sphere around you.");
        wildMagic.put(9, "Cast Chill Touch on a creature you can see within 30 feet of you.");
        wildMagic.put(10, "Gain 1d6 temporary hit points.");
        wildMagic.put(11, "(For the next day) You forget how to speak or read any languages you know and can only communicate in Under-common.");
        wildMagic.put(12, "A Borun Beast appears near you. (It attacks if you are hostile towards you, it naps if you are friendly.");
        wildMagic.put(13, "Your armor suddenly falls off of you.");
        wildMagic.put(14, "Your gain a point of exhaustion.");
        wildMagic.put(15, "Regain 1d4 levels worth of spells slots.");
        wildMagic.put(16, "Your current spell or ability activates opposite of your intent.");
        wildMagic.put(17, "A devil appears and asks for your help. Taking a spell slot or equivalent class or racial ability. They appear in 3 d4 days to repay (DMs discretion).");
        wildMagic.put(18, "A small mole wearing glasses burrows out from the ground beneath you. It curses at you.");
        wildMagic.put(19, "Your hair turns blue. If your hair is already blue, it falls out instead. It does not change back or grown back except naturally.");
        wildMagic.put(20, "Your armor (or clothing) is magically enchanted and turned into 'smoldering clothing'.");
        wildMagic.put(21, "You turn invisible for 1d4 hours.");
        wildMagic.put(22, "Any flowering plant within 100 feet of you blossoms immediately.");
        wildMagic.put(23, "A Dwarf magically appears near you, he starts a cook fire and makes dinner for your group.");
        wildMagic.put(24, "Spiders burst from your bag and leap away.");
        wildMagic.put(25, "Your skin turns green until your next long rest.");
        wildMagic.put(26, "You cast Darkness, centered on yourself.");
        wildMagic.put(27, "You cast Daylight, centered on yourself.");
        wildMagic.put(28, "A spring bubbles up from the ground at your feet - it tastes sweet and clean.");
        wildMagic.put(29, "A Willow tree magically grows into existence within an unoccupied space within 30 feet of you. It is 1 d10+10 ft. thick and 1 d10 + 30 feet tall.");
        wildMagic.put(30, "The scents and sounds of a party travel on the wind to your nose and ears.");
        wildMagic.put(31, "You cast the Spell Detect Magic as a free action.");
        wildMagic.put(32, "An arrow sails out of the distance and hits you in the shoulder. Once pulled from your body it turns into a bird an flies away.");
        wildMagic.put(33, "Your eyebrows transform into flowers.");
        wildMagic.put(34, "A friendly creature you can see gains 4d6 temporary HP. You gain a point of exhaustion.");
        wildMagic.put(35, "A Baobab tree magically grows into existence within an unoccupied space within 30 feet of you. It is 1 d10+10 ft. thick and 1 d100 + 30 feet tall.");
        wildMagic.put(36, "You cast zone of truth centered on yourself.");
        wildMagic.put(37, "For the next minute you can cast Fey Step as a bonus action. You can cast it a number of times equal to your player level.");
        wildMagic.put(38, "You cast invisibility on yourself.");
        wildMagic.put(39, "You grow incredibly hot, your skin is steaming.");
        wildMagic.put(40, "You cast the spell ice knife as a free action.");
        wildMagic.put(41, "A god you believe in appears before you in a vision and offers to impart knowledge to you. They il answer a single question.");
        wildMagic.put(42, "The cantrip Bonfire is cast 5 times, leading in a line away from you.");
        wildMagic.put(43, "You transform into a giant indestructible glowing mushroom for 1d4 minutes.");
        wildMagic.put(44, "A chained ghostly figure flickers into existence nearby and begs for your help. It vanishes with a wail.");
        wildMagic.put(45, "Ghostly shadows of humanoid shapes appear all around you, visible to anyone. They cannot be interacted with and pass through any non-stone objects around you.");
        wildMagic.put(46, "You cast the spell Enlarge on yourself.");
        wildMagic.put(47, "You cast the spell Reduce on yourself.");
        wildMagic.put(48, "You move into a realm of stars and mist for 1d4 rounds. The real world is visible to you as a ghostly image. Where you are when the time runs out, you reappear.");
        wildMagic.put(49, "You polymorph into a Paraceratherium.");
        wildMagic.put(50, "If you are holding a weapon, it turns into a snake with 1d4 hit points. After 1d6 rounds OR if it reduced to 0 HP, it reverts into its weapon form.");
        wildMagic.put(51, "You cast Thunderstep at 3rd level.");
        wildMagic.put(52, "A message comes to you psychically. A panicked message demanding payment for services rendered.");
        wildMagic.put(53, "You smell fresh strawberries. For 1 minute, everywhere you step, fresh strawberries grow.");
        wildMagic.put(54, "Your eyes turn a deep black for 1d4 weeks.");
        wildMagic.put(55, "If you are engaged in a battle, a group of centaurs come charging through, attack both sides equally. If you aren't in battle, the centaurs offer assistance/demand payment.");
        wildMagic.put(56, "You cast the spell Good-berry, in your mouth.");
        wildMagic.put(57, "Fairies appear around you, repeating words you have recently said, mocking you.");
        wildMagic.put(58, "A Raven attempts to land on your shoulder. If you let it, it casts death-ward on you. If you don't let it it curses at you.");
        wildMagic.put(59, "A gale force wind swirls around you. Anyone within 3d10 feet of you needs to make a dc 16 strength save or be thrown 10 feet an knocked prone.");
        wildMagic.put(60, "A small, 1 room house materializes around you.");
        wildMagic.put(61, "The next time you sleep, you dream of the future. You gain a point of inspiration.");
        wildMagic.put(62, "A cat comes near you an meows. If you follow it, it leads you to a coin pouch containing 3d6 gold coins.");
        wildMagic.put(63, "A dog runs up to you and whimpers. If you give it food of some kind it throws up a greater healing potion.");
        wildMagic.put(64, "Clouds swirl above you and form into the face of someone from your past. It vanishes as soon as you notice it.");
        wildMagic.put(65, "You cast Faerie Fire, centered on yourself.");
        wildMagic.put(66, "You cast comprehend languages on yourself.");
        wildMagic.put(67, "You cast speak with animals on yourself.");
        wildMagic.put(68, "You cast dancing lights.");
        wildMagic.put(69, "Your next attack (before a long rest) deals an additional 1d8 poison damage.");
        wildMagic.put(70, "A shadowy figure appears near you. It is incorporeal and cannot be dispersed. It follows you and watched you for 1d12 hours.");
        wildMagic.put(71, "Four chickens appear around you and dash off in different directions. Blue, White, Green, and Gold. If you catch and cook any of the chickens, you gain the following bonuses: " + 
            "Blue: Regain 1 d4 worth of spell slots or class/racial abilities. White: Regain 2 d8 HP. Green: Until your next full rest, you have advantage on Int & Wis & Char saving throws. Gold: You vomit up 3 d10 gold coins.");
        wildMagic.put(72, "You grow devil horns. They fall off after a day or the next time you reach 0 hp, and you return to full health.");
        wildMagic.put(73, "For 1 minute you turn into glass. You are resistant to piercing and poison damage, and vulnerable to bludgeoning damage.");
        wildMagic.put(74, "You see a vision of a terrifying beast. You fall prone.");
        wildMagic.put(75, "Your clothing turns to metal.");
        wildMagic.put(76, "A goblin wearing fine attire appears next to you, he offers you a calling card. If you take the card he tips his hat and vanishes.(Card Text is DM discretion)");
        wildMagic.put(77, "Butterflies flutter around you.");
        wildMagic.put(78, "Plants within 15 feet of you extrude glowing spores. Anyone near the spores must make a DC 15 dexterity saving throw or take 3d6 poison damage.");
        wildMagic.put(79, "A bugbear claws his way out of the ground 15 feet from you and attack you. He is insensate.");
        wildMagic.put(80, "You magically displace 15 feet in a random direction.");
        wildMagic.put(81, "You immediately cast Leomund's Tiny Hut Centered on yourself.");
        wildMagic.put(82, "You sink into the ground up to your waist.");
        wildMagic.put(83, "You grow a tail, like that of a lion. If you already have a tail, the tail changes color and length, becoming brighter and longer.");
        wildMagic.put(84, "You fall asleep and cannot be woken for 1 minute. You sleep walk and attacks against you have dis-advantage.");
        wildMagic.put(85, "Water Pours out of your mouth for 24 hours. You cast underwater breathing on up to 6 willing creatures, but you cannot speak.");
        wildMagic.put(86, "All water within 30 feet of you becomes holy water.");
        wildMagic.put(87, "All food within 30 feet of you become poisoned.");
        wildMagic.put(88, "Your closest ally within 30 feet of you travels 30 feet in your direction. They keep moving until the 30 feet of movement is completed.");
        wildMagic.put(89, "You Tongues on yourself.");
        wildMagic.put(90, "Wings sprout from your back. Feather wings for good aligned creatures, bat wings for evil aligned creatures, faerie wings for unaligned creatures.");
        wildMagic.put(91, "You polymorph into an Owl.");
        wildMagic.put(92, "You cast invisibility on yourself.");
        wildMagic.put(93, "You cast feather fall on yourself.");
        wildMagic.put(94, "All plant matter within 15 feet of you immediately starts to decay.");
        wildMagic.put(95, "You glow with divine radiance. You next attack deals an additional 1d12 radiant damage.");
        wildMagic.put(96, "You cast disguise self on yourself. You look like the character nearest you.");
        wildMagic.put(97, "You grow tusks like that of an Orcs. They do not fall off or go away naturally. Add 1 d4 to your intimidation checks.");
        wildMagic.put(98, "You fall unconscious and fall prone. You immediately wake up. You have completed a full rest.");
        wildMagic.put(99, "You sneeze out 1d6 gold coins and take the same amount of bludgeoning damage.");
        wildMagic.put(100, "Womeck the traveler and offers a trade to you in a 4 minute ling time stop.");

        // Populate items
        items.put(1, "weapon");
        items.put(2, "bag");
        items.put(3, "wand");
        items.put(4, "torch");
        items.put(5, "book");
        items.put(6, "orb");
        items.put(7, "lamp");
        items.put(8, "tinderbox");
        items.put(9, "potion");
        items.put(10, "scroll");
        items.put(11, "coin pouch");
        items.put(12, "armor");
        items.put(13, "clothing");
        items.put(14, "tools kit");
        items.put(15, "magic weapon or magic scroll");

        // Populate people
        people.put(1, "Priest");
        people.put(2, "Guard");
        people.put(3, "Farmer");
        people.put(4, "Shop Owner");
        people.put(5, "Noble");
        people.put(6, "Wizard");
        people.put(7, "Knight");
        people.put(8, "Scholar");
        people.put(9, "Doctor");
        people.put(10, "Sailor");
        people.put(11, "Cook");
        people.put(12, "Miner");
        people.put(13, "Author");
        people.put(14, "Blacksmith");
        people.put(15, "Messenger");

        // Populate buildings
        buildings.put(1, "Religious Building");
        buildings.put(2, "Guard House");
        buildings.put(3, "Farmstead");
        buildings.put(4, "Shop");
        buildings.put(5, "Mansion");
        buildings.put(6, "Tower");
        buildings.put(7, "Manor");
        buildings.put(8, "Library");
        buildings.put(9, "Hospital");
        buildings.put(10, "Map & Chart Store");
        buildings.put(11, "Restaurant");
        buildings.put(12, "Workshop");
        buildings.put(13, "Bookstore");
        buildings.put(14, "Blacksmith");
        buildings.put(15, "Post Office");

        // Populate species
        species.put(0, "Human");
        species.put(1, "Human");
        species.put(2, "Aasimar");
        species.put(3, "Human");
        species.put(4, "Human");
        species.put(5, "Human");
        species.put(6, "Human");
        species.put(7, "Human");
        species.put(8, "Human");
        species.put(9, "Dwarf");
        species.put(10, "Dwarf");
        species.put(11, "Dwarf");
        species.put(12, "Dwarf");
        species.put(13, "Dwarf");
        species.put(14, "Elf");
        species.put(15, "Elf");
        species.put(16, "Elf");
        species.put(17, "Triton");
        species.put(18, "Triton");
        species.put(19, "Triton");
        species.put(20, "Triton");
        species.put(21, "Halfling");
        species.put(22, "Halfling");
        species.put(23, "Halfling");
        species.put(24, "Orc");
        species.put(25, "Half-Orc");
        species.put(26, "Half-Orc");
        species.put(27, "Duergar");
        species.put(28, "Duergar");
        species.put(29, "Aarakocra");
        species.put(30, "Aarakocra");
        species.put(31, "Tabaxi");
        species.put(32, "Tabaxi");
        species.put(33, "Tortle");
        species.put(34, "Tiefling");
        species.put(35, "Tiefling");
        species.put(36, "Harengon");
        species.put(37, "Harengon");
        species.put(38, "Harengon");
        species.put(39, "Ratatosk");
        species.put(40, "Tabaxi");
        species.put(41, "Kenku");
        species.put(42, "Lizardfolk");
        species.put(43, "Red Dragonborn");
        species.put(44, "Satyr");
        species.put(45, "Water Genasi");
        species.put(46, "Felidarian");
        species.put(47, "Loxodon");
        species.put(48, "Earth Genasi");
        species.put(49, "Fire Genasi");
        species.put(50, "Air Genasi");
        species.put(51, "Gold Dragonborn");
        species.put(52, "White Dragonborn");
        species.put(53, "Blue Dragonborn");
        species.put(54, "Green Dragonborn");
        species.put(55, "Black Dragonborn");
        species.put(56, "Purple Dragonborn");
        species.put(57, "Minotaur");
        species.put(58, "Gnome");
        species.put(59, "Human");
    }

    // Main method
    public static void main(String[] args) {
        generateRandomEncounter();
    }

    // Ask if user wants another encounter
    public static void additionalEncounterMethod() {
        Scanner scanner = new Scanner(System.in);
        System.out.print(" Do you need another encounter? (YES) or (NO) ");
        String additionalEncounter = scanner.nextLine();
        additionalEncounter = additionalEncounter.toUpperCase();
        
        if (additionalEncounter.equals("YES")) {
            System.out.print(" Exciting!");
            generateRandomEncounter();
        } else {
            System.out.print("Happy Adventuring! Please Come Again!");
        }
    }

    // Get challenge rating from array
    public static double getChallengeRating(double[] array) {
        populateMaps();
        double rnd = new Random().nextDouble(challengeRatingKeys.length);
        return array[(int) rnd];
    }

    // Main encounter generation method
    public static Object generateRandomEncounter() {
        populateMaps();
        Scanner scanner = new Scanner(System.in);
        
        // Welcome message and party setup
        System.out.print("How many adventurers are in your party?");
        var partySize = Integer.parseInt(scanner.nextLine());
        int partySizeInt = ((int) partySize);
        
        System.out.print("What is the total of all of their levels?");
        var partyStrength = Integer.parseInt(scanner.nextLine());
        int partyAvg = (((int) partyStrength / partySize) + partySize);
        
        System.out.print("Are you needing a (COMBAT) or (OTHER) type of encounter? (Words in 'ALL CAPS' and parentheses are your entry options)");
        String inputEncounterType = scanner.nextLine();
        inputEncounterType = inputEncounterType.toUpperCase();
        
        // Combat encounter logic
        if (Objects.equals(inputEncounterType, "COMBAT") || Objects.equals(inputEncounterType, "C")) {
            int numOfMonsters = 1;
            System.out.print("So you need a combat encounter, is this happening in the (WILDS) or in an (URBAN) environment?");
            String inputCombatEnviro = scanner.nextLine();
            inputCombatEnviro = inputCombatEnviro.toUpperCase();
            
            // Wild environment encounters
            if (Objects.equals(inputCombatEnviro, "WILDS")) {
                System.out.print("What is the environment this encounter is taking place in? (FOREST, TUNDRA, DESERT, MOUNTAIN, UNDERGROUND, or GRASSLAND)");
                String wildEncounterBiome = scanner.next();
                wildEncounterBiome = wildEncounterBiome.toUpperCase();
                
                if (Objects.equals(wildEncounterBiome, "FOREST")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + forestFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(wildEncounterBiome, "TUNDRA")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + tundraFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(wildEncounterBiome, "DESERT")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + desertFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(wildEncounterBiome, "MOUNTAIN")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + mountainFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(wildEncounterBiome, "UNDERGROUND")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + undergroundFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(wildEncounterBiome, "GRASSLAND")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + grasslandFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                }
            }
            // Urban environment encounters
            else if (Objects.equals(inputCombatEnviro, "URBAN")) {
                System.out.print("What is the environment this encounter is taking place in? (HAMLET, TOWN, CITY, or PORT)");
                String urbanEncounterSize = scanner.next();
                urbanEncounterSize = urbanEncounterSize.toUpperCase();
                
                if (Objects.equals(urbanEncounterSize, "HAMLET")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + hamletFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(urbanEncounterSize, "TOWN")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + townFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(urbanEncounterSize, "CITY")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + cityFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                } else if (Objects.equals(urbanEncounterSize, "PORT")) {
                    double challengeRatingKey = getChallengeRating();
                    for (double i = challengeRatingKey; i < partyAvg; i++) {
                        numOfMonsters += 1;
                    }
                    System.out.print("You encounter " + numOfMonsters + " " + portFights.get(challengeRatingKey) + ".");
                    additionalEncounterMethod();
                }
            }
        }
        // Non-combat encounter logic
        else if (Objects.equals(inputEncounterType, "OTHER") || Objects.equals(inputEncounterType, "O")) {
            System.out.print("What type of encounter do you need? (Wild Magic, Item, Building, [or] Person)");
            String inputOtherEncounterType = scanner.nextLine();
            inputOtherEncounterType = inputOtherEncounterType.toUpperCase();
            
            if (Objects.equals(inputOtherEncounterType, "WILD MAGIC")) {
                System.out.print("The wild magic surges and " + getRandomWildMagic());
                additionalEncounterMethod();
            } else if (Objects.equals(inputOtherEncounterType, "ITEM")) {
                System.out.print("You find a " + getRandomItem() + ".");
                additionalEncounterMethod();
            } else if (Objects.equals(inputOtherEncounterType, "BUILDING")) {
                System.out.print("You turn and there you see a " + getRandomBuilding() + ".");
                additionalEncounterMethod();
            } else if (Objects.equals(inputOtherEncounterType, "PERSON")) {
                System.out.print("You encounter a " + getRandomSpecies() + " " + getRandomPerson() + ".");
                additionalEncounterMethod();
            } else {
                System.out.print("Sorry adventurer, but that's not an option, please look in the parentheses for your options. ");
                additionalEncounterMethod();
            }
        } else {
            System.out.print("Sorry adventurer, but that's not an option, please look in the parentheses for your options. ");
            additionalEncounterMethod();
        }
        
        System.out.print("Sorry adventurer, but that's not an option, please look in the parentheses for your options. ");
        additionalEncounterMethod();
        return null;
    }
}

