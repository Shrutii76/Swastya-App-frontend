import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.title}>My Profile</Text>

        <Ionicons name="create-outline" size={22} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.info}>Sector 45, Gurugram</Text>
        </View>

        {/* PERSONAL DETAILS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={20} />
            <View>
              <Text style={styles.label}>Full Name</Text>
              <Text>Alex Johnson</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={20} />
            <View>
              <Text style={styles.label}>Phone</Text>
              <Text>+91 98765 43210</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={20} />
            <View>
              <Text style={styles.label}>DOB</Text>
              <Text>12 May 1990</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="male-female-outline" size={20} />
            <View>
              <Text style={styles.label}>Gender</Text>
              <Text>Male</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="heart-outline" size={20} />
            <View>
              <Text style={styles.label}>Blood Group</Text>
              <Text style={{ color: "#EF4444" }}>O+</Text>
            </View>
          </View>
        </View>

        {/* HEALTH INFO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Information</Text>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Allergies</Text>
            <Text>Peanuts, Penicillin</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Chronic Diseases</Text>
            <Text>None</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Current Medications</Text>
            <Text>Vitamin D3 Supplements</Text>
          </View>
        </View>

        {/* SETTINGS */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="language-outline" size={20} />
            <Text style={styles.settingText}>Language</Text>
          </TouchableOpacity>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
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

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
    elevation: 2,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
  },

  info: {
    color: "#64748B",
    marginTop: 3,
  },

  editBtn: {
    marginTop: 10,
    backgroundColor: "#06B6D4",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  editText: {
    color: "#fff",
    fontWeight: "600",
  },

  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginTop: 20,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  label: {
    fontSize: 12,
    color: "#64748B",
  },

  infoCard: {
    backgroundColor: "#F1F5F9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  contactCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    padding: 15,
    borderRadius: 12,
  },

  contactName: {
    fontWeight: "600",
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },

  settingText: {
    fontSize: 15,
  },

  logout: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FEE2E2",
    padding: 15,
    borderRadius: 12,
  },

  logoutText: {
    color: "#EF4444",
    fontWeight: "600",
  },
});
