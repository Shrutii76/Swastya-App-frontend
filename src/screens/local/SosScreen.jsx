import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Animated,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SosScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const pulse = useRef(new Animated.Value(1)).current;

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [severity, setSeverity] = useState("Moderate");
  const [dispatchStatus, setDispatchStatus] = useState("Waiting");
  const [firstAid, setFirstAid] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const startSOSAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const generateFirstAid = () => {
    const s = symptoms.toLowerCase();

    if (s.includes("chest")) {
      setFirstAid(
        "Keep the patient calm and seated. Loosen tight clothing and call emergency services immediately.",
      );
    } else if (s.includes("bleeding")) {
      setFirstAid(
        "Apply firm pressure to the wound with clean cloth and elevate the injured area.",
      );
    } else if (s.includes("breathing")) {
      setFirstAid(
        "Help the patient sit upright and ensure fresh air while waiting for ambulance.",
      );
    } else {
      setFirstAid(
        "Stay calm and monitor the patient until emergency responders arrive.",
      );
    }
  };

  const handleSOS = () => {
    startSOSAnimation();
    setShowForm(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setDispatchStatus("Ambulance Dispatched - Driver on the way");
    generateFirstAid();
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Location permission denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      const reverse = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      if (reverse.length > 0) {
        const place = reverse[0];
        setAddress(
          `${place.name || ""} ${place.street || ""}, ${place.city || ""}`,
        );
      }
    })();
  }, []);

  const callNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#0F172A" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{t("emergencySOS")}</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* TITLE */}
        <Text style={styles.alertTitle}>{t("helpOnWay")}</Text>
        <Text style={styles.subtitle}>{t("servicesNotified")}</Text>

        {/* SOS BUTTON */}
        <View style={styles.sosContainer}>
          <Animated.View
            style={[
              styles.outerRing,
              {
                transform: [{ scale: pulse }],
                opacity: pulse.interpolate({
                  inputRange: [1, 1.5],
                  outputRange: [0.6, 0],
                }),
              },
            ]}
          />

          <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        {/* LOCATION */}
        <Text style={styles.sectionTitle}>Detected Location</Text>
        <TextInput style={styles.input} value={address} editable={false} />

        {/* MAP */}
        {location && (
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />
          </MapView>
        )}

        {/* INPUT FORM */}
        {showForm && !submitted && (
          <>
            <Text style={styles.sectionTitle}>Symptoms</Text>

            <TextInput
              style={styles.input}
              placeholder="Describe symptoms..."
              value={symptoms}
              onChangeText={setSymptoms}
            />

            <Text style={styles.sectionTitle}>Emergency Level</Text>

            <View style={styles.severityRow}>
              {["Low", "Moderate", "Critical"].map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.severityBtn,
                    severity === item && styles.activeSeverity,
                  ]}
                  onPress={() => setSeverity(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit Emergency</Text>
            </TouchableOpacity>
          </>
        )}

        {/* STATUS AFTER SUBMIT */}
        {submitted && (
          <>
            <View style={styles.dispatchCard}>
              <Text style={styles.dispatchTitle}>Ambulance Status</Text>
              <Text style={styles.dispatchStatus}>{dispatchStatus}</Text>
            </View>

            <View style={styles.firstAidBox}>
              <Text style={styles.firstAidTitle}>First Aid Instructions</Text>
              <Text>{firstAid}</Text>
            </View>
          </>
        )}

        {/* CONTACTS */}
        <Text style={styles.contactTitle}>{t("contactsNotified")}</Text>

        <View style={styles.contactCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={22} color="#06B6D4" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>Priya Sharma (Wife)</Text>
            <Text style={styles.contactPhone}>+91 98765 43210</Text>
          </View>

          <TouchableOpacity onPress={() => callNumber("9876543210")}>
            <Ionicons name="call" size={22} color="#06B6D4" />
          </TouchableOpacity>
        </View>

        <View style={styles.contactCard}>
          <View style={styles.avatar}>
            <Ionicons name="car" size={22} color="#06B6D4" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>{t("ambulance")}</Text>
            <Text style={styles.contactPhone}>{dispatchStatus}</Text>
          </View>

          <TouchableOpacity onPress={() => callNumber("102")}>
            <Ionicons name="call" size={22} color="#06B6D4" />
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

  alertTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#EF4444",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 5,
  },

  /* SOS BUTTON */

  sosContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },

  outerRing: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(239,68,68,0.3)",
  },

  sosButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },

  sosText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  /* LOCATION */

  map: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },

  sectionTitle: {
    fontWeight: "700",
    marginBottom: 6,
    marginTop: 10,
    color: "#64748B",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  /* SEVERITY */

  severityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  severityBtn: {
    backgroundColor: "#E2E8F0",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
  },

  activeSeverity: {
    backgroundColor: "#FCA5A5",
  },

  /* SUBMIT BUTTON */

  submitBtn: {
    backgroundColor: "#EF4444",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  submitText: {
    color: "#fff",
    fontWeight: "700",
  },

  /* DISPATCH STATUS */

  dispatchCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  dispatchTitle: {
    fontWeight: "700",
  },

  dispatchStatus: {
    color: "#EF4444",
    marginTop: 4,
  },

  /* FIRST AID */

  firstAidBox: {
    backgroundColor: "#FEF3C7",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  firstAidTitle: {
    fontWeight: "700",
    marginBottom: 5,
  },

  /* CONTACTS */

  contactTitle: {
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 10,
  },

  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#E0F2FE",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  contactName: {
    fontWeight: "600",
  },

  contactPhone: {
    color: "#64748B",
  },

  sentBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },

  sentText: {
    color: "#16A34A",
    fontSize: 12,
  },

  activeBadge: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },

  activeText: {
    color: "#0284C7",
    fontSize: 12,
  },

  /* OPTIONAL BOTTOM NAV */

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#E2E8F0",
    paddingVertical: 10,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    color: "#94A3B8",
    fontSize: 12,
  },

  navActive: {
    color: "#EF4444",
    fontSize: 12,
  },
});
