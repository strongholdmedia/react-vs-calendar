import React, { Component } from "react";
import Calendar from "@dorgaren/react-vs-calendar";

export default class ValidatedExample extends Component
{
    render()
    {
        return (
            <div>
                <h2>isValidDate</h2>
                <p>
                    You can use "isValidDate" to disable all dates after last month.
                </p>
                <Calendar
                    viewMode="months"
                    dateFormat="MMMM"
                    isValidDate={ current => current.isBefore(DateTime.moment().startOf("month")) }
                    onChange={ console.log }
                />
            </div>
        );
    }
}
