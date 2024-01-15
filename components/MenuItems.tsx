import { ScrollView, Text } from 'react-native'
const MenuItems = ({ items }: { items: string }) => {
    return (
        <ScrollView>
            <Text style={{ fontSize: 40, backgroundColor: '#b2d3c2' }}>
                {items}
            </Text>

        </ScrollView>
    );
}

export default MenuItems;