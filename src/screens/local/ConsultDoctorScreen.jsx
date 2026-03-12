import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ConsultDoctorScreen() {
  const { t } = useTranslation();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      exp: "12 yrs exp",
      rating: "4.9",
      status: "online",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Pediatrician",
      exp: "8 yrs exp",
      rating: "4.8",
      status: "offline",
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      specialty: "Neurologist",
      exp: "15 yrs exp",
      rating: "5.0",
      status: "online",
    },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Ionicons name="medical" size={24} color="#0ea5b7" />
        </View>

        <Text style={styles.headerTitle}>Swastya</Text>

        <View style={{ flexDirection: "row" }}>
          <Ionicons name="search-outline" size={22} style={styles.icon} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>{t("consultExperts")}</Text>
        <Text style={styles.subtitle}>{t("consultSubtitle")}</Text>

        {/* FILTER BUTTONS */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.activeFilter}>
            <Text style={styles.activeFilterText}>{t("allDoctors")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>{t("general")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>{t("pediatric")}</Text>
          </TouchableOpacity>
        </View>

        {/* DOCTOR LIST */}
        {doctors.map((doc) => (
          <View key={doc.id} style={styles.card}>
            {/* DOCTOR INFO */}
            <View style={styles.doctorRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.docName}>{doc.name}</Text>
                <Text style={styles.specialty}>
                  {doc.specialty} • {doc.exp}
                </Text>
              </View>

              <View style={styles.rating}>
                <Ionicons name="star" size={14} color="#f59e0b" />
                <Text style={styles.ratingText}>{doc.rating}</Text>
              </View>
            </View>

            {/* ACTION BUTTONS */}
            <View style={styles.actions}>
              {doc.status === "online" ? (
                <TouchableOpacity style={styles.videoBtn}>
                  <Ionicons name="videocam" size={18} color="#fff" />
                  <Text style={styles.videoText}>{t("videoCall")}</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.offlineBtn}>
                  <Ionicons name="videocam" size={18} color="#64748b" />
                  <Text style={styles.offlineText}>{t("offline")}</Text>
                </View>
              )}

              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="chatbubble" size={20} color="#0ea5b7" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name="calendar" size={20} color="#0ea5b7" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#06B6D4" />
          <Text style={styles.navActive}>{t("home")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="folder" size={24} color="#94A3B8" />
          <Text style={styles.navText}>{t("records")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#94A3B8" />
          <Text style={styles.navText}>{t("alerts")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="person" size={24} color="#94A3B8" />
          <Text style={styles.navText}>{t("profile")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f9fb",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: "#dff6f8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  icon: {
    marginLeft: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  subtitle: {
    color: "#64748b",
    marginTop: 5,
    paddingHorizontal: 20,
  },

  filters: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  activeFilter: {
    backgroundColor: "#06B6D4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeFilterText: {
    color: "#fff",
    fontWeight: "600",
  },

  filter: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  filterText: {
    color: "#475569",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },

  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
  },

  docName: {
    fontSize: 16,
    fontWeight: "700",
  },

  specialty: {
    color: "#06B6D4",
    marginTop: 2,
  },

  quote: {
    color: "#64748b",
    marginTop: 5,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  ratingText: {
    marginLeft: 4,
    fontWeight: "600",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  videoBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#06B6D4",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },

  videoText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "600",
  },

  offlineBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e2e8f0",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },

  offlineText: {
    color: "#64748b",
    marginLeft: 5,
  },

  iconBtn: {
    marginLeft: 10,
    backgroundColor: "#e6f5f8",
    padding: 12,
    borderRadius: 10,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 15,
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
