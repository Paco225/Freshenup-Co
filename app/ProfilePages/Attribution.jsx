import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import image from '../../assets/images/user.png';
import Back from '../../components/Back';


const Attribution = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (star) => {
        setRating(star);
    };

    const handleSubmit = () => {
        Alert.alert('Vote validé');
    };

    return (
        <SafeAreaView className="flex-1 bg-white items-center">
            <Back title='Détails Attribution' />
            <Image source={image} className="w-52 h-52 rounded-lg mt-8" />
            <Text className="text-blue-500 text-2xl font-bold mt-6 ">Salimata Koné</Text>
            <Text className="text-black text-2xl mt-2">25 ans</Text>
            <Text className="text-black text-sm mb-6 mt-2">Inscrite depuis Juillet 2019</Text>
            <Text className="text-black text-lg ">Date de début : 22/06/2024</Text>
            <View className="flex mt-4">
            <View>
                <TouchableOpacity onPress={handleSubmit} className="flex flex-row items-center justify-center  bg-blue-100 w-80 h-14 px-4 py-2 rounded-lg mt-6">
                    <Text className="flex text-black text-lg text-center px-8">Prix</Text>
                    <Text className="flex text-black text-xl text-center px-5">105 000 FCFA</Text>

                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleSubmit} className="bg-blue-500 w-80 h-11 px-4 py-2 rounded-lg mt-6">
                    <Text className="text-white text-lg text-center">Télécharger le dévis</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleSubmit} className="bg-black w-80 h-11 px-4 py-2 rounded-lg mt-6">
                    <Text className="text-white text-lg text-center">Payez par wave</Text>
                </TouchableOpacity>
            </View>
            </View>
          
        </SafeAreaView>
    );
};

export default Attribution;
