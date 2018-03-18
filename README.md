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

ex.

```new-component add --stateful SignUpForm ```

### Issues:
Please contact me with any issues through github.

### Future Dev:
This package is still new and there are plans to add some other features:
* load in pre-made components like "Modal" or "Form" or "Navbar".
* add support for Apollo and Redux (add things like store and subscribe to the boilerplate)