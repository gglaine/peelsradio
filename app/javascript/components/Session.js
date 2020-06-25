import React from "react"
import axios from "axios"
import ReactPlayer from "react-player"

import { List, Container, Header, Divider, Image } from 'semantic-ui-react'

class Session extends React.Component {

  state = {
    artistpic: ""
  };

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.props.session.band}`)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.data[0].artist.picture_big);
      this.setState({artistpic: response.data.data[0].artist.picture_big })
    });
  }

  render() {

    const session = this.props.session;
    console.log(session.link);

    const styles = {
      container: {
        padding: "2em !important",
        paddingTop: "4em !important"
      },
      playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%', /* Player ratio: 100 / (1280 / 720) */
        marginTop: '20%'
      },
      reactPlayer: {
        position: 'absolute',
        top: '0',
        left: '0',
        border: '4px solid #191919 !important',
        borderRadius: '22px !important'
      }

    };

    const url = session.link
    console.log(url);


    return (
      <div className="session" style={styles.container}>
        <Header as='h1' textAlign='center' >{session.band}</Header>
        <Header as='h3' textAlign='center'>{session.year}</Header>
        <Container fluid style={styles.playerWrapper} >
          <ReactPlayer
            url={url}
            width='100%'
            controls
            muted={false}
            autoPlay={1}
            playing={true}
            light={this.state.artistpic}
            style={styles.reactPlayer}
            modestbranding={1}
            />
        </Container>
      </div>

    );
  }
}

export default Session
