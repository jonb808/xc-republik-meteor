import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted>
              <Image src="http://jointherepublik.com/wp-content/themes/republik/library/images/rk_logo_sm.jpg" />
            </Menu.Item>
            <Menu.Item position="right">UPCOMING EVENTS</Menu.Item>
            <Menu.Item>PRIVATE EVENTS</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
            <Menu.Item>THE SAFEHOUSE</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
