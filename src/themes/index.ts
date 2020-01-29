import {Theme} from '@ant-design/react-native/lib/style';
import React from 'react';
import defaultTheme from '../themes/defaultTheme';

export interface IScreenProps {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const themes = {
  defaultTheme,
};

export const ThemeContext = React.createContext<Theme>(
  themes.defaultTheme,
);
