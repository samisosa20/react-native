import {NavigationContainer} from '@react-navigation/native';

import useViews from './src/views'

// Config
import useConfig from "./src/config";

export default function App() {
  const { useComponents } = useViews()
  const { MyDrawer } = useComponents()
  const { useInterceptor } = useConfig();

  useInterceptor();

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}
