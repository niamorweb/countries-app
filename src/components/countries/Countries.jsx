import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCountries from "../cardCountries/CardCountries";

export default function Countries( {dataCountries}) {


  const countriesToFilter = ["Africa", "America", "Europe", "Oceania", "Asia"];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionSort, setSelectedOptionSort] = useState("name");
  const [searchValue, setSearchValue] = useState("");


  return (
    <div className="countries">
      <ul className="radio-container">
        <li>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for a country..."
            type="search"
            name=""
            id="search-country"
          />
        </li>

        <div className="div-selectors">
          <li>
            <select
              onChange={(e) => setSelectedOption(e.target.value)}
              name="selector-region"
              id="selector-region"
            >
              <option value="">Filter by Region</option>
              {countriesToFilter.map((continent) => (
                <option value={continent}>{continent} </option>
              ))}
            </select>
          </li>

          <li>
            <select
              onChange={(e) => setSelectedOptionSort(e.target.value)}
              name="selector-sort"
              id="selector-sort"
            >
              <option value={"name"}>Sort by country name</option>
              <option value={"croissant"}>
                Sort by increasing population{" "}
              </option>
              <option value={"decroissant"}>
                Sort by decreasing population{" "}
              </option>
            </select>
          </li>
        </div>
      </ul>

      <ul id="countries-main">
        {dataCountries
          .filter((country) => country.continents[0].includes(selectedOption))
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .sort(
            selectedOptionSort === "name"
              ? (a, b) => a.name.common.localeCompare(b.name.common)
              : selectedOptionSort === "decroissant"
              ? (a, b) => b.population - a.population
              : selectedOptionSort === "croissant"
              ? (a, b) => a.population - b.population
              : null
          )
          .map((country, index) => (
            <CardCountries
              key={index}
              country={country}
              dataCountries={dataCountries}
            />
          ))}
      </ul>
    </div>
  );
}
