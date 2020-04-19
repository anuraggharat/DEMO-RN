import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function App({}) {
  return (
    <View style={styles.container}>
      <Text >Start a Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:'center'
    }
});
