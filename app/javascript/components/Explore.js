import React from "react"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'


class Explore extends React.Component {

  render () {

  const genres = [
    {
      name: "BLUES",
      pic: "https://cdns-images.dzcdn.net/images/artist/b31b010a9145a123f778c8baaa77f6fd/500x500.jpg",
      link: "/blues"
    },
    {
      name: "NEW WAVE",
      pic: "https://www.typeroom.eu/assets/original/2020/05/18/JoyDivision-UnknownPleasures-B1.jpg",
      link: "/coldwave"
    },
    {
      name: "REGGAE | DUB",
      pic: "https://melcirclesdotcom.files.wordpress.com/2017/05/jamaican-soundsystem.jpg?w=640",
      link: "/reggae"
    },
    {
      name: "FOLK",
      pic: "https://rock6070.e-monsite.com/medias/images/fairport-convention-2.jpg",
      link: "/folk"
    },
    {
      name: "ROCK",
      pic: "https://papyblues.com/wp-content/uploads/2018/05/frf.png",
      link: "/rock"
    },
    {
      name: "PUNK",
      pic: "https://www.uksubstimeandmatter.net/gallery/albums/userpics/10001/Post-show_group_photo_at_the_SPIT_club2C_Boston2C_USA_1982.jpg",
      link: "/punk"
    },
    {
      name: "HARCORE",
      pic: "https://studybreaks.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-12-at-7.24.53-AM.png",
      link: "/harcore"
    },
    {
      name: "SOUL",
      pic: "https://res-4.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1478481314/event-poster-6920933.jpg",
      link: "/gems"
    },
    {
      name: "HEAVY METAL",
      pic: "https://cdn.torontolife.com/wp-content/uploads/2016/07/No-Flash-Please-Nirvana-1-803x603.jpg",
      link: "/heavymetal"
    },
    {
      name: "ELECTRO",
      pic: "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/1094782_526949487360441_1889061841_n7.jpg",
      link: "/electronic"
    },
    {
      name: "PSYCHEDELIC",
      pic: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY5NDg4NTc3Mzc2Mjk4NDU5/pink-floyd-16x9-gettyimages-85514589.jpg",
      link: "/"
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
          <Header  className="title-header" as="h1" textAlign='center' >
            <span className="title-light">Explore</span>GENRES
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
          <Header className="title-header" as="h1" textAlign='center' ><span className="title-light">Explore</span>TIMELINE</Header>
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
