import React from "react"
import { List, Card, Divider, Image } from 'semantic-ui-react'
import SessionListItem from './SessionListItem'

class Sessions extends React.Component {

  render() {
    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important",
      }
    };
    return (
      <div className="sessions" style={styles.container}>
        <h1>All Bands - A to Z</h1>
        <List>
          {sessions.map(session => (

            <SessionListItem session={session} key={session.id}/>

          ))}
        </List>
      </div>
    );
  }
}

export default Sessions

