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
                <Image fluid src={this.state.bandpic} />
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
