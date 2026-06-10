ServerEvents.tags('item', e => {
    //////////////////////////
    // ONLY SPECIFIC BYPASS //
    // SEE tags.js          //
    //////////////////////////
    const psiInitial = ['psi:cad_assembly_iron', 'psi:cad_assembly_gold', 'psi:cad_core_basic', 'psi:cad_socket_basic', 'psi:cad_battery_basic', 'psi:spell_bullet', 'psi:spell_bullet_projectile', 'psi:psidust']
    e.add('wot:magic/psi/ignore', psiInitial)
})



const newRestrictionByTag = (restrictionName, stageName, tag) => {
    AStages.addRestrictionForTag(restrictionName, stageName, tag)
        .setCanBeStoredInInventory(true)
        .setCanBeStoredInContainers(true)
        .setCanPickedUp(true)
        .setHideTooltip(true)
        .setCanBeEquipped(false)
        .setCanBePlaced(false)
        .setCanAttack(false)
        .setCanBeEquipped(false)
        .setCanBeDig(false)
        .setCanItemBeRightClicked(false)
        .setCanItemBeLeftClicked(false)
        .setCanInteractWithBlock(false) 
}


AStages.customizeStage("blockset/cluttered/foods")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Cluttered Foods"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("clutteredFoods", "blockset/cluttered/foods", "wot:cluttered/foods")

AStages.customizeStage("blockset/cluttered/appliances")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Cluttered Appliances"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("clutteredAppliances", "blockset/cluttered/appliances", "wot:cluttered/appliances")

AStages.customizeStage("blockset/cluttered/willow")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Dark Willow"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("darkwillowSet", "blockset/cluttered/willow", "wot:cluttered/willow")

AStages.customizeStage("blockset/cluttered/poplar")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Poplar"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("poplarSet", "blockset/cluttered/poplar", "wot:cluttered/poplar")

AStages.customizeStage("blockset/cluttered/crabapple")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Crabapple"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("crabappleSet", "blockset/cluttered/crabapple", "wot:cluttered/crabapple")

AStages.customizeStage("blockset/cluttered/sycamore")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Sycamore"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("sycamoreSet", "blockset/cluttered/sycamore", "wot:cluttered/sycamore")

AStages.customizeStage("blockset/cluttered/fluorescent")
    .setAddTitle(Component.gold("Blockset Unlocked!"))
    .setAddSubTitle(Component.aqua("Fluorescent"))
    .setAddChatMessage(Component.literal("Search \"@cluttered\" to view your new recipes!"))
newRestrictionByTag("fluorescentSet", "blockset/cluttered/fluorescent", "wot:cluttered/fluorescent")

AStages.customizeStage("tier/copper/toolheads")
    .setAddTitle(Component.gold("Recipes Unlocked!"))
    .setAddSubTitle(Component.aqua("Copper Tool Heads"))
    .setAddChatMessage(Component.literal("Search \"@overgeared\" to view your new recipes!"))
newRestrictionByTag("copperHeads", "tier/copper/toolheads", "wot:copper/toolheads")

AStages.customizeStage("tier/iron/equipment")
    .setAddTitle(Component.gold("Recipes Unlocked!"))
    .setAddSubTitle(Component.aqua("Iron Equipment"))
    .setAddChatMessage(Component.literal("Search \"@minecraft\" to view your new recipes!"))
newRestrictionByTag("ironEquipment", "tier/iron/equipment", "wot:iron/equipment")

//PSI
AStages.customizeStage("mod/psi")
    .setAddTitle(Component.gold("Recipes Unlocked!"))
    .setAddSubTitle(Component.aqua("Iron Equipment"))
    .setAddChatMessage(Component.literal("Recipes for iron tools and armor unlocked!"))
AStages.addRestrictionForMod("astages/item1", "stage_item", "psi")
    .ignoreTags('psi:colorizers', 'wot:magic/psi/ignore')
  

ItemEvents.crafted('item', e => {
    const player = e.player, item = e.item;

    if (
        item === 'cluttered:willow_planks' || 
        item === 'cluttered:flowering_willow_planks'
    ) { AStages.addStageToPlayer("blockset/cluttered/willow", player) }
    if (
        item === 'cluttered:poplar_planks' || 
        item === 'cluttered:flowering_poplar_planks'
    ) { AStages.addStageToPlayer("blockset/cluttered/poplar", player) }
    if (
        item === 'cluttered:crabapple_planks' || 
        item === 'cluttered:flowering_crabapple_planks'
    ) { AStages.addStageToPlayer("blockset/cluttered/crabapple", player) }
    if (
        item === 'cluttered:sycamore_planks'
    ) { AStages.addStageToPlayer("blockset/cluttered/sycamore", player) }
    if (
        item === 'cluttered:fluorescent_maple_planks'
    ) { AStages.addStageToPlayer("blockset/cluttered/fluorescent", player) }

    ////////////////
    // COPPER AGE //
    ////////////////
})