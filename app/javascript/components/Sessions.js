import React from "react"
import { List, Card, Divider } from 'semantic-ui-react'

class Sessions extends React.Component {
  render() {
    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important",
        clipPath: "polygon(36% 6%, 100% 38%, 100% 100%, 0% 100%)"
      }
    };
    return (
      <div className="sessions" style={styles.container}>
        <h1>All Bands - A to Z</h1>
        <List>
          {sessions.map(session => (

            <List.Item key={session.id} href={`/sessions/${session.id}`}>
              <List.Header >
                <h3>{session.band}</h3>
              </List.Header>
              <List.Header>
                <h5>{session.year}</h5>
              </List.Header>
            </List.Item>

          ))}
        </List>
      </div>
    );
  }
}

export default Sessions

