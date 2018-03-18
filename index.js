#!/usr/bin/env node

const program = require("commander");
const {addFunctionalComponent, addStatefulComponent} = require("./logic");

program
	.version("0.0.1")
	.description("Builds React Components");

program
	.command("add <name>")
	.alias("a")
	.option('-s, --stateful', "Create a Stateful Class Based Component")
	.description("Add a component with the specified name")
	.action((name, cmd)=>{
		if(cmd.stateful){
			addStatefulComponent(name);
		} else{
			addFunctionalComponent(name);
		}
	});

program.parse(process.argv);