import React from "react"
import PropTypes from "prop-types"
import UserPlaylistItem from "./UserPlaylistItem"

import { List } from 'semantic-ui-react'

class UserPlaylist extends React.Component {

  state = {
    favorite_sessions: this.props.sessions,
    deletedSessions: []
  }

  removeSession(session) {
      // make a separate copy of the array
    const faved_sessions = [...this.state.favorite_sessions];
    let index = faved_sessions.indexOf(session)
    if (index !== -1) {
      faved_sessions.splice(index, 1);
      // const deleted_sessions = [...this.state.deletedSessions];
      // let deleted = deleted_sessions.push(session);
      this.setState({favorite_sessions: faved_sessions});

    }

  }



  render() {

    console.log(this.state.deletedSessions)

    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important"
      }
    };

    return (
      <div className="sessions" style={styles.container}>
        <h1 className="title">MY FAVORITE SESSIONS</h1>
        <List className="sessions-list">
          {
            this.state.favorite_sessions.map(session => (
            <React.Fragment>
              <UserPlaylistItem session={session} key={session.id} />

              <button className="btn-destroy-sess fas fa-times" onClick={() => this.removeSession(session) } >Delete session</button>
            </React.Fragment>
            ))
          }
        </List>
      </div>
    );
  }
}

export default UserPlaylist
