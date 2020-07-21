import React from "react"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'

import Reggae from 'images/genres/bobmarley.jpg'
import Electro from 'images/genres/laurentgarnier.jpg'
import Rock from 'images/genres/thepolice.jpeg'
import Folk from 'images/genres/fairportconvention.jpg'
import Hardrock from 'images/genres/lemmy.jpg'
import Punk from 'images/genres/siouxsie.jpg'

import Sixties from 'images/genres/fleetwoodmac.jpg'
import Seventies from 'images/genres/roxymusic.jpg'
import Eighties from 'images/genres/cocteautwins.jpg'
import Nineties from 'images/genres/thefugees.jpg'
import Twoks from 'images/genres/pjharvey.jpg'


class Explore extends React.Component {

  render () {

  const genres = [
    {
      name: "ROCK",
      pic: Rock,
      link: "/rock"
    },
    {
      name: "REGGAE | DUB",
      pic: Reggae,
      link: "/reggae"
    },
    {
      name: "ELECTRO",
      pic: Electro,
      link: "/electronic"
    },
    {
      name: "FOLK",
      pic: Folk,
      link: "/folk"
    },
    {
      name: "PUNK",
      pic: Punk,
      link: "/punk"
    },
    {
      name: "HEAVY METAL",
      pic: Hardrock,
      link: "/heavymetal"
    }
  ];


  const timelines = [
    {
      name: "Late 60s",
      pic: Sixties,
      link: "/sixties"
    },
    {
      name: "70s",
      pic: Seventies,
      link: "seventies"
    },
    {
      name: "80s",
      pic: Eighties,
      link: "eighties"
    },
    {
      name: "90s",
      pic: Nineties,
      link: "nineties"
    },
    {
      name: "2000s",
      pic: Twoks,
      link: "/oos"
    }
  ];

    return (
      <React.Fragment >
        <div className="ui container ">
          <Header  className="title-header" as="h1" textAlign='center' >
            EXPLORE
          </Header>
        </div>
        <div className="ui container">
          <Grid stackable columns={2} >
          {
            genres.map((ge) => (
            <Grid.Column key={ge.name} >
              <a href={ge.link}>
              <div className="genre-cont">
                <Image className="genre-img" src={ge.pic} />
                <div className="genre-name">{ge.name}</div>
              </div>
              </a>
            </Grid.Column>
            ))
          }
          </Grid>
        </div>
        <div className="ui container ">
          <Header className="title-header" as="h1" textAlign='center' >TIMELINES</Header>
        </div>
        <div className="ui container">
          <Grid stackable columns={2} >
          {
            timelines.map((ge) => (

            <Grid.Column key={ge.name} >
              <a href={ge.link}>
                <div className="genre-cont">
                  <Image className="genre-img" src={ge.pic} />
                  <div className="genre-name">{ge.name}</div>
                </div>
              </a>
            </Grid.Column>
            ))
          }
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Explore
