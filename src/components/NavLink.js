import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return <>
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>
          {text}
          </Text>
      </Spacer>
    </TouchableOpacity>
  </>
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 16
  }
});

export default withNavigation(NavLink);