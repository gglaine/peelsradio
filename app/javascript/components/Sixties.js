import React from "react"
import axios from "axios"
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
            <div className="session" key={session.id}>
              <List.Item >
                <List.Header>
                  {session.year}
                </List.Header>
                <Image src="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <List.Header href={`/sessions/${session.id}`}>
                  <h3>{session.band}</h3>
                </List.Header>
              </List.Item>
              <Divider horizontal></Divider>
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default Sixties
