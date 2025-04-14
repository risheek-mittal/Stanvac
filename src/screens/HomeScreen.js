import React, {useEffect} from 'react';
import {View, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setItems, deleteItem} from '../redux/itemsSlice';
import {fetchItems, deleteItemFromDB, initDB} from '../db/db';

export default function HomeScreen({navigation}) {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const loadItems = async () => {
    await initDB();
    const dbItems = await fetchItems();
    dispatch(setItems(dbItems));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadItems);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async id => {
    await deleteItemFromDB(id);
    dispatch(deleteItem(id));
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('ItemForm')}
      />
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ItemForm', {item})}>
            <View style={{padding: 10, borderBottomWidth: 1}}>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
