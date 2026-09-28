import React from "react";

// Functional Component
function FunctionalComponent() {
    return (
        <h1>Hello World! - Functional Component</h1>
    );
}

// Class Component
class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Hello World! - Class Component</h1>
        );
    }
}

// Main App Component
function App() {
    return (
        <>
            <FunctionalComponent />
            <ClassComponent />
        </>
    );
}

export default App;