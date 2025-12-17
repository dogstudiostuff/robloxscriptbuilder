

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
	"tooltip": "Gets the parent of your script.",
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "workspace",
	"message0": 'Workspace',
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Gets the workspace.",
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setxto",
	"message0": 'Set X Position of %1 To %2',
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
	"message0": 'Set Y Position of %1 To %2',
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
	"message0": 'Set Z Position of %1 To %2',
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
	"type": "rot_setxto",
	"message0": 'Set X Rotation of %1 To %2',
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
	"tooltip": "Sets the X rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "rot_setyto",
	"message0": 'Set Y Rotation of %1 To %2',
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
	"tooltip": "Sets the Y rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "rot_setzto",
	"message0": 'Set Z Rotation of %1 To %2',
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
	"tooltip": "Sets the Z rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_setxto",
	"message0": 'Set Width of %1 To %2',
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
	"tooltip": "Sets the width of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_setyto",
	"message0": 'Set Height of %1 To %2',
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
	"tooltip": "Sets the height of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_setzto",
	"message0": 'Set Depth of %1 To %2',
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
	"tooltip": "Sets the depth of a part.",
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
	"tooltip": "Sets the parent of a part.",
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
	"tooltip": "Sets the color of a part.",
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
	"tooltip": "Sets the vector of a part.",
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
	"tooltip": "Waits for a specified amount of seconds.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "waittick",
	"message0": 'Wait a single tick',
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "Waits for a single tick, reccomended when doing while true loops to not cause the game to crash, or your script to be forcefully stopped.",
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
	"tooltip": "Ignores errors, wont stop the script if a major error occurs.",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getxof",
	"message0": 'Get X Position of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the X position of a part.",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getyof",
	"message0": 'Get Y Position of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the Y position of a part.",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "getzof",
	"message0": 'Get Z Position of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the Z position of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "rot_getxof",
	"message0": 'Get X Rotation of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the X rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "rot_getyof",
	"message0": 'Get Y Rotation of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the Y rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "rot_getzof",
	"message0": 'Get Z Rotation of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the Z rotation axis of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_getxof",
	"message0": 'Get Width of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the width of a part.",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_getyof",
	"message0": 'Get Height of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the height of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "size_getzof",
	"message0": 'Get Depth of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	}, ],
	"output": "Number",
	"colour": "#0059de",
	"tooltip": "Gets the depth of a part.",
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
	"tooltip": "Gets every single child of a part.",
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
	"tooltip": "Gets a specific child of a part.",
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
	"tooltip": "Gets every single child of a part, this includes children of the childs, and so on.",
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
	"tooltip": "Creates a part and parents it to a specified instance.",
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
	"tooltip": "Deletes a part.",
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
	"tooltip": "Makes a Vector.",
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
	"tooltip": "Gets the vector position of a part.",
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
	"tooltip": "Makes a color.",
	"inputsInline": true
}]);




