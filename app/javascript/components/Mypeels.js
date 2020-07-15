import React from "react"
import PropTypes from "prop-types"
import UserPlayer from './UserPlayer'
import UserPlaylist from './UserPlaylist'
import { List, Container, Header, Divider, Image, Icon } from 'semantic-ui-react'

class Mypeels extends React.Component {

  render () {

    const styles = {
      container: {
        padding: "3em !important"
      }
    };

    const sessions = this.props.sessions;

    return (
      <React.Fragment  >
        <Container style={styles} >
          <UserPlayer sessions={sessions}  />
          <UserPlaylist sessions={sessions} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Mypeels
