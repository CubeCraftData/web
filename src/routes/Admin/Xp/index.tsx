import { FormEvent, useEffect, useState } from "react";

import { GameXp } from "cc-data-api-wrapper";

import api from "../../../api.ts";

import "./index.css";

export default function Xp() {
    const [isLoading, setLoading] = useState(true);
    const [xps, setXps] = useState<GameXp[] | null>(null);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        api.xp
            .getAll()
            .then(result => setXps(result))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    if (isLoading) {
        return <div aria-busy="true"></div>;
    }

    if (error) {
        console.error(error);

        return <p className="error">An error occurred</p>;
    }

    function removeItem(event: FormEvent<HTMLButtonElement>) {
        const name = event.currentTarget
            .closest("li")!
            .getAttribute("data-name");

        setXps(xps => xps!.filter(xp => xp.name !== name));
    }

    function addItem() {
        setXps(xps => [{ name: "", value: 0 }, ...xps!]);
    }

    function submit() {
        setLoading(true);

        return api.xp
            .updateAll(xps!)
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }

    function handleXpNameInput(event: FormEvent<HTMLInputElement>) {
        const oldName = event.currentTarget
            .closest("li")!
            .getAttribute("data-name");
        const name = event.currentTarget.value;
        setXps(xps =>
            xps!.map(xp =>
                xp.name === oldName ? { name, value: xp.value } : xp,
            ),
        );
    }

    function handleXpValueInput(event: FormEvent<HTMLInputElement>) {
        const name = event.currentTarget
            .closest("li")!
            .getAttribute("data-name");
        const value = parseInt(event.currentTarget.value);
        setXps(xps =>
            xps!.map(xp => (xp.name === name ? { name, value } : xp)),
        );
    }

    return (
        <>
            <button type="button" onClick={addItem}>
                +
            </button>

            <ul className="xps">
                {xps!.map((xp, i) => (
                    <li className="xp" key={i} data-name={xp.name}>
                        <button type="button" onClick={removeItem}>
                            -
                        </button>

                        <input
                            type="text"
                            value={xp.name}
                            onInput={handleXpNameInput}
                            required
                        />
                        <input
                            value={xp.value}
                            type="number"
                            onInput={handleXpValueInput}
                            required
                        />
                    </li>
                ))}
            </ul>

            <button type="button" onClick={submit}>Save</button>
        </>
    );
}
