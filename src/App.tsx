import { Route, Routes } from "react-router-dom";

import Root from "./routes";
import Leaderboards from "./routes/Leaderboards";
import Marketplace from "./routes/Marketplace";

import Header from "./components/Header.tsx";

import "@picocss/pico";

import "./App.css";

function App() {
    return (
        <>
            <Header />

            <article>
                <Routes>
                    <Route path="/">
                        <Route index element={<Root />} />

                        <Route path="/leaderboards">
                            <Route index element={<Leaderboards />} />
                        </Route>

                        <Route path="/marketplace">
                            <Route index element={<Marketplace />} />
                        </Route>
                    </Route>
                </Routes>
            </article>
        </>
    );
}

export default App;
