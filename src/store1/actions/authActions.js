import {
  GET_ANIMAL_KINGDOM_CAFE,
  ADD_ANIMAL_KINGDOM_CAFE,
  ADDED_ANIMAL_KINGDOM_CAFE,
  GET_ANIMAL_KINGDOM_CAFE_ITEM,
  ADD_TO_SHOPPING_CART,
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
  THEME_BACKGROUND
} from "../constants";

import * as firebase from "firebase";
import "firebase/firestore";
import axios from "axios";

export const addAnimalKingdomCafe = (cafe) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("animalKingdomCafe")
      .doc()
      .set(cafe)
      .then(() => {
        console.log("Document successfully written!");
        dispatch({
          type: ADD_ANIMAL_KINGDOM_CAFE,
        });
      })
      .catch((error) => {
        // console.error("Error writing document: ", error);
      });
};

export const getAnimalKingdomCafe = (userId, type) => {
  return async (dispatch) => {
    if (type === "businessowner") {
      const snapshot = await firebase
        .firestore()
        .collection("animalKingdomCafe")
        .where("userId", "==", userId)
        .get();
      let array = [];
      snapshot.docs.map((doc) => {
        array.push(doc.data());
        console.log(doc.data());
      });
      return dispatch({
        type: GET_ANIMAL_KINGDOM_CAFE,
        payload: array,
      });
    } else {
      const snapshot = await firebase
        .firestore()
        .collection("animalKingdomCafe")
        .get();
      let array = [];
      snapshot.docs.map((doc) => {
        array.push(doc.data());
        console.log(doc.data());
      });
      return dispatch({
        type: GET_ANIMAL_KINGDOM_CAFE,
        payload: array,
      });
    }
  };
};
export const getAnimalKingdomCafeItem = (id) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("animalKingdomCafe")
      .get(id);
    let obj = {};
    snapshot.docs.map((doc) => {
      obj = doc.data();
    });
    return dispatch({
      type: GET_ANIMAL_KINGDOM_CAFE_ITEM,
      payload: obj,
    });
  };
};
export const addedAnimalKingdomCafe = () => {
  return (dispatch) => {
    dispatch({
      type: ADDED_ANIMAL_KINGDOM_CAFE,
    });
  };
};

// Cart

export const addToShoppingCart = (cafe) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("Cart")
      .doc()
      .set(cafe)
      .then(() => {
        console.log("Document successfully written!");
        dispatch({
          type: ADD_TO_SHOPPING_CART,
        });
      })
      .catch((error) => {
        // console.error("Error writing document: ", error);
      });
};

export const deleteShoppingCart = (uid) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("Cart")
      .where("buyerId", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });

        return dispatch({
          type: GET_FROM_SHOPPING_CART,
          payload: [],
        });
      });
};

export const getFromShoppingCart = (uid) => {
  // console.log("--------", uid)
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Cart")
      .where("buyerId", "==", uid)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.cartId = doc.id;
      array.push(obj);
      // console.log("doc.data()",doc.data());
    });
    return dispatch({
      type: GET_FROM_SHOPPING_CART,
      payload: array,
    });
  };
};

export const updateOrder = (id, obj) => {
  console.log("id", id);
  return () => {
    firebase
      .firestore()
      .collection("Orders")
      .doc(id)
      .update({
        active: false,
        feedback: obj.feedback,
        rating: obj.rating,
        completed: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
      })
      .then((s) => {
        console.log("----------", s);
      })
      .catch((e) => {
        console.log("==========", e);
      });
    // return dispatch({
    //   type: GET_FROM_SHOPPING_CART,
    //   payload: array
    // });
  };
};

// Confirm Order

export const confirmOrder = (cafe) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("Orders")
      .doc()
      .set(cafe)
      .then((querySnapshot) => {
        console.log("aaaaaaaaaaaaaaaaaa", querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log("========", doc.id);
          // this.sets.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
          type: ADD_TO_SHOPPING_CART,
        });
      })
      .catch((error) => {
        // console.error("Error writing document: ", error);
      });
};

// Misiing pets

export const missingPet = () => {
  return async (dispatch) => {
    let array = [];

    var snapshot = await firebase.database().ref("sloothAlert").once("value");

    if (snapshot.exists()) {
      snapshot.forEach((snap) => {
        array.push(snap.val());
      });
    }

    return dispatch({
      type: MISSING_PET,
      payload: array,
    });
  };
};

export const missingPetSingle = (id) => {
  return async (dispatch) => {
    // let array = [];

    var snapshot = await firebase
      .database()
      .ref(`sloothAlert/${id}`)
      .once("value");

    if (snapshot.exists()) {
      console.log("snapshot------------", snapshot.val(), snapshot.key);
      // snapshot.forEach(snap => {
      //   array.push(snap.val());
      // });
      return dispatch({
        type: GET_MISSING_PET,
        payload: snapshot.val(),
      });
    }
  };
};

