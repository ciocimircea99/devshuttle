import * as React from 'react';
import './App.css';

import DSDrawer from './components/DSDrawer';
import DSAppBar from './components/DSAppBar';
import DSPictureSlideCarousel from './components/DSPictureSliderCarousel';

function DSApp() {

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, drawerOpen: open });
  };

  const [state, setState] = React.useState({
    drawerOpen: false,
  });

  return (
    <div>
      <DSAppBar
        drawerOpen={state.drawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <DSDrawer
        drawerOpen={state.drawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <DSPictureSlideCarousel overlayedText='Welcome'/>
      <DSPictureSlideCarousel overlayedText='Welcome'/>
      <DSPictureSlideCarousel overlayedText='Welcome'/>
      <DSPictureSlideCarousel overlayedText='Welcome'/>
      <DSPictureSlideCarousel overlayedText='Welcome'/>
    </div>
  );
}

export default DSApp;
