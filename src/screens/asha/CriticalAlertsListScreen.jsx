
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import patient1 from "../../assets/images/images.jpeg";
import patient2 from "../../assets/images/images.jpeg";
import patient3 from "../../assets/images/images.jpeg";

const alerts = [
  {
    id: "1",
    name: "John Doe",
    age: 65,
    gender: "Male",
    blood: "O+",
    distance: "450m Away",
    issue: "Severe Chest Pain",
    tags: ["Diabetic", "Hypertension", "Asthma"],
    image: patient1,
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    age: 42,
    gender: "Female",
    blood: "AB-",
    distance: "1.2km Away",
    issue: "Acute Respiratory Distress",
    tags: ["Asthma", "Anemia"],
    image: patient2,
  },
  {
    id: "3",
    name: "Robert Chen",
    age: 29,
    gender: "Male",
    blood: "B+",
    distance: "800m Away",
    issue: "Post-Op Hemorrhage",
    tags: ["Recent Surgery"],
    image: patient3,
  },
];

export default function CriticalAlertsScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* Patient Row */}
      <View style={styles.row}>

        <Image source={item.image} style={styles.avatar} />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.details}>
            {item.age} Yrs • {item.gender} • {item.blood}
          </Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color="#19a7ce" />
            <Text style={styles.distance}>{item.distance}</Text>
          </View>
        </View>

        <View style={styles.priority}>
          <Text style={styles.priorityText}>HIGH</Text>
        </View>

      </View>

      {/* Issue */}
      <View style={styles.issueBox}>
        <Ionicons name="warning" size={16} color="#d62828" />
        <Text style={styles.issueText}>{item.issue}</Text>
      </View>

      {/* Tags */}
      <View style={styles.tagContainer}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Navigate Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("CriticalPatientProfile", { patient: item })
        }
      >
        <Ionicons name="navigate" size={18} color="#fff" />
        <Text style={styles.buttonText}>Navigate to Patient</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <View style={styles.headerRow}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Critical Alerts</Text>

        </View>

        <Text style={styles.subtitle}>
          Patients needing immediate attention
        </Text>

      </View>

      {/* LIST */}
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    marginRight: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    color: "#777",
    fontSize: 13,
  },

  list: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  details: {
    color: "#666",
    fontSize: 13,
    marginTop: 2,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  distance: {
    color: "#19a7ce",
    fontSize: 13,
    marginLeft: 4,
  },

  priority: {
    backgroundColor: "#ffdddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  priorityText: {
    color: "#d62828",
    fontWeight: "700",
    fontSize: 11,
  },

  issueBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffeaea",
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },

  issueText: {
    color: "#d62828",
    fontWeight: "500",
    marginLeft: 6,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  tag: {
    backgroundColor: "#eef1f5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
  },

  tagText: {
    fontSize: 12,
    color: "#555",
  },

  button: {
    marginTop: 12,
    backgroundColor: "#19a7ce",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },

});

