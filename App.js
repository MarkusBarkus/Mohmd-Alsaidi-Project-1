import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView, View, TextInput, Text, Alert, Pressable  } from 'react-native';
import { useFonts } from 'expo-font';

import Button from './components/Button.js';

import * as SplashScreen from 'expo-splash-screen'; 

import ListItem from './components/ListItem.js';

import Modal from './components/Modal.js';

import style from './style.js';

import DeleteItem from './components/prompts/DeleteItem.js';

SplashScreen.preventAutoHideAsync();




function App() {

  const [loaded, error] = useFonts({
      'Bitcount': require('./assets/fonts/Bitcount.ttf'),
    });
    
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    let [nextID, setNextID] = useState(1);
    let [listItems, setListItems] = useState([]);
    let [selectedItem, setSelectedItem] = useState(); // New variable to track which item to delete

    let clearList = () => setListItems([]);

    function addItemToList() {
        if (newItemText === '') return;
        let newItem = { text: newItemText, id: nextID };
        setNextID(nextID + 1);
        setListItems([...listItems, newItem]);
        setNewItemText('');
    }

    const confirmDeleteAll = () =>
        Alert.alert(
            'Delete All Items',
            'Are you sure you want to delete all items?',
            [
                { text: 'Yes', onPress: clearList },
                { text: 'No' }
            ]
        );

    function removeItemFromList(idToRemove) {
        let arrayWithRemovedItem = [];
        listItems.forEach(item => {
            if (item.id != idToRemove) {
                arrayWithRemovedItem.push(item);
            }
        });
        setListItems(arrayWithRemovedItem);
    }

    let [newItemText, setNewItemText] = useState('');
    function onTextChanged(text) {
        setNewItemText(text);
    }

    // Modal State
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContentKey, setModalContentKey] = useState();
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const promptDeleteItem = (idToRemove) => {
        let item = listItems.find(i => i.id === idToRemove);
        if (!item) return;
        setSelectedItem(item);
        setModalContentKey('delete-item');
        openModal();
    }

    const promptAppInfo = () => {
        setModalContentKey('app-info');
        openModal();
    }

    

    return (<SafeAreaView style={style.app}>
        <StatusBar style="auto"/>
        
            <Text style={style.header} onPress={promptAppInfo}>Mohmd Alsaidi LAB 4</Text>

            
        
        <ListItem items={listItems} deleteItemCallback={promptDeleteItem}></ListItem>
        

        <TextInput style={style.inputText} value={newItemText} onChangeText={onTextChanged}></TextInput>
            <Button text="ADD ITEM " onPress={addItemToList}></Button>
            <Button text='CLEAR LIST ' onPress={confirmDeleteAll}></Button>
            <Modal visible={modalVisible} onRequestClose={closeModal}
            content={
                {
                    'app-info': <Pressable onPress={closeModal}>
                        <Text>APP INFO GOES HERE</Text>
                    </Pressable>,

                    'delete-item': <DeleteItem
                        itemText={selectedItem?.text}
                        yes={() => {
                            removeItemFromList(selectedItem.id);
                            closeModal();
                        }}
                        no={closeModal}
                    />

                }[modalContentKey]
            }
        ></Modal>

    </SafeAreaView>);
}

export default App;