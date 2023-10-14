import React from "react";
import Songs from "./app/components/Songs";
import Song from "./app/components/Song";
import HeroSection from "./app/components/sections/Header/HeroSection";
import styled from "@emotion/styled";
import Search from "./app/components/Search";
import GenreSelector from "./app/components/GenreSelector";
import GenresStat from "../src/app/components/sections/Main/Stat/GenresStat";
import GeneralStat from "./app/components/sections/Main/Stat/GeneralStat";
import ArtistStat from "./app/components/sections/Main/Stat/ArtistStat";
import SongsInEachAlbum from "./app/components/sections/Main/Stat/SongsInEachAlbum";
import Navbar from "./app/components/sections/Header/Navabr/Navbar";

const AppContainer = styled.div``;

const NavbarContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  height: 100%;
  padding: 10px;
`;

const Container = styled.div`
  height: 100%;
  padding-top: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const MusicListHeader = styled.h1`
  margin-top: 50px;
`;

const SongContainer = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
`;
const StatContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 50px;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 100vh;
`;

const Stat = styled.div`
  display: grid;
  grid-template-rows: 2;
  grid-gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
const GenreSelectorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
`;

const App: React.FunctionComponent = () => {
  return (
    <AppContainer>
      {/* <NavBar /> */}
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <div id="home">
        <HeroSection />
      </div>
      <SearchContainer id="start">
        <Search />
      </SearchContainer>
      <GenreSelectorContainer>
        <GenreSelector />
      </GenreSelectorContainer>
      <Container id="songList">
        <MainContainer>
          <MusicListHeader>Afro Music</MusicListHeader>
        </MainContainer>
        <SongContainer id="addSong">
          <Song />
        </SongContainer>
        <MainContainer>
          <Songs />
        </MainContainer>
      </Container>

      <StatContainer id="viewStatistics">
        <MusicListHeader>Afro Music Stat</MusicListHeader>
        <Stat>
          <h3>Overall stat</h3>
          <GeneralStat />
        </Stat>
        <Stat>
          <h3>Genre Stat</h3>
          <GenresStat />
        </Stat>
        <Stat>
          <h3>Artist Stat</h3>
          <ArtistStat />
        </Stat>
        <Stat>
          <h3>Number of Songs In Each Album</h3>
          <SongsInEachAlbum />
        </Stat>
      </StatContainer>
    </AppContainer>
  );
};

export default App;
