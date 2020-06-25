import React from "react"
import axios from "axios"
import PropTypes from "prop-types"
import { List, Image, Header } from 'semantic-ui-react'

class SessionListItem extends React.Component {

  // state = {
  //   bandpic: ""
  // };

  // componentDidMount() {
  //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.props.session.band}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     console.log(response.data.data[0].artist.picture_big);
  //     this.setState({bandpic: response.data.data[0].artist.picture_big })
  //   });
  // }




  render () {
    return (
      <List.Item className="session" key={this.props.session.id} href={`/sessions/${this.props.session.id}`}>
        <List.Header >
          <h3>{this.props.session.band}</h3>
        </List.Header>
        <List.Header>
          <h5>{this.props.session.year}</h5>
        </List.Header>
{/*        <Image fluid src={this.state.bandpic} />*/}
      </List.Item>
    );
  }
}

export default SessionListItem
