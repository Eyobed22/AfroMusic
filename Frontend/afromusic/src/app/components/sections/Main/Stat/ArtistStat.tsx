import React, { useEffect } from "react";
import Table from "../../../Table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import * as actions from "../../../../../store/actions";

const ArtistStat: React.FC = () => {
  const dispatch = useDispatch();
  const artistStat = useSelector((state: RootState) => state.artistStat);

  useEffect(() => {
    dispatch(actions.readAllArtistStat());
  }, [dispatch]);
  console.log("Artist Stat: ", artistStat);

  // Check if the statCount is not empty
  if (artistStat.length === 0) {
    return null; // or render a loading spinner or placeholder
  }

  const data = artistStat.map((item) => [
    typeof item.artist === 'object' ? item.artist.name : item.artist,
    item.numberOfSongs.toString(),
    item.numberOfAlbums.toString(),
  ]);

  const headers = ["Artist", "Number of songs", "Number of albums"];
  console.log('Data: ', data)

  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default ArtistStat;
