import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
