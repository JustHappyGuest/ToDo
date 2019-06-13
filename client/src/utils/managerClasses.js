const managerClasses = (className) => {
    return (modifiers) => {
        Object.keys(modifiers).forEach(key => {
            className += modifiers[key] ? " " + key : "";
        });
        return className;
    }
}

export default managerClasses;
