// appContext.js
import React, { createContext, useContext, useState } from 'react';
import getState from './flux.js';

const AppContext = createContext(null);

export const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(getState({
      getStore: () => state.store,
      setStore: (updatedStore) => setState({
        store: Object.assign(state.store, updatedStore),
        actions: { ...state.actions }
      })
    }));

    useEffect(() => {
      // Here, you can call state.actions.fetchCharacters() and state.actions.fetchPlanets()
      // to load your initial data.
      state.actions.fetchCharacters();
      state.actions.fetchPlanets();
    }, []);

    return (
      <AppContext.Provider value={state}>
        <PassedComponent {...props} />
      </AppContext.Provider>
    );
  };
  return StoreWrapper;
};

export const useAppContext = () => useContext(AppContext);
