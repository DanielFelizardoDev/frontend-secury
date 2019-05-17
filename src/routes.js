import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Home from "./pages/Home";
import Police from "./pages/Police";
import User from "./pages/User";
import MapaUser from "./pages/User/Mapa";
import MapaPolice from "./pages/Police/Mapa";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: createStackNavigator({
      Home: {
        screen: Home
      }
    }),
    Police: createStackNavigator({
      Police: {
        screen: Police
      }
    }),
    User: createStackNavigator({
      User: {
        screen: User
      }
    }),
    MapaUser: createStackNavigator({
      MapaUser: {
        screen: MapaUser
      }
    }),
    MapaPolice: createStackNavigator({
      MapaPolice: {
        screen: MapaPolice
      }
    })
  })
);

export default Routes;
