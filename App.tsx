import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import MenuItems from './components/MenuItems';

const Item = ({ name }: { name: string }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  )
}

const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
]

export default function App() {


  // const scrollableItems = [
  //   'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  // ]

  const renderItem = ({ item }: { item: any }) => <Item name={item.name} />

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Home</Text>
      <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem} />
      {/* <MenuItems items={scrollableItems[0]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    padding: 10,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    backgroundColor: '#EEEEEE',
    padding: 20,
  },
  itemText: {
    fontSize: 36,
  },
});
