import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import CardComponent from "./Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting query parameter from the URL
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('q') || "";

  const [query, setQuery] = useState(initialQuery);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      navigate(`/search?q=${e.target.value}`);
    } else {
      navigate('/');  // navigate back to homepage if search input is empty
    }
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching all products:", error);
      });
  }, []);

  useEffect(() => {
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      const filtered = allProducts.filter(product => 
        product.title.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query, allProducts]);

  return (
    <div className="container">
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button className="btn btn--bs-tertiary-bg btn-outline-$gray-400">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      
      {/* Display the cards for each filtered product */}
      <div className="row mt-4">
        {filteredProducts.map(product => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>

      {/* Show message if no items match the query */}
      {query.length > 0 && filteredProducts.length === 0 && (
        <p className="mt-3">Oops! Item not found.</p>
      )}
    </div>
  );
}
