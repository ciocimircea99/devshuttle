import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import DSDrawer from './DSDrawer';
import DSAppBar from './DSAppBar';

interface DSScaffoldProps {

}

export default function DSScaffold({ ...props }: DSScaffoldProps) {

    const theme = useTheme()

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
        </div>
    );
}
