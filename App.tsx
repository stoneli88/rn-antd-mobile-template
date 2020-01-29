import {Provider} from '@ant-design/react-native';
import {Theme} from '@ant-design/react-native/lib/style';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackHeaderMode} from 'react-navigation-stack/src/vendor/types';
import {themes} from './src/themes';

import HomeScene from './src/scenes/home';

export default function App() {
  const [theme, changeTheme] = useState<Theme | null>(themes.defaultTheme);
  const [isReady, setIsReady] = useState<boolean | false>(false);

  const getOptions = (title: string) => ({
    title,
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  });

  const routeConfig = {
    Home: {
      // screen: HomeScene,
      screen: () => <HomeScene screenProps={{theme, changeTheme}}/>,
      navigationOptions: getOptions('首页'),
    },
  };

  const headMode: StackHeaderMode = 'float';

  const stackNavigatorConfig = {
    initialRouteName: 'Home',
    headerMode: headMode,
  };

  const RootNavigator = createStackNavigator(routeConfig, stackNavigatorConfig);
  const AppContainer = createAppContainer(RootNavigator);

  useEffect(() => {
    (async () => {
      await Font.loadAsync(
        'antoutline',
        require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
      );
      await Font.loadAsync(
        'antfill',
        require('@ant-design/icons-react-native/fonts/antfill.ttf'),
      );
    })();
    setIsReady(true);
  });

  if (!isReady) {
    return (
      <AppLoading/>
    );
  }

  return (
    <Provider theme={theme}>
      <AppContainer/>
    </Provider>
  );
}
