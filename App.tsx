import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, useColorScheme, Text, View, FlatList, SectionList, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert, Pressable } from 'react-native';
import Header from './components/Header';
import MenuItems from './components/MenuItems';
import ImageComponent from './components/natives/Image';
import PressableComponent from './components/natives/Pressable';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from "./screens/Menu"
import ReviewScreen from './screens/Review';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Item = ({ name }: { name: string }) => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  )
}

// has categories - more situable for SectionList
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
]

// const menuItemsToDisplay = [
//   { name: 'Hummus', id: '1A' },
//   { name: 'Moutabal', id: '2B' },
//   { name: 'Falafel', id: '3C' },
//   { name: 'Marinated Olives', id: '4D' },
//   { name: 'Kofta', id: '5E' },
//   { name: 'Eggplant Salad', id: '6F' },
//   { name: 'Lentil Burger', id: '7G' },
//   { name: 'Smoked Salmon', id: '8H' },
//   { name: 'Kofta Burger', id: '9I' },
//   { name: 'Turkish Kebab', id: '10J' },
//   { name: 'Fries', id: '11K' },
//   { name: 'Buttered Rice', id: '12L' },
//   { name: 'Bread Sticks', id: '13M' },
//   { name: 'Pita Pocket', id: '14N' },
//   { name: 'Lentil Soup', id: '15O' },
//   { name: 'Greek Salad', id: '16Q' },
//   { name: 'Rice Pilaf', id: '17R' },
//   { name: 'Baklava', id: '18S' },
//   { name: 'Tartufo', id: '19T' },
//   { name: 'Tartufo', id: '20U' },
//   { name: 'Tiramisu', id: '21V' },
//   { name: 'Panna Cotta', id: '22W' },
// ]

const Separator = () => <View style={styles.separator}></View>

const TextHeader = () => {
  return <Text style={styles.heading}>Home</Text>
}

export default function App() {
  const [firstName, onChangeFirstName] = useState()
  const [lastName, onChangeLastName] = useState()
  const [showInputs, setInputs] = useState(true)

  const colorScheme = useColorScheme()
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  // const scrollableItems = [
  //   'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  // ]

  // const renderItem = ({ item }: { item: any }) => <Item name={item.name} />

  const renderItem = ({ item }: { item: any }) => <Item name={item} />


  const renderSectionHeader = ({ section: { title } }: any) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  )

  return (
    <>
      {/* <Header /> */}
      {/* <View style={styles.container}> */}
      {/* <KeyboardAvoidingView style={[styles.container, colorScheme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#333333' }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardDismissMode='on-drag'> */}
        
          {/* <PressableComponent setInputs={() => setInputs(!showInputs)} /> */}

          {/* REACT NAVIGATION */}
          <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation={true}>
          <Drawer.Screen name="Menu" component={MenuScreen}/>
          <Drawer.Screen name="Review" component={ReviewScreen}/>
        </Drawer.Navigator>
            {/* <Stack.Navigator initialRouteName='Menu'>
              <Stack.Screen name='Menu' component={MenuScreen} options={{title: 'Home'}} />
              <Stack.Screen name='Review' component={ReviewScreen} />
            </Stack.Navigator> */}
          </NavigationContainer>
        

          {/* <Text style={{ fontSize: 20, textAlign: 'center' }}>Color theme is: {colorScheme}</Text>
          {showInputs && (
            <>
              <TextInput
                style={{ backgroundColor: '#EEEEEE', padding: 20, margin: 15, borderRadius: 10, fontSize: 20 }}
                placeholder='First Name'
                // @ts-expect-error
                onChangeText={onChangeFirstName}
                onFocus={() => Alert.alert("Input is focused")}
              />
              <TextInput
                style={{ backgroundColor: '#EEEEEE', padding: 20, margin: 15, borderRadius: 10, fontSize: 20 }}
                placeholder='Last Name'
                onChangeText={onChangeLastName}
                clearButtonMode="always"
              />
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView> */}
      {/* <SectionList
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={TextHeader}
        /> */}
      {/* <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem}
          ListHeaderComponent={TextHeader}
          ItemSeparatorComponent={Separator}
        /> */}
      {/* <MenuItems items={scrollableItems[0]} /> */}
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: '#EEEEEE',
    padding: 20,
  },
  itemText: {
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    color: '#EDEFEE'
  },
  sectionHeader: {
    padding: 20,
    fontSize: 36,
    fontWeight: '500'
  },

});
