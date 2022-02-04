import * as AchievementDiaries from './achievementDiaries';

/**
 * The varbits that we require from RuneLite.
 * No exceptional cases included, all RFD, Curse of the Empty lord, Arch alliance, and Enchanted key all removed.
 */
export const MANIFEST_VERSION = 1;

export const REQUIRED_VARBITS = [
  /* Quest completion */
  12063, 6071, 2561, 2378, 3468, 8063, 3185, 3550, 299, 3293,
  3274, 2573, 2258, 6027, 358, 1465, 6104, 3618, 2780, 2639,
  1560, 2866, 2497, 1803, 2326, 334, 822, 5795, 3311, 961,
  217, 571, 346, 2783, 1527, 34, 418, 1990, 3888, 532,
  2448, 6528, 1383, 5027, 260, 1103, 2790, 3534, 6037, 1404,
  657, 2140, 1372, 2610, 2011, 1444, 2098, 1028, 6358, 6396,
  451, 3337, 5619, 1051, 3523, 487, 7856, 7796, 9016, 9459,
  7255, 693, 10582, 12296, 12276, 5078, 3330, 1344, 3290, 5347,
  6067, 8403, 10570, 4982, 4976, 821, 816, 1391, 1383,
].concat(AchievementDiaries.REQUIRED_VARBITS);

/**
 * The varps that we require from RuneLite.
 * No exceptional cases included, SoA, Fenken, and Alfred's removed.
 */
export const REQUIRED_VARPS = [
  /* Quest completion */
  130, 29, 31, 176, 32, 160, 122, 71, 273, 107,
  144, 63, 179, 178, 67, 293, 68, 655, 10, 314,
  131, 80, 0, 335, 148, 17, 11, 347, 180, 150,
  980, 382, 223, 188, 5, 387, 175, 139, 147, 14,
  365, 30, 517, 192, 307, 112, 416, 165, 302, 714,
  328, 402, 600, 76, 159, 339, 60, 116, 320, 26,
  359, 197, 111, 200, 385, 317, 161, 212, 65, 226,
  492, 267, 145, 146, 399, 203, 299, 77, 76,

  2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624,
  2625, 2626, 2627, 2628, 2629, 2630, 2631, 2808, 2809,
  2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818,
  2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830,
  2831, 2832, 2833, 2834, 2835, 3339, 3340, 3341, 3342,
].concat(AchievementDiaries.REQUIRED_VARPS);

export const LEAGUE_VARP = [2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 3339, 3340, 3341, 3342];
/**
 * Quests to their respective completion varbit.
 * The first value in the array is the varbit.
 * The second value is the starting value.
 * The third value is the ending value.
 */
