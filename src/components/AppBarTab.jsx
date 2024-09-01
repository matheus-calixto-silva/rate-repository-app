import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  pressable: {
    flexGrow: 0.06
  },
  tabText: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable style={styles.pressable}>
      <Text style={styles.tabText}>{tabName}</Text>
    </Pressable>
  );
};

export default AppBarTab;
