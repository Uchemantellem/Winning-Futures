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


export class SurveyScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          month: 'January', 
          topic: '',
          questionTwoSelection : '',
         // duration: '',


      }

    }

 



    render() {
        return ( 

        <ScrollView style={SurveyStyles.mainContainer}>
            <View style={SurveyStyles.headerContainer}>
                <View>
                    <Ionicons name="arrow-back-circle" 
                        size={42} 
                        color={'#2643BE'}
                        />
                </View>
                <View>
                    <Ionicons name="home"
                        style={{
                        marginLeft: 18,
                        }} 
                        size={40} 
                        color={'#2643BE'}
                        />   
                </View>     
            </View>

            <View> 
                <Text style={SurveyStyles.title}> Name of Form </Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#707070',
                    borderBottomWidth: 3,
                    width: '68%',  
                    }}
            />
           
            <View style={SurveyStyles.blueContainer}>
                <View style={SurveyStyles.studentName} >
                    <Ionicons name="person"
                        style={{
                        marginLeft: 18,
                        }} 
                        size={32} 
                        color={'#272727'}
                        />  
                    <Text style={SurveyStyles.name} > Student's Name </Text>
                    
                </View>
               

                <View style={SurveyStyles.questionPicker} >

                    <Text style={SurveyStyles.questionsText}> 1. Month of this video call: </Text>

                    <View style={SurveyStyles.dropDownContainer} >
                        <DropDownPicker
                            items={[
                                {label: 'January', value: 'January'},
                                {label: 'February', value: 'February' },
                                {label: 'March', value: 'March' },
                                {label: 'June', value: 'June' },
                                {label: 'July', value: 'July' },
                                {label: 'August', value: 'August' },
                                {label: 'September', value: 'September' },
                                {label: 'October', value: 'October' },
                                {label: 'November', value: 'November' },
                                {label: 'December', value: 'December' },

                            ]}
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Select a Month"
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                month: item.value
                            })}
                        />
                    </View>
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 2. Did your mentee complete the mini goal from last month? </Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Yes"}, {label:"No"}, {label:"Progressed, but not completed"}, {label:"I don’t know. We forgot to talk about it"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                    />
                    </View>
                </View>

                <View style={SurveyStyles.questionPicker} >

                    <Text style={SurveyStyles.questionsText}> 3. Topic for this call </Text>

                    <View style={SurveyStyles.dropDownContainer} >
                        <DropDownPicker
                            items={[
                                {label: 'Option One', value: 'Option One'},
                                {label: 'Option Two', value: 'Option Two' },
                                {label: 'Option Three', value: 'Option Three' },
                                

                            ]}
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Select a Topic"
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                topic: item.value
                            })}
                        />
                    </View>
                </View>

                <View style={SurveyStyles.questionPicker2} >

                    <Text style={SurveyStyles.questionsText}> 4. Date for this call </Text>

                    <View style={SurveyStyles.dropDownContainer} >
                        <DropDownPicker
                            items={[
                                {label: 'Placeholder for Calendar', value: 'Option One'},

                                

                            ]}
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Select Date"
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                topic: item.value
                            })}
                        />
                    </View>
                </View>


                <View style={SurveyStyles.questionPicker} >

                    <Text style={SurveyStyles.questionsText}> 5. How long did the call last (in minutes) </Text>

                    <TextInput style={SurveyStyles.inputContainer}
                        
                        label="The value must be a number"
                        //value={duration}
                        //onChangeText={duration => this.setState({duration: text.value})}
                        />
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 6. Did this meeting have to be rescheduled from a different date this month? </Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Yes"}, {label:"No"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                    />
                    </View>
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 7. Did the student attend on time? </Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Yes"}, {label:"No"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                    />
                    </View>
                </View>

                <View style={SurveyStyles.questionPicker} >

                    <Text style={SurveyStyles.questionsText}> 8. Since your last call, approximately how many times have you reached out to this mentee (call, text, video, or email)? </Text>

                    <TextInput style={SurveyStyles.inputContainer}
                        
                        label="The value must be a number"
                        //value={duration}
                        //onChangeText={duration => this.setState({duration: text.value})}
                        />
                </View>

                <View style={SurveyStyles.questionPicker} >

                        <Text style={SurveyStyles.questionsText}> 9. Approximately how many times did this mentee respond to that outreach? </Text>

                        <TextInput style={SurveyStyles.inputContainer}
                            
                            label="The value must be a number"
                            //value={duration}
                            //onChangeText={duration => this.setState({duration: text.value})}
                            />
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 10. Click all the ways they responded to you in the last month. </Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Phone Call"}, {label:"Email"}, {label:"Text/Messaginsg sytem"}, {label:"Video call"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                        
                        
                    />
                    </View>
                </View>


                <View style={SurveyStyles.questionPicker} >

                        <Text style={SurveyStyles.questionsText}> 11. List any issues that came up in the call. List n/a if none.</Text>

                        <TextInput style={SurveyStyles.inputContainer}
                            
                            label="Enter your answer"
                            //value={duration}
                            //onChangeText={duration => this.setState({duration: text.value})}
                            />
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 12. Did you send your monthly support resource? (Previous Month) </Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Yes"}, {label:"No"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                    />
                    </View>
                </View>

                <View style={SurveyStyles.questionPicker} >

                    <Text style={SurveyStyles.questionsText}> 13.What mini goal did the student set this month?</Text>

                    <TextInput style={SurveyStyles.inputContainer}
                        
                        label="Enter your answer"
                        //value={duration}
                        //onChangeText={duration => this.setState({duration: text.value})}
                        />
                </View>


                <View style={SurveyStyles.questionPicker} >

                 <Text style={SurveyStyles.questionsText}> 14. What is the date of your next call? </Text>

                    <View style={SurveyStyles.dropDownContainer} >
                        <DropDownPicker
                            items={[
                                {label: 'Placeholder for Calendar', value: 'Option One'},

                                

                            ]}
                            
                            containerStyle={{height: 40}}
                            style={{backgroundColor: '#fafafa'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            placeholder="Select Date"
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={item => this.setState({
                                topic: item.value
                            })}
                        />
                    </View>
                </View>

                <View style={SurveyStyles.radioContainer}>
                    <Text style={SurveyStyles.questionsText}> 15. Do you need to follow-up with the student prior to the next call</Text>
                    <View>
                        
                    <RadioButtonRN style={SurveyStyles.radioContainer}
                        data={[{label: "Yes"}, {label:"No"}]}
                        box={false}
                        selectedBtn={(e) => console.log(e)}
                        activeColor={"#2643BE"}
                        deactiveColor={"#5C5C5C"}
                        circleSize= {15}
                    />
                    </View>
                </View>

                <View style={SurveyStyles.questionPicker2} >

                    <Text style={SurveyStyles.questionsText}> 16. List what you need to follow-up about (n/a if nothing) </Text>

                    <TextInput style={SurveyStyles.inputContainer}
                        
                        label="The value must be a number"
                        //value={duration}
                        //onChangeText={duration => this.setState({duration: text.value})}
                        />
                 </View>




            </View>

            <View style={SurveyStyles.buttonEnd}>
                        <TouchableOpacity 
                        style={SurveyStyles.buttonContainerSurv}
                        onPress={()=>this.props.navigation.navigate('Submitted')}
                        >
                        <Text style={SurveyStyles.buttonText}>Submit</Text>
                        </TouchableOpacity>
            </View>

        </ScrollView>
        )
    }
}