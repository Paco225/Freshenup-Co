import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entete1 from '../../components/Entete1'
import CategoriesScreen1 from '../../components/Categories1'
import Images from '../../components/Images'
import ProductList1 from '../../components/ProductList1'
import { ScrollView } from 'react-native'

const index = () => {
    return (

            <SafeAreaView >
                <Entete1 />
                <ScrollView className='px-4' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <CategoriesScreen1 />
            
                <Images />
                <ProductList1 />
            </ScrollView>
            </SafeAreaView>
        
    )
}

export default index