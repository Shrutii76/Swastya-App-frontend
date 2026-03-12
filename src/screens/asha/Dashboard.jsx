import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Dashboard({ navigation }) {

  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      

        {/* Language Switch */}
        <View style={styles.langRow}>
          <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
            <Text style={styles.langBtn}>EN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => i18n.changeLanguage("hi")}>
            <Text style={styles.langBtn}>HI</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => i18n.changeLanguage("mr")}>
            <Text style={styles.langBtn}>MR</Text>
          </TouchableOpacity>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image
              source={require("../../assets/images/images.jpeg")}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.welcome}>{t("welcome_back")}</Text>
              <Text style={styles.name}>Sunita Sharma</Text>
            </View>
          </View>

          <Ionicons name="notifications" size={24} color="#1cc4e9" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

        {/* Community Overview */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t("community_overview")}</Text>
          
        </View>

        <View style={styles.grid}>

          <View style={styles.card}>
            <FontAwesome5 name="female" size={24} color="#1CC4E9" />
            <Text style={styles.number}>15</Text>
            <Text style={styles.label}>{t("pregnant_women")}</Text>
          </View>

          

          <View style={styles.card}>
            <MaterialIcons name="check-box" size={26} color="#1CC4E9" />
            <Text style={styles.number}>08</Text>
            <Text style={styles.label}>{t("today_visits")}</Text>
          </View>

        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>{t("quick_actions")}</Text>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate("PatientRegistration")}
        >
          <View style={styles.iconBox}>
            <Ionicons name="person-add" size={24} color="#fff" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.bigTitle}>{t("patient_registration")}</Text>
            <Text style={styles.bigSub}>{t("add_family_members")}</Text>
          </View>

          <Entypo name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.grid}>

          

            

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("PregnancyMonitoring")}
          >
            <View style={styles.iconCirclePink}>
              <FontAwesome5 name="heartbeat" size={20} color="#E91E63" />
            </View>

            <Text style={styles.actionText}>{t("pregnancy_monitoring")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate("VaccinationTracker")}
          >
            <View style={styles.iconCircleGreen}>
              <MaterialIcons name="vaccines" size={22} color="#16A34A" />
            </View>

            <Text style={styles.actionText}>{t("vaccination_tracker")}</Text>
          </TouchableOpacity>

        </View>

        {/* Up Next */}
        <Text style={styles.sectionTitle}>{t("up_next")}</Text>

        <View style={styles.visitCard}>
          <View style={styles.timeCircle}>
            <Text style={styles.time}>10:30</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.visitTitle}>Meena Devi (Visit)</Text>
            <Text style={styles.visitSub}>Prenatal Checkup - Week 24</Text>
          </View>

          <View style={styles.directionBox}>
            <Entypo name="direction" size={18} color="#1CC4E9" />
          </View>
        </View>

        <View style={styles.visitCard}>
          <View style={styles.timeCircle}>
            <Text style={styles.time}>11:15</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.visitTitle}>Rahul (Child)</Text>
            <Text style={styles.visitSub}>BCG Vaccination Follow-up</Text>
          </View>

          <View style={styles.directionBox}>
            <Entypo name="direction" size={18} color="#1CC4E9" />
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#1CC4E9" />
          <Text style={styles.navActive}>{t("home")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("CriticalAlertsListScreen")}
        >
          <MaterialIcons name="warning" size={24} color="#EF4444" />
          <Text style={styles.navText}>{t("alerts")}</Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#94A3B8" />
          <Text style={styles.navText}>{t("profile")}</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{flex:1,backgroundColor:"#F4F6F8"},

  langRow:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
    gap:20
  },

  langBtn:{
    fontWeight:"bold",
    color:"#1CC4E9"
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:35
  },

  profile:{
    flexDirection:"row",
    alignItems:"center"
  },

  avatar:{
    width:80,
    height:80,
    borderRadius:25,
    marginRight:12
  },

  welcome:{
    fontSize:11,
    color:"#6B7280"
  },

  name:{
    fontSize:18,
    fontWeight:"bold",
    color:"#111827"
  },

  sectionHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:18
  },

  sectionTitle:{
    fontSize:20,
    fontWeight:"700",
    marginVertical:16,
    marginLeft:18,
    color:"#111827"
  },

  updated:{
    fontSize:12,
    color:"#1CC4E9"
  },

  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    paddingHorizontal:18
  },

  card:{
    width:"48%",
    backgroundColor:"#fff",
    padding:18,
    borderRadius:14,
    marginBottom:14,
    elevation:2
  },

  number:{
    fontSize:28,
    fontWeight:"700",
    marginTop:8,
    color:"#111827"
  },

  label:{
    color:"#64748B",
    marginTop:4
  },

  bigButton:{
    flexDirection:"row",
    backgroundColor:"#1CC4E9",
    marginHorizontal:18,
    borderRadius:14,
    padding:18,
    alignItems:"center",
    marginBottom:16
  },

  iconBox:{
    backgroundColor:"rgba(255,255,255,0.3)",
    padding:10,
    borderRadius:10,
    marginRight:12
  },

  bigTitle:{
    color:"#fff",
    fontSize:16,
    fontWeight:"700"
  },

  bigSub:{
    color:"#E0F7FA",
    fontSize:13
  },

  actionCard:{
    width:"48%",
    backgroundColor:"#fff",
    padding:20,
    borderRadius:14,
    marginBottom:14,
    alignItems:"center"
  },

  actionText:{
    marginTop:10,
    fontWeight:"600",
    textAlign:"center"
  },

  iconCircleBlue:{backgroundColor:"#E8F1FF",padding:12,borderRadius:30},
  iconCirclePink:{backgroundColor:"#FFE8F0",padding:12,borderRadius:30},
  iconCircleGreen:{backgroundColor:"#E8F8EF",padding:12,borderRadius:30},

  visitCard:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    marginHorizontal:18,
    padding:16,
    borderRadius:14,
    marginBottom:12
  },

  timeCircle:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"#EEF2F6",
    justifyContent:"center",
    alignItems:"center",
    marginRight:14
  },

  time:{
    color:"#1CC4E9",
    fontWeight:"700"
  },

  visitTitle:{fontWeight:"700"},

  visitSub:{
    color:"#6B7280",
    fontSize:12
  },

  directionBox:{
    backgroundColor:"#E6F7FA",
    padding:10,
    borderRadius:10
  },

  bottomNav:{
    height:70,
    borderTopWidth:1,
    borderColor:"#E5E7EB",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"#fff"
  },

  navItem:{alignItems:"center"},

  navText:{
    fontSize:11,
    color:"#94A3B8",
    marginTop:2
  },

  navActive:{
    fontSize:11,
    color:"#1CC4E9",
    marginTop:2
  }

});

