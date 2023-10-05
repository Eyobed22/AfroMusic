import React from "react";
import Songs from "./app/components/Songs";
import Song from "./app/components/Song";
import HeroSection from "./app/components/HeroSection";
import NavBar from "./app/components/NavBar";
import styled from "@emotion/styled";
import Search from "./app/components/Search";
import GenreSelector from "./app/components/GenreSelector";
import GenresStat from "./app/components/GenresStat";
import GeneralStat from "./app/components/GeneralStat";
import ArtistStat from "./app/components/ArtistStat";
import SongsInEachAlbum from "./app/components/SongsInEachAlbum";

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

const SongHeader = styled.h1`
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
  grid-template-rows: 3;
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
`

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
    <div>
      <NavBar />
      <div id="home">
        <HeroSection />
      </div>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <GenreSelectorContainer>
        <GenreSelector />
      </GenreSelectorContainer>
      <Container id="songList">
        <MainContainer>
          <MusicListHeader>Afro Music</MusicListHeader>
        </MainContainer>
        <MainContainer>
          <Songs />
        </MainContainer>
      </Container>
      <Container>
        <SongContainer id="addSong">
          <SongHeader>Add Music</SongHeader>
          <Song />
        </SongContainer>
      </Container>

      <StatContainer id="viewStatistics">
        <MusicListHeader id="addSong">Afro Music Stat</MusicListHeader>
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
    </div>
  );
};

export default App;
