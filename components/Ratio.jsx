import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

export default function Ratio() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Cash à la livraison', value: 'cash' },
    { label: 'Mobile money', value: 'mobile' },
  ];

  return (
    <View className="p-4">
      <Text className="text-[18px] mb-4">Moyen de paiement</Text>
      <View className="flex-row space-x-8">
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            className="flex-row items-center"
            onPress={() => setSelectedOption(option.value)}
          >
            <View
              className={`h-5 w-5 rounded-full border-2 ${
                selectedOption === option.value ? 'border-blue-500' : 'border-gray-400'
              } flex items-center justify-center`}
            >
              {selectedOption === option.value && (
                <View className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              )}
            </View>
            <Text className="ml-2 text-base">{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View  className='bg-gray-200 py-6 mb-6 rounded-lg mx-2 justify-center my-16 w-90'>
        <View  className="py-3 w-[]  px-8  flex flex-row justify-between items-center border-b border-gray-300 pb-4">
            <Text  className='mr-4'>Sous-total</Text>
            <Text className='ml-4'>2000 Fcfa</Text>
        </View>
        <View className="border-b border-gray-300 pb-4 py-3 px-8 flex flex-row justify-between items-center">
            <Text style={(
              {color:'rgba(0, 0, 0, 0.5)'}
            )} className='text-[13px] mr-4'>Livraison</Text>
            <Text style={(
              {color:'rgba(0, 0, 0, 0.5)'}
            )} className='text-[13px] ml-4'>1000 Fcfa</Text>
        </View>
        <View className="py-3 px-8 flex flex-row justify-between items-center">
            <Text className='mr-4'>Total</Text>
            <Text className='ml-4'>6000 Fcfa</Text>
        </View>
      
    </View>
    <View>
        <View>
            <Image source='r'></Image>
        </View>
        <Text>Paiement éléctronique par {'\n'} wave unique </Text>
    </View>
    </View>
  );
}
