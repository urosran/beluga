import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function CenteredTabs() {

  return (
    <Paper>
      <Tabs
        value={0}
        // onChange={}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Kontrolna Tabla" />
        <Tab label="Korisnici" />
        <Tab label="Moja Mapa" />
      </Tabs>
    </Paper>
  );
}