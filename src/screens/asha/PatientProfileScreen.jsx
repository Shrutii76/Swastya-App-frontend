import React from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ScrollView,
} from "react-native";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function PatientProfileScreen({ navigation }) {
return (

<View style={styles.container}>

{/* HEADER */}
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Ionicons name="arrow-back" size={24} color="#111" />
</TouchableOpacity>

<Text style={styles.headerTitle}>Patient Profile</Text>

<Ionicons name="ellipsis-vertical" size={22} color="#111" />
</View>

<ScrollView showsVerticalScrollIndicator={false}>

{/* PROFILE */}
<View style={styles.profileSection}>

<Image
source={require("../../assets/images/images.jpeg")}
style={styles.avatar}
/>

<Text style={styles.name}>Rahul Kumar</Text>
<Text style={styles.subtitle}>26 years • Male</Text>

<View style={styles.badges}>
<View style={styles.pregnantBadge}>
<FontAwesome5 name="user" size={14} color="#06b6d4" />
<Text style={styles.badgeText}>General Patient</Text>
</View>
</View>

</View>


{/* ACTION BUTTONS */}
<View style={styles.actionRow}>

<TouchableOpacity
style={styles.scheduleBtn}
onPress={() => navigation.navigate("ScheduleVisitScreen")}
>
<Ionicons name="calendar-outline" size={18} color="#fff" />
<Text style={styles.scheduleText}>Schedule Visit</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.recordBtn}
onPress={() => navigation.navigate("AddVisitRecordScreen")}
>
<Ionicons name="document-text-outline" size={18} color="#fff" />
<Text style={styles.recordText}>Add Record</Text>
</TouchableOpacity>

</View>


{/* HEALTH DETAILS */}
<Text style={styles.sectionTitle}>Health Details</Text>

<View style={styles.healthRow}>

<View style={styles.healthCard}>
<Text style={styles.healthLabel}>BLOOD GROUP</Text>
<Text style={styles.healthValue}>O+</Text>
</View>

<View style={styles.healthCard}>
<Text style={styles.healthLabel}>LAST VISIT</Text>
<Text style={styles.healthDate}>Sep 12, 2024</Text>
</View>

</View>


{/* LAST CHECKUP */}
<View style={styles.infoCard}>

<View style={styles.infoRow}>
<View style={styles.iconCircle}>
<Ionicons name="time-outline" size={20} color="#8A94A6" />
</View>

<View>
<Text style={styles.infoLabel}>LAST CHECKUP</Text>
<Text style={styles.infoText}>12 Sep 2024 • Normal</Text>
</View>
</View>

<View style={styles.divider} />

<View style={styles.infoRow}>
<View style={styles.iconCircleBlue}>
<Ionicons name="calendar" size={20} color="#06b6d4" />
</View>

<View>
<Text style={styles.nextVisit}>NEXT VISIT</Text>
<Text style={styles.infoText}>10 Oct 2024 • Routine Visit</Text>
</View>
</View>

</View>


{/* BASIC DETAILS */}
<View style={styles.basicHeader}>
<Text style={styles.sectionTitle}>Basic Details</Text>
</View>

<View style={styles.basicCard}>

<View style={styles.basicRow}>
<Ionicons name="call-outline" size={20} color="#8A94A6" />
<View style={{ marginLeft: 10 }}>
<Text style={styles.basicLabel}>PHONE NUMBER</Text>
<Text style={styles.basicValue}>+91 98765 43210</Text>
</View>
</View>

<View style={styles.basicRow}>
<Ionicons name="location-outline" size={20} color="#8A94A6" />
<View style={{ marginLeft: 10 }}>
<Text style={styles.basicLabel}>ADDRESS</Text>
<Text style={styles.basicValue}>
Village Rampur, House No. 45, Sector 4, Haryana
</Text>
</View>
</View>

<View style={styles.basicRow}>
<Ionicons name="finger-print-outline" size={20} color="#8A94A6" />
<View style={{ marginLeft: 10 }}>
<Text style={styles.basicLabel}>HOUSEHOLD ID (HHID)</Text>

</View>
</View>

</View>

</ScrollView>

</View>
);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F7F9FB",
paddingTop:50
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20,
paddingBottom:15,
borderBottomWidth:1,
borderBottomColor:"#E5E7EB"
},

headerTitle:{
fontSize:18,
fontWeight:"600"
},

profileSection:{
alignItems:"center",
marginTop:20
},

avatar:{
width:120,
height:120,
borderRadius:60,
borderWidth:5,
borderColor:"#DFF4F9"
},

name:{
fontSize:24,
fontWeight:"700",
marginTop:10
},

subtitle:{
color:"#6B7280",
marginTop:4
},

badges:{
flexDirection:"row",
marginTop:12
},

pregnantBadge:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#E8F8FC",
paddingHorizontal:14,
paddingVertical:6,
borderRadius:20,
marginRight:10
},

badgeText:{
color:"#06b6d4",
marginLeft:6,
fontWeight:"600"
},

actionRow:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:20,
marginTop:20
},

scheduleBtn:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#06b6d4",
padding:14,
borderRadius:14,
flex:1,
marginRight:10,
justifyContent:"center"
},

scheduleText:{
color:"#fff",
marginLeft:6,
fontWeight:"600"
},

recordBtn:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#0F172A",
padding:14,
borderRadius:14,
flex:1,
justifyContent:"center"
},

recordText:{
color:"#fff",
marginLeft:6,
fontWeight:"600"
},

sectionTitle:{
fontSize:18,
fontWeight:"700",
marginTop:25,
marginHorizontal:20
},

healthRow:{
flexDirection:"row",
marginTop:12,
paddingHorizontal:20
},

healthCard:{
backgroundColor:"#fff",
padding:18,
borderRadius:14,
flex:1,
marginRight:10
},

healthLabel:{
color:"#6B7280",
fontSize:12,
marginBottom:6
},

healthValue:{
fontSize:28,
color:"#06b6d4",
fontWeight:"700"
},

healthDate:{
fontSize:18,
fontWeight:"700"
},

infoCard:{
backgroundColor:"#fff",
margin:20,
borderRadius:14,
padding:16
},

infoRow:{
flexDirection:"row",
alignItems:"center"
},

iconCircle:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#EEF2F7",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

iconCircleBlue:{
width:40,
height:40,
borderRadius:20,
backgroundColor:"#E8F8FC",
alignItems:"center",
justifyContent:"center",
marginRight:10
},

divider:{
height:1,
backgroundColor:"#E5E7EB",
marginVertical:14
},

infoLabel:{
fontSize:12,
color:"#6B7280"
},

infoText:{
fontSize:15,
fontWeight:"600"
},

nextVisit:{
color:"06b6d4",
fontSize:12,
fontWeight:"700"
},

basicHeader:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20
},

basicCard:{
backgroundColor:"#FFFFFF",
marginHorizontal:20,
marginTop:10,
marginBottom:30,
paddingVertical:10,
paddingHorizontal:16,
borderRadius:16,
elevation:3
},

basicRow:{
flexDirection:"row",
alignItems:"flex-start",
paddingVertical:12
},

basicLabel:{
fontSize:12,
color:"#6B7280"
},

basicValue:{
fontSize:15,
fontWeight:"600"
}

});