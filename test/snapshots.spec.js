/* global it, describe, expect, jest */

import React from "react"; // eslint-disable-line no-unused-vars
import Calendar from "../Calendar.js";
import renderer from "react-test-renderer";

// findDOMNode is not supported by the react-test-renderer,
// and even though this component is not using that method
// a dependency is probably using it. So we need to mock it
// to make the tests pass.
// https://github.com/facebook/react/issues/7371
jest.mock("react-dom", () => ({
        findDOMNode: () => {
        },
    }));

// Mock date to get rid of time as a factor to make tests deterministic
Date.now = jest.fn(() => 1482363367071);

it("everything default: renders correctly", () => {
    const tree = renderer.create(
        <Calendar />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it("value: set to arbitrary value", () => {
    const tree = renderer.create(
        <Calendar defaultValue={Date.now()} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it("defaultValue: set to arbitrary value", () => {
    const tree = renderer.create(
        <Calendar defaultValue={Date.now()} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe("dateFormat", () => {
    it("set to true", () => {
        const tree = renderer.create(
            <Calendar dateFormat={true} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to false", () => {
        const tree = renderer.create(
            <Calendar dateFormat={false} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("timeFormat", () => {
    it("set to true", () => {
        const tree = renderer.create(
            <Calendar timeFormat={true} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to false", () => {
        const tree = renderer.create(
            <Calendar timeFormat={false} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("input", () => {
    it("input: set to true", () => {
        const tree = renderer.create(
            <Calendar input={true} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("input: set to false", () => {
        const tree = renderer.create(
            <Calendar input={false} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("open", () => {
    it("set to true", () => {
        const tree = renderer.create(
            <Calendar open={true} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to false", () => {
        const tree = renderer.create(
            <Calendar open={false} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("viewMode", () => {
    it("set to days", () => {
        const tree = renderer.create(
            <Calendar viewMode={"days"} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to months", () => {
        const tree = renderer.create(
            <Calendar viewMode={"months"} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to years", () => {
        const tree = renderer.create(
            <Calendar viewMode={"years"} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("set to time", () => {
        const tree = renderer.create(
            <Calendar viewMode={"time"} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it("className: set to arbitraty value", () => {
    const tree = renderer.create(
        <Calendar className={"arbitrary-value"} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe("inputProps", () => {
    it("with placeholder specified", () => {
        const tree = renderer.create(
            <Calendar inputProps={{ placeholder: "arbitrary-placeholder" }} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("with disabled specified", () => {
        const tree = renderer.create(
            <Calendar inputProps={{ disabled: true }} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("with required specified", () => {
        const tree = renderer.create(
            <Calendar inputProps={{ required: true }} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("with name specified", () => {
        const tree = renderer.create(
            <Calendar inputProps={{ name: "arbitrary-name" }} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("with className specified", () => {
        const tree = renderer.create(
            <Calendar inputProps={{ className: "arbitrary-className" }} />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it("isValidDate: only valid if after yesterday", () => {
    const yesterday = Calendar.moment().subtract(1, "day");
    const valid = (current) => current.isAfter(yesterday);
    const tree = renderer.create(
        <Calendar isValidDate={ valid } />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renderDay: specified", () => {
    const renderDay = (props, currentDate) => <td {...props}>{ "0" + currentDate.date() }</td>;
    const tree = renderer.create(
        <Calendar renderDay={renderDay} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renderMonth: specified", () => {
    const renderMonth = (props, currentDate) => <td {...props}>{ "0" + currentDate.date() }</td>;
    const tree = renderer.create(
        <Calendar renderMonth={renderMonth} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renderYear: specified", () => {
    const renderYear = (props, currentDate) => <td {...props}>{ "0" + currentDate.date() }</td>;
    const tree = renderer.create(
        <Calendar renderYear={renderYear} />
        ).toJSON();
    expect(tree).toMatchSnapshot();
});
