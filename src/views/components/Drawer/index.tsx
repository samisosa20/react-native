import { createDrawerNavigator } from '@react-navigation/drawer';


import useViews from '../../../views'

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();

  const { useScreens } = useViews()
  const { Home, List, } = useScreens()

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="List" component={List} />
    </Drawer.Navigator>
  );
}


export default MyDrawer