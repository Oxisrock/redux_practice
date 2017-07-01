export default function reducer (state = {
  tweets: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'FECTH_TWEETS':
      {
        return {...state, fetching: true}
      }
    case 'FECTH_TWEETS_REJECTED':
      {
        return {...state, fetching: false, error: action.payload}
      }
    case 'FECTH_TWEETS_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload
        }
      }
    case 'ADD_TWEETS':
      {
        return {...state,
          tweets: [...state.tweets, action.payload] }
      }
    case 'UPDATE_TWEETS':
      {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetsToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetsToUpdate] = action.payload
        return {
          ...state,
          tweets: newTweets
        }
      }
    case 'DELETE_TWEETS' :
      {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
        }
      }
  }
  return state
}
