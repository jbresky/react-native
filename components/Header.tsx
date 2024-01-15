import { Text, View } from "react-native";

const Header = () => {
    return ( 
        <View style={{ flex: 0.05, paddingTop: 60, paddingHorizontal: 20 ,backgroundColor: 'black'}}>
            <Text style={{ color: 'white', fontSize: 24}}>
                Welcome to Lemon Restaurant
            </Text>
        </View>
     );
}
 
export default Header;