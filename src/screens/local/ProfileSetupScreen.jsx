import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSetupScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [location, setLocation] = useState(null);
  const [gender, setGender] = useState("male");
  const [locationType, setLocationType] = useState("urban");
  const [conditions, setConditions] = useState(["Hypertension"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const toggleCondition = (item) => {
    if (conditions.includes(item)) {
      setConditions(conditions.filter((i) => i !== item));
    } else {
      setConditions([...conditions, item]);
    }
  };

  const ConditionChip = ({ label }) => {
    const active = conditions.includes(label);
    return (
      <TouchableOpacity
        style={[styles.chip, active && styles.chipActive]}
        onPress={() => toggleCondition(label)}
      >
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#0F172A" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{t("profileSetup")}</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Title */}
        <Text style={styles.mainTitle}>{t("personalInfo")}</Text>

        <Text style={styles.subtitle}>{t("profileSubtitle")}</Text>

        {/* Full Name */}
        <Text style={styles.label}>{t("fullName")}</Text>

        <TextInput placeholder={t("enterName")} style={styles.input} />

        {/* Age */}
        <Text style={styles.label}>{t("age")}</Text>

        <TextInput
          placeholder={t("enterAge")}
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Gender */}
        <Text style={styles.label}>{t("gender")}</Text>

        <View style={styles.genderRow}>
          <TouchableOpacity
            style={[
              styles.genderCard,
              gender === "male" && styles.genderActive,
            ]}
            onPress={() => setGender("male")}
          >
            <Ionicons name="male" size={24} color="#06B6D4" />
            <Text style={styles.genderText}>{t("male")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderCard,
              gender === "female" && styles.genderActive,
            ]}
            onPress={() => setGender("female")}
          >
            <Ionicons name="female" size={24} color="#64748B" />
            <Text style={styles.genderText}>{t("female")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderCard,
              gender === "other" && styles.genderActive,
            ]}
            onPress={() => setGender("other")}
          >
            <MaterialCommunityIcons
              name="gender-transgender"
              size={24}
              color="#64748B"
            />
            <Text style={styles.genderText}>{t("other")}</Text>
          </TouchableOpacity>
        </View>

        {/* Location */}
        <Text style={styles.label}>{t("location")}</Text>

        <View style={styles.locationInput}>
          <Ionicons name="location" size={20} color="#94A3B8" />
          <TextInput
            placeholder={t("cityDistrict")}
            style={{ marginLeft: 8, flex: 1 }}
          />
        </View>

        {/* Urban Rural */}
        <View style={styles.locationTypeRow}>
          <TouchableOpacity
            style={[
              styles.locationType,
              locationType === "urban" && styles.locationActive,
            ]}
            onPress={() => setLocationType("urban")}
          >
            <Text style={styles.locationText}>{t("urban")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.locationType,
              locationType === "rural" && styles.locationActive,
            ]}
            onPress={() => setLocationType("rural")}
          >
            <Text style={styles.locationText}>{t("rural")}</Text>
          </TouchableOpacity>
        </View>

        {/* Health Conditions */}
        <Text style={styles.label}>{t("healthConditions")}</Text>

        <View style={styles.chipContainer}>
          <ConditionChip label="Diabetes" />
          <ConditionChip label="Hypertension" />
          <ConditionChip label="Asthma" />
          <ConditionChip label="Thyroid" />

          <TouchableOpacity style={styles.addChip}>
            <Text style={styles.addChipText}>{t("addNew")}</Text>
          </TouchableOpacity>
        </View>

        {/* Map */}
        {location && (
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} />
          </MapView>
        )}

        {/* Save Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>{t("saveContinue")}</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
    color: "#0F172A",
  },

  subtitle: {
    color: "#64748B",
    marginBottom: 20,
  },

  label: {
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 14,
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  genderCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  genderActive: {
    borderColor: "#06B6D4",
    backgroundColor: "#ECFEFF",
  },

  genderText: {
    marginTop: 6,
  },

  locationInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
  },

  locationTypeRow: {
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
    borderRadius: 12,
    marginTop: 10,
  },

  locationType: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },

  locationActive: {
    backgroundColor: "#06B6D4",
    borderRadius: 12,
  },

  locationText: {
    color: "#0F172A",
    fontWeight: "600",
  },

  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#CBD5F5",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  chipActive: {
    backgroundColor: "#06B6D4",
    borderColor: "#06B6D4",
  },

  chipText: {
    color: "#0F172A",
  },

  chipTextActive: {
    color: "#fff",
  },

  addChip: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#06B6D4",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  addChipText: {
    color: "#06B6D4",
  },

  button: {
    backgroundColor: "#06B6D4",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  map: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginTop: 20,
  },
});
