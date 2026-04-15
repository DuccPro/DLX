const data = [
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
			name: "Sugar Swan Cookie",
			icon: "img/card/sugar_swan.png",
			rarity: "legendary",
			role: "healing",
			position: "rear",
			element: ["light"],
			alias: ["sswan","ssc"],
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
				title: "CRIT-less",
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
			alias: ["vdough","vdc"],
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
			alias: ["mdough"],
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
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
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
			alias: ["dec"],
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
				requirement: "8.0% Cooldown"
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
				requirement: "8.0% Cooldown, 111.0% ATK / 9.0% Cooldown, 108.0% ATK"
			}
	]},
	{
			name: "Millennial Tree Cookie",
			icon: "img/card/millennial_tree.png",
			rarity: "legendary",
			role: "support",
			position: "front",
			element: ["grass"],
			alias: ["mtree","mtc"],
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
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
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
				substats: ["DMG Resist","Cooldown","HP","Debuff Resist"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff","Debuff Resist"],
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
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
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
			name: "Chess Choco Cookie",
			icon: "img/card/chess_choco.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["chaos"],
			alias: ["cchoco"],
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
			alias: ["scellar"],
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
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
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
			alias: ["ssalt","ssc"],
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
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","ATK","HP"],
				requirement: ""
			}
	]},
	{
			name: "Menthol Cookie",
			icon: "img/card/menthol.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["water"],
			alias: ["meth"],
			builds: [
			{
				title: "MG",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD%"],
				requirement: "18.8% Cooldown, 11.7% ATK SPD"
			},{
				title: "General",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
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
				title: "Burst",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Seltzer Cookie",
			icon: "img/card/seltzer.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["water"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Water DMG"],
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
			}
	]},
	{
			name: "Doughael",
			icon: "img/card/doughael.png",
			rarity: "super epic",
			role: "healing",
			position: "middle",
			element: [],
			alias: ["dghael"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/healing.png"],
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
				title: "General",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["3 HP","1 Cooldown"],
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
			}
	]},
	{
			name: "Grapefruit Cookie",
			icon: "img/card/grapefruit.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["electricity"],
			alias: ["gfruit"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Lime Cookie",
			icon: "img/card/lime.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Manju Cookie",
			icon: "img/card/manju.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: ["water"],
			alias: [],
			builds: [
			{
				title: "Arcade",
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
				substats: ["DMG Resist","ATK%","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Jagae Cookie",
			icon: "img/card/jagae.png",
			rarity: "epic",
			role: "support",
			position: "front",
			element: ["water"],
			alias: [],
			builds: [
			{
				title: "Arcade",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Orange Cookie",
			icon: "img/card/orange.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["electricity"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Lemon Cookie",
			icon: "img/card/lemon.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["electricity"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Marshmallow Bunny Cookie",
			icon: "img/card/marshmallow_bunny.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			alias: ["mbunny","mbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Amplify Buff","Cooldown","CRIT%"],
				requirement: "25.0% Amplify Buff"
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Amplify Buff","Cooldown"],
				requirement: "25.0% Amplify Buff, 51.0% Cooldown (2s start)"
			},{
				title: "ATK SPD",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Amplify Buff","Cooldown","ATK SPD"],
				requirement: "25.0% Amplify Buff"
			}
	]},
	{
			name: "Cream Soda Cookie",
			icon: "img/card/cream_soda.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["water"],
			alias: ["csoda"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Sugarfly Cookie",
			icon: "img/card/sugarfly.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: ["sfly"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Pavlova Cookie",
			icon: "img/card/pavlova.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Eternal Sugar Cookie",
			icon: "img/card/eternal_sugar.png",
			rarity: "beast",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			alias: ["esugar","esc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
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
				substats: ["DMG Resist","Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "RVD",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: "8% Cooldown"
			},{
				title: "LA",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Agar Agar Cookie",
			icon: "img/card/agar_agar.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["fire","electricity","water","wind","ice"],
			alias: ["aa"],
			builds: [
			{
				title: "PVE",
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
				substats: ["Cooldown","ATK","CRIT%"],
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
			}
	]},
	{
			name: "Fire Spirit Cookie",
			icon: "img/card/fire_spirit.png",
			rarity: "legendary",
			role: "magic",
			position: "rear",
			element: ["fire"],
			alias: ["fspirit","fsc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Fire DMG"],
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
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Fire DMG"],
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
			name: "Wedding Cake Cookie",
			icon: "img/card/wedding_cake.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: [],
			alias: ["wc"],
			builds: [
			{
				title: "LA",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "47.5% Cooldown"
			},{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Black Forest Cookie",
			icon: "img/card/black_forest.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			alias: ["bf"],
			builds: [
			{
				title: "LA",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: "33.9% ATK SPD"
			},{
				title: "LA",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: "33.9% ATK SPD"
			}
	]}
];