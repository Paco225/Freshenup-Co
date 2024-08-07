import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'
import Notification from '../../components/Notifications'

const alerte = () => {
  return (
    <SafeAreaView>
      <Back 
      title = "Notifications"
      />
      <Notification backgroundColor = 'rgba(29, 166, 248, 1)' />
    </SafeAreaView>  
  )
}

export default alerte