import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  DEMO_SUCCESS,
  DEMO,
  DEMO_FAILURE,
  SECOND_DEMO,
  SECOND_DEMO_SUCCESS,
  SECOND_DEMO_FAILURE,
  GET_ANIMAL_KINGDOM_CAFE,
  ADD_ANIMAL_KINGDOM_CAFE,
  ADDED_ANIMAL_KINGDOM_CAFE,
  GET_ANIMAL_KINGDOM_CAFE_ITEM,
  ADD_TO_SHOPPING_CART,
  ADD_TO_SHOPPING_CART_SUCCESSFULL,
  GET_FROM_SHOPPING_CART,
  MISSING_PET,
  GET_FROM_ORDERS,
  GET_COMPLETED_FROM_ORDERS,
  GET_MISSING_PET,
  GROUP_CHAT_CREATED,
  GET_CHAT_LIST,
  GET_MARKETPLACE_LIST,
  GET_RATINGS,
  GET_ISRATED_ITEM,
  GET_USERSTORIES,
  GET_USERSTORIES_COMMENTS,
  GET_ALLGROUPS,
  GET_ALLGROUP_MEMBERS,
  GET_PODCAST,
  GET_PODCAST_COMMENTS,
  THEME_COLOR,
  THEME_BACKGROUND,
} from "../constants";
const initialState = {
  data: {},
  userdata: {},
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  getAnimalKingdomCafe: null,
  getAnimalKingdomCafeItem: null,
  addedAnimalKingdomCafe: false,
  addToShoppinCart: false,
  getFromShoppingCart: null,
  missingPet: [],
  getFromOrders: null,
  getCompletedFromOrders: null,
  getMissingPet: {},
  groupCreated: false,
  getChatList: null,
  getMarketPlaceList: null,
  getMarketPlaceItemRatings: null,
  getMarketPlaceItemIsRated: null,
  getUserStories: null,
  getUserStoriesComments: null,
  getAllGroups: null,
  getAllGroupMembers: [],
  getPodcast: null,
  getPodcastComments: null,
  themeColor: "#333",
  themeBackground: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        userdata: {},
        data: {},
        isLoading: true,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        userdata: action.payload,
        isLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case SIGNIN:
      return {
        ...state,
        data: {},
        userdata: {},
        isLoading: true,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        userdata: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userdata: {},
        data: {},
        isLoading: false,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case DEMO:
      return {
        ...state,
        data: {},
        userdata: {},
        isLoading: true,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case DEMO_SUCCESS:
      return {
        ...state,
        userdata: {},
        data: action.payload,
        isLoading: false,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case DEMO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case SECOND_DEMO:
      return {
        ...state,
        data: {},
        userdata: {},
        isLoading: true,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case SECOND_DEMO_SUCCESS:
      return {
        ...state,
        userdata: {},
        data: action.payload,
        isLoading: false,
        isError: false,
        error: {},
        isLoggedIn: false,
      };
    case SECOND_DEMO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_ANIMAL_KINGDOM_CAFE:
      return {
        ...state,
        getAnimalKingdomCafe: action.payload,
      };
    case ADD_ANIMAL_KINGDOM_CAFE:
      return {
        ...state,
        addedAnimalKingdomCafe: true,
      };
    case ADDED_ANIMAL_KINGDOM_CAFE:
      return {
        ...state,
        addedAnimalKingdomCafe: false,
      };

    case GET_ANIMAL_KINGDOM_CAFE_ITEM:
      return {
        ...state,
        getAnimalKingdomCafeItem: action.payload,
      };

    case ADD_TO_SHOPPING_CART:
      return {
        ...state,
        addToShoppinCart: true,
      };

    case ADD_TO_SHOPPING_CART_SUCCESSFULL:
      return {
        ...state,
        addToShoppinCart: false,
      };
    case GET_FROM_SHOPPING_CART:
      return {
        ...state,
        getFromShoppingCart: action.payload,
      };
    case MISSING_PET:
      return {
        ...state,
        missingPet: action.payload,
      };
    case GET_FROM_ORDERS:
      return {
        ...state,
        getFromOrders: action.payload,
      };

    case GET_COMPLETED_FROM_ORDERS:
      return {
        ...state,
        getCompletedFromOrders: action.payload,
      };
    case GET_MISSING_PET:
      return {
        ...state,
        getMissingPet: action.payload,
      };
    case GROUP_CHAT_CREATED:
      return {
        ...state,
        groupCreated: action.payload,
      };

    case GET_CHAT_LIST:
      return {
        ...state,
        getChatList: action.payload,
      };

    case GET_MARKETPLACE_LIST:
      return {
        ...state,
        getMarketPlaceList: action.payload,
      };

    case GET_RATINGS:
      return {
        ...state,
        getMarketPlaceItemRatings: action.payload,
      };

    case GET_ISRATED_ITEM:
      return {
        ...state,
        getMarketPlaceItemIsRated: action.payload,
      };
    case GET_USERSTORIES:
      return {
        ...state,
        getUserStories: action.payload,
      };
    case GET_USERSTORIES_COMMENTS:
      return {
        ...state,
        getUserStoriesComments: action.payload,
      };
    case GET_ALLGROUPS:
      return {
        ...state,
        getAllGroups: action.payload,
      };

    case GET_ALLGROUP_MEMBERS:
      return {
        ...state,
        getAllGroupMembers: action.payload,
      };

    case GET_PODCAST:
      return {
        ...state,
        getPodcast: action.payload,
      };
    case GET_PODCAST_COMMENTS:
      return {
        ...state,
        getPodcastComments: action.payload,
      };
    case THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload,
      };

    case THEME_BACKGROUND:
      return {
        ...state,
        themeBackground: action.payload,
      };

    default:
      return state;
  }
}
