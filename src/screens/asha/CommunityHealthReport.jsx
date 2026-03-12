import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

export default function CommunityHealthReport() {

  return (

    <ScrollView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <Ionicons name="arrow-back" size={24} color="#0EA5E9" />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.title}>Community Health Report</Text>
          <Text style={styles.subtitle}>Village: Rampur • Aug 2023</Text>
        </View>

        <Ionicons name="download-outline" size={22} style={styles.headerIcon} />
        <Ionicons name="share-social-outline" size={22} style={styles.headerIcon} />

      </View>

      {/* TABS */}

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Overview</Text>
        <Text style={styles.tab}>Maternal</Text>
        <Text style={styles.tab}>Child Health</Text>
        <Text style={styles.tab}>Logistics</Text>
      </View>

      {/* STATS */}

      <View style={styles.row}>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>TOTAL HOUSEHOLDS</Text>
          <Text style={styles.statNumber}>1,240</Text>
          <Text style={styles.green}>+5%</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>ACTIVE ANC</Text>
          <Text style={styles.statNumber}>42</Text>
          <Text style={styles.red}>-2%</Text>
        </View>

      </View>

      {/* HIGH RISK */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>High-Risk Pregnancies</Text>
        <Text style={styles.cardSub}>Breakdown by risk category</Text>

        <View style={styles.riskRow}>
          <Text>SEVERE ANEMIA</Text>
          <Text>12 CASES</Text>
        </View>

        <ProgressBar progress={0.6} color="#EF4444" style={styles.progress} />

        <View style={styles.riskRow}>
          <Text>HYPERTENSION (PIH)</Text>
          <Text>8 CASES</Text>
        </View>

        <ProgressBar progress={0.4} color="#F59E0B" style={styles.progress} />

        <View style={styles.riskRow}>
          <Text>PREVIOUS C-SECTION</Text>
          <Text>15 CASES</Text>
        </View>

        <ProgressBar progress={0.7} color="#06B6D4" style={styles.progress} />

      </View>

      {/* VACCINATION */}

      <View style={styles.card}>

        <View style={styles.vaccineHeader}>
          <Text style={styles.cardTitle}>Vaccination Coverage</Text>
          <Text style={styles.target}>TARGET: 95%</Text>
        </View>

        <View style={styles.circleBox}>
          <Text style={styles.circleNumber}>88%</Text>
          <Text>FULLY IMMUNIZED</Text>
        </View>

        <View style={styles.legendRow}>
          <Text>● Completed (112)</Text>
          <Text>● Due (15)</Text>
        </View>

      </View>

      {/* CHILD NUTRITION */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>Child Nutrition (0-5 yrs)</Text>

        <View style={styles.goodBox}>
          <Text style={styles.goodTitle}>Normal Weight</Text>
          <Text style={styles.goodValue}>82% (245 children)</Text>
        </View>

        <View style={styles.warnBox}>
          <Text style={styles.warnTitle}>Underweight (SAM/MAM)</Text>
          <Text style={styles.warnValue}>12% (36 children)</Text>
        </View>

        <View style={styles.registryBtn}>
          <Text style={{ color: "#0EA5E9", fontWeight: "600" }}>
            View Full Child Registry
          </Text>
        </View>

      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F3F5F7"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:20
},

title:{
fontSize:18,
fontWeight:"700"
},

subtitle:{
color:"#6B7280"
},

headerIcon:{
marginLeft:10
},

tabs:{
flexDirection:"row",
paddingHorizontal:20,
borderBottomWidth:1,
borderColor:"#E5E7EB",
paddingBottom:10
},

activeTab:{
marginRight:15,
color:"#0EA5E9",
fontWeight:"700"
},

tab:{
marginRight:15,
color:"#6B7280"
},

row:{
flexDirection:"row",
justifyContent:"space-between",
padding:20
},

statCard:{
backgroundColor:"#fff",
width:"48%",
padding:20,
borderRadius:14
},

statLabel:{
color:"#6B7280"
},

statNumber:{
fontSize:26,
fontWeight:"700"
},

green:{
color:"#16A34A"
},

red:{
color:"#DC2626"
},

card:{
backgroundColor:"#fff",
marginHorizontal:20,
marginBottom:20,
padding:20,
borderRadius:16
},

cardTitle:{
fontSize:18,
fontWeight:"700"
},

cardSub:{
color:"#6B7280",
marginBottom:10
},

riskRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

progress:{
height:8,
borderRadius:6,
marginTop:6
},

vaccineHeader:{
flexDirection:"row",
justifyContent:"space-between"
},

target:{
backgroundColor:"#E0F2FE",
padding:6,
borderRadius:8,
color:"#0284C7"
},

circleBox:{
alignItems:"center",
marginVertical:25
},

circleNumber:{
fontSize:40,
fontWeight:"700"
},

legendRow:{
flexDirection:"row",
justifyContent:"space-between"
},

goodBox:{
backgroundColor:"#DCFCE7",
padding:15,
borderRadius:12,
marginTop:15
},

goodTitle:{
color:"#166534"
},

goodValue:{
fontWeight:"700"
},

warnBox:{
backgroundColor:"#FEF3C7",
padding:15,
borderRadius:12,
marginTop:10
},

warnTitle:{
color:"#92400E"
},

warnValue:{
fontWeight:"700"
},

registryBtn:{
borderWidth:1,
borderColor:"#BAE6FD",
borderRadius:10,
alignItems:"center",
padding:14,
marginTop:20
}

});