export const QUESTS_TO_COMPLETION_VARBIT = {
  'Below Ice Mountain': [12063, 0, 120],
  'The Corsair Curse': [6071, 0, 60],
  'Demon Slayer': [2561, 0, 3],
  'Goblin Diplomacy': [2378, 0, 6],
  'Misthalin Mystery': [3468, 0, 135],
  'X Marks the Spot': [8063, 0, 8],
  'Animal Magnetism': [3185, 0, 240],
  'Another Slice of H.A.M.': [3550, 0, 11],
  'Between a Rock...': [299, 0, 110],
  'Cold War': [3293, 0, 135],
  'Contact!': [3274, 0, 130],
  'Darkness of Hallowvale': [2573, 0, 320],
  'Death to the Dorgeshuun': [2258, 0, 13],
  'The Depths of Despair': [6027, 0, 11],
  'Desert Treasure': [358, 0, 15],
  'Devious Minds': [1465, 0, 80],
  'Dragon Slayer II': [6104, 0, 215],
  'Dream Mentor': [3618, 0, 28],
  "Eagles' Peak": [2780, 0, 40],
  'Elemental Workshop II': [2639, 0, 11],
  "Enakhra's Lament": [1560, 0, 70],
  'Enlightened Journey': [2866, 0, 200],
  'The Eyes of Glouphrie': [2497, 0, 60],
  'Fairytale I - Growing Pains': [1803, 0, 90],
  'Fairytale II - Cure a Queen': [2326, 0, 90],
  'The Feud': [334, 0, 28],
  'Forgettable Tale...': [822, 0, 140],
  'Bone Voyage': [5795, 0, 50],
  'The Fremennik Isles': [3311, 0, 340],
  'Garden of Tranquillity': [961, 0, 60],
  'Ghosts Ahoy': [217, 0, 8],
  'The Giant Dwarf': [571, 0, 50],
  'The Golem': [346, 0, 10],
  'Grim Tales': [2783, 0, 60],
  'The Hand in the Sand': [1527, 0, 160],
  'Horror from the Deep': [34, 0, 10],
  "Icthlarin's Little Helper": [418, 0, 26],
  'In Aid of the Myreque': [1990, 0, 430],
  "King's Ransom": [3888, 0, 90],
  'The Lost Tribe': [532, 0, 11],
  'Lunar Diplomacy': [2448, 0, 190],
  'Making Friends with My Arm': [6528, 0, 200],
  'Making History': [1383, 0, 4],
  'Monkey Madness II': [5027, 0, 195],
  'Mountain Daughter': [260, 0, 70],
  "Mourning's End Part II": [1103, 0, 60],
  "My Arm's Big Adventure": [2790, 0, 320],
  "Olaf's Quest": [3534, 0, 80],
  'The Queen of Thieves': [6037, 0, 13],
  Ratcatchers: [1404, 0, 127],
  'Recruitment Drive': [657, 0, 2],
  'Royal Trouble': [2140, 0, 30],
  'Shadow of the Storm': [1372, 0, 125],
  'The Slug Menace': [2610, 0, 14],
  "A Soul's Bane": [2011, 0, 13],
  'Spirits of the Elid': [1444, 0, 60],
  'Swan Song': [2098, 0, 200],
  'A Tail of Two Cats': [1028, 0, 70],
  'Tale of the Righteous': [6358, 0, 17],
  'A Taste of Hope': [6396, 0, 165],
  'Tears of Guthix': [451, 0, 2],
  'Tower of Life': [3337, 0, 18],
  'Client of Kourend': [5619, 0, 7],
  'Wanted!': [1051, 0, 11],
  'What Lies Below': [3523, 0, 150],
  'Zogre Flesh Eaters': [487, 0, 14],
  'The Ascent of Arceuus': [7856, 0, 14],
  'The Forsaken Tower': [7796, 0, 11],
  'Song of the Elves': [9016, 0, 200],
  'The Fremennik Exiles': [9459, 0, 130],
  'Sins of the Father': [7255, 0, 138],
  'Getting Ahead': [693, 0, 34],
  'A Porcine of Interest': [10582, 0, 40],
  'A Kingdom Divided': [12296, 0, 150],
  'A Night at the Theatre': [12276, 0, 86],
  'Bear your Soul': [5078, 0, 3],
  "The General's Shadow": [3330, 0, 30],
  'Skippy and the Mogres': [1344, 0, 3],
  'Lair of Tarn Razorlor': [3290, 0, 3],
  'Family Pest': [5347, 0, 3],
  'The Mage Arena II': [6067, 0, 4],
  'In Search of Knowledge': [8403, 0, 3],
  "Daddy's Home": [10570, 0, 13],
};

/**
 * Quests to their respective completion varp.
 * The first value in the array is the varp.
 * The second value is the starting value.
 * The third value is the ending value.
 */
