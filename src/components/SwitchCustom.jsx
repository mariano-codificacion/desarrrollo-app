import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const SwitchCustom = ({
    isEnabled = true,
    setIsEnabled = () => {}
}) => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#f4f3f4', true: '#767577' }}
        thumbColor={isEnabled ? '#f4f3f4' :'#767577'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default SwitchCustom;