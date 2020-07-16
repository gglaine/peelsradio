import React from "react"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'


class Explore extends React.Component {

  render () {

  const genres = [
    {
      name: "COLD WAVE",
      pic: "https://www.typeroom.eu/assets/original/2020/05/18/JoyDivision-UnknownPleasures-B1.jpg",
      link: "/coldwave"
    },
    {
      name: "PUNK",
      pic: "https://www.uksubstimeandmatter.net/gallery/albums/userpics/10001/Post-show_group_photo_at_the_SPIT_club2C_Boston2C_USA_1982.jpg",
      link: "/punk"
    },
    {
      name: "ROCK",
      pic: "https://music-planet.fr/wp-content/uploads/2020/05/David-Bowie-DR.jpg",
      link: "/rock"
    },
    {
      name: "FOLK",
      pic: "https://rock6070.e-monsite.com/medias/images/fairport-convention-2.jpg",
      link: "/folk"
    },
    {
      name: "GEMS",
      pic: "https://d11mgq5hlnsdgo.cloudfront.net/4a28fd5d-6b13-40a1-910d-a993cfd47c7f.jpg",
      link: "/gems"
    },
    {
      name: "BLUES",
      pic: "https://i.pinimg.com/originals/cf/83/65/cf83655c524f675d387183a91bd2a97f.jpg",
      link: "/blues"
    },
    {
      name: "DUB",
      pic: "https://www.electronicbeats.net/app/uploads/2017/07/dub-music-primer.jpeg",
      link: "/reggae"
    },
    {
      name: "HARD ROCK",
      pic: "https://www.pixbear.com/wp-content/uploads/2019/10/motorhead_quizz_1.jpg",
      link: "/hardrock"
    },
    {
      name: "ELECTRO",
      pic: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/1094782_526949487360441_1889061841_n7.jpg",
      link: "/electronic"
    }
  ];


  const timelines = [
    {
      name: "Late 60s",
      pic: "https://mattathomeintheworld.files.wordpress.com/2019/03/fleetwood-mac-rumours-back-e1553481036990.jpg?w=620",
      link: "/sixties"
    },
    {
      name: "70s",
      pic: "https://gonzai.com/wp-content/uploads/2017/04/Roxy.png",
      link: "seventies"
    },
    {
      name: "80s",
      pic: "https://statics.lesinrocks.com/content/thumbs/uploads/2015/08/width-758-height-424/cocteau-twins-yntht.jpg",
      link: "eighties"
    },
    {
      name: "90s",
      pic: "https://img.nrj.fr/oTtHyD5NPJpwyQ0_aObE6a1jScw=/800x450/smart/http%3A%2F%2Fimage-api.nrj.fr%2Fhttp%2Fmedia.nrj.fr%2F436x327%2Fthe-fugees_200566.jpg",
      link: "nineties"
    },
    {
      name: "2000s",
      pic: "https://culturesco.com/wp-content/uploads/2020/03/pj-harvey-dry.jpg",
      link: "/oos"
    }
  ];


    return (
      <React.Fragment >
      <div className="ui container ">
        <Header  className="title-header" as="h1" textAlign='center' ><span className="title-light">Explore</span>GENRES</Header>
      </div>
        <div className="ui container">
          <Grid stackable columns={2} >
          {
            genres.map((ge) => (

            <Grid.Column >
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
          <Header className="title-header" as="h1" textAlign='center' ><span class="title-light">Explore</span>TIMELINE</Header>
        </div>
          <div className="ui container">
            <Grid stackable columns={2} >
            {
              timelines.map((ge) => (

              <Grid.Column >
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
