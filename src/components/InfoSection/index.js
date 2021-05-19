import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  TextWrapper,
  Heading,
  CoinWrapper,
  CoinSearch,
  CoinText,
  CoinInput,
} from "./InfoElements";
import Pagination from "./Pagination";
import { Coin } from "./Coin";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
}) => {
  const [isVis, setIsVis] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Can't fetch data from the API!"));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVis);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredCoins.slice(indexOfFirstPost, indexOfLastPost);

  const toggleVis = () => {
    if (window.scrollY >= 420) {
      setIsVis(true);
    } else {
      setIsVis(false);
    }
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column isVis={isVis}>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
              </TextWrapper>
              <CoinWrapper>
                <CoinSearch>
                  <CoinText>Search a currency</CoinText>
                  <form>
                    <CoinInput
                      type="text"
                      placeholder="Search"
                      className="coin-input"
                      onChange={handleChange}
                    ></CoinInput>
                  </form>
                </CoinSearch>
                {currentPosts.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                      volume={coin.total_volume}
                    />
                  );
                })}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={filteredCoins.length}
                  paginate={paginate}
                />
              </CoinWrapper>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
