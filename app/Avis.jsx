import { View, Text } from 'react-native'
import React from 'react'
import Back from '../components/Back'
import { SafeAreaView } from 'react-native'
import Note from '../components/Note'
import Commentaire from '../components/Commentaire'
const Avis = () => {
  return (
    <SafeAreaView className='mt-6 '>
        <Back title='Avis'/>
        <Note/>
        <Commentaire/>
    </SafeAreaView>
  )
}
export default Avis