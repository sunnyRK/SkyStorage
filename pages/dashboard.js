import React, { Component } from 'react';

import MainTemplate from '../src/modules/shared/main-template/MainTemplateContainer';
import DashboardContainer from '../src/modules/components/dashboard/DashboardContainer';

class Dashboard extends Component {
 
  render() {
    return (
      <MainTemplate>
        <DashboardContainer />
      </MainTemplate>
    );
  }
}

export default Dashboard;
