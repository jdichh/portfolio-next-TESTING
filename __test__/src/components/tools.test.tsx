import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tools from "@/components/tools";

describe("Display the items in the list of tools", () => {
    it('Should render the list items properly', () => {
        render(<Tools />);

        const li = screen.getAllByRole("listitem")

        li.forEach((item) => {
            expect(item).toBeInTheDocument();
        })
    })
})