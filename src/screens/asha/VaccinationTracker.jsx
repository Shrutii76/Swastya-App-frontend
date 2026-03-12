import React, { useState, useEffect } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity,
Image,
TextInput
} from "react-native";

import {
Ionicons,
MaterialIcons,
FontAwesome5
} from "@expo/vector-icons";

export default function VaccinationTracker({ navigation, route }) {

const [activeTab, setActiveTab] = useState("upcoming");
const [isUpdated, setIsUpdated] = useState(false);

/* CHECK IF STATUS WAS UPDATED */

useEffect(() => {
if (route?.params?.updated) {
setIsUpdated(true);
}
}, [route?.params?.updated]);

return (

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity onPress={() => navigation.goBack()}>
<Ionicons name="arrow-back" size={24} color="#1F2937" />
</TouchableOpacity>

<View>
<Text style={styles.headerTitle}>Vaccination Tracker</Text>
<Text style={styles.headerSub}>Sector 4 - Urban Health Center</Text>
</View>

<View style={styles.headerRight}>
<Ionicons name="notifications" size={22} color="#111" />
</View>

</View>

{/* SEARCH */}

<View style={styles.searchBar}>
<Ionicons name="search" size={18} color="#9CA3AF" />
<TextInput
placeholder="Search patient..."
style={styles.searchInput}
/>
</View>

<ScrollView showsVerticalScrollIndicator={false}>

{/* STATS */}

<View style={styles.statsRow}>

<View style={styles.statBox}>
<Text style={styles.statLabel}>TOTAL</Text>
<Text style={styles.statNumber}>142</Text>
</View>

<View style={styles.statBoxBlue}>
<Text style={styles.statLabelBlue}>TODAY</Text>
<Text style={styles.statNumberBlue}>08</Text>
</View>

<View style={styles.statBoxRed}>
<Text style={styles.statLabelRed}>MISSED</Text>
<Text style={styles.statNumberRed}>12</Text>
</View>

</View>


{/* TABS */}

<View style={styles.tabs}>

<TouchableOpacity onPress={() => setActiveTab("upcoming")}>
<Text style={activeTab === "upcoming" ? styles.activeTab : styles.tab}>
Upcoming
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveTab("missed")}>
<Text style={activeTab === "missed" ? styles.activeTab : styles.tab}>
Missed (12)
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveTab("completed")}>
<Text style={activeTab === "completed" ? styles.activeTab : styles.tab}>
Completed
</Text>
</TouchableOpacity>

</View>

<View style={styles.tabIndicator} />


{/* UPCOMING TAB */}

{activeTab === "upcoming" && (

<>

<View style={styles.scheduleHeader}>
<Text style={styles.scheduleTitle}>Today's Schedule (8)</Text>
<Text style={styles.viewAll}>View All</Text>
</View>


{/* CARD */}

<View style={styles.card}>

<View style={styles.cardTop}>

<Image
source={require("../../assets/images/images.jpeg")}
style={styles.avatar}
/>

<View style={{ flex: 1 }}>

<View style={styles.nameRow}>
<Text style={styles.name}>Aryan Sharma</Text>

<View style={styles.dueBadge}>
<Text style={styles.dueText}>DUE TODAY</Text>
</View>

</View>

<Text style={styles.subText}>
Mother: Priya Sharma • 9 months old
</Text>

<View style={styles.vaccineRow}>
<FontAwesome5 name="syringe" size={14} color="#0ea5e9" />
<Text style={styles.vaccineText}>
Measles-Rubella (MR) 1st Dose
</Text>
</View>

</View>

</View>


<View style={styles.buttonRow}>

<TouchableOpacity
style={[
styles.updateBtn,
isUpdated && styles.completedBtn
]}
onPress={() =>
navigation.navigate("UpdateStatusScreen", {
type: "child",
name: "Aryan Sharma",
vaccine: "Measles-Rubella (MR) 1st Dose"
})
}
>

<Ionicons name="checkmark-circle" size={18} color="#fff" />

<Text style={styles.btnText}>
{isUpdated ? "Completed" : "Update Status"}
</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.iconBtn}>
<Ionicons name="call-outline" size={20} color="#6b7280" />
</TouchableOpacity>

</View>

</View>


{/* OVERDUE CARD */}

<View style={styles.cardRed}>

<View style={styles.cardTop}>

<Image
source={require("../../assets/images/images.jpeg")}
style={styles.avatar}
/>

<View style={{ flex: 1 }}>

<View style={styles.nameRow}>
<Text style={styles.name}>Kavya Gupta</Text>

<View style={styles.overdueBadge}>
<Text style={styles.overdueText}>OVERDUE 5 DAYS</Text>
</View>

</View>

<Text style={styles.subText}>
Mother: Anjali Gupta • 1.5 years old
</Text>

<View style={styles.vaccineRow}>
<Ionicons name="warning" size={16} color="#EF4444" />
<Text style={styles.vaccineText}>
DPT Booster - 1
</Text>
</View>

</View>

</View>


<View style={styles.buttonRow}>

<TouchableOpacity style={styles.reminderBtn}>
<Ionicons name="send" size={18} color="#fff" />
<Text style={styles.btnText}>Send Reminder</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.iconBtnRed}>
<MaterialIcons name="location-on" size={20} color="#EF4444" />
</TouchableOpacity>

