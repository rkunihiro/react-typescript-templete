import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
    test("render", () => {
        render(<App />);
        const message = screen.getByTestId("message");
        expect(message).toHaveTextContent("Hello,World!");
    });
});
