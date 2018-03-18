module.exports = function(name){
	return `import React, {Component} from 'react';
import './style.css';

//import otherComponent from '../otherComponent';

class ${name} extends Component {
	state = {

	}


	render(){
		return (
			<div>

			</div>
		);
	}
}

export default ${name};
`};