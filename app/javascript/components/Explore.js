import React from "react"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'


class Explore extends React.Component {

  render () {


  const genres = [
    {
      name: "COLD WAVE",
      pic: "https://www.typeroom.eu/assets/original/2020/05/18/JoyDivision-UnknownPleasures-B1.jpg"
    },
    {
      name: "ROCK",
      pic: "https://music-planet.fr/wp-content/uploads/2020/05/David-Bowie-DR.jpg"
    },
    {
      name: "FOLK",
      pic: "https://rock6070.e-monsite.com/medias/images/fairport-convention-2.jpg"
    },
    {
      name: "BLUES",
      pic: "https://i.pinimg.com/originals/cf/83/65/cf83655c524f675d387183a91bd2a97f.jpg"
    },
    {
      name: "DUB",
      pic: "https://www.electronicbeats.net/app/uploads/2017/07/dub-music-primer.jpeg"
    },
    {
      name: "HARD ROCK",
      pic: "https://www.pixbear.com/wp-content/uploads/2019/10/motorhead_quizz_1.jpg"
    },
    {
      name: "ELECTRO",
      pic: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/1094782_526949487360441_1889061841_n7.jpg"
    },
    {
      name: "TRIPPY",
      pic: "https://thevinylfactory.com/wp-content/uploads/2014/09/miles-davis-cover3-660x398.png"
    }
  ];

    return (
      <React.Fragment >
      <div className="ui container ">
        <Header  className="title-header" as="h1" textAlign='center' >Explore genres</Header>
      </div>
        <div className="ui container">
          <Grid stackable columns={2} >
          {
            genres.map((ge) => (

            <Grid.Column >
              <a href="/sixties">
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
