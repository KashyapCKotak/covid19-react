import React from 'react';

export const DataContext = React.createContext({
    locationCode: 'wd',
    updateLocationCode: (newLocCode) => {}
});