import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Constants from 'expo-constants'

// Componets
import useComponents from '../../components';

// Controllers
import useControllers from '../../../controllers'

// themes
import theme from '../../../themes'

interface dataRespItems {
  id: number;
  title: string;
  author: string;
}

const Item = (props: dataRespItems) => (
  <View>
    <Text>{props.title}</Text>
  </View>
);

const List = () => {
  const { Typography } = useComponents()

  const { useScreenHooks } = useControllers()
  const { useList } = useScreenHooks()
  const {listPosts} = useList()

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
      <Typography style={{ ...theme.textTitle, marginBottom: 12 }}>Hello Word! esto es una vista usando flat list</Typography>
      <FlatList
        data={listPosts}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}


export default List