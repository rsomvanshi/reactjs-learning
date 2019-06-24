import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {'title': 'abc', duration: '4:05' },
        {'title': 'pqr', duration: '2:05' },
        {'title': 'xyz', duration: '3:05' },
        {'title': 'lmn', duration: '1:05' },
    ];
};

const songSelectedReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    songSelected: songSelectedReducer
})
