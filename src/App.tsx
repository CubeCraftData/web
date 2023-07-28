import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "@picocss/pico";

import Root from "./routes";

import Header from "./components/Header.tsx";

import "./App.css";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>),
);

function App() {
    return (
        <>
            <Header />

            <RouterProvider router={router} />
        </>
    );
}

export default App;
