import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/components/hero";

describe("Display the h1 tag", () => {
    it('Should render the h1 properly', () => {
        render(<Hero />);

        const header = screen.getByRole("heading", { level: 1 })
        const headerText = "Jason Dichoso"

        expect(header).toHaveTextContent(headerText)
    })
})

describe("Display the h2 tag", () => {
    it('Should render the h2 properly', () => {
        render(<Hero />);

        const header = screen.getByRole("heading", { level: 2 })
        const headerText = "Front-End Web Developer"

        expect(header).toHaveTextContent(headerText)
    })
})

describe("Display the github logo", () => {
    it('Should display the github logo', () => {
        render(<Hero />);

        const image = screen.getByRole("img", { name: "Button to my GitHub profile"})

        expect(image).toBeInTheDocument();
    })
})

describe("Open a new tab to the github profile", () => {
    it('Should open a new tab to the github profile', () => {
        render(<Hero />);

        const link = screen.getByRole("link", { name: "Button to my GitHub profile"})

        expect(link).toHaveAttribute("target", "_blank")
    })
})