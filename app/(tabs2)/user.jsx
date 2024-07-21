import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entete1 from '../../components/Entete1'
import Profile from '../../components/Profile'
import ProfilSection from '../../components/ProfilSections'
import ProfilSections from '../../components/ProfilSections'


const user = () => {
  return (
    <SafeAreaView className = 'bg-white'>
      <Entete1/>
      <Profile/>
      <ProfilSections/>
    </SafeAreaView> 
  )
}
export default user;