import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"

import { List, Container, Header, Divider, Image, Icon } from 'semantic-ui-react'

class UserPlayer extends React.Component {

  render () {

    const styles = {
      container: {
        padding: "2em !important",
        paddingTop: "0em !important",
        marginTop: "2em !important"
      },
      playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%', /* Player ratio: 100 / (1280 / 720) */
        marginTop: '5%'
      },
      reactPlayer: {
        position: 'relative',
        top: '0',
        left: '0',
        border: '4px solid #191919 !important',
        borderRadius: '22px !important'
      }
    };

    const sessions = this.props.sessions;


    return (
      <React.Fragment >
          <Container >
            <Header as='h1' textAlign='left' >My Player</Header>
          </Container >
          <Container fluid className="react-pl" >
            <ReactPlayer
              url={
                sessions.map(s =>( s.link ))
               }
              width='100%'
              controls
              muted={false}
              autoPlay={0}
              playing={true}
              style={styles.reactPlayer}
              modestbranding={1}
              />
          </Container>
      </React.Fragment>
    );
  }
}

export default UserPlayer
