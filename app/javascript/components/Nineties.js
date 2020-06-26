import React from "react"
import axios from "axios"
import SessionListItem from './SessionListItem'
import { List } from 'semantic-ui-react'


class Nineties extends React.Component {
  render() {

    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important"
      }
    };


    return (
      <div className="sessions" style={styles.container}>
        <h1>90's</h1>
        <h3>Hip Hop, TripHop and all sorts of good beats</h3>
        <List>
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default Nineties
