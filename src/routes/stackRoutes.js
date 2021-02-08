import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import homePlant from "../screens/homePlant";
import detailsPlant from "../screens/detailsPlant";
const screens = {
  homePlant: {
    screen: homePlant,
  },
  Details: {
    screen: detailsPlant,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
