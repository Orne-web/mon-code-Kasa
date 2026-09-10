import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, test, expect } from "vitest";
import Card from "./Card";

describe("Card", () => {
    test("affiche correctement le titre et l'image du logement", () => {
        render(
            <MemoryRouter>
                <Card
                    id="123"
                    title="Appartement cosy"
                    cover="image-test.jpg"
                />
            </MemoryRouter>
        );

        expect(
            screen.getByText("Appartement cosy")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Appartement cosy")
        ).toBeInTheDocument();
    });
});