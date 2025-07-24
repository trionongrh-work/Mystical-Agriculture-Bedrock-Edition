import { world, ItemStack, system, EnchantmentTypes, GameMode } from "@minecraft/server";
import { enchanter_recipes } from "./enchanter_recipes";

world.afterEvents.playerPlaceBlock.subscribe(result => {

    if (result.block.typeId != "mysticalagriculture:enchanter") return

    let entity = result.player.dimension.spawnEntity("mysticalagriculture:enchanter_entity", result.block.center())
    entity.nameTag = "§6§2§g§e§6§2§g§e§6"
})

world.afterEvents.entityHitEntity.subscribe(result => {
    if (result.hitEntity.typeId != "mysticalagriculture:enchanter_entity") return

    result.hitEntity.runCommand("setblock ~ ~ ~ air destroy")
    if (result.damagingEntity.getGameMode() == GameMode.survival)
        result.hitEntity.dimension.spawnItem(new ItemStack("mysticalagriculture:enchanter", 1), result.hitEntity.location)
})

world.afterEvents.playerBreakBlock.subscribe(result => {
    if (result.brokenBlockPermutation.type.id != "mysticalagriculture:enchanter") return

    if (result.player.getGameMode() == GameMode.survival) {
        result.block.dimension.spawnItem(new ItemStack("mysticalagriculture:enchanter", 1), result.block.center())
    }
})

world.afterEvents.worldLoad.subscribe(() => {
    const recipes = enchanter_recipes

    const recipeSlots = [0, 1, 2];
    const resultSlot = 3;
    const crafting_entity_type = "mysticalagriculture:enchanter_entity";

    // Mapa para marcar las entidades que ya tienen un ítem craftado pendiente de consumo.
    const craftedEntities = new Map();

    // Verifica la receta en el inventario actual.
    function checkRecipe(inventory) {
        let matchedRecipe = null;
        // Ordenamos las recetas de mayor a menor requerimiento (suma total de ingredientes)
        const sortedRecipes = Object.entries(recipes)
            .sort(([, a], [, b]) => {
                const sumA = Object.values(a.ingredients).reduce((sum, val) => sum + val, 0);
                const sumB = Object.values(b.ingredients).reduce((sum, val) => sum + val, 0);
                return sumB - sumA;
            });
        for (const [recipeKey, recipe] of sortedRecipes) {
            // Se usa el orden de inserción de las claves en ingredients
            const ingredientOrder = Object.keys(recipe.ingredients);
            let valid = true;
            const slotMapping = {};
            for (let i = 0; i < recipeSlots.length; i++) {
                const slot = recipeSlots[i];
                const item = inventory.getItem(slot);
                const expectedType = ingredientOrder[i];
                if (!item) {
                    valid = false;
                    break;
                }
                if (item.typeId !== expectedType) {
                    valid = false;
                    break;
                }
                // Verifica que la cantidad en el slot cumpla el requisito.
                if (item.amount < recipe.ingredients[expectedType]) {
                    valid = false;
                    break;
                }
                slotMapping[expectedType] = { slot, amount: item.amount };
            }
            if (valid) {
                // console.warn(`Receta válida encontrada: ${recipeKey}`);
                matchedRecipe = { recipe, slotMapping };
                break;
            }
        }
        return matchedRecipe;
    }

    // Crea el ítem resultado en el slot designado y marca la entidad como "craftada".
    function craftItem(inventory, recipeInfo, entityId) {
        const { recipe } = recipeInfo;
        let item = new ItemStack(recipe.result, 1);
        if (recipe.type) {
            const enchantmentType = EnchantmentTypes.get(recipe.type);
            if (enchantmentType) {
                item.getComponent("minecraft:enchantable").addEnchantment({ type: enchantmentType, level: recipe.level });
            }
        }
        inventory.setItem(resultSlot, item);

        craftedEntities.set(entityId, recipe);
    }

    // Consume los ingredientes usados en la receta.
    function consumeIngredients(inventory, recipe) {
        const ingredientOrder = Object.keys(recipe.ingredients);
        for (let i = 0; i < recipeSlots.length; i++) {
            const slot = recipeSlots[i];
            const item = inventory.getItem(slot);
            if (item) {
                const expectedType = ingredientOrder[i];
                const required = recipe.ingredients[expectedType];
                if (item.amount > required) {
                    item.amount -= required;
                    inventory.setItem(slot, item);
                } else {
                    inventory.setItem(slot, null);
                }
            }
        }
    }

    // Bucle principal: se ejecuta cada 2 ticks y procesa cada entidad con inventario de crafteo.
    system.runInterval(() => {
        const dimensions = ["overworld", "nether", "the_end"].map(name => world.getDimension(name));
        const craftingEntities = dimensions.flatMap(dim => dim.getEntities({ type: crafting_entity_type }));
        for (const entity of craftingEntities) {
            try {
                const inventoryComponent = entity.getComponent("minecraft:inventory");
                if (!inventoryComponent?.container) continue;
                const inventory = inventoryComponent.container;
                const entityId = entity.id;
                const resultItem = inventory.getItem(resultSlot);
                const recipeInfo = checkRecipe(inventory);

                if (resultItem) {
                    // Si hay ítem en el slot de resultado...
                    if (!recipeInfo) {
                        // Si ya no se cumple la receta, se reemplaza el resultado por "mysticalagriculture:nothing"
                        inventory.setItem(resultSlot, new ItemStack("mysticalagriculture:nothing", 1));
                        craftedEntities.delete(entityId);
                    } else {
                        // Si se cumple una receta...
                        if (craftedEntities.has(entityId)) {
                            const previousRecipe = craftedEntities.get(entityId);
                            // Si la receta nueva es diferente de la previamente craftada, se actualiza el resultado.
                            if (previousRecipe !== recipeInfo.recipe) {
                                craftItem(inventory, recipeInfo, entityId);
                            }
                        } else {
                            // Si no se tiene registro previo, se actualiza el resultado.
                            craftItem(inventory, recipeInfo, entityId);
                        }
                    }
                } else {
                    // Si NO hay ítem en el slot de resultado...
                    if (craftedEntities.has(entityId)) {

                        entity.runCommand("particle mysticalagriculture:enchanter_particle ~ ~ ~")
                        entity.runCommand("playsound hit.basalt @a[r=8] ~ ~ ~ 8 0.2")
                        // Se asume que el jugador retiró el ítem, por lo que se consumen los ingredientes.
                        const craftedRecipe = craftedEntities.get(entityId);
                        consumeIngredients(inventory, craftedRecipe);
                        craftedEntities.delete(entityId);

                        // Luego, se coloca "nothing" en el slot.
                        inventory.setItem(resultSlot, new ItemStack("mysticalagriculture:nothing", 1));
                    } else if (recipeInfo) {
                        // Si hay receta válida y aún no se craftó, se crea el resultado.
                        craftItem(inventory, recipeInfo, entityId);
                    } else {
                        // Si no hay receta válida y no hay ítem en el slot, se coloca "nothing".
                        inventory.setItem(resultSlot, new ItemStack("mysticalagriculture:nothing", 1));
                    }
                }
            } catch (e) {
                console.warn(e)
            }
        }
    }, 2);
});
