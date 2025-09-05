

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
	"tooltip": "Gets the parent of your script",
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
	"tooltip": "Sets the X position of a part",
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
	"tooltip": "Sets the X position of a part",
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
	"tooltip": "Sets the X position of a part",
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
	"tooltip": "Sets the X position of a part",
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
	"tooltip": "Gets the x position of a part",
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
	"tooltip": "Gets the x position of a part",
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
	"tooltip": "Gets the x position of a part",
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
	"tooltip": "Gets the x position of a part",
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
	"tooltip": "Makes a color",
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
	"colour": "#fcd303",
	"tooltip": "When a part is touched, run the code.",
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
	return `${part}.Touched:Connect(function()\n${code}end)\n`;
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



