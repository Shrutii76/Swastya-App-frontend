import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AlertsScreen({ navigation }) {
  const alerts = [
    {
      id: 1,
      title: "Upcoming Appointment",
      message:
        "You have an appointment with Dr. Sarah Johnson tomorrow at 10:00 AM.",
      time: "2 mins ago",
      icon: "calendar",
    },
    {
      id: 2,
      title: "Medicine Reminder",
      message: "Time to take your blood pressure medication.",
      time: "10 mins ago",
      icon: "medical",
    },
    {
      id: 3,
      title: "New Medical Report",
      message: "Your blood test report is now available.",
      time: "1 hour ago",
      icon: "document-text",
    },
    {
      id: 4,
      title: "Doctor Message",
      message: "Dr. Emily Brooks has sent you a follow-up message.",
      time: "Yesterday",
      icon: "chatbubble",
    },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>
        <Text style={styles.title}>Alerts</Text>
      </View>

      <ScrollView>
        {alerts.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={22} color="#06B6D4" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.alertTitle}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#06B6D4" />
          <Text style={styles.navActive}>{"home"}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="folder"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("HealthRecords")}
          />
          <Text style={styles.navText}>{"records"}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="notifications"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("AlertsScreen")}
          />
          <Text style={styles.navText}>{"alerts"}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="person"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("Profile")}
          />
          <Text style={styles.navText}>{"profile"}</Text>
        </View>
      </View>
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
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    marginBottom: 12,
    elevation: 2,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  alertTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    color: "#64748B",
    marginTop: 3,
  },

  time: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 6,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E2E8F0",
  },

  navItem: {
    alignItems: "center",
  },

  navActive: {
    color: "#06B6D4",
    fontSize: 12,
  },

  navText: {
    color: "#94A3B8",
    fontSize: 12,
  },
});
