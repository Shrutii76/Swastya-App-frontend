import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function AddPregnantWomanScreen({ navigation }) {

  const [week, setWeek] = useState("");

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Pregnant Woman</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* BASIC INFO */}
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={18} color="#18B6CF" />
          <Text style={styles.sectionTitle}>Patient Information</Text>
        </View>

        <Text style={styles.label}>Patient Name</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="Enter full name"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Age</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="hourglass" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="e.g. 28"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Contact Number</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="call" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="+91 9876543210"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Address</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="location-outline" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="Enter residential address"
            style={[styles.input, { height: 80 }]}
            multiline
          />
        </View>

        {/* PREGNANCY DETAILS */}
        <View style={styles.sectionHeader}>
          <Ionicons name="medkit" size={18} color="#1cc4e9" />
          <Text style={styles.sectionTitle}>Pregnancy Details</Text>
        </View>

        <View style={styles.maternalCard}>

          <Text style={styles.labelSmall}>Last Menstrual Period (LMP)</Text>
          <TextInput
            placeholder="DD/MM/YYYY"
            style={styles.greyInput}
          />

          <Text style={styles.labelSmall}>Expected Delivery Date (EDD)</Text>
          <TextInput
            placeholder="DD/MM/YYYY"
            style={styles.greyInput}
          />

          <Text style={styles.labelSmall}>Current Pregnancy Week</Text>
          <TextInput
            placeholder="e.g. 12"
            keyboardType="numeric"
            style={styles.greyInput}
          />

          <Text style={styles.labelSmall}>Medical Notes</Text>
          <TextInput
            placeholder="Allergies or complications"
            style={[styles.greyInput, { height: 80 }]}
            multiline
          />

        </View>

        {/* SAVE BUTTON */}
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.navigate("PregnancyMonitoring")}
        >
          <Ionicons name="person-add" size={18} color="#fff" />
          <Text style={styles.saveText}>Save Record</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FB"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F6"
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 15,
    color: "#1F2937"
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 8,
    paddingHorizontal: 20
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 8,
    color: "#1F2937"
  },

  label: {
    marginLeft: 22,
    marginTop: 16,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280"
  },

  labelSmall: {
    marginTop: 14,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280"
  },

  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F5",
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#111827"
  },

  greyInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 14
  },

  maternalCard: {
    backgroundColor: "#E8F8FC",
    margin: 20,
    padding: 18,
    borderRadius: 16
  },

  saveBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1CC4E9",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 40,

    shadowColor: "#1CC4E9",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8
  }

});