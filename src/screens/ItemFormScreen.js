import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem, updateItem} from '../redux/itemsSlice';
import {insertItem, updateItemInDB} from '../db/db';

export default function ItemFormScreen({navigation, route}) {
  const item = route.params?.item;
  const [name, setName] = useState(item?.name || '');
  const [description, setDescription] = useState(item?.description || '');
  const dispatch = useDispatch();

  const handleSave = async () => {
    if (!name.trim() || !description.trim()) {
      Alert.alert('Validation', 'Both fields are required.');
      return;
    }

    if (item) {
      await updateItemInDB(item.id, name, description);
      dispatch(updateItem({id: item.id, name, description}));
    } else {
      const newItem = await insertItem(name, description);
      dispatch(addItem(newItem));
    }
    navigation.goBack();
  };

  return (
    <View style={{padding: 16}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{borderWidth: 1, marginBottom: 10, padding: 8}}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{borderWidth: 1, marginBottom: 10, padding: 8}}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
