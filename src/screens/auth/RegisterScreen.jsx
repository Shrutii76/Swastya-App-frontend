import { Feather, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="#0F172A" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{t("createAccount")}</Text>

          <View style={{ width: 26 }} />
        </View>

        {/* TITLE */}
        <Text style={styles.mainTitle}>{t("joinSwastya")}</Text>

        <Text style={styles.subtitle}>{t("createAccountSubtitle")}</Text>

        {/* FULL NAME */}
        <Text style={styles.label}>{t("fullName")}</Text>

        <View style={styles.inputBox}>
          <Ionicons name="person" size={20} color="#06B6D4" />

          <TextInput
            placeholder={t("enterFullName")}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* PHONE */}
        <Text style={styles.label}>{t("phoneNumber")}</Text>

        <View style={styles.inputBox}>
          <Ionicons name="call" size={20} color="#06B6D4" />

          <TextInput
            placeholder="+91 00000 00000"
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* DOB */}
        <Text style={styles.label}>{t("dob")}</Text>

        <TouchableOpacity style={styles.inputBox} onPress={() => setShow(true)}>
          <Feather name="calendar" size={20} color="#06B6D4" />

          <Text style={styles.dateText}>
            {date ? date.toLocaleDateString() : t("selectDate")}
          </Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}

        {/* TERMS */}
        <View style={styles.termsRow}>
          <TouchableOpacity
            style={[styles.checkbox, agree && styles.checkboxActive]}
            onPress={() => setAgree(!agree)}
          >
            {agree && <Ionicons name="checkmark" size={16} color="#fff" />}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            {t("agreeTerms")}{" "}
            <Text style={styles.link}>{t("termsService")}</Text> &{" "}
            <Text style={styles.link}>{t("privacyPolicy")}</Text>
          </Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Otp")}
        >
          <Text style={styles.buttonText}>{t("createAccountBtn")}</Text>
        </TouchableOpacity>

        {/* LOGIN */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>{t("alreadyAccount")}</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>{t("signIn")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 20,
    color: "#0F172A",
  },

  subtitle: {
    color: "#64748B",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 22,
  },

  label: {
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
    color: "#0F172A",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#CDEAF0",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#06B6D4",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxActive: {
    backgroundColor: "#06B6D4",
    borderColor: "#06B6D4",
  },

  termsText: {
    flex: 1,
    color: "#64748B",
  },

  link: {
    color: "#06B6D4",
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#1CC4E9",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  loginText: {
    color: "#64748B",
  },

  loginLink: {
    color: "#06B6D4",
    fontWeight: "600",
  },
  dateText: {
    marginLeft: 10,
    color: "#64748B",
    fontSize: 16,
  },
});
