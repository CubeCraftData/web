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
        const name = event.currentTarget.getAttribute("data-name");

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

    return (
        <>
            <button type="button" onClick={addItem}>
                +
            </button>

            <ul className="xps">
                {xps!.map(xp => (
                    <li className="xp" key={xp.name}>
                        <button
                            data-name={xp.name}
                            type="button"
                            onClick={removeItem}
                        >
                            -
                        </button>

                        <input type="text" defaultValue={xp.name} required />
                        <input defaultValue={xp.value} type="number" required />
                    </li>
                ))}
            </ul>

            <button onClick={submit}>Submit</button>
        </>
    );
}