// active orders
export const activeOrders = (uid) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Orders")
      .where("userId", "==", uid)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      console.log(
        "--------------------------------------------------------------------------------------------"
      );

      if (doc.data().active) {
        let obj = doc.data();
        obj.orderId = doc.id;
        array.push(obj);
      }
    });

    console.log("array", array);
    return dispatch({
      type: GET_FROM_ORDERS,
      payload: array,
    });
  };
};

// completed orders
export const completedOrders = (uid) => {
  console.log("uid");
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Orders")
      .where("userId", "==", uid)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      if (!doc.data().active) {
        let obj = doc.data();
        obj.orderId = doc.id;
        array.push(obj);
      }
    });
    return dispatch({
      type: GET_COMPLETED_FROM_ORDERS,
      payload: array,
    });
  };
};

// Chat

export const sendMessage = (message) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("Chat")
      .doc()
      .set(message)
      .then(async () => {

      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

// Chat

export const createChat = (message) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("ChatType")
      // .doc(message.groupName)
      .doc()
      .set(message)
      .then(async (querySnapshot) => {
        return dispatch({
          type: GROUP_CHAT_CREATED,
          payload: true,
        });
      })
      .catch((error) => {
        return dispatch({
          type: GROUP_CHAT_CREATED,
          payload: false,
        });
      });
};

export const getChatList = (key) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("ChatType")
      .where("key", "==", key)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      array.push(doc.data());
      // console.log("doc.data()",doc.data());
    });
    return dispatch({
      type: GET_CHAT_LIST,
      payload: array,
    });
  };
};

// Chat

export const updateGroupChat = (message) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("GroupChat")
      .doc(message.groupName)
      .update(message)
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const addNewFriend = (message) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("FriendRequests")
      .doc()
      .set({ myId: message.uid, userId: message.key })
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getFriendRequest = (user) => {
  console.log("getFriendRequest", user);
  return (dispatch) =>
    firebase
      .firestore()
      .collection("FriendRequests")
      .where("myId", "==", user.myId)
      // .where("userId", "==", user.userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("doc", doc);
        });

        querySnapshot.forEach((doc) => {
          console.log("doc.ref", doc.ref);
        });

        // return dispatch({
        //   type: GET_FROM_SHOPPING_CART,
        //   payload: []
        // });
      });
};

export const deleteFriendRequest = (user) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("FriendRequests")
      .where("myId", "==", user.myId)
      .where("userId", "==", user.userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });

        // return dispatch({
        //   type: GET_FROM_SHOPPING_CART,
        //   payload: []
        // });
      });
};

export const marketPlaceItem = (message, uid) => {
  return (dispatch) =>
    firebase
      .firestore()
      .collection("MarketPlaceItems")
      .doc()
      .set(message)
      .then((querySnapshot) => {
        // Make a request for a user with a given ID
        axios
          .post("http://localhost:1994/vehicles", message)
          .then((response) => {
            // handle success
            console.log("response", response);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
          .then(() => {
            // always executed
          });
        console.log("====================");
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getMarketPlaceItem = (category) => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("MarketPlaceItems")
      .where("category", "==", category)
      .get()
      .then((querySnapshot) => {
        let array = [];
        querySnapshot.forEach((doc) => {
          let obj = doc.data();

          obj.key = doc.id;
          array.push(obj);
          return dispatch({
            type: GET_MARKETPLACE_LIST,
            payload: array,
          });
        });

        // return dispatch({
        //   type: GET_MARKETPLACE_LIST,
        //   payload: array
        // });
        // let array = [];

        // console.log("----///---"<snapshot)
        // snapshot.docs.map(doc => {
        //   let obj = doc.data();
        // obj.key = doc.id
        //   array.push(obj);
        //   console.log("doc.data()",obj);
        // });
        // return dispatch({
        //   type: GET_MARKETPLACE_LIST,
        //   payload: array
      })
      .catch((e) => console.log(e));
  };
};

export const marketPlaceItemRating = (message) => {
  console.log(message);
  return (dispatch) =>
    firebase
      .firestore()
      .collection("MarketPlaceItemsRatings")
      .doc()
      .set(message)
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getMarketPlaceItemRatings = (key) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("MarketPlaceItemsRatings")
      .where("key", "==", key)
      .get();
    let array = [];

    console.log(snapshot);
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
      console.log("doc.data()", obj);
    });
    return dispatch({
      type: GET_RATINGS,
      payload: array,
    });
  };
};

export const getMarketPlaceItemIsRated = (key, uid) => {
  console.log();
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("MarketPlaceItemsRatings")
      .where("key", "==", key)
      .where("user", "==", uid)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
      console.log("doc.data()", obj);
    });
    console.log("wooooooooooooooo", array);
    return dispatch({
      type: GET_ISRATED_ITEM,
      payload: array,
    });
  };
};

