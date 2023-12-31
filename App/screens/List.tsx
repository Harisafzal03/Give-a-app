import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View,Text, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../Firebaseconfig';
import Details from './Details';

interface RouterProps {
    navigation: NavigationProp<any,any>;
}

const List=({navigation}: RouterProps )=> {
    return (
        <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
            <Button onPress={()=> navigation.navigate('Details')} title='OpenDetails'/>
            <Button onPress={()=> FIREBASE_AUTH.signOut()} title='Logout'/>

        </View>
    );
};

export default List;