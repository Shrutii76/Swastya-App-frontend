import { useState } from "react";
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export default function RemindersScreen({ navigation }) {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");

  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "Metformin 500mg",
      subtitle: "After breakfast • 1 Tablet",
      time: "08:00 AM",
      icon: "pill",
    },
  ]);

  const addReminder = () => {
    if (!medicine || !time) return;

    const newReminder = {
      id: Date.now(),
      title: medicine,
      subtitle: "Custom reminder",
      time: time,
      icon: "capsules",
    };

    setReminders([...reminders, newReminder]);
    setMedicine("");
    setTime("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t("swastyaReminders")}</Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="calendar-outline" size={22} color="#1fa3c6" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>{t("upcoming")}</Text>
        <Text style={styles.tab}>{t("history")}</Text>
        <Text style={styles.tab}>{t("schedules")}</Text>
      </View>

      {/* REMINDERS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>{t("today")}</Text>

        {reminders.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color="#1fa3c6"
              />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>

            <View>
              <Text style={styles.time}>{item.time}</Text>
              <Ionicons name="chevron-forward" size={18} color="#aaa" />
            </View>
          </View>
        ))}

        {/* Tomorrow Box */}
        <View style={styles.tomorrowBox}>
          <Text style={styles.tomorrowTitle}>{t("tomorrowOutlook")}</Text>

          <Text style={styles.tomorrowText}>
            {t("reminderCount", { count: reminders.length })}
          </Text>
        </View>
      </ScrollView>

      {/* MODAL */}
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{t("addReminder")}</Text>

            <TextInput
              placeholder={t("medicineName")}
              style={styles.input}
              value={medicine}
              onChangeText={setMedicine}
            />

            <TextInput
              placeholder={t("timePlaceholder")}
              style={styles.input}
              value={time}
              onChangeText={setTime}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#fff" }}>{t("cancel")}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveBtn} onPress={addReminder}>
                <Text style={{ color: "#fff" }}>{t("save")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
    backgroundColor: "#f7f9fb",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  addBtn: {
    backgroundColor: "#e6f5f8",
    padding: 8,
    borderRadius: 10,
  },

  tabs: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  tab: {
    marginRight: 20,
    color: "#777",
    fontSize: 16,
  },

  activeTab: {
    marginRight: 20,
    color: "#1fa3c6",
    fontSize: 16,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: "#1fa3c6",
    paddingBottom: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 14,
    elevation: 2,
  },

  iconBox: {
    width: 45,
    height: 45,
    backgroundColor: "#e6f5f8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  cardText: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    color: "#777",
    marginTop: 3,
  },

  time: {
    color: "#1fa3c6",
    fontWeight: "600",
  },

  tomorrowBox: {
    backgroundColor: "#29abc8",
    margin: 20,
    padding: 18,
    borderRadius: 14,
  },

  tomorrowTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  tomorrowText: {
    color: "#fff",
    marginTop: 6,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 12,
    color: "#94A3B8",
  },

  navActive: {
    fontSize: 12,
    color: "#06B6D4",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },

  cancelBtn: {
    backgroundColor: "#888",
    padding: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },

  saveBtn: {
    backgroundColor: "#1fa3c6",
    padding: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
});
