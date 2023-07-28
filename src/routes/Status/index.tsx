import { useEffect, useState } from "react";

import { GameStatus } from "cc-data-api-wrapper";

import api from "../../api.ts";

import "./index.css";
import { format } from "../../utils/strings.ts";

export default function Status() {
    const [isLoading, setLoading] = useState(true);
    const [statuses, setStatuses] = useState<GameStatus[] | null>(null);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        api.status
            .getAll()
            .then(result => setStatuses(result))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    });

    if (isLoading) {
        return <div aria-busy="true"></div>;
    }

    if (error) {
        console.error(error);

        return <p className="error">An error occurred</p>;
    }

    return (
        <ul className="statuses">
            {statuses!
                .sort(a => (a.name === "online" ? -1 : 1))
                .map(status => (
                    <li
                        className="status"
                        key={status.name}
                        data-offline={status.value <= 0}
                    >
                        <div className="heart-rate">
                            {status.value > 0 && (
                                <>
                                    <svg
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 150 73"
                                        xmlSpace="preserve"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="#009B9E"
                                            strokeWidth="3"
                                            strokeMiterlimit="10"
                                            points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                                        />
                                    </svg>

                                    <div className="fade-in"></div>
                                    <div className="fade-out"></div>
                                </>
                            )}
                        </div>

                        <h2>{format(status.name)}</h2>

                        <h3>{status.value}</h3>
                    </li>
                ))}
        </ul>
    );
}