Blockly.common.defineBlocksWithJsonArray([{
	"type": "colorrandom",
	"message0": 'Random Color',
	"output": "Color",
	"colour": "#6f00ff",
	"tooltip": "Makes a random color.",
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
	"colour": "#ffb619",
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
	"colour": "#ffb619",
	"tooltip": "When a part is clicked, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "partevent",
	"message0": 'Part that triggered Event',
	"colour": "#ffb619",
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
	"message0": 'Kill %1',
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
	"message0": 'Apply Damage %2 To %1',
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
	"message0": 'Ask %1 to Buy Premium',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Asks a user to buy premium.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "buygamepass",
	"message0": 'Ask %1 to Buy Gamepass %2',
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
	"tooltip": "Asks a user to buy a gamepass.",
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
	"tooltip": "Checks if a user has premium.",
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
	"tooltip": "Checks if a user has a gamepass.",
	"output": "Boolean",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "sitplayer",
	"message0": 'Force sit %1 down',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Forces a player to sit down.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "kickplayer",
	"message0": 'Kick %1',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		}
	],
	"colour": "#1c86ff",
	"tooltip": "Kicks a player from the game.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "runwithoutwait",
	"message0": 'Run without waiting \n%1',
	"args0": [{
		"type": "input_statement",
		"name": "CODE"
	}],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "All the code you put in here will run seperately to all the code after it and will not wait for this code to finish.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "getparent",
	"message0": 'Get parent of %1',
	"args0": [{
		"type": "input_value",
		"check": "Part",
		"name": "PART"
	},
	],
	"output": "Part",
	"colour": "#0059de",
	"tooltip": "Gets the parent of a part.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "setwalkspeed",
	"message0": 'Set walk speed of %1 to %2',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "SPEED"
		},
	],
	"colour": "#1c86ff",
	"tooltip": "Sets a player's walking speed.\nDefault is 16",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "setjumpheight",
	"message0": 'Set jump height of %1 to %2',
	"args0": [{
			"type": "input_value",
			"check": "Player",
			"name": "PLAYER"
		},
		{
			"type": "input_value",
			"check": "Number",
			"name": "HEIGHT"
		},
	],
	"colour": "#1c86ff",
	"tooltip": "Sets a player's jump height.\nDefault is 7.2",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "newsound",
	"message0": 'Create new sound with ID %1',
	"args0": [{
		"type": "input_value",
		"check": "Number",
		"name": "ID"
	},
	],
	"output": "Sound",
	"colour": "#bf42f5",
	"tooltip": "Creates a new sound.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "playsound",
	"message0": 'Play %1',
	"args0": [{
			"type": "input_value",
			"check": "Sound",
			"name": "SOUND"
		}
	],
	"colour": "#bf42f5",
	"tooltip": "Plays a sound.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "waituntil",
	"message0": 'Wait until %1',
	"args0": [{
		"type": "input_value",
		"check": "Boolean",
		"name": "CONDITION"
	}],
	"previousStatement": null,
	"nextStatement": null,
	"colour": "#34a4eb",
	"tooltip": "Waits until the condition is true.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "issoundloaded",
	"message0": 'Is %1 loaded',
	"args0": [{
		"type": "input_value",
		"check": "Sound",
		"name": "SOUND"
	},
	],
	"output": "Boolean",
	"colour": "#bf42f5",
	"tooltip": "Checks if a sound is currently ready for being played.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "issoundplaying",
	"message0": 'Is %1 playing',
	"args0": [{
		"type": "input_value",
		"check": "Sound",
		"name": "SOUND"
	},
	],
	"output": "Boolean",
	"colour": "#bf42f5",
	"tooltip": "Checks if a sound is currently being played.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "playsoundandwait",
	"message0": 'Play %1 and wait',
	"args0": [{
			"type": "input_value",
			"check": "Sound",
			"name": "SOUND"
		}
	],
	"colour": "#bf42f5",
	"tooltip": "Plays a sound and then waits for it to finish.",
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "colorhsv",
	"message0": 'Make color from hue%1saturation%2value%3',
	"args0": [{
		"type": "input_value",
		"check": "Number",
		"name": "HUE"
	},
	{
		"type": "input_value",
		"check": "Number",
		"name": "SAT"
	},
	{
		"type": "input_value",
		"check": "Number",
		"name": "VAL"
	}
	],
	"output": "Color",
	"colour": "#6f00ff",
	"tooltip": "Makes a color from HSV values.",
	"inputsInline": true
}]);


Blockly.common.defineBlocksWithJsonArray([{
	"type": "forever",
	"message0": 'Forever \n%1',
	"args0": [{
		"type": "input_statement",
		"name": "CODE"
	}],
	"previousStatement": null,
	"colour": "#5BA55B",
	"tooltip": "The code inside this will run forever.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "tools_onclick",
	"message0": 'On %1 Used %2',
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
	"colour": "#919191",
	"tooltip": "When a user clicks while holding a tool, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "tools_onequip",
	"message0": 'On %1 Equipped %2',
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
	"colour": "#919191",
	"tooltip": "When a user equips the tool, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "tools_onunequip",
	"message0": 'On %1 Unequipped %2',
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
	"colour": "#919191",
	"tooltip": "When a user equips the tool, run the code.",
	"inputsInline": true
}]);

