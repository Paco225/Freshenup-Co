import { SafeAreaView } from "react-native-safe-area-context";
import Entete from "../../components/Entete";
import Categories from '../../components/Categories'
import { ScrollView } from "react-native";
import Images from "../../components/Images";
import ProductList from "../../components/ProductList";

export default function Index() {

  return (
    <SafeAreaView className="flex-1 bg-white">
     <Entete />
     <ScrollView className='px-4' showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
       <Categories/>
       <Images/>
       <ProductList/>
     </ScrollView>
  </SafeAreaView>
  );
}
