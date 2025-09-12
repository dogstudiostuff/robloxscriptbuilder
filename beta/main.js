

const theme = Blockly.Theme.defineTheme('colors', {
	'base': "dark",
	'blockStyles': {
		'procedure_blocks': {
			'colourPrimary': '#990000'
		},
		'variable_blocks': {
			'colourPrimary': '#ff8800'
		},
		'list_blocks': {
			'colourPrimary': '#cf4500'
		},
		'logic_blocks': {
			'colourPrimary': '#34a4eb'
		},
		'math_blocks': {
			'colourPrimary': '#37bf22'
		},
		'text_blocks': {
			'colourPrimary': '#24bf8c',
		},
	},
	'startHats': true
})
//document.getElementById("blocks")
const workspace = Blockly.inject('workspace', {
	toolbox: document.getElementById("blocks"),
	renderer: "zelos",
	theme: "colors",
	grid: {
		spacing: 25,
		length: 3,
		colour: '#ccc',
		snap: false
	},
    zoom:{
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
    }
});

Blockly.common.defineBlocksWithJsonArray([{
	"type": "parent",
	"message0": 'Parent of script',
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Gets the parent of your script",
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "workspace",
	"message0": 'Workspace',
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Gets the workspace",
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setxto",
	"message0": 'Set X of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "XPOSITION"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the X position of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setyto",
	"message0": 'Set Y of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "YPOSITION"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the Y position of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setzto",
	"message0": 'Set Z of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "ZPOSITION"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the Z position of a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "setparentto",
	"message0": 'Set Parent of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Part",
			"name": "PARENT"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the Parent of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setcolorto",
	"message0": 'Set Color of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Color",
			"name": "COLOR"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the color of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setvectorto",
	"message0": 'Set Vector of %1 To %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_value",
			"check": "Vector",
			"name": "VECTOR"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "Sets the vector of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "wait",
	"message0": 'Wait %1 Seconds',
	"args0": [{
		"type": "input_value",
		"check": "Number",
		"name": "TIME"
	}],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "Waits for an amount of seconds",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "waittick",
	"message0": 'Wait a single tick',
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "Waits for a single tick, reccomended when doing While True loops",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "ignoreerrors",
	"message0": 'Ignore Errors For \n%1',
	"args0": [{
		"type": "input_statement",
		"name": "CODE"
	}],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "Ignores errors, wont stop the script if a magor error occours",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getxof",
	"message0": 'Get X of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the x position of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getyof",
	"message0": 'Get Y of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the y position of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getzof",
	"message0": 'Get Z of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the z position of a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "getchildren",
	"message0": 'Get Every Child of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Array",
	"colour": "#0059de",
	"tooltip": "Gets every single child of a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "getchild",
	"message0": 'Get Child %2 of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	},
	{
		"type":"input_value",
		"check": "String",
		"name": "CHILD"
	}
	],
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Gets a specific child of a part",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getdescendants",
	"message0": 'Get Every Child (include descendants) of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Array",
	"colour": "#0059de",
	"tooltip": "Gets every single child of a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "createpart",
	"message0": 'Create a part and parent it to %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Creates a part and parents it to a specified instance",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "clonepart",
	"message0": 'Clone %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Clones a part, please note that you will need to manually set its parent.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "delete",
	"message0": 'Delete %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#0059de",
	"tooltip": "deletes a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "newvector",
	"message0": 'New Vector  X: %1 Y: %2 Z: %3',
	"args0": [{
			"type": "input_value",
			"check": "Number",
			"name": "X"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "Y"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "Z"
		},
	],
	"output": "Vector",
	"colour": "#1ec1c7",
	"tooltip": "Makes a Vector",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "vectorfrom",
	"message0": 'Get Position Vector of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Vector",
	"colour": "#0059de",
	"tooltip": "Gets the vector position of a part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "color",
	"message0": '%1',
	"args0": [{
		"type": "field_colour_hsv_sliders",
		"check": "Color",
		"name": "COLOR"
	}, ],
	"output": "Color",
	"colour": "#6f00ff",
	"tooltip": "Makes a color",
	"inputsInline": true
}]);




Blockly.common.defineBlocksWithJsonArray([{
	"type": "colorrandom",
	"message0": 'Random Color',
	"output": "Color",
	"colour": "#6f00ff",
	"tooltip": "Makes a random color",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "ontouch",
	"message0": 'On %1 Touched %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_statement",
			"name": "CODE"
		},
	],
	"colour": "#ffc919",
	"tooltip": "When a part is touched, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "onclick",
	"message0": 'On %1 Clicked %2',
	"args0": [{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		},
		{
			"type": "input_statement",
			"name": "CODE"
		},
	],
	"colour": "#ffc919",
	"tooltip": "When a part is clicked, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "partevent",
	"message0": 'Part that triggered Event',
	"colour": "#ffc919",
	"tooltip": "Gets the part that ran the event. THIS WILL ONLY WORK IF YOU USE THIS IN A TOUCHED EVENT",
	"output": "Part",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "plrevent",
	"message0": 'Player that triggered Event',
	"colour": "#ffc919",
	"tooltip": "Gets the part that ran the event. THIS WILL ONLY WORK IF YOU USE THIS IN AN EVENT",
	"output": "Player",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "killplayer",
	"message0": 'Kill Player %1',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Kills a player, forcefeild does not matter.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "damageplayer",
	"message0": 'Apply Damage %2 To Player %1',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "DAMAGE"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Damages a player, forcefeild matters.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "buypremium",
	"message0": 'Ask Player %1 to Buy Premium',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Asks a user to buy premium",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "buygamepass",
	"message0": 'Ask Player %1 to Buy Gamepass %2',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "PASS"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Asks a user to buy premium",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "haspremium",
	"message0": 'Does %1 Have Premium',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Asks a user to buy premium",
	"output": "Boolean",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "ownsgamepass",
	"message0": 'Does %1 Own Gamepass %2',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "PASS"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Asks a user to buy premium",
	"output": "Boolean",
	"inputsInline": true
}]);