Blockly.common.defineBlocksWithJsonArray([{
	"type": "emitsoundfrom",
	"message0": 'Make %1 play from %2',
	"args0": [{
			"type": "input_value",
			"check": "Sound",
			"name": "SOUND"
		},
		{
			"type": "input_value",
			"check": "Part",
			"name": "PART"
		}
	],
	"colour": "#bf42f5",
	"tooltip": "Makes a sound emit from a certain part. This will not make it play, you need a play block after.",
	"previousStatement": null,
	"nextStatement": null,
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
	return `${part}.Position = Vector3.new(${x}, ${part}.Position.Y, ${part}.Position.Z);\n`;
};

lua.luaGenerator.forBlock['setyto'] = function(block, generator) {
	const y = generator.valueToCode(block, 'YPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = Vector3.new(${part}.Position.X, ${y}, ${part}.Position.Z);\n`;
};

lua.luaGenerator.forBlock['setzto'] = function(block, generator) {
	const z = generator.valueToCode(block, 'ZPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = Vector3.new(${part}.Position.X, ${part}.Position.Y, ${z});\n`;
};

lua.luaGenerator.forBlock['rot_setxto'] = function(block, generator) {
	const x = generator.valueToCode(block, 'XPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Orientation = Vector3.new(${x}, ${part}.Orientation.Y, ${part}.Orientation.Z);\n`;
};

lua.luaGenerator.forBlock['rot_setyto'] = function(block, generator) {
	const y = generator.valueToCode(block, 'YPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Orientation = Vector3.new(${part}.Orientation.X, ${y}, ${part}.Orientation.Z);\n`;
};

lua.luaGenerator.forBlock['rot_setzto'] = function(block, generator) {
	const z = generator.valueToCode(block, 'ZPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Orientation = Vector3.new(${part}.Orientation.X, ${part}.Orientation.Y, ${z});\n`;
};

lua.luaGenerator.forBlock['size_setxto'] = function(block, generator) {
	const x = generator.valueToCode(block, 'XPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Size = Vector3.new(${x}, ${part}.Size.Y, ${part}.Size.Z);\n`;
};

lua.luaGenerator.forBlock['size_setyto'] = function(block, generator) {
	const y = generator.valueToCode(block, 'YPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Size = Vector3.new(${part}.Size.X, ${y}, ${part}.Size.Z);\n`;
};

lua.luaGenerator.forBlock['size_setzto'] = function(block, generator) {
	const z = generator.valueToCode(block, 'ZPOSITION', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Size = Vector3.new(${part}.Size.X, ${part}.Size.Y, ${z});\n`;
};


lua.luaGenerator.forBlock['setvectorto'] = function(block, generator) {
	const vector = generator.valueToCode(block, 'VECTOR', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Position = ${vector};\n`;
};

lua.luaGenerator.forBlock['setcolorto'] = function(block, generator) {
	const color = generator.valueToCode(block, 'COLOR', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${part}.Color = ${color};\n`;
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

lua.luaGenerator.forBlock['rot_getxof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Orientation.X`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['rot_getyof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Orientation.Y`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['rot_getzof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Orientation.Z`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['size_getxof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Size.X`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['size_getyof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Size.Y`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['size_getzof'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Size.Z`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['createpart'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`Instance.new("Part", ${part})`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['wait'] = function(block, generator) {
	const time = generator.valueToCode(block, 'TIME', lua.Order.NONE)
	return `task.wait(${time});\n`
};

lua.luaGenerator.forBlock['waittick'] = function(block, generator) {
	return `task.wait();\n`
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
	return `${part}:Destroy();\n`
};

lua.luaGenerator.forBlock['ontouch'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `${part}.Touched:Connect(function(EVENT_ACTIVATED_PLAYER)\n${code}end);\n`;
};

lua.luaGenerator.forBlock['onclick'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `Instance.new("ClickDetector", ${part}).MouseClick:Connect(function(EVENT_ACTIVATED_PLAYER)\n${code}end);\n`;
};

lua.luaGenerator.forBlock['partevent'] = function(block, generator) {
	return [`EVENT_ACTIVATED_PLAYER`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['plrevent'] = function(block, generator) {
	return [`(if EVENT_ACTIVATED_PLAYER.Parent.Name == "Players" then EVENT_ACTIVATED_PLAYER else game.Players:GetPlayerFromCharacter(EVENT_ACTIVATED_PLAYER.Parent))`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['killplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `${player}.Character.Humanoid.Health = 0;\n`;
};

lua.luaGenerator.forBlock['damageplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const health = generator.valueToCode(block, 'DAMAGE', lua.Order.NONE)
	return `${player}.Character.Humanoid:TakeDamage(${health});\n`;
};


lua.luaGenerator.forBlock['buypremium'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `game:GetService("MarketplaceService"):PromptPremiumPurchase(${player});\n`;
};

lua.luaGenerator.forBlock['buygamepass'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const gamepass = generator.valueToCode(block, 'PASS', lua.Order.NONE)
	return `game:GetService("MarketplaceService"):PromptGamePassPurchase(${player}, ${gamepass});\n`;
};

lua.luaGenerator.forBlock['haspremium'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return [`${player}.MembershipType == Enum.MembershipType.Premium`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['ownsgamepass'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const gamepass = generator.valueToCode(block, 'PASS', lua.Order.NONE)
	return [`game:GetService("MarketplaceService"):UserOwnsGamePassAsync(${player}.UserId, ${gamepass})`, lua.Order.ATOMIC];
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
	return `pcall(function()\n${code}end);\n`
};

lua.luaGenerator.forBlock['setparentto'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE);
	const parent = generator.valueToCode(block, 'PARENT', lua.Order.NONE);
	return `${part}.Parent = ${parent};\n`
};

lua.luaGenerator.forBlock['getchild'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE);
	const child = generator.valueToCode(block, 'CHILD', lua.Order.NONE);
	return [`${part}:FindFirstChild(${child})`, lua.Order.ATOMIC]
};

lua.luaGenerator.forBlock['sitplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `${player}.Character.Humanoid.Sit = true;\n`
};

lua.luaGenerator.forBlock['kickplayer'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	return `${player}:Kick();\n`
};

lua.luaGenerator.forBlock['runwithoutwait'] = function(block, generator) {
	const code = generator.statementToCode(block, 'CODE');
	return `task.spawn(function()\n${code}end);\n`
};

lua.luaGenerator.forBlock['getparent'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return [`${part}.Parent`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['setwalkspeed'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const speed = generator.valueToCode(block, 'SPEED', lua.Order.NONE)
	return `${player}.Character.Humanoid.WalkSpeed = ${speed};\n`
};

lua.luaGenerator.forBlock['setjumpheight'] = function(block, generator) {
	const player = generator.valueToCode(block, 'PLAYER', lua.Order.NONE)
	const height = generator.valueToCode(block, 'HEIGHT', lua.Order.NONE)
	return `${player}.Character.Humanoid.JumpHeight = ${height};\n`
};

lua.luaGenerator.forBlock['newsound'] = function(block, generator) {
	const id = generator.valueToCode(block, 'ID', lua.Order.NONE)
	return [`(function()local newsound = Instance.new("Sound", workspace); newsound.SoundId = "rbxassetid://" .. ${id}; return newsound;end)()`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['playsound'] = function(block, generator) {
	const sound = generator.valueToCode(block, 'SOUND', lua.Order.NONE)
	return `${sound}:Play();\n`
};

lua.luaGenerator.forBlock['waituntil'] = function(block, generator) {
	const condition = generator.valueToCode(block, 'CONDITION', lua.Order.NONE)
	return `while not (${condition}) do\n    task.wait();\nend\n`;
};

lua.luaGenerator.forBlock['issoundloaded'] = function(block, generator) {
	const sound = generator.valueToCode(block, 'SOUND', lua.Order.NONE)
	return [`${sound}.IsLoaded`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['issoundplaying'] = function(block, generator) {
	const sound = generator.valueToCode(block, 'SOUND', lua.Order.NONE)
	return [`${sound}.IsPlaying`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['playsoundandwait'] = function(block, generator) {
	const sound = generator.valueToCode(block, 'SOUND', lua.Order.NONE)
	return `${sound}:Play();\n${sound}.Ended:Wait()\n`
};

lua.luaGenerator.forBlock['forever'] = function(block, generator) {
	const code = generator.statementToCode(block, 'CODE');
	return `while true do\n    ${code}task.wait();\nend\n`
};

lua.luaGenerator.forBlock['colorhsv'] = function(block, generator) {
	const hue = generator.valueToCode(block, 'HUE', lua.Order.NONE)
	const saturation = generator.valueToCode(block, 'SAT', lua.Order.NONE)
	const value = generator.valueToCode(block, 'VAL', lua.Order.NONE)
	return [`Color3.fromHSV(${hue},${saturation},${value})`, lua.Order.ATOMIC];
};

lua.luaGenerator.forBlock['tools_onclick'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `${part}.Activated:Connect(function(PLAYER)\n${code}end);\n`;
};

lua.luaGenerator.forBlock['tools_onequip'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `${part}.Equipped:Connect(function(PLAYER)\n${code}end);\n`;
};

lua.luaGenerator.forBlock['tools_onunequip'] = function(block, generator) {
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	const code = generator.statementToCode(block, 'CODE');
	return `${part}.Unequipped:Connect(function(PLAYER)\n${code}end);\n`;
};

lua.luaGenerator.forBlock['emitsoundfrom'] = function(block, generator) {
	const sound = generator.valueToCode(block, 'SOUND', lua.Order.NONE)
	const part = generator.valueToCode(block, 'PART', lua.Order.NONE)
	return `${sound}.Parent = ${part}\n`
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



