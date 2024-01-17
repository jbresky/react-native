import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.leftText}>
                AC
            </Text>
            <Text style={headerStyles.rightText}>
                USDc Account
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: 'row',
        gap: 10,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#f6f6f6'
    },
    leftText: {
        color: '#58c799',
        fontSize: 18,
    },
    rightText: {
        color: '#000',
        fontSize: 18
    }
})

export default Header;