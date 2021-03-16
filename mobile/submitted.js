import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import {Button} from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { SurveyStyles } from './Styles';
import { loginStyles } from './Styles';



export class Submitted extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {
        return ( 
    <View>
        <View style={SurveyStyles.headerContainer}>
        </View>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            >
            <Ionicons name= "checkmark-circle"
                style={{
                    marginLeft: 18,
                    marginTop: 30,
                    }} 
                size={220}
                color={'#D2B24C'}
                />
                
        </View>

        <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            }}
        >
        <Text style={SurveyStyles.name2}> Form Submitted </Text>
        </View>

        <View style={loginStyles.bottomView}>
            <TouchableOpacity 
              style={loginStyles.buttonContainer}
              onPress={this.onLogin}
            >
              <Text style={loginStyles.buttonText}>OK</Text>
            </TouchableOpacity>
        </View>


    </View>



        


        )
    }

}