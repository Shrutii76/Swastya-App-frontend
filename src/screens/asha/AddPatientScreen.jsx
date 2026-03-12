import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function AddPatientScreen({ navigation }) {

  const [patientType, setPatientType] = useState("pregnant");
  const [gender, setGender] = useState("");
  const [showGender, setShowGender] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add New Patient</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* BASIC INFO */}
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={18} color="#06b6d4" />
          <Text style={styles.sectionTitle}>Basic Info</Text>
        </View>

        {/* NAME */}
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="person" size={18} color="#06b6d4" />
          <TextInput
            placeholder="e.g. Rahul Sharma"
            style={styles.input}
          />
        </View>

        {/* GENDER */}
        <Text style={styles.label}>Gender</Text>

        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => setShowGender(!showGender)}
        >
          <Ionicons name="male-female" size={18} color="#06b6d4" />
          <Text style={{ flex: 1, marginLeft: 10 }}>
            {gender ? gender : "Select Gender"}
          </Text>
          <Ionicons name="chevron-down" size={18} />
        </TouchableOpacity>

        {showGender && (
          <View style={styles.dropdown}>
            {["Male", "Female", "Other"].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => {
                  setGender(item);
                  setShowGender(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* DOB + AGE */}
        <View style={styles.row}>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>DOB</Text>
            <View style={styles.inputIcon}>
              <Ionicons name="calendar" size={18} color="#06b6d4" />
              <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
            </View>
          </View>

          <View style={{ width: 12 }} />

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Age</Text>
            <View style={styles.inputIcon}>
              <Ionicons name="hourglass" size={18} color="#06b6d4" />
              <TextInput placeholder="Years" style={styles.input} />
            </View>
          </View>

        </View>

        {/* PHONE */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="call" size={18} color="#06b6d4" />
          <TextInput
            placeholder="+91 9876543210"
            style={styles.input}
          />
        </View>



        {/* ADDRESS */}
        <Text style={styles.label}>Full Address</Text>
        <View style={styles.inputIcon}>
          <Ionicons name="location-outline" size={18} color="#06b6d4" />
          <TextInput
            placeholder="Street, Village/City, Landmark"
            style={[styles.input, { height: 80 }]}
            multiline
          />
        </View>

        {/* PATIENT TYPE */}
        <View style={styles.sectionHeader}>
          <MaterialIcons name="category" size={18} color="#06b6d4" />
          <Text style={styles.sectionTitle}>Patient Type</Text>
        </View>



        {/* Child */}
        <TouchableOpacity
          style={[styles.typeCard,
          patientType === "child" && styles.typeActive]}
          onPress={() => setPatientType("child")}
        >
          <View style={styles.radioOuter}>
            {patientType === "child" && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.typeText}>Child</Text>
        </TouchableOpacity>

        {/* Other */}
        <TouchableOpacity
          style={[styles.typeCard,
          patientType === "other" && styles.typeActive]}
          onPress={() => setPatientType("other")}
        >
          <View style={styles.radioOuter}>
            {patientType === "other" && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.typeText}>Other</Text>
        </TouchableOpacity>






        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="person-add" size={18} color="#fff" />
          <Text style={styles.saveText}>Save Patient</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
    paddingTop:10
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F6",
    justifyContent: "space-between"
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15,
   
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

  dropdown: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginTop: 6
  },

  dropdownItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9"
  },

  row: {
    flexDirection: "row",
    paddingHorizontal: 20
  },

  typeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 10,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },

  typeActive: {
    borderColor: "#06B6D4",
    backgroundColor: "#ECFAFD"
  },

  typeText: {
    marginLeft: 12,
    fontWeight: "600",
    fontSize: 15,
    color: "#1F2937"
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#06B6D4",
    justifyContent: "center",
    alignItems: "center"
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#06B6D4"
  },

  

 
  

  cancelBtn: {
    alignItems: "center",
    marginBottom: 10
  },

  cancelText: {
    color: "#6B7280",
    fontWeight: "600",
    fontSize: 15
  },

  saveBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06B6D4",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 40,

    shadowColor: "#06B6D4",
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

