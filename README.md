## new-component

New-Component is a basic CLI for creating a new react component.

Install the package globally for best results.

```npm install -g @mahjongg/new-component```

The component is created with the name specified(Use PascalCase).

ex.

```new-component add Footer```

A Folder will be created(with the name given) that houses your component(index.js) and a stylesheet(style.css).

### Options:

By default, components are created as functional-components.  
The ```-s``` or ```--stateful``` option will create a class-based component.