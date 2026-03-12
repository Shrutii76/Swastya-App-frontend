import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SymptomCheckerScreen() {
  const navigation = useNavigation();

  const [symptomName, setSymptomName] = useState("");
  const [severity, setSeverity] = useState("");
  const [symptoms, setSymptoms] = useState([]);

  const addSymptom = () => {
    if (!symptomName) return;

    const newSymptom = {
      id: Date.now(),
      name: symptomName,
      severity: severity,
      showAI: false,
      solution: "",
    };

    setSymptoms([...symptoms, newSymptom]);
    setSymptomName("");
    setSeverity("");
  };

  const generateSolution = (item) => {
    let solution = "";

    const name = item.name.toLowerCase();

    if (name.includes("fever")) {
      solution = "Drink fluids, rest well and monitor temperature.";
    } else if (name.includes("cough")) {
      solution = "Stay hydrated and use warm fluids or honey.";
    } else if (name.includes("headache")) {
      solution = "Rest in a quiet place and stay hydrated.";
    } else {
      solution = "Monitor symptoms and consult a doctor if condition worsens.";
    }

    setSymptoms(
      symptoms.map((sym) =>
        sym.id === item.id ? { ...sym, showAI: true, solution: solution } : sym,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Symptom Checker</Text>

          <Ionicons name="information-circle-outline" size={22} />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>How are you feeling?</Text>
        <Text style={styles.subtitle}>
          Enter your symptoms for quick analysis
        </Text>

        {/* INPUT SYMPTOM */}
        <TextInput
          style={styles.input}
          placeholder="Symptom name (example: fever)"
          value={symptomName}
          onChangeText={setSymptomName}
        />

        {/* INPUT SEVERITY */}
        <TextInput
          style={styles.input}
          placeholder="Severity (Low / Medium / High)"
          value={severity}
          onChangeText={setSeverity}
        />

        {/* ADD BUTTON */}
        <TouchableOpacity style={styles.button} onPress={addSymptom}>
          <Text style={styles.buttonText}>Add Symptom</Text>
        </TouchableOpacity>

        {/* LIST OF ADDED SYMPTOMS */}
        {symptoms.map((item) => (
          <View key={item.id} style={styles.symptomCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.symptomTitle}>{item.name}</Text>
              <Text style={styles.symptomSeverity}>
                Severity: {item.severity}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.aiButton}
              onPress={() => generateSolution(item)}
            >
              <Text style={styles.aiText}>AI</Text>
            </TouchableOpacity>

            {item.showAI && (
              <View style={styles.solutionBox}>
                <Text style={styles.solutionText}>{item.solution}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#1CC4E9",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    fontWeight: "600",
    fontSize: 16,
  },

  symptomCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  symptomTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  symptomSeverity: {
    color: "#64748B",
    marginTop: 3,
  },

  aiButton: {
    backgroundColor: "#06B6D4",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  aiText: {
    color: "#fff",
    fontWeight: "600",
  },

  solutionBox: {
    backgroundColor: "#E0F2FE",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  solutionText: {
    color: "#0369A1",
  },
});
