import {Button} from '@ant-design/react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IScreenProps} from '../../themes';
import darkTheme from '../../themes/darkTheme';
import defaultTheme from '../../themes/defaultTheme';

interface IHomeScenes {
  screenProps: IScreenProps;
}

const HomeScenes = React.memo<IHomeScenes>((props) => {
  const {screenProps} = props;
  const {changeTheme} = screenProps;

  const handleThemeChangeToDark = () => {
    changeTheme(darkTheme);
  };

  const handleThemeChangeToDefault = () => {
    changeTheme(defaultTheme);
  };

  return (
    <View style={styles.container}>
      <Text>Home Scenes</Text>
      <Button onPress={handleThemeChangeToDark}>Big</Button>
      <Button onPress={handleThemeChangeToDefault}>Small</Button>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScenes;
