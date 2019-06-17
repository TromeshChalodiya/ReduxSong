import { combineReducers } from "redux";
//Reducer creator
const songsReducer = () => {
  return [
    { title: "No mask", duration: "2:40" },
    { title: "Macarena", duration: "3:40" },
    { title: "Casa Blnak", duration: "1:40" },
    { title: "All start", duration: "2:20" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
