import React from "react"
import axios from "axios"
import SessionListItem from './SessionListItem'
import { List } from 'semantic-ui-react'


class Eighties extends React.Component {
  render() {

    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important"
      }
    };


    return (
      <div className="sessions" style={styles.container}>
        <h1>80's</h1>
        <h3>On to the eighties with serious stuff</h3>
        <List>
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default Eighties
