import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const { t } = useTranslation();

  const role = route.params?.role;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={25} color="#1F2937" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.logo}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>{t("welcomeBack")}</Text>

      <Text style={styles.subtitle}>{t("loginSubtitle")}</Text>

      {/* Role Info */}
      {role && (
        <Text style={styles.roleText}>
          {t("loginAs")}: {role}
        </Text>
      )}

      {/* Phone Input */}
      <Text style={styles.label}>{t("phoneNumber")}</Text>

      <TextInput
        style={styles.input}
        placeholder="+91 00000 00000"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Send OTP */}
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          if (!phone) {
            alert("Enter phone number");
            return;
          }

          await AsyncStorage.setItem("phone", phone);

          navigation.navigate("Otp");
        }}
      >
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>{t("sendOtp")}</Text>
          <Ionicons name="arrow-forward" size={20} color="#0F172A" />
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>{t("newToSwastya")}</Text>
        <View style={styles.line} />
      </View>

      {/* Register */}
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate("Register", { role })}
      >
        <Text style={styles.createText}>{t("createAccount")}</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.terms}>{t("terms")}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backBtn: {
    marginRight: 15,
  },

  logo: {
    width: 250,
    height: 100,
    resizeMode: "contain",
  },

  iconBox: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#595e67",
    lineHeight: 24,
    marginBottom: 20,
  },

  roleText: {
    fontSize: 14,
    color: "#06B6D4",
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#595e67",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#1CC4E9",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "600",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#595e67",
  },

  createBtn: {
    borderWidth: 2,
    borderColor: "#1CC4E9",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  createText: {
    color: "#1CC4E9",
    fontWeight: "600",
    fontSize: 16,
  },

  terms: {
    textAlign: "center",
    color: "#595e67",
    fontSize: 12,
    marginTop: 25,
  },
});
