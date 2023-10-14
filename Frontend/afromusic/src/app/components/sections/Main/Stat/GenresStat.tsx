import React, { useEffect } from 'react'
import Table from '../../../Table'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import * as actions from "../../../../../store/actions";

const GenresStat: React.FC = () => {
    const dispatch = useDispatch();
    const genreStat = useSelector((state: RootState) => state.genreStat);

    useEffect(()=>{
        dispatch(actions.readAllGenreStat())
    }, [dispatch]);

    console.log('Genre Stat: ', genreStat);

    if (genreStat.length === 0) {
      return null; // or render a loading spinner or placeholder
    }
  
    const data = genreStat.map((genre) => [
      typeof genre._id === 'object' ? genre._id.name : genre._id,
      genre.count.toString(),
    ]);
  
    const headers = ['Genre', 'Count'];

  return (
    <div>
        {
            <Table
            headers={headers}
            data={data}
          />
        }
    </div>
  )
}

export default GenresStat