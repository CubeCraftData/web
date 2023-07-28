import { FormEvent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import api from "../../api.ts";

export default function AdminLayout() {
    const [apiKey, setApiKey] = useState(localStorage.getItem("api_key") ?? "");

    useEffect(() => {
        localStorage.setItem("api_key", apiKey);
        api.setAPIKey(apiKey);
    }, [apiKey]);

    function updateAPIKey(event: FormEvent<HTMLInputElement>) {
        setApiKey(event.currentTarget.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="API key..."
                onInput={updateAPIKey}
                value={apiKey}
            />

            <section>
                <Outlet />
            </section>
        </>
    );
}
