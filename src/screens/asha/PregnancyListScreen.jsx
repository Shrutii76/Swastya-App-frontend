import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function PregnancyMonitoringScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Ionicons name="female" size={22} color="#1cc4e9" />
        </View>

        <Text style={styles.title}>Pregnancy Monitoring</Text>

        <Ionicons name="notifications" size={24} color="#1cc4e9" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Feather name="search" size={18} color="#9aa5b1" />
        <TextInput
          placeholder="Search patients by name or ID"
          style={styles.searchInput}
        />
      </View>

      {/* Section Title */}
      <View style={styles.row}>
        <Text style={styles.section}>RECENT PATIENTS</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <PatientCard
          navigation={navigation}
          name="Ananya Sharma"
          week="24"
          id="#PS-4492"
          status="Healthy"
          statusColor="#32C48D"
          image={require("../../assets/images/images.jpeg")}
        />

        <PatientCard
          navigation={navigation}
          name="Priya Patel"
          week="12"
          id="#PS-8821"
          status="Needs Checkup"
          statusColor="#F2B705"
          image={require("../../assets/images/images.jpeg")}
        />

        <PatientCard
          navigation={navigation}
          name="Sunita Verma"
          week="32"
          id="#PS-1205"
          status="High Risk"
          statusColor="#F45B5B"
          image={require("../../assets/images/images.jpeg")}
        />

        <PatientCard
          navigation={navigation}
          name="Meera Das"
          week="08"
          id="#PS-9930"
          status="Healthy"
          statusColor="#32C48D"
          image={require("../../assets/images/images.jpeg")}
        />

      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddPregnantWoman")}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

    </View>
  );
}

function PatientCard({ navigation, name, week, id, status, statusColor, image }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PregnancyPatientProfile")}
    >

      <Image source={image} style={styles.avatar} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.details}>
          Week {week} • ID: {id}
        </Text>

        <View
          style={[
            styles.statusBox,
            { backgroundColor: statusColor + "20" },
          ]}
        >
          <View
            style={[styles.dot, { backgroundColor: statusColor }]}
          />

          <Text style={[styles.statusText, { color: statusColor }]}>
            {status}
          </Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#9aa5b1" />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F6",
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#E8F8FC",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
    flex: 1,
    marginLeft: 10,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 15,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 10,
  },

  section: {
    color: "#6B7280",
    fontWeight: "600",
    fontSize: 14,
  },

  viewAll: {
    color: "#1CC4E9",
    fontWeight: "600",
    fontSize: 14,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 30,
    marginRight: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },

  details: {
    color: "#6B7280",
    marginTop: 3,
    fontSize: 13,
  },

  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  statusText: {
    fontWeight: "600",
    fontSize: 12,
  },

  fab: {
    position: "absolute",
    bottom: 35,
    right: 20,
    backgroundColor: "#1CC4E9",
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1CC4E9",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },

});