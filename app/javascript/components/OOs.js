import React from "react"
import axios from "axios"
import SessionListItem from './SessionListItem'
import { List } from 'semantic-ui-react'


class OOs extends React.Component {
  render() {

    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important"
      }
    };


    return (
      <div className="sessions" style={styles.container}>
        <h1 className="title">2000's</h1>
        <h3 className="desc">End of the ride</h3>
        <List className="sessions-list">
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default OOs
