import "../css/Favorites.css";
import { useNonprofitContext } from "../contexts/NonprofitContext";
import NonprofitCard from "../components/NonprofitCard";

function Favorite() {
    const { favorites } = useNonprofitContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorite Nonprofits</h2>
                <div className="nonprofits-grid">
                    {favorites.map((nonprofit) => (
                        <NonprofitCard nonprofit={nonprofit} key={nonprofit.ein} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Nonprofits Yet</h2>
            <p>Start adding nonprofits to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favorite;
