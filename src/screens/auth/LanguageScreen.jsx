import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

export default function LanguageScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [selected, setSelected] = useState("en");

  const changeLang = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang);
  };

  const LanguageCard = ({ id, title, subtitle, icon }) => {
    const active = selected === id;

    return (
      <TouchableOpacity
        style={[styles.card, active && styles.activeCard]}
        onPress={() => changeLang(id)}
      >
        <View style={styles.leftSection}>
          <View style={styles.iconBox}>{icon}</View>

          <View>
            <Text style={styles.languageTitle}>{title}</Text>
            <Text style={styles.languageSubtitle}>{subtitle}</Text>
          </View>
        </View>

        <View style={[styles.radio, active && styles.radioActive]} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#0F172A" />
        <Text style={styles.headerTitle}>{t("selectLanguage")}</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Icon */}
      <View style={styles.topIcon}>
        <Ionicons name="globe-outline" size={34} color="#06B6D4" />
      </View>

      {/* Title */}
      <Text style={styles.title}>{t("chooseLanguage")}</Text>

      <Text style={styles.subtitle}>{t("subtitle")}</Text>

      {/* Language Options */}

      <LanguageCard
        id="en"
        title={t("english")}
        subtitle={t("englishSub")}
        icon={<Ionicons name="language-outline" size={24} color="#06B6D4" />}
      />

      <LanguageCard
        id="hi"
        title={t("hindi")}
        subtitle={t("hindiSub")}
        icon={
          <MaterialCommunityIcons
            name="book-open-variant"
            size={24}
            color="#64748B"
          />
        }
      />

      <LanguageCard
        id="mr"
        title={t("marathi")}
        subtitle={t("marathiSub")}
        icon={
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={24}
            color="#64748B"
          />
        }
      />

      {/* Continue Button */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Role")}
      >
        <Text style={styles.buttonText}>{t("continue")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  topIcon: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#DFF4F8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 30,
  },

  card: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },

  activeCard: {
    borderColor: "#06B6D4",
    backgroundColor: "#ECFEFF",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  languageTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  languageSubtitle: {
    color: "#64748B",
    marginTop: 2,
  },

  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#CBD5F5",
  },

  radioActive: {
    backgroundColor: "#06B6D4",
    borderColor: "#06B6D4",
  },

  button: {
    position: "absolute",
    bottom: 40,
    left: 24,
    right: 24,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#06B6D4",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#06B6D4",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
