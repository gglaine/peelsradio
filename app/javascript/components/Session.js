import React from "react"
import axios from "axios"
import ReactPlayer from "react-player"

import { List, Container, Header, Divider, Image, Icon } from 'semantic-ui-react'

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
    const related = this.props.related;
    console.log(session.link);

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
        position: 'absolute',
        top: '0',
        left: '0',
        border: '4px solid #191919 !important',
        borderRadius: '22px !important'
      }

    };

    const url = session.link

    return (
      <React.Fragment >
      <Header as='h1' textAlign='center' >{session.band}</Header>
      <Header as='h3' textAlign='center'>{session.year}</Header>
      <div className="session-player" style={styles.container}>
        <Container fluid style={styles.playerWrapper}  className="react-pl" >
          <ReactPlayer
            url={url}
            width='100%'
            controls
            muted={false}
            autoPlay={1}
            playing={true}
            style={styles.reactPlayer}
            modestbranding={1}
            />
          <Icon circular inverted size='small' color='teal' name='like' />
        </Container>
      </div>
      <div className="tagslist">
       {
        related.map( rlt => (
          <div className="tag-item" >
             {rlt.toString()}
          </div>
        ))
       }
      </div>
      </React.Fragment>
    );
  }
}

export default Session
