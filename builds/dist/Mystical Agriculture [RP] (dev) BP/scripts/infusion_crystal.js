import * as server from "@minecraft/server"

server.world.beforeEvents.itemUse.subscribe(result => {
    const essenceConversions = {
        "mysticalagriculture:inferium_essence": {
            result: "mysticalagriculture:prudentium_essence",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:prudentium_essence": {
            result: "mysticalagriculture:tertium_essence",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:tertium_essence": {
            result: "mysticalagriculture:imperium_essence",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:imperium_essence": {
            result: "mysticalagriculture:supremium_essence",
            cost: 4,
            needsCrystal: true
        },

        "mysticalagriculture:inferium_block": {
            result: "mysticalagriculture:prudentium_block",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:prudentium_block": {
            result: "mysticalagriculture:tertium_block",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:tertium_block": {
            result: "mysticalagriculture:imperium_block",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:imperium_block": {
            result: "mysticalagriculture:supremium_block",
            cost: 4,
            needsCrystal: true
        },
        "mysticalagriculture:experience_essence": {
            result: "mysticalagriculture:experience_essence_64",
            cost: 64,
            needsCrystal: false
        },
    };


    if (!result.itemStack) return;

    let itemStack = result.itemStack;
    let amount = itemStack.amount;

    const conversion = essenceConversions[itemStack.typeId];
    if (!conversion) return;

    let offhandItemStack = result.source.getComponent("equippable").getEquipment(server.EquipmentSlot.Offhand);

    if (conversion.needsCrystal) {
        if (!offhandItemStack) return;
        if (offhandItemStack.typeId != "mysticalagriculture:infusion_crystal" &&
            offhandItemStack.typeId != "mysticalagriculture:master_infusion_crystal") return;
    }

    const updateMainhandStack = (remainingAmount) => {
        if (remainingAmount === 0) {
            result.source.getComponent("equippable").setEquipment(server.EquipmentSlot.Mainhand, null);
        } else {
            itemStack.amount = remainingAmount;
            result.source.getComponent("equippable").setEquipment(server.EquipmentSlot.Mainhand, itemStack);
        }
    };

    const updateOffhandStack = (batches) => {
        let lore = offhandItemStack.getLore();
        if (lore && lore.length > 0) {
            let usesMatch = lore[0].match(/§7(\d+)\s+Uses\s+Left/);
            if (usesMatch) {
                let usesLeft = parseInt(usesMatch[1]);
                usesLeft -= batches;
                if (usesLeft > 0) {
                    offhandItemStack.setLore([`§7${usesLeft} Uses Left`]);
                    result.source.getComponent("equippable").setEquipment(server.EquipmentSlot.Offhand, offhandItemStack);
                } else {
                    result.source.getComponent("equippable").setEquipment(server.EquipmentSlot.Offhand, null);
                }
            }
        }
    };

    const convertEssences = (batches) => {
        for (let i = 0; i < batches; i++) {
            result.source.getComponent("inventory").container.addItem(new server.ItemStack(conversion.result, 1));
        }
    };


    server.system.run(() => {
        const isSneaking = result.source.isSneaking;
        const batchSize = conversion.cost;
        const batches = Math.floor(amount / batchSize);
        const totalConverted = batches * batchSize;
        const remaining = amount - totalConverted;

        if (isSneaking && batches > 0) {
            updateMainhandStack(remaining);

            if (conversion.needsCrystal && offhandItemStack?.typeId !== "mysticalagriculture:master_infusion_crystal") {
                updateOffhandStack(batches);
            }

            for (let i = 0; i < batches; i++) {
                result.source.getComponent("inventory").container.addItem(new server.ItemStack(conversion.result, 1));
            }
        } else if (!isSneaking && amount >= batchSize) {
            updateMainhandStack(amount - batchSize);

            if (conversion.needsCrystal && offhandItemStack?.typeId !== "mysticalagriculture:master_infusion_crystal") {
                updateOffhandStack(1);
            }

            convertEssences(1);
        }
    });
});