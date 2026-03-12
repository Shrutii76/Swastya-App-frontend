import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddVisitReportScreen({ navigation }) {

  const [visitDate, setVisitDate] = useState(new Date());
  const [showVisitPicker, setShowVisitPicker] = useState(false);

  const [lmpDate, setLmpDate] = useState(new Date());
  const [showLmpPicker, setShowLmpPicker] = useState(false);

  const [pregnancyWeek, setPregnancyWeek] = useState(24);

  const [bp, setBp] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedSymptoms, setSelectedSymptoms] = useState(["Nausea", "Fatigue"]);

  const symptoms = ["Nausea", "Fatigue", "Back Pain", "Swelling"];

  const calculatePregnancyWeek = (date) => {
    const today = new Date();
    const diff = today - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const week = Math.floor(days / 7);
    setPregnancyWeek(week);
  };

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const submitReport = () => {

    const reportData = {
      patientName: "Ananya Sharma",
      visitDate,
      lmpDate,
      pregnancyWeek,
      bloodPressure: bp,
      weight,
      symptoms: selectedSymptoms,
      notes
    };

    console.log("Visit Report:", reportData);

    navigation.navigate("PregnancyPatientProfile");
  };

  return (

    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Visit Report</Text>

        <View style={{ width: 24 }} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >

        {/* PATIENT CARD */}
        <View style={styles.patientCard}>

          <Image
            source={require("../../assets/images/images.jpeg")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.patientName}>Ananya Sharma</Text>
            <Text style={styles.dateText}>
              Today's Date: {new Date().toDateString()}
            </Text>
          </View>

        </View>

        {/* VISIT DATE */}
        <Text style={styles.label}>Visit Date</Text>

        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => setShowVisitPicker(true)}
        >

          <Feather name="calendar" size={18} color="#1cc4e9" />

          <Text style={{ marginLeft: 10 }}>
            {visitDate.toDateString()}
          </Text>

        </TouchableOpacity>

        {showVisitPicker && (
          <DateTimePicker
            value={visitDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowVisitPicker(false)
              if (selectedDate) setVisitDate(selectedDate)
            }}
          />
        )}

        {/* LMP DATE */}
        <Text style={styles.label}>Last Menstrual Period (LMP)</Text>

        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => setShowLmpPicker(true)}
        >

          <Feather name="calendar" size={18} color="#1cc4e9" />

          <Text style={{ marginLeft: 10 }}>
            {lmpDate.toDateString()}
          </Text>

        </TouchableOpacity>

        {showLmpPicker && (
          <DateTimePicker
            value={lmpDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {

              setShowLmpPicker(false)

              if (selectedDate) {
                setLmpDate(selectedDate)
                calculatePregnancyWeek(selectedDate)
              }

            }}
          />
        )}

        {/* BLOOD PRESSURE */}
        <Text style={styles.label}>Blood Pressure</Text>

        <View style={styles.inputIcon}>
          <MaterialIcons name="monitor-heart" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="120/80 mmHg"
            style={styles.input}
            value={bp}
            onChangeText={setBp}
          />
        </View>

        {/* WEIGHT */}
        <Text style={styles.label}>Weight (kg)</Text>

        <View style={styles.inputIcon}>
          <Ionicons name="barbell-outline" size={18} color="#1cc4e9" />
          <TextInput
            placeholder="62.5"
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        {/* SYMPTOMS */}
        <Text style={styles.label}>Reported Symptoms</Text>

        <View style={styles.symptomContainer}>
          {symptoms.map((symptom) => {

            const active = selectedSymptoms.includes(symptom)

            return (

              <TouchableOpacity
                key={symptom}
                style={[
                  styles.symptomChip,
                  active && styles.activeChip
                ]}
                onPress={() => toggleSymptom(symptom)}
              >

                <Text style={[
                  styles.symptomText,
                  active && styles.activeText
                ]}>
                  {symptom}
                </Text>

              </TouchableOpacity>

            )

          })}
        </View>

        {/* NOTES */}
        <Text style={styles.label}>Notes</Text>

        <TextInput
          style={styles.notes}
          placeholder="Enter clinical observations..."
          multiline
          value={notes}
          onChangeText={setNotes}
        />

        {/* BUTTONS (NOW SCROLLABLE) */}

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={submitReport}
        >
          <Ionicons name="checkmark-circle" size={20} color="white" />
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
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

  patientCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F8FC",
    padding: 16,
    margin: 20,
    borderRadius: 16
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12
  },

  patientName: {
    fontSize: 18,
    fontWeight: "700"
  },

  dateText: {
    color: "#64748B",
    marginTop: 3
  },

  label: {
    marginLeft: 22,
    marginTop: 16,
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
    borderColor: "#E5E7EB"
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14
  },

  symptomContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20
  },

  symptomChip: {
    borderWidth: 1,
    borderColor: "#CBD5F5",
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10
  },

  activeChip: {
    backgroundColor: "#E0F7FD",
    borderColor: "#1CC4E9"
  },

  symptomText: {
    color: "#334155"
  },

  activeText: {
    color: "#1CC4E9",
    fontWeight: "600"
  },

  notes: {
    height: 120,
    backgroundColor: "#F1F3F5",
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 12,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },

  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1CC4E9",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10
  },

  submitText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8
  },

  cancelBtn: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40
  },

  cancelText: {
    fontSize: 16,
    color: "#374151"
  }

});