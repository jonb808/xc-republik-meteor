import React from 'react';
import { Header, Segment, Image, Grid } from 'semantic-ui-react';

export default class FeaturedSec extends React.Component {
  render() {
    return (
        <div>
          <Segment borderless clearing>
            <Header as='h2' floated='left'>
              Featured Events
            </Header>
            <Header as='h3' floated='right'>
              all events
            </Header>
          </Segment>


          <Grid columns={4}>
            <Grid.Column>
              <Image src='http://jointherepublik.com/wp-content/uploads/2018/01/rebel-615x615.jpeg' />
              <Header as='h4' floated='left'>REBEL SOUJAHZ</Header>
            </Grid.Column>
            <Grid.Column>
              <Image src='http://jointherepublik.com/wp-content/uploads/2017/10/BenFolds_ig_Oahu-615x615.jpg' />
              <Header as='h4' floated='left'>BEN FOLDS PAPER AIRPLANE REQUEST TOUR</Header>
            </Grid.Column>
            <Grid.Column>
              <Image src='http://jointherepublik.com/wp-content/uploads/2017/10/Thursday_ig-615x615.jpg' />
              <Header as='h4' floated='left'>THURSDAY</Header>
            </Grid.Column>
            <Grid.Column>
              <Image src='http://jointherepublik.com/wp-content/uploads/2017/11/LukeCombs_ig_1600x1600-615x615.jpg' />
              <Header as='h4' floated='left'>LUKE COMBS</Header>
            </Grid.Column>
          </Grid>


        </div>
    );
  }
}
