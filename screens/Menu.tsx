import { View, Text, Pressable} from "react-native"

const MenuScreen = ({ navigation }: any) => {
    return ( 
        <>
        <View style={{flex: 0.5}}>
            <Text>Menu Screen</Text>
            <Pressable style={{margin: 30}} onPress={() => navigation.navigate('Review')}>
            <Text style={{fontSize: 20}}>Go to reviews</Text>
          </Pressable>
        </View>
        </>
     );
}
 
export default MenuScreen;