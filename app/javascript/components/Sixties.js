import React from "react"
import axios from "axios"
import SessionListItem from './SessionListItem'
import { List, Divider, Image } from 'semantic-ui-react'

class Sixties extends React.Component {

  render() {

    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important"
      }
    };


    return (
      <div className="sessions" style={styles.container}>
        <h1>60's</h1>
        <h3>The very first guests on John Peel's playlist feature greats like Fleetwood Mac and Jethro Thull</h3>
        <List>
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default Sixties