lua.luaGenerator.forBlock['parent'] = function(block, generator) {
	return ['script.Parent', lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['workspace'] = function(block, generator) {
	return ['workspace', lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['setxto'] = function(block, generator) {
	const x = generator.valueToCode(block, 'XPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = Vector3.new(${x}, ${part}.Position.Y, ${part}.Position.Z)\n`;
};

lua.luaGenerator.forBlock['setyto'] = function(block, generator) {
	const y = generator.valueToCode(block, 'YPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = Vector3.new(${part}.Position.X, ${y}, ${part}.Position.Z)\n`;
};

lua.luaGenerator.forBlock['setzto'] = function(block, generator) {
	const z = generator.valueToCode(block, 'ZPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = Vector3.new(${part}.Position.X, ${part}.Position.Y, ${z})\n`;
};

lua.luaGenerator.forBlock['setvectorto'] = function(block, generator) {
	const vector = generator.valueToCode(block, 'VECTOR', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = ${vector}\n`;
};

lua.luaGenerator.forBlock['setcolorto'] = function(block, generator) {
	const color = generator.valueToCode(block, 'COLOR', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Color = ${color}\n`;
};

lua.luaGenerator.forBlock['getxof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Position.X`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['getyof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Position.Y`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['clonepart'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}:Clone()`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['getzof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Position.Z`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['createpart'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`Instance.new("Part", ${part})`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['wait'] = function(block, generator) {
	const time = generator.valueToCode(block, 'TIME', lua.Order.NONE)
	return `task.wait(${time})\n`
};

lua.luaGenerator.forBlock['waittick'] = function(block, generator) {
	return `task.wait()\n`
};

lua.luaGenerator.forBlock['newvector'] = function(block, generator) {
	const x = generator.valueToCode(block, 'X', lua.Order.NONE)
	const y = generator.valueToCode(block, 'Y', lua.Order.NONE)
	const z = generator.valueToCode(block, 'Z', lua.Order.NONE)
	return [`Vector3.new(${x}, ${y}, ${z})`, lua.Order.ATOMIC];
};
lua.luaGenerator.forBlock['vectorfrom'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Position`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['color'] = function(block, generator) {
	const color = block.getFieldValue('COLOR')
	return [`Color3.fromHex("${color}")`, lua.Order.ATOMIC];
};


lua.luaGenerator.forBlock['colorrandom'] = function(block, generator) {
	return [`Color3.fromRGB(math.random(0,255), math.random(0,255), math.random(0,255))`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['delete'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}:Destroy()\n`
};

lua.luaGenerator.forBlock['ontouch'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `${part}.Touched:Connect(function(EVENT_ACTIVATED_PLAYER)\n${code}end)\n`;
};

lua.luaGenerator.forBlock['onclick'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `Instance.new("ClickDetector", ${part}).MouseClick:Connect(function(EVENT_ACTIVATED_PLAYER)\n${code}end)\n`;
};

lua.luaGenerator.forBlock['partevent'] = function(block, generator) {
	return [`EVENT_ACTIVATED_PLAYER`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['plrevent'] = function(block, generator) {
	return [`(if EVENT_ACTIVATED_PLAYER.Parent.Name == "Players" then EVENT_ACTIVATED_PLAYER else game.Players:GetPlayerFromCharacter(EVENT_ACTIVATED_PLAYER.Parent))`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['killplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `${player}.Character.Humanoid.Health = 0\n`;
};

lua.luaGenerator.forBlock['damageplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const health = generator.valueToCode(block, 'DAMAGE', lua.Order.NONE)
	return `${player}.Character.Humanoid:TakeDamage(${health})\n`;
};


lua.luaGenerator.forBlock['buypremium'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `game:GetService("MarketplaceService"):PromptPremiumPurchase(${player})\n`;
};

lua.luaGenerator.forBlock['buygamepass'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const gamepass = generator.valueToCode(block, 'PASS', lua.Order.NONE)
	return `game:GetService("MarketplaceService"):PromptGamePassPurchase(${player}, ${gamepass})\n`;
};

lua.luaGenerator.forBlock['haspremium'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return [`${player}.MembershipType == Enum.MembershipType.Premium\n`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['ownsgamepass'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const gamepass = generator.valueToCode(block, 'PASS', lua.Order.NONE)
	return [`game:GetService("MarketplaceService"):UserOwnsGamePassAsync(${player}.UserId, ${gamepass})\n`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['getchildren'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}:GetChildren()`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['getdescendants'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}:GetDescendants()`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['ignoreerrors'] = function(block, generator) {
	const code = generator.statementToCode(block, 'CODE');
	return `pcall(function()\n${code}end)\n`
};

lua.luaGenerator.forBlock['setparentto'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE);
	const parent = generator.valueToCode(block, 'PARENT', lua.Order.NONE);
	return `${part}.Parent = ${parent}\n`
};

lua.luaGenerator.forBlock['getchild'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE);
	const child = generator.valueToCode(block, 'CHILD', lua.Order.NONE);
	return [`${part}:FindFirstChild(${child})`, lua.Order.ATOMIC]
};

function generateCode() {
	try {
		const code = lua.luaGenerator.workspaceToCode(workspace);
		navigator.clipboard.writeText(code);
		alert("Copied Code To Clipboard :)")
	}
	catch(e) {
		alert("blockly kaboomed :( please tell the developers the error in the Console")
		console.warn("Blockly Error: " + e)
	}
}



