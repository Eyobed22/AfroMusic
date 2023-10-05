import { combineReducers } from 'redux';
import songSlice from './songSlice';
import formSlice from './formSlice';
import searchSlice from './searchSlice';
import genreFilterSlice from './genreFilterSlice';
import genreStatSlice from './genreStatSlice';
import statCountSlice from './statCountSlice';
import ArtistStatSlice from './ArtistStatSlice';
import SongsInEachAlbumSlice from './SongsInEachAlbumSlice';


const rootReducer = combineReducers({
    songs: songSlice,
    form: formSlice,
    search: searchSlice,
    genreFilter: genreFilterSlice,
    genreStat: genreStatSlice,
    statCount: statCountSlice,
    artistStat: ArtistStatSlice,
    songsInEachAlbum: SongsInEachAlbumSlice,
  });
  
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer




