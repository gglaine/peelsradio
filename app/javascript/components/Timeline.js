import React from "react"
import { Grid, Header, List, Card, Image, Icon } from 'semantic-ui-react'

class Timeline extends React.Component {
  render() {
    const styles = {
      container: {
        padding: "3em !important"
      }
    };


  const timelines = [
    {
      name: "Late 60s",
      pic: "https://mattathomeintheworld.files.wordpress.com/2019/03/fleetwood-mac-rumours-back-e1553481036990.jpg?w=620"
    },
    {
      name: "70s",
      pic: "https://gonzai.com/wp-content/uploads/2017/04/Roxy.png"
    },
    {
      name: "80s",
      pic: "https://statics.lesinrocks.com/content/thumbs/uploads/2015/08/width-758-height-424/cocteau-twins-yntht.jpg"
    },
    {
      name: "90s",
      pic: "https://img.nrj.fr/oTtHyD5NPJpwyQ0_aObE6a1jScw=/800x450/smart/http%3A%2F%2Fimage-api.nrj.fr%2Fhttp%2Fmedia.nrj.fr%2F436x327%2Fthe-fugees_200566.jpg"
    },
    {
      name: "2000s",
      pic: "https://culturesco.com/wp-content/uploads/2020/03/pj-harvey-dry.jpg"
    }
  ];



    return (

       <React.Fragment >
        <div className="ui container ">
          <Header  className="title-header" as="h1" textAlign='center' >Explore Timeline</Header>
        </div>
          <div className="ui container">
            <Grid stackable columns={2} >
            {
              timelines.map((ge) => (

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

export default Timeline
