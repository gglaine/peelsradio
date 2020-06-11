import React from "react"
import { List, Divider } from 'semantic-ui-react'

class Session extends React.Component {



  render() {

    const session = this.props.session;
    const styles = {
      container: {
        padding: "3em !important;"
      }
    };


    return (
      <div className="session" style={styles.container}>
        <div className="ui embed">
          <iframe title="video player" src={session.link} />
      </div>
      </div>
    );
  }
}

export default Session
