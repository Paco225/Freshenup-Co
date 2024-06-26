import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import prod from '../assets/images/prod.png'

const products = [
  {
    id: 1,
    name: 'Spray toilettes',
    price: '5000 F',
    status: 'En cours de livraison',
    statusColor: 'bg-yellow-500',
    image: prod, // Remplacez par l'URL de votre image
  },
  {
    id: 2,
    name: 'Spray toilettes',
    price: '5000 F',
    status: 'Non expédié',
    statusColor: 'bg-red-500',
    image: prod, 
  },
  {
    id: 3,
    name: 'Spray toilettes',
    price: '5000 F',
    status: 'Prêt pour récupération',
    statusColor: 'bg-green-500',
    image: prod, 
  },
];

const ProductCard = styled(View, 'bg-white flex-row items-center bg-white rounded-lg px-1 shadow-md py-4 mb-4');
const ProductImage = styled(Image, 'w-24 h-24 rounded-md');
const ProductInfo = styled(View, 'flex-1 ml-4 mr-4');
const ProductName = styled(Text, 'text-md font-bold');
const ProductPrice = styled(Text, 'text-[12px] text-gray-600 py-1');
const ProductStatus = styled(View, 'py-1 px-2 rounded-md');
const ProductStatusText = styled(Text, 'text-white text-center text-md');

const SuiviCmd = () => {
  return (
    <ScrollView className="p-4 bg-gray-100">
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage source={product.image} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductInfo>
          <ProductStatus className={product.statusColor}>
            <ProductStatusText>{product.status}</ProductStatusText>
          </ProductStatus>
        </ProductCard>
      ))}
    </ScrollView>
  );
};

export default SuiviCmd;
