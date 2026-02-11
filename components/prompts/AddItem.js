import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Button from '../Button.js';
import style from '../../style.js';

export default (props) => {

    let [text, setText] = useState('');

    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>Add New Item</Text>
            <TextInput style={style.inputText} value={text} onChangeText={newText => setText(newText)}/>
            <View style={style.buttonRow}>
                <Button text='Add' style={{ flex: 1 }} onPress={() => props.add(text)}></Button>
                <Button text='Cancel' style={{ flex: 1 }} onPress={props.cancel}></Button>
            </View>
        </View>
    );
};