import { Link } from "react-router-dom";

import "./index.css";

export default function Index() {
    function show() {
        document.querySelector(".header-items")!.classList.toggle("hidden");
    }

    return (
        <header>
            <nav>
                <ul className="header-logo">
                    <li>
                        <Link to="/" className="logo-url">
                            <strong>CubeCraft Data</strong>
                        </Link>

                        <button onClick={show}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Outline"
                                viewBox="0 0 24 24"
                            >
                                <rect y="11" width="24" height="2" rx="1" />
                                <rect y="4" width="24" height="2" rx="1" />
                                <rect y="18" width="24" height="2" rx="1" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <ul className="header-items hidden">
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
