import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MarketplaceItem } from "cc-data-api-wrapper";

import api from "../../api.ts";
import { itemsPerPage } from "../../consts.ts";

import Paginate from "../../components/Paginate.tsx";

import "./index.css";

export default function Marketplace() {
    const [isLoading, setLoading] = useState(true);
    const [marketplace, setMarketplace] = useState<MarketplaceItem[] | null>(
        null,
    );

    const [marketplaceItem, setMarketplaceItem] = useState("");

    const [error, setError] = useState<unknown>(null);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        api.marketplace
            .getAll()
            .then(result => setMarketplace(result))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    function setSearch(event: FormEvent<HTMLInputElement>) {
        setItemOffset(0);
        setMarketplaceItem(event.currentTarget.value);
    }

    if (isLoading) {
        return <div aria-busy="true"></div>;
    }

    if (error) {
        console.error(error);

        return <p className="error">An error occurred</p>;
    }

    const endOffset = itemOffset + itemsPerPage;
    const filteredItems = marketplace!.filter(item =>
        item.name.toLowerCase().includes(marketplaceItem),
    );
    const currentItems = filteredItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

    function handlePageClick(event: { selected: number }) {
        const newOffset =
            (event.selected * itemsPerPage) % filteredItems.length;
        setItemOffset(newOffset);
    }

    return (
        <>
            <input placeholder="Search..." onInput={setSearch} />

            <ul className="marketplace-items">
                {currentItems.map(item => (
                    <li key={item.id} className="marketplace-item">
                        <img src={item.thumbnail} alt="" />

                        <div>
                            <h2>
                                <Link to={`/marketplace/${item.id}`}>
                                    {item.name}
                                </Link>
                            </h2>

                            <div>
                                <h3>🪙 {item.price}</h3>
                                <h3>⭐ {item.rating}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <Paginate
                pageCount={pageCount}
                currentPage={itemOffset / itemsPerPage}
                onChange={handlePageClick}
            />
        </>
    );
}