export const userStories = (message, uid) => {
  return () =>
    firebase
      .firestore()
      .collection("UserStories")
      .doc()
      .set(message)
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getUserStories = () => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("UserStories")
      .orderBy("date", "desc")
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_USERSTORIES,
      payload: array,
    });
  };
};

export const userStoriesComments = (message) => {
  return () =>
    firebase
      .firestore()
      .collection("UserStoriesComments")
      .doc()
      .set(message)
      .then(() => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getUserStoriesComments = (storyKey) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("UserStoriesComments")
      .where("storyKey", "==", storyKey)
      .get();
    let array = [];

    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_USERSTORIES_COMMENTS,
      payload: array,
    });
  };
};

export const createGroups = (group) => {
  return () =>
    firebase
      .firestore()
      .collection("Groups")
      .doc()
      .set(group)
      .then(() => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getAllGroups = () => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Groups")
      // .where("storyKey","==",storyKey)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_ALLGROUPS,
      payload: array,
    });
  };
};

export const createGroupMembers = (group) => {
  let _group = { members: group.selectedMembers, groupId: group.groupId };
  return () =>
    firebase
      .firestore()
      .collection("GroupMembers")
      .doc()
      .set(_group)
      .then(() => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getAllGroupMembers = (groupId) => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("GroupMembers")
      .where("groupId", "==", groupId)
      .get();

    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data().members;
      // obj.key = doc.id;
      array = obj;
    });

    return dispatch({
      type: GET_ALLGROUP_MEMBERS,
      payload: array,
    });
  };
};

export const podcast = (message, uid) => {
  return () =>
    firebase
      .firestore()
      .collection("Podcast")
      .doc()
      .set(message)
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getPodcast = () => {
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Podcast")
      .orderBy("date", "desc")
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_PODCAST,
      payload: array,
    });
  };
};


export const searchPodcast = (search) => {
  console.log("s", search)
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("Podcast")
      .where("description", "==", search)
      // .orderBy("date", "desc")
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_PODCAST,
      payload: array,
    });
  };
};

export const updatePodcast = (likesBy, totalLikes, key, uid) => {
  console.log(likesBy, key);
  likesBy[uid] = true;
  console.log(likesBy);
  return () =>
    firebase
      .firestore()
      .collection("Podcast")
      .doc(key)
      .update({ likesBy: likesBy, totalLikes: totalLikes + 1 })
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const updatePodcastComments = (totalComments, key) => {
  console.log("totalComments, key",totalComments, key)
  return () =>
    firebase
      .firestore()
      .collection("Podcast")
      .doc(key)
      .update({ totalComments: totalComments + 1 })
      .then(async (querySnapshot) => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const podcastComments = (message) => {
  console.log("message",message)
  return () =>
    firebase
      .firestore()
      .collection("PodcastComments")
      .doc()
      .set(message)
      .then(() => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const getPodcastComments = (podcastId) => {
  console.log("working", podcastId);
  return async (dispatch) => {
    const snapshot = await firebase
      .firestore()
      .collection("PodcastComments")
      .where("podcastId", "==", podcastId)
      .get();
    let array = [];
    snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.key = doc.id;
      array.push(obj);
    });
    return dispatch({
      type: GET_PODCAST_COMMENTS,
      payload: array,
    });
  };
};

export const podcastLike = (message) => {
  return () =>
    firebase
      .firestore()
      .collection("Podcast")

      .doc(message.key)
      .collection("likes")
      .set({ userId: message.userId })
      // .doc(message.key)
      // .set(

      //   { likes: [{ userId: message.userId }] },
      //   { merge: true }

      // )
      .then(async () => {})
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
};

export const changeThemeColor = (color) => {
  return (dispatch) => {
    dispatch({
      type: THEME_COLOR,
      payload: color,
    });
  };
};

export const changeThemeBackground = (image) => {
  return (dispatch) => {
    dispatch({
      type: THEME_BACKGROUND,
      payload: image,
    });
  };
};

// export const podcastLikes = message => {
//   return () =>
//     firebase
//       .firestore()
//       .collection('PodcastLikes')
//       .add({
//         podcastKey: message.key,
//         userId: message.userId,
//       })
//       // .doc(message.key)
//       // .set(message)
//       .then(() => {
//         return async dispatch => {
//           const snapshot = await firebase
//             .firestore()
//             .collection('PodcastLikes')
//             .where('podcastKey', '==', message.key)
//             .where('userId', '==', message.userId)
//             .get();
//           let array = [];
//           snapshot.docs.map(doc => {
//             let obj = doc.data();
//             obj.key = doc.id;
//             array.push(obj);
//           });
//           return dispatch({
//             type: GET_PODCAST_Likes,
//             payload: array,
//           });
//         };
//       })
//       .catch(error => {
//         console.log('Error writing document: ', error);
//       });
// };
