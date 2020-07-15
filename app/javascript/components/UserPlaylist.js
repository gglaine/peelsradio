import React from "react"
import PropTypes from "prop-types"
import SessionListItem from "./SessionListItem"

import { List } from 'semantic-ui-react'

class UserPlaylist extends React.Component {
  render() {

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
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default UserPlaylist
