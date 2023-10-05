import React, { useEffect } from 'react'
import Table from './Table'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import * as actions from "../../store/actions";

const GenresStat: React.FC = () => {
    const dispatch = useDispatch();
    const GenreStat = useSelector((state: RootState) => state.genreStat);

    useEffect(()=>{
        dispatch(actions.readAllGenreStat())
    }, [dispatch]);

    console.log('Genre Stat: ', GenreStat);

  return (
    <div>
        {
            <Table
            headers={['Genre', 'Count']}
            data={GenreStat.map((genre) => [genre._id, genre.count.toString()])}
          />
        }
    </div>
  )
}

export default GenresStat