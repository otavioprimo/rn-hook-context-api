import {createStackNavigator} from 'react-navigation-stack';

import Counter from '../views/Counter/counter';
import VisualizeCounter from '../views/VisualizeCounter/visualizeCounter';

export default MainRoute = createStackNavigator(
  {
    Counter: {
      screen: Counter,
      navigationOptions: {
        title: 'Counter',
      },
    },
    VisualizeCounter: {
      screen: VisualizeCounter,
      navigationOptions: {
        title: 'Visualize Counter',
      },
    },
  },
  {
    initialRouteName: 'Counter',
  },
);
