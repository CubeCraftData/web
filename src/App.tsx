import { Route, Routes } from "react-router-dom";

import Root from "./routes";
import Leaderboards from "./routes/Leaderboards";
import Marketplace from "./routes/Marketplace";
import Status from "./routes/Status";
import Xp from "./routes/Admin/Xp";
import AdminLayout from "./routes/Admin/Layout.tsx";

import Header from "./components/Header";

import "@picocss/pico";

import "./App.css";
import TOS from "./routes/TOS";
import PrivacyPolicy from "./routes/PrivacyPolicy";

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

                        <Route path="/status">
                            <Route index element={<Status />} />
                        </Route>

                        <Route path="/tos">
                            <Route index element={<TOS />} />
                        </Route>

                        <Route path="/privacy-policy">
                            <Route index element={<PrivacyPolicy />} />
                        </Route>

                        <Route path="/admin" element={<AdminLayout />}>
                            <Route path="/admin/xp" element={<Xp />} />
                        </Route>
                    </Route>
                </Routes>
            </article>
        </>
    );
}

export default App;
