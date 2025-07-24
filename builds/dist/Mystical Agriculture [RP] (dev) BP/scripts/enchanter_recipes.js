import { EnchantmentTypes, ItemTypes, world } from "@minecraft/server";

export const enchanter_recipes = {
    //Soul Speed
    "soul_speed1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:soul_speed",
        level: 1,
        ingredients: {
            "minecraft:soul_soil": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "soul_speed2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:soul_speed",
        level: 2,
        ingredients: {
            "minecraft:soul_soil": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "soul_speed3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:soul_speed",
        level: 3,
        ingredients: {
            "minecraft:soul_soil": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    //Piercing
    "piercing1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:piercing",
        level: 1,
        ingredients: {
            "minecraft:bow": 1,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "piercing2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:piercing",
        level: 1,
        ingredients: {
            "minecraft:bow": 1,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "piercing3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:piercing",
        level: 1,
        ingredients: {
            "minecraft:bow": 1,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "piercing4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:piercing",
        level: 1,
        ingredients: {
            "minecraft:bow": 1,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    //Impaling
    "impaling1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:impaling",
        level: 1,
        ingredients: {
            "minecraft:iron_ingot": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "impaling2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:impaling",
        level: 2,
        ingredients: {
            "minecraft:iron_ingot": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "impaling3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:impaling",
        level: 3,
        ingredients: {
            "minecraft:iron_ingot": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "impaling4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:impaling",
        level: 4,
        ingredients: {
            "minecraft:iron_ingot": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "impaling5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:impaling",
        level: 5,
        ingredients: {
            "minecraft:iron_ingot": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    //Multishot
    "multishot": {
        result: "minecraft:enchanted_book",
        type: "minecraft:multishot",
        level: 1,
        ingredients: {
            "minecraft:bow": 1,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    //Efficiency
    "efficiency1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:efficiency",
        level: 1,
        ingredients: {
            "minecraft:redstone": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "efficiency2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:efficiency",
        level: 2,
        ingredients: {
            "minecraft:redstone": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "efficiency3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:efficiency",
        level: 3,
        ingredients: {
            "minecraft:redstone": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "efficiency4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:efficiency",
        level: 4,
        ingredients: {
            "minecraft:redstone": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "efficiency5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:efficiency",
        level: 5,
        ingredients: {
            "minecraft:redstone": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    //Knockback
    "knockback1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:knockback",
        level: 1,
        ingredients: {
            "minecraft:piston": 4,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "knockback2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:knockback",
        level: 2,
        ingredients: {
            "minecraft:piston": 8,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    //Luck Of The Sea
    "luckOfTheSea1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:luck_of_the_sea",
        level: 1,
        ingredients: {
            "minecraft:lapis_lazuli": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "luckOfTheSea2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:luck_of_the_sea",
        level: 2,
        ingredients: {
            "minecraft:lapis_lazuli": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "luckOfTheSea3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:luck_of_the_sea",
        level: 3,
        ingredients: {
            "minecraft:lapis_lazuli": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    //Fire Protection
    "fireProtection1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_protection",
        level: 1,
        ingredients: {
            "minecraft:magma_cream": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "fireProtection2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_protection",
        level: 2,
        ingredients: {
            "minecraft:magma_cream": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "fireProtection3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_protection",
        level: 3,
        ingredients: {
            "minecraft:magma_cream": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "fireProtection4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_protection",
        level: 4,
        ingredients: {
            "minecraft:magma_cream": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    // Fortune
    "fortune1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fortune",
        level: 1,
        ingredients: {
            "minecraft:gold_ingot": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "fortune2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fortune",
        level: 1,
        ingredients: {
            "minecraft:gold_ingot": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "fortune3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fortune",
        level: 1,
        ingredients: {
            "minecraft:gold_ingot": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    //Sharpness
    "sharpness1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:sharpness",
        level: 1,
        ingredients: {
            "minecraft:quartz": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "sharpness2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:sharpness",
        level: 2,
        ingredients: {
            "minecraft:quartz": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "sharpness3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:sharpness",
        level: 3,
        ingredients: {
            "minecraft:quartz": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "sharpness4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:sharpness",
        level: 4,
        ingredients: {
            "minecraft:quartz": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "sharpness5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:sharpness",
        level: 5,
        ingredients: {
            "minecraft:quartz": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    // Projectile Protection
    "projectileProtecion1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:projectile_protection",
        level: 1,
        ingredients: {
            "minecraft:bone": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "projectileProtecion2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:projectile_protection",
        level: 2,
        ingredients: {
            "minecraft:bone": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "projectileProtecion3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:projectile_protection",
        level: 3,
        ingredients: {
            "minecraft:bone": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "projectileProtecion4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:projectile_protection",
        level: 4,
        ingredients: {
            "minecraft:quartz": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    // Channeling
    "channeling": {
        result: "minecraft:enchanted_book",
        type: "minecraft:channeling",
        level: 1,
        ingredients: {
            "minecraft:lightning_rod": 1,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    // Depth Strider
    "depthStrider1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:depth_strider",
        level: 1,
        ingredients: {
            "minecraft:prismarine_shard": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "depthStrider2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:depth_strider",
        level: 2,
        ingredients: {
            "minecraft:prismarine_shard": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "depthStrider3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:depth_strider",
        level: 3,
        ingredients: {
            "minecraft:prismarine_shard": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    // Thorns
    "thorns1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:thorns",
        level: 1,
        ingredients: {
            "minecraft:rose_bush": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "thorns2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:thorns",
        level: 2,
        ingredients: {
            "minecraft:rose_bush": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "thorns3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:thorns",
        level: 3,
        ingredients: {
            "minecraft:rose_bush": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    // Looting
    "looting1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:looting",
        level: 1,
        ingredients: {
            "minecraft:emerald": 8,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "looting2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:looting",
        level: 2,
        ingredients: {
            "minecraft:emerald": 16,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "looting3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:looting",
        level: 3,
        ingredients: {
            "minecraft:emerald": 24,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "loyalty1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:lead": 6,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "loyalty2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 2,
        ingredients: {
            "minecraft:lead": 12,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "loyalty3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 3,
        ingredients: {
            "minecraft:lead": 18,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "riptide1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:ender_pearl": 4,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "riptide2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 2,
        ingredients: {
            "minecraft:ender_pearl": 8,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "riptide3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 3,
        ingredients: {
            "minecraft:ender_pearl": 12,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "respiration1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:glass_bottle": 18,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "respiration2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:glass_bottle": 36,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "respiration3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:glass_bottle": 54,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "quickCharge1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:sugar": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "quickCharge2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 2,
        ingredients: {
            "minecraft:sugar": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "quickCharge3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 3,
        ingredients: {
            "minecraft:sugar": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "flame": {
        result: "minecraft:enchanted_book",
        type: "minecraft:loyalty",
        level: 1,
        ingredients: {
            "minecraft:blaze_powder": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "protection1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:protection",
        level: 1,
        ingredients: {
            "minecraft:leather": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "protection2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:protection",
        level: 2,
        ingredients: {
            "minecraft:leather": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "protection3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:protection",
        level: 3,
        ingredients: {
            "minecraft:blaze_powder": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "protection4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:protection",
        level: 4,
        ingredients: {
            "minecraft:blaze_powder": 64,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "unbreaking1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:unbreaking",
        level: 1,
        ingredients: {
            "minecraft:obsidian": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "unbreaking2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:unbreaking",
        level: 2,
        ingredients: {
            "minecraft:obsidian": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "unbreaking3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:unbreaking",
        level: 3,
        ingredients: {
            "minecraft:obsidian": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "power1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:power",
        level: 1,
        ingredients: {
            "minecraft:flint": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "power2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:power",
        level: 2,
        ingredients: {
            "minecraft:flint": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "power3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:power",
        level: 3,
        ingredients: {
            "minecraft:flint": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "power4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:power",
        level: 4,
        ingredients: {
            "minecraft:flint": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "power5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:power",
        level: 5,
        ingredients: {
            "minecraft:flint": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    "infinity": {
        result: "minecraft:enchanted_book",
        type: "minecraft:infinity",
        level: 1,
        ingredients: {
            "minecraft:arrow": 64,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    ////
    "codlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:cod": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "codlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:cod": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "codlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:cod": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "cookedCodlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:cooked_cod": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "cookedCodlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:cooked_cod": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "cookedCodlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:cooked_cod": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "Salmonlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:salmon": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "Salmonlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:salmon": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "Salmonlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:salmon": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "cookedSalmonlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:cooked_salmon": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "cookedSalmonlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:cooked_salmon": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "cookedalmonlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:cooked_salmon": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "pufferfishlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:pufferfish": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "pufferfishlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:pufferfish": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "pufferfishlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:pufferfish": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "tropicalFishlure1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 1,
        ingredients: {
            "minecraft:tropical_fish": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "tropicalFishlure2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 2,
        ingredients: {
            "minecraft:tropical_fish": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "tropicalFishlure3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:lure",
        level: 3,
        ingredients: {
            "minecraft:tropical_fish": 48,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    ////
    "mending": {
        result: "minecraft:enchanted_book",
        type: "minecraft:mending",
        level: 3,
        ingredients: {
            "minecraft:wither_skeleton_skull": 3,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "baneOfArthropods1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:bane_of_arthropods",
        level: 1,
        ingredients: {
            "minecraft:spider_eye": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "baneOfArthropods2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:bane_of_arthropods",
        level: 2,
        ingredients: {
            "minecraft:spider_eye": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "baneOfArthropods3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:bane_of_arthropods",
        level: 3,
        ingredients: {
            "minecraft:spider_eye": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "baneOfArthropods4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:bane_of_arthropods",
        level: 4,
        ingredients: {
            "minecraft:spider_eye": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "baneOfArthropods5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:bane_of_arthropods",
        level: 5,
        ingredients: {
            "minecraft:spider_eye": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    "featherFalling1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:feather_falling",
        level: 1,
        ingredients: {
            "minecraft:feather": 16,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "featherFalling2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:feather_falling",
        level: 2,
        ingredients: {
            "minecraft:feather": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "featherFalling3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:feather_falling",
        level: 3,
        ingredients: {
            "minecraft:feather": 32,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "featherFalling4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:feather_falling",
        level: 4,
        ingredients: {
            "minecraft:feather": 32,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "swiftSneak1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:swift_sneak",
        level: 1,
        ingredients: {
            "minecraft:cocoa_beans": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "swiftSneak2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:swift_sneak",
        level: 1,
        ingredients: {
            "minecraft:cocoa_beans": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "swiftSneak3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:swift_sneak",
        level: 1,
        ingredients: {
            "minecraft:cocoa_beans": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "silkTouch": {
        result: "minecraft:enchanted_book",
        type: "minecraft:silk_touch",
        level: 1,
        ingredients: {
            "minecraft:slime_ball": 32,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "frostWalker1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:frost_walker",
        level: 1,
        ingredients: {
            "minecraft:ice": 24,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "frostWalker2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:frost_walker",
        level: 2,
        ingredients: {
            "minecraft:ice": 48,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "fireAspect1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_aspect",
        level: 1,
        ingredients: {
            "minecraft:blaze_rod": 8,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "fireAspect2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:fire_aspect",
        level: 2,
        ingredients: {
            "minecraft:blaze_rod": 16,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "smite1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:smite",
        level: 1,
        ingredients: {
            "minecraft:rotten_flesh": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "smite2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:smite",
        level: 2,
        ingredients: {
            "minecraft:rotten_flesh": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "smite3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:smite",
        level: 3,
        ingredients: {
            "minecraft:rotten_flesh": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "smite4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:smite",
        level: 4,
        ingredients: {
            "minecraft:rotten_flesh": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "smite5": {
        result: "minecraft:enchanted_book",
        type: "minecraft:smite",
        level: 5,
        ingredients: {
            "minecraft:rotten_flesh": 60,
            "mysticalagriculture:experience_essence_64": 5,
            "minecraft:book": 1
        }
    },
    "blastProtection1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:blast_protection",
        level: 1,
        ingredients: {
            "minecraft:gunpowder": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "blastProtection2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:blast_protection",
        level: 1,
        ingredients: {
            "minecraft:gunpowder": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "blastProtection3": {
        result: "minecraft:enchanted_book",
        type: "minecraft:blast_protection",
        level: 1,
        ingredients: {
            "minecraft:gunpowder": 36,
            "mysticalagriculture:experience_essence_64": 3,
            "minecraft:book": 1
        }
    },
    "blastProtection4": {
        result: "minecraft:enchanted_book",
        type: "minecraft:blast_protection",
        level: 1,
        ingredients: {
            "minecraft:gunpowder": 48,
            "mysticalagriculture:experience_essence_64": 4,
            "minecraft:book": 1
        }
    },
    "punch1": {
        result: "minecraft:enchanted_book",
        type: "minecraft:punch",
        level: 1,
        ingredients: {
            "minecraft:string": 12,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
    "punch2": {
        result: "minecraft:enchanted_book",
        type: "minecraft:punch",
        level: 2,
        ingredients: {
            "minecraft:string": 24,
            "mysticalagriculture:experience_essence_64": 2,
            "minecraft:book": 1
        }
    },
    "aquaAffinity": {
        result: "minecraft:enchanted_book",
        type: "minecraft:aqua_affinity",
        level: 2,
        ingredients: {
            "minecraft:waterlily": 6,
            "mysticalagriculture:experience_essence_64": 1,
            "minecraft:book": 1
        }
    },
};

world.afterEvents.worldLoad.subscribe(() => {

    const allItems = ItemTypes.getAll();

    Object.entries(enchanter_recipes).forEach(([key, recipe]) => {
        // Verificar encantamientos existentes
        const enchantmentType = EnchantmentTypes.get(recipe.type);
        if (!enchantmentType) {
            console.warn(`§dMystical §5Agriculture§r - §cEnchantment not found: ${recipe.type}`);
        }

        // Verificar si los ingredientes existen
        Object.keys(recipe.ingredients).forEach(ingredient => {
            if (!allItems.some(i => i.id === ingredient)) {
                console.warn(`§dMystical §5Agriculture§r - §cItem not found: ${ingredient}`);
            }
        });
    });
});