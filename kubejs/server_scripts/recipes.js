

ServerEvents.recipes(e => {

    /*e.remove({ output : 'simpleshops:simple_shop'})
    e.shaped(Item.of('simpleshops:simple_shop'), [
        'SBS',
        'PCP',
        'PPP'
    ], {
        S: '#minecraft:wooden_slabs',
        B: 'minecraft:smooth_stone',
        C: '#forge:chests',
        P: '#minecraft:planks'
    }) */

    //const compass = ['naturescompass:naturescompass', 'explorerscompass:explorerscompass']
    //removeOutputs(compass);
    //e.shaped(Item.of('naturescompass:naturescompass'), [
    //    'BCS',
    //    'CXS',
    //    'IIS'
    //], {
    //    B: 'alexscaves:cave_book',
    //    C: 'alexscaves:cave_codex',
    //    S: '#minecraft:saplings',
    //    X: 'minecraft:compass',
    //    I: 'irons_spellbooks:arcane_ingot'
    //})
    //e.shaped(Item.of('explorerscompass:explorerscompass'), [
    //    'MFC',
    //    'AXC',
    //    'IIC'
    //], {
    //    M: 'minecraft:filled_map',
    //    F: 'irons_spellbooks:furled_map',
    //    C: 'minecraft:cobweb',
    //    A: 'via_romana:charting_map',
    //    X: 'minecraft:compass',
    //    I: 'irons_spellbooks:arcane_ingot'
    //})
//
    const removedArrows = ['overgeared:diamond_arrow', 'overgeared:diamond_shard', 'overgeared:iron_arrow_head', 'overgeared:iron_arrow']
    removeOutputs(removedArrows)
    ///////////////////////
    // EARLY PROGRESSION //
    ///////////////////////
    const removedStarterItems = ['overgeared:stone_hammer_head', 'overgeared:knappable_rock', 'overgeared:stone_pickaxe_head', 'overgeared:stone_axe_head', 'overgeared:stone_shovel_head', 'overgeared:stone_hoe_head']
    const removedCopperTools = ['overgeared:copper_boots', 'overgeared:copper_leggings', 'overgeared:copper_helmet', 'overgeared:copper_chestplate', 'caverns_and_chasms:copper_shovel', 'caverns_and_chasms:copper_pickaxe', 'caverns_and_chasms:copper_axe', 'caverns_and_chasms:copper_hoe', 'caverns_and_chasms:copper_sword']
    removeOutputs(removedStarterItems)
    removeOutputs(removedCopperTools)




//*Normal Tool Recipes
    e.shaped(Item.of('minecraft:stone_pickaxe', 1, {Damage: 3}), [
        "AAA",
        " S ",
        " S "
    ], {
        A: "#forge:cobblestone",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('minecraft:stone_axe', 1, {Damage: 3}), [
        "AA ",
        "AS ",
        " S "
    ], {
        A: "#forge:cobblestone",
        S: "minecraft:stick"
    })

    e.shaped(Item.of('overgeared:copper_pickaxe', 1, {Damage: 15}), [
        "AAA",
        " S ",
        " S "
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_shovel', 1, {Damage: 15}), [
        "A",
        "S",
        "S"
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_axe', 1, {Damage: 15}), [
        "AA ",
        "AS ",
        " S "
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_axe', 1, {Damage: 15}), [
        " AA",
        " SA",
        " S "
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_hoe', 1, {Damage: 15}), [
        "AA ",
        " S ",
        " S "
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_hoe', 1, {Damage: 15}), [
        " AA",
        " S ",
        " S "
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    e.shaped(Item.of('overgeared:copper_sword', 1, {Damage: 15}), [
        "A",
        "A",
        "S"
    ], {
        A: "minecraft:copper_ingot",
        S: "minecraft:stick"
    })
    /*
    e.shaped(Item.of('overgeared:copper_axe_head'), [
        "II",
        "I "
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_axe_head'), [
        "II",
        " I"
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_pickaxe_head'), [
        "III"
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_sword_blade'), [
        "I",
        "I"
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_shovel_head'), [
        " I",
        "I "
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_hoe_head'), [
        "II"
    ], {
        I: "minecraft:copper_ingot"
    })
    e.shaped(Item.of('overgeared:copper_hammer_head'), [
        "I ",
        " I"
    ], {
        I: "minecraft:copper_ingot"
    })
        */




    const lockpicks = ['locks:wood_lock_pick', 'locks:iron_lock_pick', 'locks:steel_lock_pick', 'locks:gold_lock_pick', 'locks:diamond_lock_pick'];
    removeOutputs(lockpicks);
    e.shaped(Item.of('locks:wood_lock_pick', 2, '{Strength:0.77}'), [
        ' A ',
        'A A',
        'AA '
    ], {
        A: 'minecraft:stick'
    });
    e.shaped(Item.of('locks:iron_lock_pick', 2, '{Strength:0.88}'), [
        ' A ',
        'A A',
        'AA '
    ], {
        A: 'minecraft:iron_nugget'
    });
    e.shaped(Item.of('locks:steel_lock_pick', 4, '{Strength:0.99}'), [
        ' A ',
        'A A',
        'AA '
    ], {
        A: 'overgeared:steel_nugget'
    }); 


    

    // GRAPPLING HOOKS
    e.remove({ output: 'yo_hooks:iron_hook_head' })
    e.custom({
            "category": "misc",
            "tier": "stone",
            "hammering": 3,
            "has_quality": false,
            "needs_minigame": false,
            "need_quenching": true,
            "pattern": [
                "II",
                "IL"
            ],
            "quality_difficulty": "master",
            "key": {
                "I": {
                    "item": "overgeared:heated_steel_ingot"
                },
                "L": {
                    "item": "overgeared:steel_nugget"
                }
            },
            "result": {
                "item": "yo_hooks:iron_hook_head"
            },
            "result_failed": {
                "item": "overgeared:steel_nugget"
            },
            "show_notification": true,
            "type": "overgeared:forging",
        })


    e.remove({ output: 'minecraft:shield'})
        e.custom({
            "category": "misc",
            "tier": "stone",
            "hammering": 3,
            "has_quality": true,
            "needs_minigame": true,
            "need_quenching": true,
            "pattern": [
                "III",
                "ILI",
                "III"
            ],
            "quality_difficulty": "master",
            "key": {
                "I": {
                    "item": "overgeared:heated_iron_ingot"
                },
                "L": {
                    "item": "minecraft:leather"
                }
            },
            "result": {
                "item": "minecraft:shield"
            },
            "result_failed": {
                "item": "minecraft:iron_nugget"
            },
            "show_notification": true,
            "type": "overgeared:forging",
        })

    //this recipe uses 1x emerald, 1x gold ingot, 1x functionality:vex_essence to make 8x 'minecraft:experience_bottle'
    e.shapeless(Item.of('minecraft:experience_bottle', 8), [Item.of('emerald'), Item.of('gold_ingot'), Item.of('functionality:vex_essence')])
    
    ///////////////////////////////////////////
    // FLINT N' POWDER RECIPES (GUN RECIPES) //
    ///////////////////////////////////////////
    
    // => Make Flint and Powder appealing rather than bow and arrows

    // +> Increase Bullet Crafting Yield
    e.remove({ output: 'flintnpowder:copper_roundshot_item' })
    e.shaped(Item.of('flintnpowder:copper_roundshot_item', 16), [
        "II",
        "II"
    ], {
        I: "minecraft:copper_ingot"
    })

    e.remove({ output: 'flintnpowder:steel_barrel'})
    e.shaped(Item.of("flintnpowder:steel_barrel"), [
        "  I",
        " I ",
        "D  "
    ], {
        I: "overgeared:steel_ingot",
        D: "flintnpowder:diamond_bore_drill"
    })
    

    e.remove({ output: 'flintnpowder:palladium_green' });
    e.shapeless('flintnpowder:palladium_green', ['flintnpowder:oil_flask', 'flintnpowder:blazing_powder'])
    
    
    e.remove( {output: 'flintnpowder:blazing_powder' })
    e.custom({
        "type": "kaleidoscope_cookery:chopping_board",
        "cut_count": 4,
        "ingredient": {
            "item": "minecraft:iron_ingot"
        },
        "model_id": "kaleidoscope_cookery:raw_dough",
        "result": {
            "count": 4,
            "item": "flintnpowder:blazing_powder"
        }
    })

    
    //FUNCTIONAL ITEMS
    const funcItems = ['functionality:ancient_seeker']
    removeOutputs(funcItems)
    
    
    //GENERAL FUNCTIONS
    function replaceSmeltingOneToOne(input, result) {
        e.replaceOutput({output: input},
            result, //item outputted
            input //item inputed
        )
    }
    function removeOutputs(list) {
        list.forEach(item => {
            e.remove({ output: item })
        });
    }
    
})
