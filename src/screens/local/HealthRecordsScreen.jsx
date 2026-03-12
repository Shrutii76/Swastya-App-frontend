import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Buffer } from "buffer";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
export default function HealthRecordsScreen({ navigation }) {
  const { t } = useTranslation();
  const [qrVisible, setQrVisible] = useState(false);

  const user = {
    id: "USR10234",
    name: "Alex Johnson",
  };

  const qrBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAAAklEQVR4AewaftIAAAY7..."; // your full base64 string

  const qrImage = `data:image/png;base64,${Buffer.from(qrBase64, "base64").toString("base64")}`;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t("healthRecords")}</Text>

        <Ionicons name="search-outline" size={22} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SHARE CARD */}
        <View style={styles.shareCard}>
          <Text style={styles.shareTitle}>{t("shareHealthCard")}</Text>

          <Text style={styles.shareText}>{t("shareHealthText")}</Text>

          <TouchableOpacity
            style={styles.qrBtn}
            onPress={() => setQrVisible(true)}
          >
            <Ionicons name="qr-code" size={18} color="#fff" />
            <Text style={styles.qrText}>{t("viewQr")}</Text>
          </TouchableOpacity>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>{t("medicalHistory")}</Text>
          <Text style={styles.tab}>{t("prescriptions")}</Text>
          <Text style={styles.tab}>{t("reports")}</Text>
          <Text style={styles.tab}>{t("vaccines")}</Text>
        </View>

        {/* RECENT CHECKUPS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{t("recentCheckups")}</Text>
          <Text style={styles.viewAll}>{t("viewAll")}</Text>
        </View>

        {/* CONSULTATION CARD */}
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="stethoscope"
              size={24}
              color="#06B6D4"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{t("generalConsultation")}</Text>
            <Text style={styles.cardSub}>Dr. Anjali Verma • City Hospital</Text>

            <View style={styles.tags}>
              <Text style={styles.tag}>Routine Checkup</Text>
              <Text style={styles.tag}>BP: 120/80</Text>
            </View>
          </View>

          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>12 OCT</Text>
          </View>
        </View>

        {/* BLOOD TEST */}
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="test-tube"
              size={24}
              color="#06B6D4"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{t("bloodWork")}</Text>
            <Text style={styles.cardSub}>PathKind Labs • Report #BK829</Text>

            <Text style={styles.download}>{t("downloadPdf")} (1.2 MB)</Text>
          </View>

          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>28 SEP</Text>
          </View>
        </View>

        {/* UPLOAD RECORD */}
        <View style={styles.uploadBox}>
          <Ionicons name="cloud-upload-outline" size={40} color="#94A3B8" />

          <Text style={styles.uploadText}>{t("haveNewReport")}</Text>

          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadBtnText}>{t("uploadRecord")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={qrVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.qrModal}>
            <Text style={styles.qrTitle}>Health QR Card</Text>

            <Image
              source={{ uri: qrImage }}
              style={styles.qrImage}
              resizeMode="contain"
            />

            <Text style={styles.qrUser}>User ID: {user.id}</Text>
            <Text style={styles.qrUser}>Name: {user.name}</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setQrVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
  },

  info: {
    color: "#64748B",
    marginTop: 3,
  },

  verifyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  verifyText: {
    color: "#06B6D4",
    marginLeft: 5,
  },

  shareCard: {
    backgroundColor: "#06B6D4",
    margin: 20,
    borderRadius: 15,
    padding: 20,
  },

  shareTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },

  shareText: {
    color: "#e0f2fe",
    marginTop: 5,
  },

  qrBtn: {
    backgroundColor: "#0F172A",
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  qrText: {
    color: "#fff",
    marginLeft: 5,
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  activeTab: {
    color: "#06B6D4",
    fontWeight: "600",
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#06B6D4",
    paddingBottom: 5,
  },

  tab: {
    color: "#64748B",
    marginRight: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  viewAll: {
    color: "#06B6D4",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    elevation: 2,
  },

  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: "#E0F2FE",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    color: "#64748B",
    marginTop: 3,
  },

  tags: {
    flexDirection: "row",
    marginTop: 6,
  },

  tag: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginRight: 6,
    fontSize: 12,
  },

  download: {
    color: "#06B6D4",
    marginTop: 5,
  },

  dateBadge: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  dateText: {
    fontSize: 12,
    fontWeight: "600",
  },

  uploadBox: {
    margin: 20,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#CBD5E1",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
  },

  uploadText: {
    color: "#64748B",
    marginTop: 10,
  },

  uploadBtn: {
    marginTop: 10,
    backgroundColor: "#06B6D4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  uploadBtnText: {
    color: "#fff",
    fontWeight: "600",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  qrModal: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
  },

  qrTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  qrImage: {
    width: 220,
    height: 220,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  qrUser: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 4,
  },

  closeBtn: {
    marginTop: 15,
    backgroundColor: "#06B6D4",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },

  closeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
