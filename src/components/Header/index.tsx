import { Link } from "react-router-dom";

import "./index.css";

export default function Index() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="logo-url"><strong>CubeCraft Data</strong></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/leaderboards">Leaderboards</Link>
                    </li>
                    <li>
                        <Link to="/status">Status</Link>
                    </li>
                    <li>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
