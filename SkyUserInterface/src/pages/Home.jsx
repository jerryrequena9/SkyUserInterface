import NonprofitCard from "../components/NonprofitCard";
import { useEffect, useState } from "react";
import { getPopularNonprofits, searchNonprofits } from "../services/api";
import { useLocation } from 'react-router-dom';
import "../css/Home.css";

function Home() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [nonprofits, setNonprofits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearchMode, setIsSearchMode] = useState(false);

  useEffect(() => {
    // Reset search and page number when location changes
    setSearchQuery("");
    setIsSearchMode(false);
    setCurrPage(1);
  }, [location.key]); // Whenever the location key changes (e.g., nav bar click)

  useEffect(() => {
    const loadPopularNonprofits = async () => {
      try {
        const popularNonprofits = await getPopularNonprofits(currPage);
        console.log("popularNonprofits:", popularNonprofits);
        setNonprofits(popularNonprofits.nonprofits || []);
        setTotalPages(popularNonprofits.pagination.pages || 1);
      } catch (err) {
        console.log(err);
        setError("Failed to load nonprofits...");
      } finally {
        setLoading(false);
      }
    };

    if (!isSearchMode) {
      loadPopularNonprofits(); // Load popular nonprofits only if not in search mode
    }
  }, [currPage, isSearchMode]); // Trigger when page changes or isSearchMode changes

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchNonprofits(searchQuery);
      console.log("searchResults:", searchResults);
      setNonprofits(searchResults.nonprofits);
      setError(null);
      setIsSearchMode(true); // Set search mode to true when performing a search
    } catch (err) {
      console.log(err);
      setError("Failed to search nonprofits...");
    } finally {
      setLoading(false);
    }

    setSearchQuery(""); // Reset search query after search is done
  };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for nonprofits..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div> 
        ) : (        
        <div className="nonprofits-grid">
            {nonprofits.map((nonprofit) => (
                <NonprofitCard nonprofit={nonprofit} key={nonprofit.ein} />
            ))}
        </div>
        )}

        {!loading && totalPages > 1 && (
          <div className="pagination-buttons">
            <button
              disabled={currPage === 1}
              onClick={() => setCurrPage(currPage - 1)}
              className="pagination-button"
            >
              Prev
            </button>
            <span className="pagination-info">
              Page {currPage} of {totalPages}
            </span>
            <button
              disabled={currPage === totalPages}
              onClick={() => setCurrPage(currPage + 1)}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        )}
    </div>
  );
}

export default Home;
