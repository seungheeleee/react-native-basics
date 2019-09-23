import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexDimensions from './src/components/FlexDimensions';


export default function App() {
  return (
    <View style={styles.container}>
      <FlexDimensions></FlexDimensions>

      {}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
