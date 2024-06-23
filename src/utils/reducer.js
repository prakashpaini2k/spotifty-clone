import { reducerCases } from "./constants"

export const initialState = {
    token: null,
    userInfo: null,
    userPlaylists: null,
    browseCategories: null,
    currentPlaylist: null,
    currentAlbum: null,
    currentTrack: null,
    featuredPlaylists: null,
    featuredAlbums: null,
    appState :'home',
    userTopTracks: null,
    userTopArtists: null,
    followedArtists : null

}
const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case reducerCases.SET_APPSTATE:
            return {
                ...state,
                appState: action.appState
            }    
        case reducerCases.SET_USER_PLAYLISTS:
            return {
                ...state,
                userPlaylists: action.playlists
            }  
        case reducerCases.SET_FEATURED_PLAYLISTS:
            return {
                ...state,
                featuredPlaylists: action.featuredPlaylists
            }
        case reducerCases.SET_FEATURED_ALBUMS:
            return {
                ...state,
                featuredAlbums: action.featuredAlbums
            } 
        case reducerCases.SET_BROWSE_CATEGORIES:
            return {
                ...state,
                browseCategories: action.browseCategories
            } 
        case reducerCases.SET_TOP_ARTISTS:
            return {
                ...state,
                userTopArtists: action.userTopArtists
            }
        case reducerCases.SET_TOP_TRACKS:
            return {
                ...state,
                userTopTracks: action.userTopTracks
            }    
        case reducerCases.SET_FOLLOWED_ARTIST:
            return {
                ...state,
                followedArtists: action.followedArtists
            }    
  
        case reducerCases.SET_PLAYING:
            return {
                ...state,
                playing: action.playing
            }
        case reducerCases.SET_ITEM:
            return {
                ...state,
                item: action.item
            }
        default:
            return state
    }
}

export default reducer