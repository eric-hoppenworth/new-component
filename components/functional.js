module.exports = (name)=>{

return `import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const ${name} = (props) => {
	return(
		<div>

		</div>
	);
}

export default ${name};`};
