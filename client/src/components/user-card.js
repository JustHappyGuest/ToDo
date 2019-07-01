import {
  Button,
  Dimmer,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';
import { func } from 'prop-types';
import React from "react";

const UserCard = ({ user:{data:{username}}, logOut }) => {
  return (
    <Segment inverted>

      <Header size="medium"><Icon name='user secret' />{username}</Header>

      <Button.Group fluid>
        <Button>Настройки</Button>
        <Button color="pink" onClick={logOut}>
          Выйти
        </Button>
      </Button.Group>
    </Segment>
  );
};

UserCard.propTypes = {
  logOut: func.isRequired
};

export default UserCard;
