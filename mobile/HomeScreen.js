import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { homeStyles } from './Styles';
import { getDataModel } from './DataModel';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.self = this.props.route.params.currentUser;
    this.dataModel = getDataModel();
    this.studentsRef = Firebase.firestore().collection('students');

    this.state = {
      studentList: []
    }
  }
  componentDidMount() {
    this.getInventory();
    this.focusUnsubscribe = this.props.navigation.addListener('focus', this.onFocus);
    console.log(this.self.displayName)
  }

  componentWillUnmount() {
    this.focusUnsubscribe();
  }
  onFocus = () => {
    if (this.props.route.params.item) {
      const {operation, item} = this.props.route.params;
      if (operation === 'add') {
        this.addItem(item);
      } else if (operation === 'edit') {
        this.updateList(item);
      } 
      console.log("this is student info ", this.props.route.params.item);
    }
    this.props.navigation.setParams({operation: 'none'});
    
  }

  getInventory = async () => {
    // console.log("student list", this.state.studentList);
    // the current users data
    let qSnap = await this.studentsRef.get();
    qSnap.forEach(qDocSnap => {
      let data = qDocSnap.data();
      if (data.mentorKey == this.self.id) {
        data.key = qDocSnap.id;
        this.state.studentList.push(data);
      }
    })

    this.setState({studentList: this.state.studentList});
  }
  printInventory = () => {
    for (let item in this.state.studentList) {
      console.log("studentList", item);
    }
  }

  addItem = async (item) => {
    if (item) { // false if undefined
      var sublistRef = this.dataModel.getusersRef();
      let info = {name: item.name, age: item.age, school: item.school, session: {date: item.session.date}};
      // if doc exists
      if (this.state.studentList) {
        console.log("user created student list before :)");
        sublistRef = await this.dataModel.getusersRef().doc(item.currentUser.key);
      }
      // create new doc
      else {
        sublistRef = await this.dataModel.getusersRef().doc();
        console.log("new exercise doc");
      }
      
      let itemdata = {students: info};
      var itemRef = await sublistRef.collection("students").add(itemdata);
      itemdata.key = itemRef.id;
      //pushing to sublist in state
      this.state.studentList.push(itemdata);
    }  
    this.setState({studentList: this.state.studentList});
    return this.state.studentList;

  }


  // fix
  updateList = async (item) => {
    //update from db
    let docRef = await this.dataModel.getusersRef().doc(this.self.key).collection("students").doc(item.key);
    await docRef.update({students: {mood: item.students.mood, text: item.text, reps: item.reps}});
    //update and search thelist display
    let {studentList} = this.state;
    let foundIndex = -1;
    for (let idx in studentList) {
      if (studentList[idx].key === item.key) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      studentList[foundIndex].students.text = item.text;
      studentList[foundIndex].students.reps = item.reps;
    }
    // this.theList = {key: docRef.id, item};
    this.setState({studentList: studentList});
  }


  deleteItem = async (item) => {
    //delete from db
    let docRef = await this.dataModel.getusersRef().doc(this.self.key).collection("students").doc(item.key);
    await docRef.delete();

    //search and delete from thelist display
    let {studentList} = this.state;
    let foundIndex = -1;
    for (let idx in studentList) {
      if (studentList[idx].key === item.key) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      studentList.splice(foundIndex, 1); // remove one element 
    }
    this.setState({studentList: studentList});
  }

  onDelete = (item) => {
    this.deleteItem(item);
  }

  onEdit = (item) => {
    // item.currentUser = this.self;
    this.props.navigation.navigate("Item", {
      operation: 'edit',
      item: item,
    });
  }
  // have to find the student object by name
  onStudentPress = (currentStudent) => {
    this.props.navigation.navigate("Survey", {
      currentUser: this.self,
      student: currentStudent
    });
  }

  render() {
      if (this.state.studentList.length > 0) {
        return (
          <View style = {homeStyles.container}>
            <View style = {homeStyles.headerContainer}>
              <Text style = {{fontSize: 30, color: "#667BD1" }}>Welcome back, {this.self.displayName}</Text>
            </View>
            <View style = {homeStyles.listContainer}>
              <FlatList
              // try to think of logic if user doesn't have any circuits
              // ItemSeparatorComponent={()=>{
              //   return (
              //     <View style={homeStyles.separator}/>
              //   );
              // }}
                data={this.state.studentList ? this.state.studentList : []}
                renderItem={({item})=>{
                  return(
                    <View style={homeStyles.list}>
                      <TouchableOpacity 
                        onPress={()=>{this.onStudentPress(item.name)}}>
                        <View style = {homeStyles.textRowTop}> 
                          
                          <Text style={homeStyles.nameText}>
                            {item.name}
                          </Text>
                        </View> 
                        <View style = {homeStyles.textRow}> 
                          <Text style={homeStyles.textBold}>
                            School: 
                          </Text>
                          <Text style={homeStyles.textRegular}>
                            {item.school}
                          </Text>
                        </View>  
                        <View style = {homeStyles.textColumn}> 
                          <Text style={homeStyles.textBold}>
                              Next Session:
                          </Text>
                          <Text style={homeStyles.textRegular}>
                            {/* {item.session} */}
                          </Text>
                        </View>
                        <View style = {homeStyles.textColumn}> 
                          <Text style={homeStyles.textBold}>
                              Info:
                          </Text>
                          <Text style={homeStyles.textRegular}>
                            {/* {item.session} */}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </View>
  
        )
    }
    else {
      return (
        <View style={homeStyles.textContainerNoList}>
          <Text style={homeStyles.text}>No Students</Text>
        </View>
      )
    }
  }
}