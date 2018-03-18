const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");


const addFunctionalComponent = (name) => {
	let compText = require(path.join(__dirname,"../components/functional.js"))(name);
	exec(`mkdir ${name}`,()=>{
		exec("touch index.js",{cwd:`./${name}`})
		exec("touch style.css",{cwd:`./${name}`})
		fs.writeFile(`./${name}/index.js`,compText,function(){
			console.log("done!");
		});
	});
};

const addStatefulComponent = (name) => {
	let compText = require(path.join(__dirname,"../components/stateful.js"))(name);
	exec(`mkdir ${name}`,()=>{
		exec("touch index.js",{cwd:`./${name}`})
		exec("touch style.css",{cwd:`./${name}`})
		fs.writeFile(`./${name}/index.js`,compText,function(){
			console.log("done!");
		});
	});
};

module.exports = {
	addFunctionalComponent,
	addStatefulComponent
};