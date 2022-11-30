import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ContactYoutube from "./src/screens/startpage";
import Screentwo from "./src/screens/screentwo";
import usersignuppage from "./src/screens/usersignup";
import ownersignuppage from "./src/screens/ownersignup";
import ProfileScreen from "./src/screens/ownerlogin";
import feedbackpage from "./src/screens/feedbackpage";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    XYZ: ContactYoutube,
    S2: Screentwo,
    usersign: usersignuppage,
    ownersign: ownersignuppage,
    ownerlogin: ProfileScreen,
    feed: feedbackpage
  },
  {
    initialRouteName: "usersign",
    defaultNavigationOptions: {
      title: "ParkItUp",
    },
  }
);

export default createAppContainer(navigator);
