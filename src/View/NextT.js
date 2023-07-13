import { StyleSheet, View, Text, Button } from 'react-native';

export default function NextT({ navigation }) {
  return (
    <View style={styles.container}>
    <Text>Segunda pantalla</Text>
    <Button
        title="Third Screen"
        onPress={() => 
            navigation.navigate('ThirsdScreen')
        }
    />
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