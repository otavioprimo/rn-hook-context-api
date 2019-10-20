import {useState} from 'react';
import createUseContext from 'constate';

function useHistoric() {
  const [historic, setHistoric] = useState([]);

  const addToHistoric = (label) =>
    setHistoric([...historic, {id: Math.random(), label: label, timestamp: new Date()}]);

  return {historic, addToHistoric};
}

export const useHistoricContext = createUseContext(useHistoric);
