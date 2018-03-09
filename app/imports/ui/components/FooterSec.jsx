import React from 'react';
import { Grid, List, Icon, Input, Label } from 'semantic-ui-react';

export default class FooterSec extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container className="footer-text" textAlign="left" columns={3} centered>
            <Grid.Column>
              HOURS & LOCATION
              <hr />
              <List>
                <List.Item>1349 Kapiolani Blvd #30</List.Item>
                <List.Item>Honolulu, HI 96814</List.Item>
                <List.Item>The Republik Box Office</List.Item>
                <List.Item>Tues-Fri 10a-6p with a $2 service fee per ticket.</List.Item>
                <List.Item>(808)941-7469</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              CONNECT WITH US
              <hr />
              <Icon name="mail" size="big"/>
              <Icon name="facebook square" size="big" />
              <Icon name="instagram" size="big" />
              <Icon name="twitter" size="big" />
            </Grid.Column>
            <Grid.Column>
              GET OUR UPDATES
              <hr />
              <List>
                <List.Item>
                  <Input placeholder='Enter email address'/>
                  <Label color={'black'}>SUBSCRIBE</Label>
                </List.Item>
                <List.Item>Sign up for our newsletter to get the latest event news!</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

