import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AppointmentBookingListScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="medical-bag"
            size={22}
            color="#0EA5B7"
          />
        </View>

        <Text style={styles.title}>Swastya</Text>

        <Ionicons name="search-outline" size={22} />
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Upcoming</Text>
        <Text style={styles.tab}>Past</Text>
        <Text style={styles.tab}>Cancelled</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* APPOINTMENT CARD */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.docName}>Dr. Michael Chen</Text>
            <Text style={styles.docSpecial}>Dermatologist</Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.joinBtn}
                onPress={() => navigation.navigate("AppointmentBooking")}
              >
                <Text style={styles.joinText}>Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* SECOND CARD */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.docName}>Dr. Emily Brooks</Text>
            <Text style={styles.docSpecial}>Pediatrician</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.joinBtn}>
                <Text style={styles.joinText}>Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
          <Ionicons name="notifications" size={24} color="#94A3B8" />
          <Text style={styles.navText}>{"alerts"}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="person" size={24} color="#94A3B8" />
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
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  logo: {
    width: 40,
    height: 40,
    backgroundColor: "#E0F2FE",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  activeTab: {
    color: "#06B6D4",
    marginRight: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: "#06B6D4",
  },

  tab: {
    marginRight: 20,
    color: "#64748B",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  nextCard: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },

  videoTag: {
    backgroundColor: "#06B6D4",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
  },

  videoText: {
    color: "#fff",
    fontSize: 12,
  },

  docName: {
    fontSize: 16,
    fontWeight: "700",
  },

  docSpecial: {
    color: "#64748B",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  info: {
    marginLeft: 5,
    color: "#64748B",
  },

  btnRow: {
    flexDirection: "row",
    marginTop: 15,
  },

  joinBtn: {
    backgroundColor: "#06B6D4",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },

  joinText: {
    color: "#fff",
    fontWeight: "600",
  },

  rescheduleBtn: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },

  rescheduleText: {
    color: "#334155",
  },

  cancelBtn: {
    borderWidth: 1,
    borderColor: "#FCA5A5",
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  actions: {
    flexDirection: "row",
    marginTop: 5,
  },

  reschedule: {
    color: "#06B6D4",
    marginRight: 15,
  },

  cancel: {
    color: "#EF4444",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#94A3B8",
  },

  navActive: {
    fontSize: 11,
    color: "#06B6D4",
  },
});
