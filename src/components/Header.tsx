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
                        <a href="#">Leaderboards</a>
                    </li>
                    <li>
                        <a href="#">Status</a>
                    </li>
                    <li>
                        <a href="#">Marketplace</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