export const QUESTS_TO_COMPLETION_VARP = {
  "Black Knights' Fortress": [130, 0, 4],
  "Cook's Assistant": [29, 0, 2],
  "Doric's Quest": [31, 0, 100],
  'Dragon Slayer I': [176, 0, 10],
  'Ernest the Chicken': [32, 0, 3],
  'Imp Catcher': [160, 0, 2],
  "The Knight's Sword": [122, 0, 7],
  "Pirate's Treasure": [71, 0, 4],
  'Prince Ali Rescue': [273, 0, 110],
  'The Restless Ghost': [107, 0, 5],
  'Romeo & Juliet': [144, 0, 100],
  'Rune Mysteries': [63, 0, 6],
  'Sheep Shearer': [179, 0, 21],
  'Vampyre Slayer': [178, 0, 3],
  "Witch's Potion": [67, 0, 3],
  'Big Chompy Bird Hunting': [293, 0, 65],
  Biohazard: [68, 0, 16],
  'Cabin Fever': [655, 0, 140],
  'Clock Tower': [10, 0, 8],
  'Death Plateau': [314, 0, 80],
  'The Dig Site': [131, 0, 9],
  'Druidic Ritual': [80, 0, 4],
  'Dwarf Cannon': [0, 0, 11],
  "Eadgar's Ruse": [335, 0, 110],
  'Family Crest': [148, 0, 11],
  'Fight Arena': [17, 0, 14],
  'Fishing Contest': [11, 0, 5],
  'The Fremennik Trials': [347, 0, 10],
  "Gertrude's Cat": [180, 0, 6],
  'The Grand Tree': [150, 0, 160],
  'The Great Brain Robbery': [980, 0, 130],
  'Haunted Mine': [382, 0, 11],
  'Hazeel Cult': [223, 0, 9],
  "Heroes' Quest": [188, 0, 15],
  'Holy Grail': [5, 0, 10],
  'In Search of the Myreque': [387, 0, 105],
  'Jungle Potion': [175, 0, 12],
  "Legends' Quest": [139, 0, 75],
  'Lost City': [147, 0, 6],
  "Merlin's Crystal": [14, 0, 7],
  'Monkey Madness I': [365, 0, 9],
  "Monk's Friend": [30, 0, 80],
  "Mourning's End Part I": [517, 0, 9],
  'Murder Mystery': [192, 0, 2],
  'Nature Spirit': [307, 0, 110],
  'Observatory Quest': [112, 0, 7],
  'One Small Favour': [416, 0, 285],
  'Plague City': [165, 0, 29],
  'Priest in Peril': [302, 0, 60],
  'Rag and Bone Man I': [714, 0, 4],
  'Rag and Bone Man II': [714, 3, 6],
  Regicide: [328, 0, 15],
  'Roving Elves': [402, 0, 6],
  'Rum Deal': [600, 0, 19],
  'Scorpion Catcher': [76, 0, 6],
  'Sea Slug': [159, 0, 12],
  "Shades of Mort'ton": [339, 0, 85],
  'Sheep Herder': [60, 0, 3],
  'Shilo Village': [116, 0, 15],
  'Tai Bwo Wannai Trio': [320, 2, 6],
  'Temple of Ikov': [26, 0, 80],
  'Throne of Miscellania': [359, 0, 100],
  'The Tourist Trap': [197, 0, 30],
  'Tree Gnome Village': [111, 0, 9],
  'Tribal Totem': [200, 0, 5],
  'Troll Romance': [385, 0, 45],
  'Troll Stronghold': [317, 0, 50],
  'Underground Pass': [161, 0, 11],
  Watchtower: [212, 0, 13],
  'Waterfall Quest': [65, 0, 10],
  "Witch's House": [226, 0, 7],
  'Enter the Abyss': [492, 0, 4],
  'The Mage Arena': [267, 0, 8],
};

/**
 * Valid skills to save in the database.
 */
export const SKILL_NAMES = [
  'Attack',
  'Strength',
  'Defence',
  'Ranged',
  'Prayer',
  'Magic',
  'Runecraft',
  'Hitpoints',
  'Crafting',
  'Mining',
  'Smithing',
  'Fishing',
  'Cooking',
  'Firemaking',
  'Woodcutting',
  'Agility',
  'Herblore',
  'Thieving',
  'Fletching',
  'Slayer',
  'Farming',
  'Construction',
  'Hunter',
];