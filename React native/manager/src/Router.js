import React, { Component } from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { cacheSwipe } from './actions/EmployeeActions';

class RouterComponent extends Component {
  render() {
      return (
          <Router /*sceneStyle={{ backgroundColor: '#FFFFFF' }}*/>
              <Stack key='root' hideNavBar>
                  <Scene key='auth' >
                      <Scene key='login' component={LoginForm} title='Please Login' initial />
                  </Scene>

                  <Scene key='main'>
                      <Scene
                          key='employeeList'
                          component={EmployeeList}
                          title='Employee List'
                          rightTitle='Add'
                          onRight={() => {
                              // TODO swipe data here
                              this.props.cacheSwipe();
                              Actions.employeeCreate();
                          }}
                      />
                      <Scene
                          key='employeeCreate'
                          component={EmployeeCreate}
                          title='Employee Create'
                          // onExit={() => {
                          //     this.props.cacheSwipe();
                          // }}
                      />
                      <Scene
                          key='employeeEdit'
                          component={EmployeeEdit}
                          title='Edit Employee'
                          // onExit={() => {
                          //     console.log('back');
                          //     this.props.cacheSwipe();
                          // }}
                      />
                  </Scene>
              </Stack>
          </Router>
      );
  }
}

const mapStateToProps = ({ employee }) => {
    const { name, phone, shift } = employee;
    return { name, phone, shift };
};

export default connect(null, { cacheSwipe })(RouterComponent);
