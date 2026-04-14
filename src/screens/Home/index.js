import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { IconNames, IconTypes } from '../../services/icons'

const Home = () => {
  const { loading } = useSelector(state => state.userState)
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <IconTypes.MaterialIcons
        // onPress={onRequestClose}
        name={IconNames.close}
        size={24}
        color={'red'}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})