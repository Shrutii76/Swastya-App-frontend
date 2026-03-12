import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(false);

  const Card = ({ icon, title, subtitle, bg, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.iconBox, { backgroundColor: bg }]}>{icon}</View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Swastya</Text>

          <Ionicons
            name="notifications-outline"
            size={24}
            color="#0F172A"
            onPress={() => navigation.navigate("Reminders")}
          />
        </View>

        {/* GREETING */}
        <Text style={styles.greeting}>{t("goodMorning")},</Text>
        <Text style={styles.name}>Alex Johnson</Text>

        {/* SOS CARD */}
        <TouchableOpacity
          style={styles.sosCard}
          onPress={() => navigation.navigate("SOS")}
        >
          <View style={styles.sosCircle}>
            <Text style={styles.sosText}>SOS</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.sosTitle}>{t("sosEmergency")}</Text>
            <Text style={styles.sosSub}>{t("immediateHelp")}</Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#EF4444" />
        </TouchableOpacity>

        {/* SERVICES GRID */}
        <View style={styles.grid}>
          <Card
            icon={
              <MaterialIcons
                name="medical-services"
                size={26}
                color="#06B6D4"
              />
            }
            title={t("symptomChecker")}
            subtitle={t("aiDiagnosis")}
            bg="#E0F7FA"
            onPress={() => navigation.navigate("SymptomChecker")}
          />

          <Card
            icon={<Ionicons name="videocam" size={26} color="#8B5CF6" />}
            title={t("telemedicine")}
            subtitle={t("consultDoctors")}
            bg="#F3E8FF"
            onPress={() => navigation.navigate("ConsultDoctor")}
          />

          <Card
            icon={<Ionicons name="document-text" size={26} color="#22C55E" />}
            title={t("Appointment Booking")}
            subtitle={t("scheduleVisits")}
            bg="#ECFDF5"
            onPress={() => navigation.navigate("AppointmentBookingList")}
          />

          <Card
            icon={<Ionicons name="location" size={26} color="#A855F7" />}
            title={t("nearbyClinics")}
            subtitle={t("findCare")}
            bg="#F3E8FF"
            onPress={() => navigation.navigate("NearbyClinics")}
          />
        </View>

        {/* HEALTH TIPS */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>{t("healthTips")}</Text>

          <Text style={styles.tipsText}>{t("tipsSubtitle")}</Text>
          <Text style={styles.tipsText}>{t("todayTip")}</Text>

          {expanded && (
            <Text style={styles.moreTips}>
              Walking for just 15 minutes daily improves heart health, boosts
              mood, strengthens muscles, and helps maintain a healthy weight.
              Try walking after meals or during breaks.
            </Text>
          )}

          <TouchableOpacity
            style={styles.readBtn}
            onPress={() => setExpanded(!expanded)}
          >
            <Text style={styles.readText}>
              {expanded ? "READ LESS" : t("readMore")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* UPCOMING */}
        <Text style={styles.upcomingTitle}>{t("upcoming")}</Text>

        <View style={styles.appointmentCard}>
          <View>
            <Text style={styles.docName}>Dr. Sarah Jenkins</Text>
            <Text style={styles.docSpecial}>Cardiology Specialist</Text>

            <View style={styles.timeRow}>
              <Ionicons name="time" size={16} color="#06B6D4" />
              <Text style={styles.timeText}> {t("tomorrow")}, 10:30 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#06B6D4" />
          <Text style={styles.navActive}>{t("home")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="folder"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("HealthRecords")}
          />
          <Text style={styles.navText}>{t("records")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="notifications"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("AlertsScreen")}
          />
          <Text style={styles.navText}>{t("alerts")}</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="person"
            size={24}
            color="#94A3B8"
            onPress={() => navigation.navigate("Profile")}
          />
          <Text style={styles.navText}>{t("profile")}</Text>
        </View>
      </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },

  greeting: {
    marginTop: 20,
    fontSize: 16,
    color: "#64748B",
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  sosCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },

  sosCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#EF4444",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  sosText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  sosTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#EF4444",
  },

  sosSub: {
    color: "#64748B",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: "600",
    fontSize: 16,
  },

  cardSub: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },

  tipsCard: {
    marginTop: 10,
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#6366F1",
  },

  tipsTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  tipsText: {
    color: "#E0E7FF",
    marginTop: 4,
  },

  readBtn: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  readText: {
    color: "#fff",
    fontWeight: "600",
  },

  upcomingTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },

  appointmentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },

  docName: {
    fontWeight: "700",
  },

  docSpecial: {
    color: "#64748B",
    marginTop: 2,
  },

  timeRow: {
    flexDirection: "row",
    marginTop: 6,
  },

  timeText: {
    color: "#06B6D4",
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
  moreTips: {
    color: "#E2E8F0",
    marginTop: 10,
    lineHeight: 20,
  },
});
