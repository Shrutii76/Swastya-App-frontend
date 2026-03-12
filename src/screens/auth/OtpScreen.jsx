import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [otp, setOtp] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const inputRef = useRef(null);

  // Focus input automatically
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
  }, []);

  // Load role + phone from storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedRole = await AsyncStorage.getItem("role");
        const storedPhone = await AsyncStorage.getItem("phone");

        if (storedRole) setRole(storedRole);
        if (storedPhone) setPhone(storedPhone);
      } catch (error) {
        console.log("Error loading storage:", error);
      }
    };

    loadData();
  }, []);

  const focusInput = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  // Role → Screen mapping
  const roleRoutes = {
    citizen: "ProfileSetup",
    phc: "PHCprofileSetup",
    asha: "ASHAProfileSetup",
    anganwadi: "AnganwadiProfileSetup",
  };

  const handleVerify = () => {
    if (otp.length !== 6) return;

    const screen = roleRoutes[role];

    if (screen) {
      navigation.replace(screen);
    } else {
      console.log("Role not found");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Hidden Input */}
      <TextInput
        ref={inputRef}
        value={otp}
        onChangeText={(text) => {
          const clean = text.replace(/[^0-9]/g, "");
          if (clean.length <= 6) setOtp(clean);
        }}
        keyboardType="number-pad"
        maxLength={6}
        autoFocus
        textContentType="oneTimeCode"
        caretHidden
        style={styles.hiddenInput}
      />

      {/* Back Button */}
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="#1F2937" />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>{t("verifyPhone")}</Text>

      <Text style={styles.subtitle}>
        {t("otpSubtitle")}{" "}
        <Text style={{ fontWeight: "600" }}>{phone || "+91 XXXXX XXXXX"}</Text>
      </Text>

      {/* OTP Boxes */}
      <Pressable style={styles.otpContainer} onPress={focusInput}>
        {[...Array(6)].map((_, index) => (
          <View
            key={index}
            style={[styles.otpBox, otp.length === index && styles.activeBox]}
          >
            <Text style={styles.otpText}>{otp[index] || ""}</Text>
          </View>
        ))}
      </Pressable>

      {/* Verify Button */}
      <Pressable
        style={[styles.verifyBtn, { opacity: otp.length === 6 ? 1 : 0.5 }]}
        disabled={otp.length !== 6}
        onPress={handleVerify}
      >
        <Text style={styles.verifyText}>{t("verifyContinue")}</Text>
      </Pressable>

      {/* Resend */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>{t("didntReceive")}</Text>
        <Text style={styles.resendLink}>{t("resendCode")}</Text>
        <Text style={styles.timer}> | 00:55</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
    paddingHorizontal: 24,
  },

  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },

  backBtn: {
    marginTop: 60,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111827",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 10,
    lineHeight: 24,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  otpBox: {
    width: 48,
    height: 56,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  activeBox: {
    borderColor: "#1CC4E9",
  },

  otpText: {
    fontSize: 20,
    fontWeight: "600",
  },

  verifyBtn: {
    marginTop: 40,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#1CC4E9",
    justifyContent: "center",
    alignItems: "center",
  },

  verifyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  resendContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },

  resendText: {
    color: "#6B7280",
  },

  resendLink: {
    color: "#1CC4E9",
    marginLeft: 6,
    fontWeight: "600",
  },

  timer: {
    color: "#9CA3AF",
  },
});
