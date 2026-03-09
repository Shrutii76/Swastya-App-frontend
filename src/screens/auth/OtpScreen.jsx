import { Ionicons } from "@expo/vector-icons";
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
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
  }, []);

  const focusInput = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
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

      {/* Back */}
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color="#1F2937" />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>{t("verifyPhone")}</Text>

      <Text style={styles.subtitle}>
        {t("otpSubtitle")}{" "}
        <Text style={{ fontWeight: "600" }}>+91 XXXXX XXXXX</Text>
      </Text>

      {/* OTP BOXES */}
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

      {/* Verify */}
      <Pressable
        style={styles.verifyBtn}
        disabled={otp.length !== 6}
        onPress={() => navigation.navigate("ProfileSetup")}
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
