import React from "react";
// import logo from './logo.svg';
import "./Message.css";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import Sidenav from "../../SideNav";
import Message2 from "../MessagesSecond/Message2";
import "./message-modal.css";
import * as firebase from "firebase";

import { createChat, getChatList } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class StartConversation extends React.Component {
  state = {
    filteredUsers: [],
    filteredUsersKeys: [],
    selected: [],
    selectedChats: [],
    groupName: [],
    groupProfilePics: [],
    activeChatValue: null,
    activeChat: "",
    search: "",
    user: null,
    chatId: new Date().getTime() * Math.floor(Math.random() * 1000) + 1,

    getChatList: [],

    userId: firebase.auth().currentUser
      ? firebase.auth().currentUser.uid
      : "rC38RLj73eT3yBhiia1xK9Efqwh2",
  };

  componentDidMount() {
    firebase
      .database()
      .ref(`users/${this.state.userId}`)
      .on("value", (value) => {
        this.setState({ user: value.val() });
      });

    this.props.getChatList(this.state.userId);
  }

  search(text) {
    let ref = firebase.database().ref("users");
    let array = [];
    let arrayKeys = [];
    this.setState({ search: text });
    ref
      .orderByChild("fullName")
      .startAt(text)
      .limitToFirst(8)
      .on("child_added", (snapshot) => {
        let obj = snapshot.val();
        obj.key = snapshot.key;
        array.push(obj);
        arrayKeys.push(snapshot.key);
        this.setState({ filteredUsers: array, filteredUsersKeys: arrayKeys });
      });
  }

  select = (selected, ind) => {
    this.setState({
      selectedChats: [...this.state.selectedChats, selected],
      groupName: [...this.state.groupName, selected.fullName],
      groupProfilePics: [...this.state.groupProfilePics, selected.profilePic],
    });
    this.state.filteredUsers.splice(ind, 1);
    this.setState({ selected: [...this.state.selected, selected] });
  };

  startConversation() {
    let chatId = this.state.chatId;
    let chatName =
      this.state.selectedChats.length > 1
        ? this.state.selectedChats[0].fullName + "..."
        : this.state.selectedChats[0].fullName;

    if (this.state.selectedChats.length > 1) {
      this.props.createChat({
        chatId: chatId,
        // chatName: this.state.groupName.join(","),
        chatName: chatName,
        fullName: this.state.user.fullName,
        key: this.state.userId,
        profilePic: this.state.groupProfilePics.join(","),
        chatType: "group",
      });

      this.state.selectedChats.map((val) => {
        this.props.createChat({
          chatId: chatId,
          // chatName: this.state.groupName.join(","),
          chatName: chatName,
          fullName: val.fullName,
          key: val.key,
          profilePic: this.state.groupProfilePics.join(","),
          chatType: "group",
        });
      });
    } else {
      this.props.createChat({
        chatId: chatId,
        // chatName: this.state.groupName.join(","),
        chatName: chatName,
        fullName: this.state.user.fullName,
        key: this.state.userId,
        profilePic: this.state.user.profilePic,
        chatType: "single",
        key2: this.state.selectedChats[0].key,
        profilePic2: this.state.selectedChats[0].profilePic,
        fullName2: this.state.selectedChats[0].fullName,
      });

      this.state.selectedChats.map((val) => {
        this.props.createChat({
          chatId: chatId,
          // chatName: this.state.groupName.join(","),
          chatName: chatName,
          fullName: val.fullName,
          key: val.key,
          profilePic: val.profilePic,
          chatType: "single",
          key2: this.state.key,
          profilePic2: this.state.profilePic,
          fullName2: this.state.fullName,
        });
      });
    }

    this.props.getChatList(this.state.userId);
  }

  /******************** Message 2 component functionality *****************/
  componentWillReceiveProps(nextProps) {
    if (nextProps.state.auth.getChatList) {
      this.setState({
        getChatList: nextProps.state.auth.getChatList,
      });
    }
  }

  activeChat = (chatId, val) => {
    console.log(chatId, val);
    this.setState({ activeChat: chatId, activeChatValue: val });
  };

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* *******************CENTER****************** */}

          <div className="msg-center">
            <div className="msg">
              <h4 className="msg-heading">Mesages</h4>

              <MailOutlineOutlinedIcon
                style={{ color: "#2a2c7c" }}
                data-toggle="modal"
                data-target="#showfilter"
              />
            </div>
            <hr />

            <div class="form-group has-search input-msg">
              <span class="fa fa-search form-control-feedback "></span>
              <input
                type="text"
                class="form-control form-msg"
                placeholder="Search"
              />
            </div>
            <hr />

            {this.state.getChatList.length > 0
              ? this.state.getChatList.map((val, ind) => {
                  return (
                    <div
                      className={
                        this.state.activeChat === val.chatId
                          ? "active-chat"
                          : ""
                      }
                      key={ind}
                      onClick={() => this.activeChat(val.chatId, val)}
                    >
                      <div className="all-msg">
                        <div className="msg-width">
                          {val.chatType === "group" ? (
                            <div className="group-chat-images-div">
                              <img
                                className="msg-pet group-chat-images"
                                src={val.profilePic.split(",")[0]}
                              />
                              <img
                                className="msg-pet"
                                src={val.profilePic.split(",")[1]}
                              />
                            </div>
                          ) : (
                            <img className="msg-pet" src={val.profilePic2} />
                          )}
                        </div>
                        <div className="name-id">
                          <p>
                            {val.chatName}
                            <span className="msg-hello"></span>
                          </p>
                          <p className="msg-hello">
                            Total Members:
                            {val.chatType === "group"
                              ? "you and " +
                                val.profilePic.split(",").length +
                                " more"
                              : "you and 1 more"}
                          </p>
                        </div>

                        <div className="now">Now</div>
                      </div>
                      <hr />
                    </div>
                  );
                })
              : null}

            <div className="all-msg">
              <div className="msg-width">
                <img className="msg-pet" src={require("../../assets/jp.jpg")} />
              </div>
              <div className="name-mesg">
                <p className="name-msg">
                  sdnasfjdnfu <span className="msg-hello">@Askbrih</span>
                </p>
                <p className="msg-hello">Hello</p>
              </div>
              <div className="now">3m</div>
            </div>
            <hr />
          </div>

          <div class="modal" id="showfilter">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div>
                    <img
                      className="logo-modal-filter"
                      src={require("../../assets/logo_big.svg")}
                    />
                  </div>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <div className="msg-modal">
                    <h5 className="heading-h3-modal">Start new conversation</h5>
                  </div>
                  <hr />
                  <div class="form-group has-search-modal input-msg-modal">
                    <span class="fa fa-search form-control-feedback-modal"></span>
                    <input
                      type="text"
                      class="form-control form-msg"
                      placeholder="Search"
                      onChange={(e) => this.search(e.target.value)}
                    />
                  </div>
                  <hr />
                  <div className="">
                    {this.state.selected.length > 0 ? (
                      <div>
                        <div>Selected Users</div>
                        <div className="selected-chat-div">
                          {this.state.selected.map((val, ind) => {
                            return (
                              <div key={ind} className="selected-chat">
                                <div>
                                  <div className="msg-width">
                                    <img
                                      className="msg-pet"
                                      src={val.profilePic}
                                    />
                                  </div>
                                  <p className="selected-chat-name">
                                    {val.fullName}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          className="start-conversation-btn btn btn-primary"
                          onClick={() => this.startConversation()}
                          data-toggle="modal"
                          data-target="#showfilter"
                        >
                          Start Conversation
                        </button>
                        <hr />
                      </div>
                    ) : null}
                  </div>
                  {this.state.filteredUsers.length > 0 ? (
                    <div>
                      <div className="search-results">
                        Search Results "{this.state.search}"
                      </div>
                      {this.state.filteredUsers.map((val, ind) => {
                        return (
                          <div key={ind}>
                            <div className="all-msg">
                              <div className="msg-width">
                                <img className="msg-pet" src={val.profilePic} />
                              </div>
                              <div className="name-id">
                                <p>{val.fullName}</p>
                                <p className="msg-hello">@{val.fullName}</p>
                              </div>

                              <div
                                className="now"
                                onClick={() => this.select(val)}
                              >
                                Select
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  <div className="all-msg">
                    <div className="msg-width">
                      <img
                        className="msg-pet"
                        src={require("../../assets/jp.jpg")}
                      />
                    </div>
                    <div className="para-name-modal">
                      <p>
                        sdnasfjdnfu
                        <span className="msg-hello">@Askbrih</span>
                      </p>
                      <p className="msg-hello">Hello</p>
                    </div>

                    <div className="now">3m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Message2 activeChatValue={this.state.activeChatValue} />
          {/* **********************************right hand side*********************************** */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  createChat: bindActionCreators(createChat, dispatch),
  getChatList: bindActionCreators(getChatList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartConversation);
