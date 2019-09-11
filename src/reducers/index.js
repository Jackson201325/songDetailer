import { combineReducers } from "redux";

const songsReducer = () => {
  return [
      { title: 'Hello', duration: '4:20'},
      { title: 'Darkness', duration: '4:21'},
      { title: 'My', duration: '4:22'},
      { title: 'Old', duration: '4:23'},
      { title: 'Friend', duration: '4:24'}
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
