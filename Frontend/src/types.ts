export interface dbSong{
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
}

export interface Song {
    title: string;
    artist: string;
    album: string;
    genre: string;
}

  

export interface RootState {
    song: Song[]
}

export interface Artist {
    name: string
}

export interface GenreStat {
    _id: {
      name: string;
      _id: string;
    };
    count: number;
}

export interface StatCount {
    songs: string;
    albums: string;
    artists: string;
    genres: string;
}

export interface ArtistStat {
    _id: {
      name: string;
      _id: string;
    };
    numberOfSongs: number;
    artist: {
      name: string;
      _id: string;
    };
    numberOfAlbums: number;
}

export interface SongsInEachAlbumStat {
    _id: string;
    numberOfSongs: number;
    album: string;
}