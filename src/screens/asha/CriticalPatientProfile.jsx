import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

export default function EmergencyAlert({ navigation }) {

  const latitude = 25.3176;
  const longitude = 82.9739;

  const callAmbulance = () => {
    Linking.openURL("tel:108");
  };

  return (
    <View style={styles.container}>

      {/* FIXED HEADER */}

      <View style={styles.header}>

        <View style={styles.alertIcon}>
          <Ionicons name="warning" size={26} color="#fff" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.alertTitle}>CRITICAL ALERT</Text>
          <Text style={styles.alertSub}>SOS Triggered 2 mins ago</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>

      </View>

      {/* SCROLLABLE CONTENT */}

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        {/* EMERGENCY TYPE */}

        <View style={styles.emergencyCard}>

          <View>
            <Text style={styles.label}>EMERGENCY TYPE</Text>
            <Text style={styles.emergencyText}>
              Severe Chest{"\n"}Pain
            </Text>
          </View>

          <View style={styles.priority}>
            <Text style={styles.priorityText}>
              High{"\n"}Priority
            </Text>
          </View>

        </View>

        {/* PATIENT CARD */}

        <View style={styles.patientCard}>

          <Image
            source={require("../../assets/images/images.jpeg")}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.patientName}>Rajesh Kumar</Text>

            <Text style={styles.patientDetails}>
              Age: 58 | Male | Blood: O+
            </Text>

            <View style={styles.badges}>
              <Text style={styles.badge}>DIABETIC</Text>
              <Text style={styles.badge}>HYPERTENSION</Text>
            </View>
          </View>

          <View style={styles.medIcon}>
            <Ionicons name="medkit" size={22} color="#22B8CF" />
          </View>

        </View>

        {/* MAP */}

        <View style={styles.mapCard}>

          <WebView
            style={styles.map}
            originWhitelist={["*"]}
            source={{
              html: `
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps?q=25.3176,82.9739&z=15&output=embed"
                allowfullscreen>
              </iframe>
              `
            }}
          />

          <View style={styles.distance}>
            <Text>450m Away</Text>
          </View>

          <View style={styles.locationRow}>

            <Ionicons name="location-outline" size={18} color="#666" />

            <Text style={styles.locationText}>
              Ward No. 12, Near Hanuman Temple
            </Text>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
                )
              }
            >
              <Text style={styles.navigate}>Navigate</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* ACTION BUTTONS */}

        <View style={styles.actions}>

          <TouchableOpacity style={styles.actionBox}>
            <Ionicons name="medkit" size={28} color="#22B8CF" />
            <Text style={styles.actionText}>First Aid Guide</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBox}>
            <Ionicons name="call" size={28} color="#3B82F6" />
            <Text style={styles.actionText}>Notify PHC Doctor</Text>
          </TouchableOpacity>

        </View>

        {/* CALL BUTTON */}

        <TouchableOpacity style={styles.callButton} onPress={callAmbulance}>

          <Ionicons name="call" size={24} color="#fff" />

          <Text style={styles.callText}>
            CALL 108 AMBULANCE
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
    elevation: 5
  },

  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  alertTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#EF4444"
  },

  alertSub: {
    color: "#6B7280",
    marginTop: 4
  },

  emergencyCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
    borderLeftWidth: 5,
    borderLeftColor: "#EF4444",
    elevation: 3
  },

  label: {
    color: "#EF4444",
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 5
  },

  emergencyText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827"
  },

  priority: {
    backgroundColor: "#FDECEC",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  priorityText: {
    color: "#EF4444",
    fontWeight: "700",
    textAlign: "center"
  },

  patientCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    elevation: 3
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12
  },

  patientName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827"
  },

  patientDetails: {
    color: "#6B7280",
    marginTop: 2
  },

  badges: {
    flexDirection: "row",
    marginTop: 8
  },

  badge: {
    backgroundColor: "#E6F8FA",
    color: "#22B8CF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 12,
    fontWeight: "600"
  },

  medIcon: {
    backgroundColor: "#E6F8FA",
    padding: 10,
    borderRadius: 25
  },

  map: {
    height: 200,
    width: "100%"
  },

  mapCard: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 3
  },

  distance: {
    position: "absolute",
    right: 10,
    bottom: 70,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 2
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },

  locationText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#374151"
  },

  navigate: {
    color: "#22B8CF",
    fontWeight: "700"
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15
  },

  actionBox: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 18,
    alignItems: "center",
    elevation: 3
  },

  actionText: {
    marginTop: 8,
    fontWeight: "600",
    color: "#111827"
  },

  callButton: {
    backgroundColor: "#EF4444",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    marginBottom: 40,   
  },

  callText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10
  }

});