</View>

</View>

</>
)}


{/* MISSED TAB */}

{activeTab === "missed" && (

<View style={styles.cardRed}>
<Text style={styles.name}>Missed Patient</Text>
<Text style={styles.subText}>
Vaccination missed — Follow up required
</Text>
</View>

)}


{/* COMPLETED TAB */}

{activeTab === "completed" && (

<View style={styles.card}>
<Text style={styles.name}>Completed Patient</Text>
<Text style={styles.subText}>
Vaccination successfully completed
</Text>
</View>

)}

<View style={{ height: 120 }} />

</ScrollView>


{/* FLOATING BUTTON */}

<TouchableOpacity
style={styles.fab}
onPress={() => navigation.navigate("AddVaccinationPatientScreen")}
>
<Ionicons name="add" size={28} color="white" />
</TouchableOpacity>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F4F7FB"
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20,
paddingTop:50,
paddingBottom:16,
backgroundColor:"#fff"
},

headerTitle:{
fontSize:20,
fontWeight:"700"
},

headerSub:{
fontSize:12,
color:"#6B7280"
},

headerRight:{
flexDirection:"row",
gap:15
},

statsRow:{
flexDirection:"row",
padding:16
},

statBox:{
backgroundColor:"#fff",
flex:1,
padding:16,
borderRadius:12,
marginRight:8
},

statBoxBlue:{
backgroundColor:"#E6F6FB",
flex:1,
padding:16,
borderRadius:12,
marginRight:8
},

statBoxRed:{
backgroundColor:"#FDECEC",
flex:1,
padding:16,
borderRadius:12
},

statLabel:{
fontSize:12,
color:"#6B7280"
},

statNumber:{
fontSize:22,
fontWeight:"700"
},

statLabelBlue:{
fontSize:12,
color:"#1CC4E9"
},

statNumberBlue:{
fontSize:22,
fontWeight:"700",
color:"#1CC4E9"
},

statLabelRed:{
fontSize:12,
color:"#EF4444"
},

statNumberRed:{
fontSize:22,
fontWeight:"700",
color:"#EF4444"
},

tabs:{
flexDirection:"row",
paddingHorizontal:16,
gap:20
},

activeTab:{
color:"#1CC4E9",
fontWeight:"700"
},

tab:{
color:"#6B7280"
},

tabIndicator:{
height:2,
width:90,
backgroundColor:"#1CC4E9",
marginLeft:16,
marginTop:6
},

scheduleHeader:{
flexDirection:"row",
justifyContent:"space-between",
padding:16
},

scheduleTitle:{
fontSize:18,
fontWeight:"700"
},

viewAll:{
color:"#1CC4E9"
},

card:{
backgroundColor:"#fff",
marginHorizontal:16,
borderRadius:14,
padding:14,
marginBottom:16
},

cardRed:{
backgroundColor:"#FFF1F1",
marginHorizontal:16,
borderRadius:14,
padding:14,
marginBottom:16
},

cardTop:{
flexDirection:"row",
alignItems:"center"
},

avatar:{
width:50,
height:50,
borderRadius:25,
marginRight:12
},

nameRow:{
flexDirection:"row",
justifyContent:"space-between"
},

name:{
fontSize:16,
fontWeight:"700"
},

subText:{
fontSize:13,
color:"#6B7280"
},

vaccineRow:{
flexDirection:"row",
alignItems:"center",
marginTop:6,
gap:6
},

vaccineText:{
fontSize:13,
color:"#374151"
},

dueBadge:{
backgroundColor:"#DCFCE7",
paddingHorizontal:8,
paddingVertical:3,
borderRadius:10
},

dueText:{
fontSize:10,
color:"#16A34A"
},

overdueBadge:{
backgroundColor:"#FEE2E2",
paddingHorizontal:8,
paddingVertical:3,
borderRadius:10
},

overdueText:{
fontSize:10,
color:"#DC2626"
},

buttonRow:{
flexDirection:"row",
marginTop:14
},

updateBtn:{
flex:1,
backgroundColor:"#1CC4E9",
padding:12,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
gap:6
},

completedBtn:{
backgroundColor:"#22C55E"
},

reminderBtn:{
flex:1,
backgroundColor:"#EF4444",
padding:12,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
gap:6
},

iconBtn:{
marginLeft:10,
borderWidth:1,
borderColor:"#E5E7EB",
padding:12,
borderRadius:10
},

iconBtnRed:{
marginLeft:10,
borderWidth:1,
borderColor:"#FCA5A5",
padding:12,
borderRadius:10
},

btnText:{
color:"#fff",
fontWeight:"600"
},

fab:{
position:"absolute",
bottom:30,
right:20,
backgroundColor:"#1CC4E9",
width:60,
height:60,
borderRadius:30,
alignItems:"center",
justifyContent:"center",
elevation:5
},

searchBar:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#fff",
marginHorizontal:16,
marginTop:10,
paddingHorizontal:12,
borderRadius:10,
borderWidth:1,
borderColor:"#E5E7EB"
},

searchInput:{
flex:1,
padding:10,
fontSize:14
}

});