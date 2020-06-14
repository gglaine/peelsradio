import React from "react"
import { List, Card, Divider } from 'semantic-ui-react'

class Sessions extends React.Component {
  render() {
    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important;"
      }
    };
    return (
      <div className="sessions" style={styles.container}>
        <h1>Available Sessions 1968 - 2004</h1>
        <h3>Dig in {sessions.length} sessions</h3>
        <List>
          {sessions.map(session => (

            <List.Item key={session.id} href={`/sessions/${session.id}`}>
              <List.Header >
                <h3>{session.band}</h3>
              </List.Header>
              <List.Header>
                {session.year}
              </List.Header>
            </List.Item>

          ))}
        </List>
      </div>
    );
  }
}

export default Sessions

