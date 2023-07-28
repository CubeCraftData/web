import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "@picocss/pico";

import Root from "./routes";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>),
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
