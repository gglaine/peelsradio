import React from "react"
import axios from "axios"
import PropTypes from "prop-types"
import { Container, List, Image, Header, Icon } from 'semantic-ui-react'


class UserPlaylistItem extends React.Component {

  state = {
    bandpic: ""
  };


  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.props.session.band}`)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.data[0].artist.picture_big);
      this.setState({bandpic: response.data.data[0].artist.picture_big })
    });
  }

  render () {
    return (
      <React.Fragment >
        <List.Item className="user-playlist-item" key={this.props.session.id} href={`/sessions/${this.props.session.id}`}>
          <List.Header as="h5" className="name" >
           {this.props.session.band}
          </List.Header>
          <List.Header as="h5" className="year">
            {this.props.session.year}
          </List.Header>
        </List.Item>
      </React.Fragment>
    );
  }
}

export default UserPlaylistItem
