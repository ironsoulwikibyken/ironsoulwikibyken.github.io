/* ==========================================================================
   GameWiki — CONTENT DATABASE
   --------------------------------------------------------------------------
   This is the ONLY file you need to touch to add or edit content.
   Every section of the site (Guides, Ore, Weapons, Dungeons, Codes, News)
   is rendered automatically from the arrays below using shared templates
   in app.js — so adding a new item never requires touching HTML/CSS.

   HOW TO ADD NEW CONTENT
   -----------------------
   • New Ore         → copy an object inside DATA.ore and change the values.
   • New Weapon      → copy an object inside DATA.weapons["light"] (or any
                       of the 6 category keys) and change the values.
   • New Dungeon     → copy an object inside DATA.dungeons.
   • New Guide       → copy an object inside DATA.guides.
   • New Code        → copy an object inside DATA.codes.active
                       (move to DATA.codes.expired once it dies).
   • New News post  → copy an object inside DATA.news.

   Rules:
   • Every "slug" must be unique inside its own array (used in the URL).
   • Images are just URLs — swap in your own artwork/screenshots any time.
   • Rarity accepted values: common, uncommon, rare, epic, legendary, mythical
   ========================================================================== */

const DATA = {

  site: {
    name: "IronSoulWIKI",
    tagline: "Buat game lu jadi Makin gampang",
    game: "Iron Soul", // placeholder Roblox game name
    stats: { articles: 4, weekly_visitors: "N/A", codes: 5, contributors: 1 }
  },

  /* ======================== GUIDES ======================== */
  guides: [
    {
      slug: "beginner-guide",
      title: "Beginner Guide",
      category: "Getting Started",
      cover: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1400&auto=format&fit=crop",
      description: "Everything a new player needs to survive their first hour, from picking a starter pickaxe to unlocking your first dungeon key.",
      readTime: "6 min read",
      updated: "2026-07-28",
      tags: ["Beginner", "Essential"],
      infoCards: [
        { icon: "clock", title: "Time to Complete", text: "~20 minutes in-game" },
        { icon: "shield", title: "Difficulty", text: "Very Easy" },
        { icon: "gift", title: "Reward", text: "Starter Pickaxe + 200 Gold" }
      ],
      toc: [
        { id: "starting-out", label: "Starting Out" },
        { id: "first-tools", label: "Getting Your First Tools" },
        { id: "leveling", label: "Leveling Up Fast" },
        { id: "first-dungeon", label: "Entering Your First Dungeon" }
      ],
      body: [
        { h: "starting-out", title: "Starting Out", p: "Every run begins on Miner's Dock. Talk to the Foreman NPC to receive your starter pickaxe and a map of the Copper Flats — the safest early mining zone in the game." },
        { p: "Before doing anything else, open your inventory (press B) and equip the Starter Pickaxe. Unequipped tools deal zero damage to ore nodes, which trips up a lot of first-time players." },
        { h: "first-tools", title: "Getting Your First Tools", p: "Mine Iron Ore until you have at least 15, then visit the Blacksmith to craft an Iron Pickaxe. It mines twice as fast as the starter tool and is required to break Copper Ore nodes." },
        { h: "leveling", title: "Leveling Up Fast", p: "Completing the daily bounty board next to the Foreman is the single most efficient way to gain XP before level 10. Bounties refresh every 24 hours and always reward bonus gold." },
        { h: "first-dungeon", title: "Entering Your First Dungeon", p: "Once you hit level 8, the Sunken Quarry entrance unlocks south of the docks. Bring at least one healing potion and an Iron-tier weapon before attempting it." }
      ],
      related: ["crafting-guide", "weapon-guide"]
    },
    {
      slug: "crafting-guide",
      title: "Crafting Guide",
      category: "Systems",
      cover: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1400&auto=format&fit=crop",
      description: "A full breakdown of the crafting bench, material tiers, and how upgrade paths work so you stop wasting ore on the wrong recipes.",
      readTime: "9 min read",
      updated: "2026-08-01",
      tags: ["Crafting", "Intermediate"],
      infoCards: [
        { icon: "hammer", title: "Unlocks At", text: "Level 5" },
        { icon: "layers", title: "Material Tiers", text: "6 tiers" },
        { icon: "star", title: "Related Skill", text: "Blacksmithing" }
      ],
      toc: [
        { id: "the-bench", label: "The Crafting Bench" },
        { id: "material-tiers", label: "Understanding Material Tiers" },
        { id: "upgrade-paths", label: "Upgrade Paths" }
      ],
      body: [
        { h: "the-bench", title: "The Crafting Bench", p: "The Crafting Bench is found in every hub town. Interacting with it opens a category wheel matching the six weapon families: Light Weapon, Staff, Heavy Weapon, Fist, Scythe and Bow." },
        { h: "material-tiers", title: "Understanding Material Tiers", p: "Materials scale from Common ore up to Mythical crystal. Higher tier recipes always require at least one material from the tier below, so it pays to stockpile rather than sell everything instantly." },
        { h: "upgrade-paths", title: "Upgrade Paths", p: "Most weapons can be upgraded up to three times using Refinement Stones purchased from the Dungeon Vendor. Each upgrade increases base damage by roughly 15% and can shift the weapon's element." }
      ],
      related: ["weapon-guide", "passive-guide"]
    },
    {
      slug: "passive-guide",
      title: "Passive Guide",
      category: "Systems",
      cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop",
      description: "How passive skills stack, which combinations are worth building around, and common mistakes to avoid when respeccing.",
      readTime: "7 min read",
      updated: "2026-07-19",
      tags: ["Builds", "Intermediate"],
      infoCards: [
        { icon: "zap", title: "Max Passives", text: "3 active at once" },
        { icon: "refresh", title: "Respec Cost", text: "500 Gold" },
        { icon: "trending", title: "Best For", text: "Dungeon farming" }
      ],
      toc: [
        { id: "how-passives-work", label: "How Passives Work" },
        { id: "stacking-rules", label: "Stacking Rules" },
        { id: "top-combos", label: "Top Combos" }
      ],
      body: [
        { h: "how-passives-work", title: "How Passives Work", p: "Each weapon carries one innate passive. Equipping a weapon slots that passive into your loadout, and you may run up to three at a time once you unlock the third passive slot at level 20." },
        { h: "stacking-rules", title: "Stacking Rules", p: "Passives with the same trigger condition (for example, two 'on critical hit' effects) stack additively, while passives with different triggers stack independently, letting you chain multiple procs per fight." },
        { h: "top-combos", title: "Top Combos", p: "The community's current favorite pairing is Molten Core (Heavy Weapon) with Frostbind (Staff) — the burn and slow effects combine to lock bosses out of most of their attack patterns." }
      ],
      related: ["weapon-guide", "crafting-guide"]
    },
    {
      slug: "weapon-guide",
      title: "Weapon Guide",
      category: "Combat",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1400&auto=format&fit=crop",
      description: "Compare all six weapon categories, their playstyles, and which one fits your preferred way of playing Oreborn Frontier.",
      readTime: "8 min read",
      updated: "2026-07-30",
      tags: ["Combat", "Beginner"],
      infoCards: [
        { icon: "sword", title: "Categories", text: "6 weapon types" },
        { icon: "target", title: "Best All-Rounder", text: "Light Weapon" },
        { icon: "shield", title: "Best Tank Option", text: "Heavy Weapon" }
      ],
      toc: [
        { id: "choosing-a-category", label: "Choosing a Category" },
        { id: "melee-vs-ranged", label: "Melee vs Ranged" },
        { id: "switching-later", label: "Switching Later" }
      ],
      body: [
        { h: "choosing-a-category", title: "Choosing a Category", p: "There's no wrong choice — every category is viable through end-game — but Light Weapons offer the most forgiving learning curve thanks to their fast, low-commitment swing speed." },
        { h: "melee-vs-ranged", title: "Melee vs Ranged", p: "Bow and Staff are your ranged options and excel at kiting dungeon bosses, while Fist, Scythe, Heavy Weapon and Light Weapon all require you to stay in melee range to land hits." },
        { h: "switching-later", title: "Switching Later", p: "Your account keeps mastery progress for every category simultaneously, so freely experimenting early on never costs you long-term progress." }
      ],
      related: ["passive-guide", "beginner-guide"]
    }
  ],

  /* ======================== ORE (Items) ======================== */
  ore: [
    {
      slug: "iron-ore",
      name: "Kenki",
      image: "Images/Kenki-ore.jpg",
      description: "Bisa lu dapetin di mode nighmare tartarus,dan bisa lebih gampang di dapetin kalau lu maen di mode Hell.",
      rarity: "Mythical",
      spawn: "Copper Flats",
      dropRate: "30%",
      sellPrice: "12 Gold",
      requiredLevel: 83,
      usedFor: ["Mytic Equipment"],
      recipes: [{ item: "Starter Tool", materials: "3x Kenki Ore" }],
      tips: "Easy to find in Hell Tartarus.",
      related: ["copper-ore", "silver-ore"]
    },
    {
      slug: "copper-ore",
      name: "Lionite",
      image: "Images/Lionite-ore.jpg",
      description: "Ore paling terbaik untuk saat ini di iron soul,dan bisa lu dapetin ore di di mode hell penitent,tapi kalau mau lebih cepat bisa di mode Nigtmare.",
      rarity: "High Mythical",
      spawn: "Hell Tartarus",
      dropRate: "10%",
      sellPrice: "18 Gold",
      requiredLevel: 90,
      usedFor: ["Lionite Core"],
      recipes: [{ item: "Lionite Core", materials: "3x Lionite Ore" }],
      tips: "Just Spam Dungeons.",
      related: ["iron-ore", "silver-ore"]
    },
    {
      slug: "dark-blossom-ore",
      name: "Dark Blossom",
      image: "Images/Lotus-ore.jpg",
      description: "Dark blossom ore mythical terendah untuk di dungeon tartarus,dan lu bisa dapetin ini di mode penitent tanpa hell.",
      rarity: "Mythical",
      spawn: "Hell Tartarus Nightmare",
      dropRate: "80%",
      sellPrice: "18 Gold",
      requiredLevel: 73,
      usedFor: ["Darkblossom core"],
      recipes: [{ item: "Darkblossom Core", materials: "3x Dark Blossom Ore" }],
      tips: "Just Spam Dungeons.",
      related: ["iron-ore", "silver-ore"]
    },
    {
      slug: "apocalypse-ore",
      name: "Apocalypse",
      image: "Images/Apocalypse.jpg",
      description: "Batu ini di bawah satu tingkat dari Kenki,dan bisa lu dapetin di dungeon torment tanpa harus main mode hell .",
      rarity: "Mythical",
      spawn: "Torment Dungeon",
      dropRate: "60%",
      sellPrice: "18 Gold",
      requiredLevel: 76,
      usedFor: ["Apocalypse Core"],
      recipes: [{ item: "Apocalypse Core", materials: "3x Apocalypse Ore" }],
      tips: "Just Spam Dungeons.",
      related: ["iron-ore", "silver-ore"]
    },
    {
      slug: "silver-ore",
      name: "Roten Lotus",
      image: "Images/Lotus-ore.jpg",
      description: "Salah satu ore terbaik sebelum lionite muncul,bisa di cari di mode hell nightmare Oatlost,tapi lebih baik di cari di map tartarus .",
      rarity: "High Mythical",
      spawn: "Oatlost and Tartarus",
      dropRate: "50%",
      sellPrice: "35 Gold",
      requiredLevel: 64,
      usedFor: ["Lotus Blade"],
      recipes: [{ item: "Lotus Blade", materials: "3x Lotus Ore" }],
      tips: "Requires a better pickaxe to mine.",
      related: ["iron-ore", "copper-ore"]
    }
  ],

  /* ======================== CRAFTING → WEAPONS ======================== */
  weaponCategories: [
    { key: "light-weapon", label: "Light Weapon", icon: "sword" },
    { key: "staff", label: "Staff", icon: "wand" },
    { key: "heavy-weapon", label: "Heavy Weapon", icon: "axe" },
    { key: "fist", label: "Fist", icon: "fist" },
    { key: "scythe", label: "Scythe", icon: "scythe" },
    { key: "bow", label: "Bow", icon: "bow" }
  ],

  weapons: {
    "light-weapon": [
      {
        slug: "windcutter-dagger",
        name: "Windcutter Dagger",
        image: "https://images.unsplash.com/photo-1600717535275-0b3c8b1f9740?q=80&w=1200&auto=format&fit=crop",
        rarity: "rare",
        damage: 68, speed: 92, range: 30, critChance: 24,
        element: "Wind",
        passive: "Gale Step — every 4th hit grants a 15% movement speed burst for 3 seconds.",
        materials: [{ name: "Silver Ore", qty: 10 }, { name: "Iron Ore", qty: 4 }, { name: "Feather Shard", qty: 2 }],
        craftingCost: "480 Gold",
        requiredLevel: 14,
        upgradePath: ["Windcutter Dagger", "Windcutter Dagger +1", "Windcutter Dagger +2 (shifts to Storm element)"],
        pros: ["Very fast swing speed", "High mobility from passive", "Cheap to craft early"],
        cons: ["Low base damage per hit", "Weak against armored enemies"],
        bestBuild: "Pair with the Frostbind passive from a Staff sub-weapon to slow enemies you're kiting around.",
        related: ["emberfang-claws", "twin-fangs"]
      },
      {
        slug: "twin-fangs",
        name: "Twin Fangs",
        image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?q=80&w=1200&auto=format&fit=crop",
        rarity: "epic",
        damage: 84, speed: 88, range: 28, critChance: 31,
        element: "Poison",
        passive: "Venom Bleed — critical hits apply a stacking poison dealing 2% max HP per second.",
        materials: [{ name: "Mythril Ore", qty: 8 }, { name: "Silver Ore", qty: 12 }, { name: "Serpent Fang", qty: 3 }],
        craftingCost: "1,350 Gold",
        requiredLevel: 30,
        upgradePath: ["Twin Fangs", "Twin Fangs +1", "Twin Fangs +2 (adds AoE poison burst)"],
        pros: ["Excellent sustained DPS", "Great vs high-HP bosses", "Poison ignores most armor"],
        cons: ["Requires landing crits to shine", "Ramp-up time before poison peaks"],
        bestBuild: "Stack critical chance gear — Venom Bleed scales entirely off how often you crit.",
        related: ["windcutter-dagger", "emberfang-claws"]
      }
    ],
    "staff": [
      {
        slug: "frostbind-staff",
        name: "Frostbind Staff",
        image: "https://images.unsplash.com/photo-1594736797933-d0f06ba64752?q=80&w=1200&auto=format&fit=crop",
        rarity: "epic",
        damage: 71, speed: 55, range: 85, critChance: 12,
        element: "Frost",
        passive: "Frostbind — hits slow enemy movement and attack speed by 20% for 4 seconds.",
        materials: [{ name: "Mythril Ore", qty: 10 }, { name: "Crystal Shard", qty: 4 }, { name: "Copper Ore", qty: 6 }],
        craftingCost: "1,500 Gold",
        requiredLevel: 32,
        upgradePath: ["Frostbind Staff", "Frostbind Staff +1", "Frostbind Staff +2 (adds freeze chance)"],
        pros: ["Strong crowd control", "Great range", "Excellent in group dungeons"],
        cons: ["Low crit chance", "Squishy caster with no defensive passive"],
        bestBuild: "Pair with a Heavy Weapon user's Molten Core passive for a permanent freeze/burn lock.",
        related: ["wisp-cane"]
      },
      {
        slug: "wisp-cane",
        name: "Wisp Cane",
        image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?q=80&w=1200&auto=format&fit=crop",
        rarity: "uncommon",
        damage: 42, speed: 70, range: 70, critChance: 16,
        element: "Arcane",
        passive: "Wisp Trail — leaves a lingering orb that pulses minor damage for 3 seconds.",
        materials: [{ name: "Copper Ore", qty: 8 }, { name: "Silver Ore", qty: 3 }],
        craftingCost: "260 Gold",
        requiredLevel: 8,
        upgradePath: ["Wisp Cane", "Wisp Cane +1"],
        pros: ["Cheap early staff option", "Decent range for its tier"],
        cons: ["Damage falls off quickly past level 20"],
        bestBuild: "Great starter caster weapon while farming toward the Frostbind Staff materials.",
        related: ["frostbind-staff"]
      }
    ],
    "heavy-weapon": [
      {
        slug: "molten-core-hammer",
        name: "Molten Core Hammer",
        image: "https://images.unsplash.com/photo-1642751227960-6c85f9b40e3b?q=80&w=1200&auto=format&fit=crop",
        rarity: "legendary",
        damage: 145, speed: 28, range: 20, critChance: 9,
        element: "Fire",
        passive: "Molten Core — every 3rd swing erupts, dealing AoE burn damage over 5 seconds.",
        materials: [{ name: "Crystal Ore", qty: 12 }, { name: "Mythril Ore", qty: 14 }, { name: "Magma Core", qty: 1 }],
        craftingCost: "4,200 Gold",
        requiredLevel: 45,
        upgradePath: ["Molten Core Hammer", "Molten Core Hammer +1", "Molten Core Hammer +2 (burn spreads on kill)"],
        pros: ["Highest raw damage in its class", "AoE burn clears trash mobs fast", "Great boss DPS"],
        cons: ["Very slow swing speed", "Easy to get punished for overcommitting"],
        bestBuild: "Best used with a shield-tank offhand or alongside a group so you're not the only frontline target.",
        related: ["stonebreaker-maul", "windcutter-dagger"]
      },
      {
        slug: "stonebreaker-maul",
        name: "Stonebreaker Maul",
        image: "https://images.unsplash.com/photo-1591808216268-ce0b82787efd?q=80&w=1200&auto=format&fit=crop",
        rarity: "rare",
        damage: 110, speed: 34, range: 18, critChance: 6,
        element: "Earth",
        passive: "Tremor — heavy hits have a 25% chance to briefly stun.",
        materials: [{ name: "Gold Ore", qty: 12 }, { name: "Silver Ore", qty: 8 }],
        craftingCost: "900 Gold",
        requiredLevel: 24,
        upgradePath: ["Stonebreaker Maul", "Stonebreaker Maul +1"],
        pros: ["Reliable stun lock on trash mobs", "Good mid-game damage"],
        cons: ["Poor mobility while attacking"],
        bestBuild: "Solid dungeon clearing weapon before you can afford the Molten Core Hammer.",
        related: ["molten-core-hammer"]
      }
    ],
    "fist": [
      {
        slug: "emberfang-claws",
        name: "Emberfang Claws",
        image: "https://images.unsplash.com/photo-1610902757472-3b52f79c5e2c?q=80&w=1200&auto=format&fit=crop",
        rarity: "epic",
        damage: 76, speed: 95, range: 12, critChance: 28,
        element: "Fire",
        passive: "Combo Flame — every 5-hit combo ignites the target for burn damage.",
        materials: [{ name: "Mythril Ore", qty: 9 }, { name: "Gold Ore", qty: 6 }],
        craftingCost: "1,100 Gold",
        requiredLevel: 26,
        upgradePath: ["Emberfang Claws", "Emberfang Claws +1", "Emberfang Claws +2 (shorter combo window)"],
        pros: ["Fastest attack speed in the game", "Excellent single-target DPS combo"],
        cons: ["Very short range, high risk melee", "Combo resets if you get interrupted"],
        bestBuild: "Best for players comfortable dodge-weaving boss telegraphs at close range.",
        related: ["twin-fangs", "windcutter-dagger"]
      }
    ],
    "scythe": [
      {
        slug: "voidreaper-scythe",
        name: "Voidreaper Scythe",
        image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1200&auto=format&fit=crop",
        rarity: "mythical",
        damage: 132, speed: 46, range: 40, critChance: 20,
        element: "Void",
        passive: "Soul Harvest — killing blows heal you for 8% of your max HP.",
        materials: [{ name: "Crystal Ore", qty: 18 }, { name: "Mythril Ore", qty: 10 }, { name: "Void Fragment", qty: 2 }],
        craftingCost: "5,000 Gold",
        requiredLevel: 50,
        upgradePath: ["Voidreaper Scythe", "Voidreaper Scythe +1", "Voidreaper Scythe +2 (heal on any hit)"],
        pros: ["Best sustain weapon in the game", "Wide arcing swings hit multiple enemies", "High damage and range for its class"],
        cons: ["Extremely expensive to craft", "Requires end-game dungeon farming"],
        bestBuild: "Ideal for solo dungeon clears thanks to the self-healing on kills.",
        related: ["molten-core-hammer"]
      }
    ],
    "bow": [
      {
        slug: "stormcaller-bow",
        name: "Stormcaller Bow",
        image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=1200&auto=format&fit=crop",
        rarity: "epic",
        damage: 95, speed: 60, range: 100, critChance: 22,
        element: "Lightning",
        passive: "Chain Bolt — fully-charged shots arc lightning to two nearby enemies.",
        materials: [{ name: "Gold Ore", qty: 10 }, { name: "Mythril Ore", qty: 6 }, { name: "Storm Feather", qty: 3 }],
        craftingCost: "1,600 Gold",
        requiredLevel: 34,
        upgradePath: ["Stormcaller Bow", "Stormcaller Bow +1", "Stormcaller Bow +2 (chains to 3 targets)"],
        pros: ["Longest range in the game", "Great for group trash clear", "Safe kiting playstyle"],
        cons: ["Charge time can be interrupted", "Weaker single-target than melee options"],
        bestBuild: "Excellent in Nightmare Caverns where enemies cluster in tight corridors.",
        related: ["hunters-longbow"]
      },
      {
        slug: "hunters-longbow",
        name: "Hunter's Longbow",
        image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=1200&auto=format&fit=crop",
        rarity: "uncommon",
        damage: 58, speed: 65, range: 90, critChance: 18,
        element: "Physical",
        passive: "Steady Aim — standing still for 1s before firing grants +10% crit chance.",
        materials: [{ name: "Iron Ore", qty: 8 }, { name: "Silver Ore", qty: 4 }],
        craftingCost: "320 Gold",
        requiredLevel: 10,
        upgradePath: ["Hunter's Longbow", "Hunter's Longbow +1"],
        pros: ["Cheap and accessible early", "Reliable crit uptime if you play stationary"],
        cons: ["Falls off hard past level 25"],
        bestBuild: "A solid budget ranged option while saving materials for the Stormcaller Bow.",
        related: ["stormcaller-bow"]
      }
    ]
  },

  /* ======================== DUNGEONS ======================== */
  dungeons: [
    {
      slug: "sunken-quarry",
      name: "Sunken Quarry",
      banner: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1400&auto=format&fit=crop",
      level: "8 – 16",
      difficulty: "easy",
      boss: "Rockback Golem",
      enemies: ["Cave Crawler", "Silverback Rat", "Quarry Slime", "Rockback Golem (Boss)"],
      rewards: ["Silver Ore (guaranteed)", "Upgrade Stone (Tier 1)", "Sunken Quarry Access Badge"],
      recommendedGear: "Iron-tier weapon and armor, one healing potion",
      recommendedLevel: 10,
      drops: [{ item: "Silver Ore", chance: "100%" }, { item: "Gold Ore", chance: "18%" }, { item: "Quarry Vest (cosmetic)", chance: "4%" }],
      tips: "The Rockback Golem telegraphs its slam attack with a red glow — dodge left, not back, to avoid the follow-up shockwave.",
      gallery: [
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      slug: "frostpeak-ridge",
      name: "Frostpeak Ridge",
      banner: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1400&auto=format&fit=crop",
      level: "18 – 30",
      difficulty: "medium",
      boss: "Glacierwing Drake",
      enemies: ["Frost Wolf", "Ice Elemental", "Snow Bandit", "Glacierwing Drake (Boss)"],
      rewards: ["Gold Ore (guaranteed)", "Upgrade Stone (Tier 2)", "Frostpeak Cloak"],
      recommendedGear: "Silver-tier weapon, fire-resist armor recommended",
      recommendedLevel: 22,
      drops: [{ item: "Gold Ore", chance: "100%" }, { item: "Mythril Ore", chance: "12%" }, { item: "Drake Scale (cosmetic)", chance: "3%" }],
      tips: "The Drake's breath attack can be blocked entirely by standing behind one of the ice pillars scattered around the arena.",
      gallery: [
        "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      slug: "nightmare-caverns",
      name: "Nightmare Caverns",
      banner: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1400&auto=format&fit=crop",
      level: "40 – 50",
      difficulty: "nightmare",
      boss: "The Hollow Sovereign",
      enemies: ["Void Wraith", "Corrupted Miner", "Abyssal Hound", "The Hollow Sovereign (Boss)"],
      rewards: ["Crystal Ore (guaranteed)", "Upgrade Stone (Tier 5)", "Sovereign's Crown"],
      recommendedGear: "Mythril-tier weapon and armor, full potion loadout, group of 3+ recommended",
      recommendedLevel: 45,
      drops: [{ item: "Crystal Ore", chance: "100%" }, { item: "Void Fragment", chance: "22%" }, { item: "Sovereign's Crown (cosmetic)", chance: "1%" }],
      tips: "Phase 2 of the Hollow Sovereign fight summons adds every 25% HP — prioritize clearing them before returning damage to the boss.",
      gallery: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ],

  /* ======================== REDEEM CODES ======================== */
  codes: {
    active: [
      { code: "IRONSOULWEEKEND18", reward: "Reward not verified", expires: "Unknown" },
      { code: "SEASON2ENDING", reward: "Reward not verified", expires: "Unknown" },
      { code: "SCYTHEWEAPON", reward: "Reward not verified", expires: "Unknown" },
      { code: "IRONSOULWEEKEND17", reward: "Reward not verified", expires: "Unknown" },
      { code: "NEWMAP", reward: "Reward not verified", expires: "Unknown" },
    ],
    expired: [
      { code: "LAUNCHWEEK", reward: "1,000 Gold", expires: "2026-06-10" },
      { code: "SPRINGEVENT", reward: "Cherry Blossom Pickaxe Skin", expires: "2026-05-01" },
      { code: "BETAWAVE", reward: "Beta Tester Title", expires: "2026-03-15" }
    ]
  },

  /* ======================== NEWS ======================== */
  news: [
    {
      slug: "update-patch-preview",
      title: "Update Patch Preview",
      category: "Update Patch",
      cover: "Images/update10.6.jpg",
      excerpt: "New Weapon Type - Scythe, Tartarus Hell Mode Update, Glory Store, and more!",
      date: "2026-07-22",
      body: `🔥 **UPDATE** 🔥

⚔️ **Senjata Baru: Scythe**
• Gabungan kekuatan Heavy & Light
• Scythe eksklusif cuma bisa ditempa di Shattered Land

😈 **Tartarus: Hell Mode Update**
• Hell Ores baru
• Bisa tempa Hell Weapons & Armours baru

🛒 **Glory Store**
• Ada Special Weapon baru!

⚙️ **Extra**
• Musuh yang nyangkut bakal otomatis teleport ke kamu
• Season II selesai dalam 7 hari!`
    },
    {
      slug: "new-update",
      title: "Update 10.6 Notes: NEW UPDATE",
      category: "Patch Notes",
      cover: "Images/update10.6.jpg",
      excerpt: "Frostpeak Ridge enemies have been rebalanced, the Frostbind Staff passive got a duration nerf, and we've fixed the Copper Ore despawn bug.",
      date: "2026-08-01",
      body: "Season II is coming to a close, and the Endless Tower will be closing along with it. We've heard all your feedback, and we promise to bring back a better Endless Tower in Season III! Our top priorities are making it less time consuming, fixing bugs, and most importantly making it more fun. We’re also adding a Season Recap page, where you can look back at your highest floor reached and total damage dealt during Season II in Endless Tower! The Glory Store is getting an item refresh, along with a brand-new exclusive weapon! You’ll also be able to try Glory Store items for a limited time before deciding whether to get them. Tip: Your pity progress and Glory Cores from the Glory Wheel will be saved permanently and will not reset! Please note: Trial items cannot be enhanced, enchanted, upgraded, or ascended. They also won’t contribute to your total Power. A new daily sign-in event is on the way! More regular events are coming soon, so stay tuned! Scrolls can now be traded and now provide more Power! The complete skill tree for Fist Weapons has been added! Added an item-locking feature to the inventory. Lock your valuable items so you don’t accidentally sell them! You can now choose how many items you want to sell to merchants at once."
    },
  ]
};
