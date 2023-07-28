import { SyntheticEvent, useEffect, useState } from "react";

import type { Leaderboard } from "cc-data-api-wrapper";

import api from "../../api.ts";
import { format } from "../../utils/strings.ts";

import "./index.css";

export default function Leaderboards() {
    const [areLeaderboardNamesLoading, setLeaderboardNamesLoading] =
        useState(true);
    const [leaderboardNames, setLeaderboardNames] = useState<string[]>(null!);

    const [isLeaderboardLoading, setLeaderboardLoading] = useState(false);
    const [leaderboard, setLeaderboard] = useState<Leaderboard | null>(null);

    const [selectedLeaderboard, setSelectedLeaderboard] = useState("");

    const [error, setError] = useState<unknown>();

    useEffect(() => {
        api.leaderboards
            .getNames()
            .then(result => {
                setLeaderboardNames(result);
                setSelectedLeaderboard(result[0] ?? "")
            })
            .catch(error => setError(error))
            .finally(() => setLeaderboardNamesLoading(false));
    }, []);

    useEffect(() => {
        if (!selectedLeaderboard) {
            return setLeaderboard(null);
        }

        setLeaderboardLoading(true);

        api.leaderboards
            .getByName(selectedLeaderboard)
            .then(result => setLeaderboard(result))
            .catch(error => setError(error))
            .finally(() => setLeaderboardLoading(false));
    }, [selectedLeaderboard]);

    function selectLeaderboard(event: SyntheticEvent<HTMLSelectElement>) {
        setSelectedLeaderboard(event.currentTarget.value);
    }

    if (areLeaderboardNamesLoading) {
        return <div aria-busy="true"></div>;
    }

    if (error) {
        console.error(error);

        return <p className="error">An error occurred</p>;
    }

    return (
        <>
            <select id="leaderboard-list" onInput={selectLeaderboard} required>
                {leaderboardNames.map(value => (
                    <option value={value} key={value}>
                        {format(value)}
                    </option>
                ))}
            </select>

            {isLeaderboardLoading && <div aria-busy="true"></div>}

            {leaderboard && (
                <ul className="leaderboard">
                    {leaderboard.players.map((player, i) => (
                        <li className="player" key={player.name}>
                            <div className="player-info">
                                <h2 className="player-place">{i + 1}</h2>
                                {player.icon && (
                                    <img src={player.icon} alt="" />
                                )}
                            </div>

                            <div className="player-data">
                                <h3 className="player-name">{player.name}</h3>
                                <h3 className="player-points">
                                    {player.points}
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
