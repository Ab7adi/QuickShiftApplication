import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';



export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>

    </NavigationContainer>
   </PaperProvider>
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
