(this["webpackJsonpreact-test-2"]=this["webpackJsonpreact-test-2"]||[]).push([[0],{1578:function(e,t,s){},1579:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/logo.7bf3e558.jpg"},1585:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(76),c=s.n(r),i=(s(545),s(77)),o=s(78),l=s(87),d=s(86),u=s(28),j={apiKey:"AIzaSyCQSHjNKtRqSB_Bks3x0Y8aLP1a-vOYrMY",authDomain:"winning-futures.firebaseapp.com",projectId:"winning-futures",storageBucket:"winning-futures.appspot.com",messagingSenderId:"460373487232",appId:"1:460373487232:web:dfce8debe3af0315f90065",measurementId:"G-GYHB57EH09"},A=s(100),h=s(67),m=s(532),f=(s(1346),s(450),s(3)),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(f.jsx)("div",{style:{height:"100%",width:"100%",overflowY:"auto"},children:Object(f.jsx)(m.Form,{src:"https://tkjujrjyhdygpzy.form.io/successcoachform"})})}}]),s}(n.a.Component);s(451),s(530);u.a.apps.length?u.a.app():u.a.initializeApp(j);var p=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:" The Home PAge"}),Object(f.jsx)("button",{type:"submit",onClick:function(){u.a.auth().signOut()},className:"btn btn-danger",children:"Logout"})]})},g=s(166),O=s(27),x=s.n(O),v=s(62),w=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).writeMentorData=function(){var e=Object(v.a)(x.a.mark((function e(t,s,n,r){var c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}a.mentorRef.doc(t).set({displayName:s,email:n,password:r}),e.next=10;break;case 4:return c={displayName:s,email:n,password:r},e.next=7,a.mentorRef.add(c);case 7:return i=e.sent,c.key=i.id,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,s,a,n){return e.apply(this,arguments)}}(),a.getUserData=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mentorRef.get();case 2:e.sent.forEach((function(e){var t=e.id,s=e.data();s.key=t,a.mentors.push(s)})),console.log("getuser data",a.mentors);case 5:case"end":return e.stop()}}),e)}))),a.handleSubmit=function(e){e.preventDefault();var t=a.state.mentorKey,s=a.state.displayName,n=a.state.email,r=a.state.password;a.writeMentorData(t,s,n,r),console.log("submitted",t,s,n,r),a.setState({displayName:"",email:"",password:"",mentorKey:""})},a.handleChange=function(e){e.preventDefault();var t=e.target,s=t.value,n=t.name;console.log(s),console.log(n),a.setState(Object(g.a)({},n,s))},a.getMentorByKey=function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mentorRef.get();case 2:e.sent.forEach((function(e){var s=e.data();e.id===t&&a.setState({displayName:s.displayName,email:s.email,password:s.password,mentorKey:t})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u.a.apps.length?u.a.app():u.a.initializeApp(j),a.mentorRef=u.a.firestore().collection("mentors"),a.mentors=[],a.state={displayName:"",email:"",password:""},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getUserData();var e=new URLSearchParams(window.location.search).get("id");e&&this.getMentorByKey(e)}},{key:"render",value:function(){var e=this.state.developers;return console.log("hello render",e),Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-xl-12",children:Object(f.jsxs)("h1",{className:"page-title",children:[this.state.mentorKey?"Edit":"Add New"," Mentor Here"]})})}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-xl-12",children:[Object(f.jsx)("div",{className:"save-btn",children:Object(f.jsx)("span",{onClick:this.handleSubmit,children:"SAVE"})}),Object(f.jsx)("form",{onSubmit:this.handleSubmit,children:Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"Name"]}),Object(f.jsx)("input",{name:"displayName",type:"text",value:this.state.displayName,ref:this.state.displayName,onChange:this.handleChange,className:"form-control",placeholder:"Name"})]}),Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"Email"]}),Object(f.jsx)("input",{name:"email",type:"text",value:this.state.email,ref:this.state.email,onChange:this.handleChange,className:"form-control",placeholder:"Email"})]}),Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"Password"]}),Object(f.jsx)("input",{name:"password",type:"text",value:this.state.password,ref:this.state.password,onChange:this.handleChange,className:"form-control",placeholder:"Password"})]})]})})]})})]})})}}]),s}(n.a.Component),N=s(149),y=s(537),S=s.n(y),B=s(1594),E=(s(338),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).getForms=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.formsRef.get();case 2:e.sent.forEach(function(){var e=Object(v.a)(x.a.mark((function e(t){var s,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=t.data(),n=0;n<s.names.length;n++)a.forms.push(s.names[n]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.setState({forms:a.forms});case 5:case"end":return e.stop()}}),e)}))),a.getMentors=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mentorsRef.get();case 2:e.sent.forEach(function(){var e=Object(v.a)(x.a.mark((function e(t){var s,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.data(),n={id:t.id,displayName:s.displayName,email:s.email,password:s.password},a.mentors.push(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.setState({mentors:a.mentors});case 5:case"end":return e.stop()}}),e)}))),a.getMentorByKey=function(e){var t,s=Object(N.a)(a.mentors);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n.key===e)return n}}catch(r){s.e(r)}finally{s.f()}},a.deleteMentor=function(){var e=Object(v.a)(x.a.mark((function e(t){var s,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,a.mentorsRef.doc(t.id);case 3:return s=e.sent,e.next=6,s.delete();case 6:n=-1,e.t0=x.a.keys(a.mentors);case 8:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,a.mentors[r].id!==t.id){e.next=13;break}return n=r,e.abrupt("break",15);case 13:e.next=8;break;case 15:-1!==n&&a.mentors.splice(n,1),a.setState({mentors:a.mentors});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onChangeValue=function(e){a.selectedform=e.target.value,console.log(a.selectedform),a.setState({form:a.selectedform})},a.handleChange=function(){var e=Object(v.a)(x.a.mark((function e(t,s,n){var r,c,i,o,l,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target,c=r.value,i=r.name,a.setState(Object(g.a)({},i,c)),o=u.a.firestore().collection(n),e.next=8,o.get();case 8:l=e.sent,d=[],l.forEach(function(){var e=Object(v.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=t.data()).YourEmail.toLowerCase()==s.email.toLowerCase()&&a.MenteeName.toLowerCase()==c.toLowerCase()&&(console.log("the mentor name is ",s.displayName),console.log("the student",c),(d=a).MenteeName=d.MenteeName.replace(/\s+/g,"_"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("Exported Info",d),a.setState({data:d});case 13:case"end":return e.stop()}}),e)})));return function(t,s,a){return e.apply(this,arguments)}}(),a.getMentorByKey=function(e){var t,s=Object(N.a)(a.mentors);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n.key===e)return n}}catch(r){s.e(r)}finally{s.f()}},a.getStudents=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.studentsRef.get();case 2:e.sent.forEach((function(e){var t=e.data();t.id=e.id,t.mentor=a.getMentorByKey(t.mentorKey),a.students.push(t)})),a.setState({students:a.students});case 5:case"end":return e.stop()}}),e)}))),u.a.apps.length?u.a.app():u.a.initializeApp(j),a.mentorsRef=u.a.firestore().collection("mentors"),a.studentsRef=u.a.firestore().collection("students"),a.formsRef=u.a.firestore().collection("formInfo"),a.forms=[],a.mentors=[],a.students=[],a.student="",a.selectedform="",a.state={mentors:[],data:[],students:[],forms:[],form:""},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getMentors(),this.getStudents(),this.getForms()}},{key:"render",value:function(){var e=this;return Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-xl-12",children:Object(f.jsx)("h1",{className:"page-title marginL0",children:"Mentors"})})}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-xl-12",children:Object(f.jsxs)(B.a,{className:"simple-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:"Forms"}),Object(f.jsx)("th",{children:"Students"}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{})]})}),Object(f.jsx)("tbody",{children:this.state.mentors.map((function(t){return Object(f.jsxs)("tr",{className:"card float-left",style:{width:"18rem",marginRight:"1rem"},children:[Object(f.jsxs)("td",{className:"card-title",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("b",{children:["Name: ",t.displayName]})}),Object(f.jsxs)("div",{children:["Email: ",t.email]}),Object(f.jsxs)("div",{children:["Password: ",t.password]})]}),Object(f.jsx)("td",{className:"card-title",children:Object(f.jsx)("select",{name:"selectedForm",className:"blue-select",value:e.state.form,onChange:e.onChangeValue,children:e.state.forms.map((function(e){return Object(f.jsx)("option",{value:e,children:e})}))})}),Object(f.jsx)("td",{className:"card-title",children:Object(f.jsxs)("select",{name:"selectedStudent",className:"blue-select",onChange:function(s){return e.handleChange(s,t,e.state.form)},children:[Object(f.jsx)("option",{value:"",children:"Select Student"}),e.students.filter((function(e){return e.mentorKey==t.id})).map((function(e){return Object(f.jsx)("option",{value:e.key,children:e.firstName+" "+e.lastName},e.key)}))]})}),Object(f.jsx)("td",{children:Object(f.jsx)(S.a,{class:"download-btn",filename:t.displayName+"_"+e.state.data.MenteeName+"_"+e.state.form+".csv",data:Object.entries(e.state.data),children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAJxsHGAAACEElEQVRYCe2XTVbDIBCAGfqztd6gi9atvUGT6t56gtYb1Jt4A+0NvECTeALbrXXRI+hWLSOT9+jj5QUIJN2FzcAMM3wMAQKwgDKM0kGvgykwNilzR8a2v0eID1n8VWa36bjNaLL1uViZYMiHbNTH5G/TBwHZAta1tUCuDLYZajPkyoDL3n5DbYZcGXDZ5bVTXuQFOuxztiizImAkHaMym9LJCzYDhEy1dfkj2FpevAddp+pdVSnKHsd3eUsOinpqG2ehdc6BJbimOlV7nNHFe3lSaBXjLgOG31q/Rqu22EYgFHyOZ4CimBTbNENr9sdROmEdkQGDC1MAH30+wSOP9lm8NflZgcipKagqMDSeE6gJqKowlYHqQPnAeAGFQPnCeAP5QIXABAFVgQqFOQGN4mRKjSrlD2FH7y3T7tNh6P3WBbyuEpf6fKazNxjPNs8AsKzqpD8Ci1BFGNtjsmw8RHyBq5tEjuFXilDAxStFoBOYDj3Xy9Y2WhBQPrjhuVwHhuIa7zLbLMgmT9QJLQn9pqi+VPddJuWrZHCGVACStIQkCZJknWL8H/IJ2gSIGi94yVQAl8x3HoN7gfio+sqMrgVALFO7UzolG8mQClYmAdnTRxLnu3A8S+YAbLrfzJbUd3SbrjhiqvudP0MAd7Tz8jOLsfyQlGdfDgRCLHQYqjfyUReD1mnLjOFDnQBN+hLLPyMd9jA5oyRTAAAAAElFTkSuQmCC"})})}),Object(f.jsxs)("td",{className:"center-align",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return e.deleteMentor(t)},className:"btn btn-link",children:"Delete"})}),Object(f.jsx)("div",{children:Object(f.jsx)(A.b,{to:"/AddMentors?id="+t.id,children:"Edit"})})]})]},t.uid)}))})]})})})]})})}}]),s}(n.a.Component)),C=(Object(h.f)(E),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).getMentors=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mentorsRef.get();case 2:e.sent.forEach(function(){var e=Object(v.a)(x.a.mark((function e(t){var s,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.data(),n={key:t.id,displayName:s.displayName},a.mentors.push(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)}))),a.getMentorByKey=function(e){var t,s=Object(N.a)(a.mentors);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n.key===e)return n}}catch(r){s.e(r)}finally{s.f()}},a.getStudents=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.studentsRef.get();case 2:e.sent.forEach((function(e){var t=e.data();t.id=e.id,t.mentor=a.getMentorByKey(t.mentorKey),a.students.push(t)})),console.log("Students data",a.students),a.setState({students:a.students});case 6:case"end":return e.stop()}}),e)}))),a.deleteStudent=function(){var e=Object(v.a)(x.a.mark((function e(t){var s,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,a.studentsRef.doc(t.id);case 3:return s=e.sent,e.next=6,s.delete();case 6:n=-1,e.t0=x.a.keys(a.students);case 8:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,a.students[r].id!==t.id){e.next=13;break}return n=r,e.abrupt("break",15);case 13:e.next=8;break;case 15:-1!==n&&a.students.splice(n,1),a.setState({students:a.students});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.rendorMentor=function(e){return void 0==e.mentor?Object(f.jsx)("h5",{className:"card-title",children:"Mentor: No Mentor, Click edit to assign a Mentor"}):Object(f.jsxs)("h5",{className:"card-title",children:["Mentor: ",e.mentor.displayName]})},u.a.apps.length?u.a.app():u.a.initializeApp(j),a.mentorsRef=u.a.firestore().collection("mentors"),a.studentsRef=u.a.firestore().collection("students"),a.mentors=[],a.students=[],a.state={students:[]},a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getMentors(),this.getStudents()}},{key:"render",value:function(){var e=this;return console.log(this.state),Object(f.jsx)(n.a.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-xl-12",children:Object(f.jsx)("h1",{className:"page-title marginL0",children:"Students"})})}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-xl-12",children:Object(f.jsxs)(B.a,{className:"simple-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"School"}),Object(f.jsx)("th",{children:"Session"}),Object(f.jsx)("th",{children:"Mentor"}),Object(f.jsx)("th",{children:" "})]})}),Object(f.jsx)("tbody",{children:this.state.students.map((function(t){return Object(f.jsxs)("tr",{className:"card float-left",style:{width:"18rem",marginRight:"1rem"},children:[Object(f.jsxs)("td",{className:"card-title",children:[" ",t.firstName]}),Object(f.jsx)("td",{className:"card-title",children:t.lastName}),Object(f.jsx)("td",{className:"card-title",children:t.school}),Object(f.jsxs)("td",{className:"card-title",children:[" ",t.session]}),Object(f.jsx)("td",{children:e.rendorMentor(t)}),Object(f.jsxs)("td",{className:"center-align",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return e.deleteStudent(t)},className:"btn btn-link",children:"Delete"})}),Object(f.jsx)("div",{children:Object(f.jsx)(A.b,{to:"/AddStudents?id="+t.id,children:"Edit"})})]})]},t.id)}))})]})})})]})})}}]),s}(n.a.Component)),M=(Object(h.f)(C),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(f.jsx)("h1",{children:"Placeholder Text Here"})}}]),s}(n.a.Component)),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).writeStudentData=function(){var e=Object(v.a)(x.a.mark((function e(t,s,n,r,c,i){var o,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}a.studentsRef.doc(t).set({firstName:s,lastName:n,school:r,session:c,mentorKey:i}),e.next=10;break;case 4:return o={firstName:s,lastName:n,school:r,session:c,mentorKey:i},e.next=7,a.studentsRef.add(o);case 7:return l=e.sent,o.key=l.id,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,s,a,n,r,c){return e.apply(this,arguments)}}(),a.handleSubmit=function(e){e.preventDefault();var t=a.state.studentKey,s=a.state.firstName,n=a.state.lastName,r=a.state.school,c=a.state.session,i=a.state.selectedMentor;a.writeStudentData(t,s,n,r,c,i),console.log("Submitted",t,s,n,r,c,i),a.setState({firstName:"",lastName:"",school:"",session:"",selectedMentor:"",studentKey:""})},a.handleChange=function(e){e.preventDefault();var t=e.target,s=t.value,n=t.name;console.log(s),console.log(n),a.setState(Object(g.a)({},n,s))},a.getMentors=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mentorsRef.get();case 2:e.sent.forEach((function(e){var t=e.id,s=e.data();s.key=t,a.mentors.push(s)}));case 4:case"end":return e.stop()}}),e)}))),a.getMentorByKey=function(e){var t,s=Object(N.a)(a.mentors);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n.key===e)return n}}catch(r){s.e(r)}finally{s.f()}},a.getStudentByKey=function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.studentsRef.get();case 2:e.sent.forEach((function(e){var s=e.data();e.id===t&&(s.mentor=a.getMentorByKey(s.mentorKey),console.log(s),a.setState({firstName:s.firstName,lastName:s.lastName,school:s.school,session:s.session,selectedMentor:void 0==s.mentor?"":s.mentor.key,studentKey:t}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u.a.apps.length?u.a.app():u.a.initializeApp(j),a.studentsRef=u.a.firestore().collection("students"),a.mentorsRef=u.a.firestore().collection("mentors"),a.mentors=[],a.state={firstName:"",lastName:"",school:"",session:"",selectedMentor:"",studentKey:""},console.log(a.state),a}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getMentors();var e=new URLSearchParams(window.location.search).get("id");e&&this.getStudentByKey(e)}},{key:"render",value:function(){return console.log("hello render",this.state),console.log(this.mentors),Object(f.jsx)(n.a.Fragment,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-xl-12",children:[Object(f.jsxs)("h1",{className:"page-title",children:[this.state.studentKey?"Edit":"Add New"," Student Here"]}),Object(f.jsx)("div",{className:"save-btn",children:Object(f.jsx)("span",{onClick:this.handleSubmit,children:"SAVE"})}),Object(f.jsx)("form",{onSubmit:this.handleSubmit,children:Object(f.jsxs)("div",{className:"form-row",children:[Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"First Name"]}),Object(f.jsx)("input",{name:"firstName",type:"text",value:this.state.firstName,ref:this.state.firstName,onChange:this.handleChange,className:"form-control",placeholder:"First Name"})]}),Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"Last Name"]}),Object(f.jsx)("input",{name:"lastName",type:"text",value:this.state.lastName,ref:this.state.lastName,onChange:this.handleChange,className:"form-control",placeholder:"Last Name"})]}),Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"School"]}),Object(f.jsx)("input",{name:"school",type:"text",value:this.state.school,ref:this.state.school,onChange:this.handleChange,className:"form-control",placeholder:"School"})]}),Object(f.jsxs)("div",{className:"form-group col-md-6",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"require",children:"* "}),"Session"]}),Object(f.jsx)("input",{name:"session",type:"text",value:this.state.session,ref:this.state.session,onChange:this.handleChange,className:"form-control",placeholder:"Session"})]}),Object(f.jsx)("div",{className:"foobar form-group col-md-6",children:Object(f.jsxs)("select",{name:"selectedMentor",className:"blue-select",value:this.state.selectedMentor,onChange:this.handleChange,children:[Object(f.jsx)("option",{value:"",children:"No Mentor"}),this.mentors.map((function(e){return e.displayName&&Object(f.jsx)("option",{value:e.key,children:e.displayName},e.key)}))]})})]})})]})})})})}}]),s}(n.a.Component),D=(Object(h.f)(k),s(348)),Q=(s(1578),s(1593)),K=s.p+"static/media/banner1.a8e9343f.jpg",F=s.p+"static/media/banner2.17316011.jpg",Y=s.p+"static/media/banner3.c7fd0569.jpg";u.a.apps.length?u.a.app():u.a.initializeApp(j);var R=function(){var e=Object(a.useState)(""),t=Object(D.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(D.a)(c,2),o=i[0],l=i[1];function d(e){e.preventDefault(),u.a.auth().signInWithEmailAndPassword(n,o).then((function(e){})).catch((function(e){console.log(e),alert("INVALID Passwords")}))}return Object(f.jsxs)("div",{className:"container login-container",children:[Object(f.jsxs)("div",{className:"from-warp flex-center",children:[Object(f.jsx)("img",{className:"logo",src:s(1579).default,alt:""}),Object(f.jsx)("p",{children:"Sign in"}),Object(f.jsxs)("form",{onSubmit:d,className:"flex-center",children:[Object(f.jsxs)("div",{className:"form-group input-group-lg",children:[Object(f.jsx)("input",{onChange:function(e){r(e.target.value)},type:"email",name:"email",className:"form-control",placeholder:"Email Address"}),Object(f.jsx)("input",{onChange:function(e){l(e.target.value)},type:"password",name:"password",className:"form-control",placeholder:"Password"})]}),Object(f.jsx)("div",{className:"login-btn",onClick:d,children:Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(f.jsx)("div",{onClick:function(e){e.preventDefault(),u.a.auth().createUserWithEmailAndPassword(n,o).then((function(e){})).catch((function(e){console.log(e)}))},style:{color:"#667BD1",marginTop:"40px",fontSize:"16px",cursor:"pointer"},children:"SignUp"})]})]}),Object(f.jsx)("div",{className:"img-warp",children:Object(f.jsxs)(Q.a,{autoplay:!0,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:K,alt:""})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:F,alt:""})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:Y,alt:""})})]})})]})},J=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),a=t.call(this,e),u.a.apps.length?u.a.app():u.a.initializeApp(j),a.state={user:{}},a}return Object(o.a)(s,[{key:"authListener",value:function(){var e=this;u.a.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"onLogout",value:function(){u.a.auth().signOut()}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return Object(f.jsx)("div",{style:{height:"100%"},children:this.state.user?Object(f.jsx)(A.a,{children:Object(f.jsxs)("div",{className:"main-page",children:[Object(f.jsxs)("div",{className:"left",children:[Object(f.jsxs)("div",{className:"box",children:[Object(f.jsx)("img",{src:"data:image/png;base64,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"}),"Admin"]}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsxs)(A.c,{to:"/AddMentors",activeClassName:"activeClass",children:[Object(f.jsx)("i",{className:"material-icons",children:"group_add"}),"Add Mentors"]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.c,{to:"/AddStudents",activeClassName:"activeClass",children:[Object(f.jsx)("i",{className:"material-icons",children:"person_add"}),"Add Students"]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.c,{to:"/Mentors",activeClassName:"activeClass",children:[Object(f.jsx)("i",{className:"material-icons",children:"group"}),"Mentors"]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(A.c,{to:"/Students",activeClassName:"activeClass",children:[Object(f.jsx)("i",{className:"material-icons",children:"person"}),"Students"]})}),Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"https://portal.form.io/#/auth",activeClassName:"activeClass",children:[Object(f.jsx)("i",{className:"material-icons",children:"view_module"}),"Forms"]})})]})}),Object(f.jsx)("div",{className:"nav-bottom",children:Object(f.jsxs)("div",{className:"box",onClick:this.onLogout,children:[Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGaADAAQAAAABAAAAFgAAAAD5ayK1AAABVUlEQVRIDb1UQU7DMBDcdS3O/QH9AG2+wA/gB7m04kaPKBzaAypHeqZITV9Af0B5QZQD9/AErhC82EiOHMVJHMWKpWjt3fHsetYOgsNYROkaEFYOUCuEWb2enYMk4S5FMyHinPOTC1ZjGIk3PUc98W0X9ylpzkHksiaZRx+B+nQlfW0liTzmEjFPiIlxX3K9v2h8uE7GZ9+4l4ErHfRl/xuvpEH4eQXEiSYmohgBM71uswT4udtMY40zG8+VPAD5E8gnbQ5EDM1165zoXWJiG46BkNUSfdmCvnz8+XF6vLlLAjGCozzNzCA+AEFmrFum9dKWNJpH6RYRbhWbQHb58nBxamGuDZs9KV3h3Wa2lOzXvuUrJVFlKfmYoIDneVZbZsdASa6OexvhtXI17uoRLF58E4e8fZNfHJ03Yaqx4icMTkkEYyEirapEbp5K4922dUMNkuQPpdBddazf8OEAAAAASUVORK5CYII="}),"logout"]})})]}),Object(f.jsx)("div",{className:"right",children:Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/AddStudents",children:Object(f.jsx)(k,{})}),Object(f.jsx)(h.a,{path:"/Forms",children:Object(f.jsx)(b,{})}),Object(f.jsx)(h.a,{path:"/Home",children:Object(f.jsx)(p,{})}),Object(f.jsx)(h.a,{path:"/AddMentors",children:Object(f.jsx)(w,{})}),Object(f.jsx)(h.a,{path:"/Mentors",children:Object(f.jsx)(E,{})}),Object(f.jsx)(h.a,{path:"/Students",children:Object(f.jsx)(C,{})}),Object(f.jsx)(h.a,{path:"/Sessions",children:Object(f.jsx)(M,{})})]})})]})}):Object(f.jsx)(R,{})})}}]),s}(n.a.Component),H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,1595)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};s(1582);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),H()},338:function(e,t,s){},545:function(e,t,s){}},[[1585,1,2]]]);
//# sourceMappingURL=main.4ce6a5d6.chunk.js.map