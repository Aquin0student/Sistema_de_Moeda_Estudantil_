import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Dashboard</Text>
      <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );
}
