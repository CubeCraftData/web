import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <strong>CubeCraft Data</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/leaderboards">Leaderboards</Link>
                    </li>
                    <li>
                        <a href="#">Status</a>
                    </li>
                    <li>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
