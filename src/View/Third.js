import { StyleSheet, View, Text } from 'react-native';

export default function Third() {
    return (
        <View style={styles.container}>
            <Text>Tercera pantalla</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  