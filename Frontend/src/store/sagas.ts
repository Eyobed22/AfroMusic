import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../api';
import { Song, dbSong} from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { setGenrestat } from './genreStatSlice';
import { setStatCount } from './statCountSlice';
import { setArtistStat } from './ArtistStatSlice';
import { setSongsInEachAlbumCount } from './SongsInEachAlbumSlice';

function* createSong(action: PayloadAction<Song>): Generator{
    try{
        yield call(api.post, '/songs', action.payload);
        console.log(action.payload)
    }catch(error){
        console.error("createSong error: ", error)
    }
}

function* updatedSong(action: PayloadAction<dbSong>): Generator{
    const { _id, ...newObject } = action.payload

    console.log('new: ', newObject)
    try{
        yield call(api.put, `/songs/${action.payload._id}`, newObject);
    }catch(error){
        
        console.error("updatedSong error: ", error)
    }
}

function* deleteSong(action: PayloadAction<string>){
    try{
        yield call(api.delete, `/songs/${action.payload}`);
    }catch(error){
        console.error("deleteSong error: ", error)
    }
}

function* fetchSongs(): Generator{
    try{
        const response:any = yield call(api.get, '/songs') ;
        yield put(actions.setSongs(response.data));
        
    }catch(error){
        console.error("fetchSongs error: ", error)
    }
}

function* fetchGenreStat(): Generator{
    try{
        const response: any = yield call(api.get, '/songsInGenreCount');
        yield put(setGenrestat(response.data));
        
    }catch(err){
        console.log(err)
    }
}
// other should be the same like this 
function* fetchStatCount(): Generator{
    try{
        const response:any = yield call(api.get, '/statCount');
        yield put(setStatCount(response.data))
    }catch(err){
        console.log('Fetching statCount error', err)
    }
}

function* fetchArtistStat(): Generator{
    try{
        const response: any = yield call(api.get, '/artistData');
        yield put(setArtistStat(response.data));
        yield put(actions.setArtistStat(response.data));
    }catch(err){
        console.log('Fetching Artist Stat error ', err)
    }
}

function* fetchSongsInEachAlbumCount(): Generator{
    try{
        const response: any = yield call(api.get, '/songsInEachAlbum');
        yield put(setSongsInEachAlbumCount(response.data));
        yield put(actions.setSongsInEachAlbumStat(response.data));
    }catch(err){
        console.log('Fetching Songs In each album', err)
    }
}


// take a look here for which actions to remove 
function* songSaga(){
    yield takeEvery(actions.createSong.type, createSong);
    yield takeEvery(actions.updateSong.type, updatedSong);
    yield takeEvery(actions.deleteSong.type, deleteSong);
    yield takeEvery(actions.readAllSongs.type, fetchSongs);

    yield takeEvery(actions.setGenresStat.type, fetchGenreStat);
    yield takeEvery(actions.setStatCount.type, fetchStatCount);

    yield takeEvery(actions.setArtistStat.type, fetchArtistStat);

    yield takeEvery(actions.setSongsInEachAlbumStat.type, fetchSongsInEachAlbumCount);
}


export default songSaga;