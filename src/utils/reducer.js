import { reducerCases } from "./constants"

export const initialState = {
    token: null,
    userInfo: null,
    userPlaylists: null,
    browseCategories: null,
    currentPlaylist: null,
    currentAlbum: null,
    currentTrack: null,
    lyrics : null,
    currentTrackUri: null,
    artistInfo: null,
    artistAlbums: null,
    artistTopTracks: null,
    featuredPlaylists: null,
    featuredAlbums: null,
    appState :'home',
    searchQuery: '',
    searchResult: null,
    contentType: null,
    contentHref: null,
    recommendedTracks: null,
    userTopTracks: null,
    userTopArtists: null,
    followedArtists : null,
    playerInfo: null,
    isPlaying: false
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
                appState: action.appState,
                contentHref: action.contentHref
            }
        case reducerCases.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case reducerCases.SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.searchResult
            }
        case reducerCases.SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.currentTrack,
                currentTrackUri: `spotify:track:${action.currentTrack?.id}`,
                isPlaying: true
            }
        case reducerCases.SET_CURRENT_ALBUM:
            return {
                ...state,
                currentAlbum: action.album
            }
        case reducerCases.SET_CURRENT_PLAYLIST: 
            return {
                ...state,
                currentPlaylist: action.playlist
            } 
        case reducerCases.SET_RECOMMENDED_TRACKS:
            return {
                ...state,
                recommendedTracks: action.recommendedTracks
            }    
        case reducerCases.SET_ARTIST_INFO: 
            return{
                ...state,
                artistInfo: action.artistInfo
            }
        case reducerCases.SET_ARTIST_TOP_TRACKS:
            return {
                ...state,
                artistTopTracks: action.artistTopTracks
            }
        case reducerCases.SET_ARTIST_ALBUMS:
            return {
                ...state,
                artistAlbums: action.artistAlbums
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