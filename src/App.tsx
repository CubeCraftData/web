import "./App.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>),
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
