import React from 'react';

import {useCounterContext} from './counter';
import {useHistoricContext} from './historic';

export default function Provider({children}) {
  return (
    <useCounterContext.Provider>
      <useHistoricContext.Provider>{children}</useHistoricContext.Provider>
    </useCounterContext.Provider>
  );
}
