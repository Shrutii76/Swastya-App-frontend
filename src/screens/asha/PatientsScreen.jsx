import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PatientsScreen({ navigation }) {

  const [selectedTab, setSelectedTab] = useState("All");

  const patients = [
    {
      id: 1,
      name: "Vihaan Gupta",
      age: 4,
      patientId: "#3821",
      type: "Children",
      info: "Vaccination Due: Polio Booster",
      icon: "vaccines",
      color: "#ff6b00",
    },
    {
      id: 2,
      name: "Aarav Sharma",
      age: 6,
      patientId: "#4592",
      type: "Children",
      info: "Routine vaccination check",
      icon: "vaccines",
      color: "#ff6b00",
    },
    {
      id: 3,
      name: "Priya Singh",
      age: 67,
      patientId: "#9012",
      type: "Geriatric",
      info: "Routine health check",
      icon: "checkmark-circle",
      color: "#9aa0a6",
    },
    {
      id: 4,
      name: "Rahul Mehta",
      age: 65,
      patientId: "#1128",
      type: "Geriatric",
      info: "High BP alert • Needs Followup",
      icon: "alert-circle",
      color: "#ff3b30",
    },
  ];

  const filteredPatients =
    selectedTab === "All"
      ? patients
      : patients.filter((p) => p.type === selectedTab);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Patient Registration</Text>

        <Ionicons name="notifications" size={24} color="#06B6D4" />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#9aa0a6" />
        <TextInput
          placeholder="Search patients by name or ID"
          style={styles.searchInput}
        />
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        {["All", "Children", "Geriatric"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text
              style={[
                styles.tab,
                selectedTab === tab && styles.activeTab,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PATIENT LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {filteredPatients.map((patient) => (
          <TouchableOpacity
            key={patient.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("PatientProfile", { patient })
            }
          >

            <Image
              source={require("../../assets/images/images.jpeg")}
              style={styles.avatar}
            />

            <View style={{ flex: 1 }}>

              <View style={styles.rowBetween}>
                <Text style={styles.name}>{patient.name}</Text>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{patient.type}</Text>
                </View>
              </View>

              <Text style={styles.details}>
                {patient.age} years old • ID: {patient.patientId}
              </Text>

              <View style={styles.infoRow}>

                {patient.icon === "vaccines" ? (
                  <MaterialIcons
                    name="vaccines"
                    size={16}
                    color={patient.color}
                  />
                ) : (
                  <Ionicons
                    name={patient.icon}
                    size={16}
                    color={patient.color}
                  />
                )}

                <Text style={{ color: patient.color, marginLeft: 6 }}>
                  {patient.info}
                </Text>

              </View>

            </View>

          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* FLOATING ADD BUTTON */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddPatient")}
      >
        <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
    paddingTop: 50,
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

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    
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
    color: "#64748B",
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 10,
  },

  tab: {
    marginRight: 22,
    color: "#6B7280",
    fontWeight: "600",
    fontSize: 14,
  },

  activeTab: {
    color: "#06B6D4",
    borderBottomWidth: 3,
    borderBottomColor: "#06B6D4",
    paddingBottom: 6,
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
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    
  },

  details: {
    color: "#64748B",
    marginTop: 3,
    fontSize: 13,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  badge: {
    backgroundColor: "#E8F8FC",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 11,
    color: "#06B6D4",
    fontWeight: "700",
  },

  fab: {
    position: "absolute",
    bottom: 35,
    right: 20,
    backgroundColor: "#06B6D4",
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },

});