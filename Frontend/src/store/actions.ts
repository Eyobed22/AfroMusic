import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { dbSong, Song, GenreStat, StatCount, ArtistStat, SongsInEachAlbumStat } from '../types';


export const setSongs = createAction<PayloadAction<dbSong[]>>('songs/setSongs');
export const createSong = createAction('CREATE_SONG', (song: Song) => ({payload: song,}));
export const updateSong = createAction('UPDATE_SONG', (song:dbSong) => ({payload: song}));
export const readAllSongs = createAction('songs/readAllSongs');
export const deleteSong = createAction<string>('songs/deleteSong');

export const setGenresStat = createAction<PayloadAction<GenreStat[]>>('songsInGenreCount');
export const readAllGenreStat = createAction('songsInGenreCount',);

export const setStatCount = createAction<PayloadAction<StatCount[]>>('statCount');
export const readAllStatCount = createAction('statCount');

export const setArtistStat = createAction<PayloadAction<ArtistStat[]>>('artistData');
export const readAllArtistStat = createAction('artistData');

export const setSongsInEachAlbumStat = createAction<PayloadAction<SongsInEachAlbumStat[]>>('songsInEachAlbum');
export const readAllSongsInEachAlbumStat = createAction('songsInEachAlbum');



