import React, { Component } from 'react';

import { Menu, Grid, Container, Segment } from 'semantic-ui-react';

import { Route, Link, Switch } from 'react-router-dom';

import TopHeader from './TopHeader';
import Queue from '/imports/ui/queue/Queue';
import Treatment from '/imports/ui/treatment/Treatment';
import Registrar from '/imports/ui/registrar/Registrar';

export default class Layout extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenuItem(name, displayName) {
    const url = '/' + name;
    return (
      <Menu.Item
        as={Link}
        to={url}
        name={name}
        active={this.state.activeItem === name}
        onClick={this.handleItemClick}
      >
        {displayName}
      </Menu.Item>
    );
  }

  render() {
    return (
      <div>
        <TopHeader />
        <Container>
          <Grid>
            <Grid.Column width={3}>
              <Menu vertical>
                {this.renderMenuItem('registrar', 'Регистратура')}
                {this.renderMenuItem('queue', 'Электронная очередь')}
                {this.renderMenuItem('treatment', 'Лечение')}
                {this.renderMenuItem('history', 'Истории болезней')}
                {this.renderMenuItem('reports', 'Отчетность')}
                {this.renderMenuItem('monitoring', 'Мониторинг')}
                {this.renderMenuItem('resources', 'Управление ресурсами')}
                {this.renderMenuItem('storage', 'Склад')}
                {this.renderMenuItem('docs', 'НСИ')}
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Segment>
                <Switch>
                  <Route path="/queue" component={Queue} />
                  <Route path="/registrar" component={Registrar} />
                  <Route path="/treatment" component={Treatment} />
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
