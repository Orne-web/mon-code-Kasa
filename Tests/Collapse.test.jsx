import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Collapse from "../src/components/Collapse";


describe("Collapse", () => {
    test("le contenu est fermé par défaut", () => {
        render(
            <Collapse title="Description">
                <p>Voici le contenu du logement</p>
            </Collapse>
        );

        expect(
            screen.queryByText("Voici le contenu du logement")
        ).not.toBeInTheDocument();
    });
});

test("le contenu s'affiche lorsqu'on clique sur le bouton", async () => {
    const user = userEvent.setup();

    render(
        <Collapse title="Description">
            <p>Voici le contenu du logement</p>
        </Collapse>
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(
        screen.getByText("Voici le contenu du logement")
    ).toBeInTheDocument();
});

test("le contenu se referme après un deuxième clic", async () => {
    const user = userEvent.setup();

    render(
        <Collapse title="Description">
            <p>Voici le contenu du logement</p>
        </Collapse>
    );

    const button = screen.getByRole("button");

    // Premier clic : ouvre le Collapse
    await user.click(button);

    expect(
        screen.getByText("Voici le contenu du logement")
    ).toBeInTheDocument();

    // Deuxième clic : referme le Collapse
    await user.click(button);

    expect(
        screen.queryByText("Voici le contenu du logement")
    ).not.toBeInTheDocument();
});