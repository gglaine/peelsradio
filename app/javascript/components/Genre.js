import React from "react"
import PropTypes from "prop-types"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'
import SessionListItem from './SessionListItem'


class Genre extends React.Component {
  render() {

    const sessions = this.props.sessions;


    const styles = {
      container: {
        padding: "3em !important"
      }
    };


    return (
      <div className="sessions" style={styles.container}>
        <List>
          {sessions.map(session => (
            <SessionListItem session={session} key={session.id}/>
          ))}
        </List>
      </div>
    );
  }
}

export default Genre
