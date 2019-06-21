import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const restaurants = [...Array(10)].map((_, i) => ({
    id: i,
    name: `Restaurant ${i}`,
    address: `Address ${i}`,
  }));

  return (
    <View style={styles.container}>
      {restaurants.map((restaurant, i) => (
        <View key={i} style={styles.row}>
          <View style={styles.colId}>
            <Text>{restaurant.id}</Text>
          </View>
          <View style={styles.colDescription}>
            <Text>{restaurant.name}</Text>
            <Text>{restaurant.address}</Text>
          </View>
          <View style={styles.colActions}>
            <TouchableOpacity>
              <Text>Button</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  row: {
    flexDirection: 'row',
  },
  colId: {
    flex: 1,
  },
  colDescription: {
    flex: 6,
    flexDirection: 'column'
  },
  colActions: {
    flex: 1,
  }
});
