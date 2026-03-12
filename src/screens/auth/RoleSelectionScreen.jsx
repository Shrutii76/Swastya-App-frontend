import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoleSelectionScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleRoleSelect = useCallback(async (role) => {
    try {
      await AsyncStorage.setItem("role", role);
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error saving role:", error);
    }
  }, []);

  const RoleCard = ({ icon, title, subtitle, bgColor, role }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => handleRoleSelect(role)}
    >
      <View style={[styles.iconCircle, { backgroundColor: bgColor }]}>
        {icon}
      </View>

      <Text style={styles.roleTitle}>{title}</Text>
      <Text style={styles.roleSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="shield-checkmark" size={28} color="#06B6D4" />
        </View>

        <Text style={styles.appTitle}>Swastya</Text>
        <Text style={styles.welcome}>{t("welcome")}</Text>
      </View>

      {/* Heading */}
      <Text style={styles.heading}>{t("whoAreYou")}</Text>
      <Text style={styles.subHeading}>{t("selectRole")}</Text>

      {/* Role Cards */}
      <View style={styles.grid}>
        <RoleCard
          role="citizen"
          icon={<Ionicons name="person" size={28} color="#2563EB" />}
          title={t("citizen")}
          subtitle={t("citizenSub")}
          bgColor="#DBEAFE"
        />

        <RoleCard
          role="asha"
          icon={<FontAwesome5 name="users" size={22} color="#E11D48" />}
          title={t("asha")}
          subtitle={t("ashaSub")}
          bgColor="#FEE2E2"
        />

        <RoleCard
          role="anganwadi"
          icon={<MaterialIcons name="child-care" size={28} color="#059669" />}
          title={t("anganwadi")}
          subtitle={t("anganwadiSub")}
          bgColor="#DCFCE7"
        />

        <RoleCard
          role="phc"
          icon={
            <FontAwesome5 name="briefcase-medical" size={24} color="#7C3AED" />
          }
          title={t("phc")}
          subtitle={t("phcSub")}
          bgColor="#EDE9FE"
        />
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Ionicons name="information-circle" size={20} color="#06B6D4" />
        <Text style={styles.infoText}>{t("infoText")}</Text>
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

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#DFF4F8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  appTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
  },

  welcome: {
    color: "#64748B",
    fontSize: 16,
    marginTop: 4,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30,
    color: "#0F172A",
  },

  subHeading: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  roleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },

  roleSubtitle: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 4,
  },

  infoBox: {
    flexDirection: "row",
    backgroundColor: "#E6F7FB",
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
  },

  infoText: {
    flex: 1,
    marginLeft: 8,
    color: "#334155",
    fontSize: 14,
  },
});
