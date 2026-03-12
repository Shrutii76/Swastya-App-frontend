import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AppointmentBookingScreen({ route, navigation }) {
  const doctor = route?.params?.doctor;

  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [symptoms, setSymptoms] = useState("");

  const times = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.title}>Book Appointment</Text>

        <Ionicons name="notifications-outline" size={22} />
      </View>

      <ScrollView>
        {/* DOCTOR NAME */}
        {doctor && (
          <View style={styles.doctorCard}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>
          </View>
        )}

        {/* DATE INPUT */}
        <Text style={styles.section}>Enter Appointment Date</Text>

        <TextInput
          placeholder="DD / MM / YYYY"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />

        {/* TIME SELECTION */}
        <Text style={styles.section}>Available Time</Text>

        <View style={styles.timeContainer}>
          {times.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeBox,
                selectedTime === time && styles.activeTime,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && { color: "#4F46E5" },
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SYMPTOMS */}
        <Text style={styles.section}>Patient Symptoms</Text>

        <TextInput
          placeholder="Describe your health concern..."
          multiline
          value={symptoms}
          onChangeText={setSymptoms}
          style={[styles.input, { height: 100 }]}
        />

        {/* CONFIRM BUTTON */}
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirm Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  doctorCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },

  doctorName: {
    fontSize: 16,
    fontWeight: "700",
  },

  specialty: {
    color: "#64748B",
    marginTop: 3,
  },

  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },

  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  timeBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  activeTime: {
    borderWidth: 2,
    backgroundColor: "#06B6D4",
  },

  timeText: {
    color: "#334155",
  },

  confirmBtn: {
    backgroundColor: "#06B6D4",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  confirmText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
