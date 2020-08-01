import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Dashboard = ({ activeTab, handleChange, tabs }) => {

  return (
    <div className="dashboard">
      <div className="dashboard-tabs">
        <Paper square>
          <Tabs
            value={activeTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            className="source-tabs"
            classes={{
              flexContainer: 'tabs-flexcontainer'
            }}
          >
            {
              tabs.map(tab => !tab.hidden && (
                  <Tab label={tab.label} />
              ))
            }
          </Tabs>
        </Paper>
      </div>
      <div className="dashboard-content">
        {
          tabs.map(tab => !tab.hidden && (tab.id === activeTab) && (
            tab.component
          ))
        }
      </div>
    </div>
  );
}

export default Dashboard;
