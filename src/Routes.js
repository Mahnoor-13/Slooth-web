import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";
import { createStore } from "redux";

import Start from "./App";
import Login from "./Login";
import Signup from "./Signup";
import PetType from "./PetType";
import Notifications from "./Notifications";
import SloothAlert from "./sloothAlert";
import SloothAlert2 from "./sloothAlert2";
import SloothAlert3 from "./sloothAlert3";
import SloothAlert4 from "./sloothAlert4";
import SloothAlert5 from "./sloothAlert5";
import SloothAlertUpdate from "./SloothAlertUpdate";
import Services from "./services";
import AnimalKingdomCafe from "./animalKingdonCafe";
import MarketPlace from "./Components/MarketPlace/MarketPlace";
import AnimalKingdom from "./animalKingdom";
import Discovergroups from "./discovergroups";
import GroupDetail from "./groupDetail";
import Creategroup from "./creategroup";
import UpcomingEvents from "./upcomingEvents";
import SloothMissing from "./sloothMissing";
import Petprofile1 from "./petprofile1";
import Petprofile2 from "./petprofile2";
import Petprofile3 from "./petprofile3";
import Petprofile4 from "./petprofile4";
import Petprofile5 from "./petprofile5";
import Petprofile6 from "./petprofile6";
import Petprofile7 from "./petprofile7";
import Home from "./Components/Home/Home";
import MissingPet from "./Components/MissingPet/MissingPet";
import MissingPetDetails from "./MissingPetDetails";
import MarketPlaceItem from "./Components/MarketPlaceItem/MarketPlaceItem";
import AllFeedbackItem from "./Components/AllFeedbackItem/AllFeedbackItem";
import AllMarketPlaceItems from "./Components/AllMarketPlaceItems/AllMarketPlaceItems";
import YourGroup from "./YourGroup";
import AnimalKingdom2 from "./AnimalKingdom2";
import AnimalKingdomOrders from "./AnimalKingdomOrders";
import ConfirmOrders from "./ConfirmOrders";
import Comments from "./Comments";
import Podcast from "./Components/Podcasts/Podcast";
import PodcastDiscussion from "./Components/PodcastsDiscussions.js/PodcastDiscussion";
import RecordPodcast from "./Components/RecordPodcasts/RecordPodcast";
import Recording from "./Components/RecordPodcasts/Recording";
import Story from "./Components/AllStories/Story";
import Addstory from "./Components/AllStories/Addstory";
import Message from "./Components/MessagesFirst/Message";
import Message2 from "./Components/MessagesSecond/Message2";
import BreederClub from "./Components/BreedersClub/BreedersClub";
import AddBreedersClub from "./Components/AddBreedersClub/AddBreedersClub";
export default function App() {
  // <Route exact path="/app" render={props => <App {...props} />} />
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <BreederClub {...props} />}
          />
          {/* <Route exact path="/" render={(props) => <BreederClub {...props} />} /> */}

          {/* <Route exact path="/" render={(props) => <Signup {...props} />} /> */}
          {/* <Route
            exact
            path="/home"
            render={(props) => <YourGroup {...props} />}
          /> */}

          <Route exact path="/home" render={(props) => <Home {...props} />} />

          <Route exact path="/Story" render={(props) => <Story {...props} />} />

          <Route
            exact
            path="/addstory"
            render={(props) => <Addstory {...props} />}
          />


          <Route
            exact
            path="/yourGroup"
            render={(props) => <YourGroup {...props} />}
          />

          <Route
            exact
            path="/profile"
            render={(props) => <Start {...props} />}
          />

          {/* <Route exact path="/Main" render={(props) => <Main {...props} />} /> */}

          <Route
            exact
            path="/Podcast"
            render={(props) => <Podcast {...props} />}
          />

          <Route
            exact
            path="/Recording"
            render={(props) => <Recording {...props} />}
          />

          <Route
            exact
            path="/PodcastDiscussion"
            render={(props) => <PodcastDiscussion {...props} />}
          />

          <Route
            exact
            path="/RecordPodcast"
            render={(props) => <RecordPodcast {...props} />}
          />

          <Route
            exact
            path="/Comments"
            render={(props) => <Comments {...props} />}
          />

          <Route
            exact
            path="/Message2"
            render={(props) => <Message2 {...props} />}
          />

          <Route
            exact
            path="/Message"
            render={(props) => <Message {...props} />}
          />

          <Route
            exact
            path="/ConfirmOrders"
            render={(props) => <ConfirmOrders {...props} />}
          />

          <Route
            exact
            path="/AnimalKingdom2"
            render={(props) => <AnimalKingdom2 {...props} />}
          />

          <Route
            exact
            path="/AnimalKingdomOrders"
            render={(props) => <AnimalKingdomOrders {...props} />}
          />

          <Route
            exact
            path="/AnimalKingdom"
            render={(props) => <AnimalKingdom {...props} />}
          />

          <Route
            exact
            path="/AllMarketPlaceItems/:id"
            render={(props) => <AllMarketPlaceItems {...props} />}
          />
          <Route
            exact
            path="/AllFeedbackItem"
            render={(props) => <AllFeedbackItem {...props} />}
          />
          <Route
            exact
            path="/MarketPlaceItem"
            render={(props) => <MarketPlaceItem {...props} />}
          />

          <Route
            exact
            path="/missingpets"
            render={(props) => <MissingPet {...props} />}
          />

          <Route
            exact
            path="/missingpetdetails"
            render={(props) => <MissingPetDetails {...props} />}
          />
          <Route
            exact
            path="/notification"
            render={(props) => <Notifications {...props} />}
          />
          <Route
            exact
            path="/discovergroups"
            render={(props) => <Discovergroups {...props} />}
          />

          <Route
            exact
            path="/groupDetail"
            render={(props) => <GroupDetail {...props} />}
          />

          <Route
            exact
            path="/creategroup"
            render={(props) => <Creategroup {...props} />}
          />
          <Route
            exact
            path="/sloothAlert"
            render={(props) => <SloothAlert {...props} />}
          />
          <Route
            exact
            path="/sloothAlert2"
            render={(props) => <SloothAlert2 {...props} />}
          />
          <Route
            exact
            path="/sloothAlert3"
            render={(props) => <SloothAlert3 {...props} />}
          />
          <Route
            exact
            path="/sloothAlert4"
            render={(props) => <SloothAlert4 {...props} />}
          />
          <Route
            exact
            path="/sloothAlert5"
            render={(props) => <SloothAlert5 {...props} />}
          />
          <Route
            exact
            path="/sloothMissing"
            render={(props) => <SloothMissing {...props} />}
          />
          <Route
            exact
            path="/sloothalertupdate"
            render={(props) => <SloothAlertUpdate {...props} />}
          />
          <Route
            exact
            path="/animalKingdom"
            render={(props) => <AnimalKingdom {...props} />}
          />
          <Route
            exact
            path="/animalKingdomCafe"
            render={(props) => <AnimalKingdomCafe {...props} />}
          />
          <Route
            exact
            path="/marketPlace"
            render={(props) => <MarketPlace {...props} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services {...props} />}
          />
          <Route
            exact
            path="/upcomingEvents"
            render={(props) => <UpcomingEvents {...props} />}
          />
          <Route
            exact
            path="/petprofile1"
            render={(props) => <Petprofile1 {...props} />}
          />
          <Route
            exact
            path="/petprofile2"
            render={(props) => <Petprofile2 {...props} />}
          />
          <Route
            exact
            path="/petprofile3"
            render={(props) => <Petprofile3 {...props} />}
          />
          <Route
            exact
            path="/petprofile4"
            render={(props) => <Petprofile4 {...props} />}
          />
          <Route
            exact
            path="/petprofile5"
            render={(props) => <Petprofile5 {...props} />}
          />
          <Route
            exact
            path="/petprofile6"
            render={(props) => <Petprofile6 {...props} />}
          />
          <Route
            exact
            path="/petprofile7"
            render={(props) => <Petprofile7 {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </Router>
    </Provider>
  );
}
