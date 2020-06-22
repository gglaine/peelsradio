import React from "react"
import axios from "axios"
import { List, Divider, Image } from 'semantic-ui-react'

class Session extends React.Component {

  state = {
    artistpic: "yo"
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

    const styles = {
      container: {
        padding: "3em !important"
      },
      player: {
        opacity: "0.8",
        backgroundImage: `url(${this.state.artistpic})`
      }
    };


    return (
      <div className="session" style={styles.container}>
        <div className="ui header">{session.band}</div>
        <div className="ui header">{session.year}</div>

        <div className="ui embed"  >
          <iframe title="video player" className="videoplayer" src={session.link} style={styles.player} controls="true" >
            <Image src={this.state.artistpic} fluid />
          </iframe>
        </div>
      </div>

    );
  }
}

export default Session
