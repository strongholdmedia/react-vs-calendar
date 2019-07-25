import React, { Component } from "react";
import Calendar from "@dorgaren/react-vs-calendar";

export default class OpenExample extends Component
{
    render()
    {
        return (
            <div>
                <h2>open</h2>
                <p>
                    The "open" prop is only consumed when the component is mounted. Useful for embedding inside your own popover components.
                </p>
                <Calendar open input={ false } onChange={ console.log } />
            </div>
        );
    }
}
