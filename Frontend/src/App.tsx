import React from "react";
import Songs from "./app/components/sections/Main/Song/Songs";
import Song from "./app/components/sections/Main/Song/Song";
import HeroSection from "./app/components/sections/Header/HeroSection";
import styled from "@emotion/styled";
import Search from "./app/styledComponents/Search/Search";
import GenreSelector from "./app/styledComponents/Search/GenreSelector";
import GenresStat from "../src/app/components/sections/Main/Stat/GenresStat";
import GeneralStat from "./app/components/sections/Main/Stat/GeneralStat";
import ArtistStat from "./app/components/sections/Main/Stat/ArtistStat";
import SongsInEachAlbum from "./app/components/sections/Main/Stat/SongsInEachAlbum";
import Navbar from "./app/components/sections/Header/Navabr/Navbar";
import Footer from "./app/components/sections/Footer/Footer";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const DisplaySongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 50px;

  h1{
    margin-bottom: 30px;
  }

  div{
    margin-bottom: 20px;
  }
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2,1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-auto-columns: minmax(200px, auto);
  column-gap: 20px;
  margin-top: 100px;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 730px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

  }
`

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  h2{
    margin-bottom: 20px;
  }
`

const App: React.FunctionComponent = () => {
  return (
    <>
      <HeaderContainer id="start">
        <Navbar />
        <HeroSection />
      </HeaderContainer>
      <SearchContainer>
        <Search />
        <GenreSelector />
      </SearchContainer>
      <DisplaySongsContainer id="songList">
        <h1>Afro Music</h1>
        <div>
        <Song />
        </div>
        <Songs />
      </DisplaySongsContainer>
      <StatContainer id="viewStatistics">
        <StatContent>
          <h2>General Stat</h2>
          <GeneralStat />
        </StatContent>
        <StatContent>
          <h2>Number of songs in each album</h2>
          <SongsInEachAlbum />
        </StatContent>
        <StatContent>
          <h2>Artist Stat</h2>
          <ArtistStat />
        </StatContent>
        <StatContent>
          <h2>Genre Stat</h2>
          <GenresStat />
        </StatContent>
      </StatContainer>
      <Footer text="© 2023 Afro Music" />
    </>
  );
};

export default App;
