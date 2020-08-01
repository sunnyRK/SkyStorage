import React, { Component, createRef } from 'react';

import Dashboard from './Dashboard';
import ImagesContainer from '../images/ImagesContainer';
import VideosContainer from '../videos/VideosContainer';

const tabs = [
  {
    id: 0,
    label: 'Images',
    component: <ImagesContainer />,
    hidden: false,
  },
  {
    id: 1,
    label: 'Videos',
    component: <VideosContainer />,
    hidden: false,
  },
];

class DashboardContainer extends Component {
  state = {
    activeTab: 1,
  };

  handleChange = (event, activeTab) => {
    this.setState({ activeTab });
  }
 
  render() {
    return (
      <Dashboard
        activeTab={this.state.activeTab}
        tabs={tabs}
        handleChange={this.handleChange}
      />
    );
  }
}

export default DashboardContainer;
