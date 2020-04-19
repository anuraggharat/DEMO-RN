import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function App({title}) {
  return (
    <View style={styles.header}>
      <Text >{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:100,
    paddingTop:50,
    fontSize:20,
    backgroundColor: '#E83350',
  },
});
