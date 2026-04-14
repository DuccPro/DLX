const data = [
	{
			name: "Rumi Cookie",
			icon: "img/card/rumi.png",
			rarity: "special",
			role: "ambush",
			position: "front",
			element: [],
			alias: [],
			builds: [
			{
				title: "Gwi-Ma",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Mira Cookie",
			icon: "img/card/mira.png",
			rarity: "special",
			role: "charge",
			position: "front",
			element: [],
			alias: [],
			builds: [
			{
				title: "Gwi-Ma",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Zoey Cookie",
			icon: "img/card/zoey.png",
			rarity: "special",
			role: "ranged",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "Gwi-Ma",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Sugar Swan Cookie",
			icon: "img/card/sugar_swan.png",
			rarity: "legendary",
			role: "healing",
			position: "rear",
			element: ["light"],
			alias: ["ss"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35% ATK (Toppings)"
			},{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: "35% ATK (Toppings)"
			},{
				title: "CRITless",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "35% ATK (Toppings)"
			}
	]},
	{
			name: "Pom-Pom Dough Cookie",
			icon: "img/card/pom-pom_dough.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["poison","chaos"],
			alias: ["ppd"],
			builds: [{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Venom Dough Cookie",
			icon: "img/card/venom_dough.png",
			rarity: "super epic",
			role: "bomber",
			position: "rear",
			element: ["poison","chaos"],
			alias: ["vd"],
			builds: [
			{
				title: "Arena",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","Amplify Buff"],
				requirement: ""
			},{
				title: "Arena",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","Amplify Buff"],
				requirement: ""
			}
	]},
	{
			name: "Mold Dough Cookie",
			icon: "img/card/mold_dough.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["chaos"],
			alias: ["md"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Dark Enchantress Cookie",
			icon: "img/card/dark_enchantress.png",
			rarity: "witch",
			role: "magic",
			position: "middle",
			element: ["chaos"],
			alias: ["de"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "8% Cooldown"
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "8% Cooldown, 111% ATK / 9% Cooldown, 108% ATK"
			}
	]},
	{
			name: "Millennial Tree Cookie",
			icon: "img/card/millennial_tree.png",
			rarity: "legendary",
			role: "support",
			position: "front",
			element: ["grass"],
			alias: ["mt"],
			builds: [
			{
				title: "PVE Tank",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "PVE DPS",
				beascuitImgs: ["img/base/support.png","img/core/support06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			}
	]},
	{
			name: "Elphaba Cookie",
			icon: "img/card/elphaba.png",
			rarity: "special",
			role: "magic",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Glinda Cookie",
			icon: "img/card/glinda.png",
			rarity: "special",
			role: "magic",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Chess Choco Cookie",
			icon: "img/card/chess_choco.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["chaos"],
			alias: ["cc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Salt Cellar Cookie",
			icon: "img/card/salt_cellar.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: ["sc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Charcoal Cookie",
			icon: "img/card/charcoal.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["darkness"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Silent Salt Cookie",
			icon: "img/card/silent_salt.png",
			rarity: "beast",
			role: "ambush",
			position: "front",
			element: ["darkness","steel"],
			alias: ["ss"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush06.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]}
];

