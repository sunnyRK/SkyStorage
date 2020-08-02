import React, { Component } from 'react';

import MainTemplate from '../src/modules/shared/main-template/MainTemplateContainer';
import Landing from '../src/modules/components/landing/LandingContainer';

class Dashboard extends Component { 
  render() {
    return (
      <MainTemplate>
        <Landing />
      </MainTemplate>
    );
  }
}

export default Dashboard;
