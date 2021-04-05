import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import {Button} from 'react-native-paper';
import { List,TextInput } from 'react-native-paper';
import { SurveyStyles } from './Styles';
import { getDataModel } from './DataModel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import DatePicker from 'react-native-date-picker'
import { CheckBox } from 'react-native-elements'
import {WebView} from "react-native-webview";

export class SurveyScreen extends React.Component {
    constructor(props) {
      super(props);
    }

 



    render() {
        return ( 
           
        <WebView source={require("./assets/index.html")}/>


  
        )
    }
}