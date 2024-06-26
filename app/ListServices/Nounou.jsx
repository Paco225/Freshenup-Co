import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import nounou from '../../assets/images/nounou.jpg';
import { useRouter } from 'expo-router';

const Container = styled(View);
const Title = styled(Text);
const Description = styled(Text);
const Rating = styled(Text);
const ButtonContainer = styled(View);
const CustomButton = styled(TouchableOpacity);

const Nounou = () => {
    const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container className="items-start">
          <Image 
            source={nounou} 
            style={{ width: '100%', height: 380 }} 
            className="mb-4"
          />
          <Title className="text-[23px] text-left pb-2 font-bold px-4">Babysitter</Title>
          <Rating className="text-yellow-500 text-[16px] pb-4 px-4">★★★★☆ (4.5)</Rating>
          <Text className='px-4 text-[16px] font-bold'>Description du service</Text>
          <Description className="px-4 pt-2 text-gray-500 text-justify">
            Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.
            Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.

          </Description>
        </Container>
      </ScrollView>
      <ButtonContainer className="w-full  px-4 pb-4">
        <CustomButton
          onPress={() => router.push('./Contrats')}
          className="h-[54px] bg-blue-500 rounded-lg items-center justify-center"
        >
          <Text className="text-white text-lg font-bold">Remplir la fiche de demande</Text>
        </CustomButton>
      </ButtonContainer>
    </View>
  );
}

export default Nounou;
