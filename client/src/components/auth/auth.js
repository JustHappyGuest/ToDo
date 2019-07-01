import { Button, Form, Header, Message, Segment } from "semantic-ui-react";
import React, { useState } from "react";

import s from "./style.module.css";

const Auth = ({ user: { data, error }, signIn }) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const changeUsernameValue = e => {
    setUsernameValue(e.target.value);
  };
  const changePasswordValue = e => {
    setPasswordValue(e.target.value);
  };

  return (
    <Segment inverted className={s.auth}>
      <Form inverted error={!!error}>
        <Header inverted as="h2">
          Авторизация
        </Header>
        <Form.Input
          label="Имя пользователя"
          placeholder="username"
          value={usernameValue}
          onChange={changeUsernameValue}
        />
        <Form.Input
          label="Пароль"
          type="password"
          placeholder="password"
          value={passwordValue}
          onChange={changePasswordValue}
        />
        <Message error header="Ошибка авторизации" content={error} />
        <Button
          type="submit"
          onClick={() => signIn(usernameValue, passwordValue)}
        >
          Войти
        </Button>
      </Form>
    </Segment>
  );
};

export default Auth;
