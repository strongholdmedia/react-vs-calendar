var Calendar = require("../Calendar.js");
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
    React.createElement(Calendar, {
        viewMode: "months",
        dateFormat: "MMMM",
        isValidDate: function (current) {
            return current.isBefore(Calendar.moment().startOf("month"));
        }
    }),
    document.getElementById("calendar")
);
