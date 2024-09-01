import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 12,
    flexGrow: 0.2,
    backgroundColor: theme.bgColors.bgPrimary,
  }
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBarTab tabName={'Repositories'} />
    </View>
  );
};

export default AppBar;
