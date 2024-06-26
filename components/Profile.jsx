import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import ProfileSections from './ProfilSections'

const Profile = () => {
    return (
        <View className="flex-row items-center justify-center pt-14 ">
          <View className="relative">
            <Image
              source={require('../assets/images/user.png')} 
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full">
              <FontAwesome name="pencil" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View className="ml-8">
            <Text className="text-xl font-bold">Ange Roddy</Text>
            <Text className="text-gray-500">roddynguessan@gmail.com</Text>
            <Text className="text-gray-500">+225 05 95 01 35 28</Text>
          </View>
        
        </View>
        
      );
}
export default Profile