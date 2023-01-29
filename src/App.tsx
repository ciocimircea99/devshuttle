import * as React from 'react';
import './App.css';

import DSDrawer from './components/DSDrawer';
import DSAppBar from './components/DSAppBar';
import DSPictureSlideCarousel from './components/DSPictureSliderCarousel';

function DSApp() {

  const [state, setState] = React.useState({
    drawerOpen: false,
  });

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

  const handleResize = () => {
    setState({ ...state, drawerOpen: false });
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
    </div>
  );
}

export default DSApp;
