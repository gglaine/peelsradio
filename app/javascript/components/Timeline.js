import React from "react"
import { List, Divider } from 'semantic-ui-react'

class Timeline extends React.Component {
  render() {
    const sessions = this.props.sessions;
    const styles = {
      container: {
        padding: "3em !important;"
      }
    };
    return (
      <div className="sessions" style={styles.container}>
        <h1>Timeline: 1968 to 2004</h1>
        <List>
          {sessions.map(session => (
            <div class="session-list-card">
              <List.Item key={session.id}>
                <List.Header>
                  {`${session.year}`}
                </List.Header>
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

export default Timeline
