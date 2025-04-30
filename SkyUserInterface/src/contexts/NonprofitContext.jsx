import { createContext, useState, useContext, useEffect } from "react";

const NonprofitContext = createContext();

export const useNonprofitContext = () => useContext(NonprofitContext);

export const NonprofitProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favoriteNonprofits");
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem("favoriteNonprofits", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (nonprofit) => {
        setFavorites(prev => [...prev, nonprofit]);
    };

    const removeFromFavorites = (nonprofitId) => {
        setFavorites(prev => prev.filter(nonprofit => nonprofit.ein !== nonprofitId));
    };

    const isFavorite = (nonprofitId) => {
        return favorites.some(nonprofit => nonprofit.ein === nonprofitId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return (
        <NonprofitContext.Provider value={value}>
            {children}
        </NonprofitContext.Provider>
    );
};
