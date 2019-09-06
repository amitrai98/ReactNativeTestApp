import {
     createAppContainer
      } from "react-navigation";
  import UserList from "./userlist/UserList";
  import { createStackNavigator } from 'react-navigation-stack';

//   import UserDetails from "./userdetails/UserDetails";
  
  const StackNavigator = createStackNavigator(
    {
        UserList: { screen: UserList }
        // UserDetails: { screen: UserDetails }
    },
    {
      initialRouteName: "UserList",
      defaultNavigationOptions: {
        header: null
      }
    }
  );
  const AppContainer = createAppContainer(StackNavigator);
  
  export default AppContainer;
  