import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
// import ImagePicker from 'react-native-image-picker'
// 위처럼 import 하면 error 발생하여 아래와 같이 import.
import * as ImagePicker from 'react-native-image-picker'

const App = () => {
  const [avatarPath, setAvatarPath] = useState('')
  const options = {
    title: 'Choose Your Photo',
    takePhotoButtonTitle: 'Take a pretty one',
    chooseFromLibraryButtonTitle: 'Select an old one',
    cancelButtonTitle: 'Go Back',
  }

  const addImage = () => {
    ImagePicker.launchCamera(options, response => {
      setAvatarPath(response.uri)
    })
  }
  return (
    <View style={styles.container}>
      <Image source={avatarPath} style={styles.avatar} />
      <Button title="Add on Image" onPress={() => addImage()} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
})
