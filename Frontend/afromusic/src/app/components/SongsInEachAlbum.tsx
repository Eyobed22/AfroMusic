import React, { useEffect } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import * as actions from "../../store/actions";


const SongsInEachAlbum: React.FC = () => {
    const dispatch = useDispatch();
    const songsInEachAlbum = useSelector((state: RootState) => state.songsInEachAlbum);

    useEffect(() => {
        dispatch(actions.readAllSongsInEachAlbumStat());
      }, [dispatch]);
      console.log("songsInEachAlbum: ", songsInEachAlbum);

    
    if (songsInEachAlbum.length === 0) {
        return null; 
    }
    
    const data = songsInEachAlbum.map((item) => [
        item.album.toString(),
        item.numberOfSongs.toString(),
      ]);
    
    const headers = ["Album", "Number of songs"];


  return (
    <div>
        <Table headers={headers} data={data} />
    </div>
  )
}

export default SongsInEachAlbum