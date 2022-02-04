import React from "react";

// what is component ?
// a function which returns the JSX, 
// I am going to call it as component
export function FnComp() {
     return (
        <div>
            <h1> I am Function Component</h1>
        </div>
     )
}

// a class which which extends Component clss 
// and overrided  render function which returns the JSX, 
// I am going to call it as component
export class ClsComp extends React.Component {

    render() {
        return (
            <div>
                <h1> I am Class Component</h1>
            </div>
        )
    }
}