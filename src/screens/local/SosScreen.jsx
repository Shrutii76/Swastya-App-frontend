import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Location permission denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation.coords);
    })();
  }, []);

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

          <TouchableOpacity
            style={styles.sosButton}
            onPress={startSOSAnimation}
          >
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        {/* LOCATION HEADER */}
        <View style={styles.locationHeader}>
          <Text style={styles.locationTitle}>{t("currentLocation")}</Text>

          <View style={styles.gpsBadge}>
            <Text style={styles.gpsText}>{t("liveGps")}</Text>
          </View>
        </View>

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

        {/* CONTACTS TITLE */}
        <Text style={styles.contactTitle}>{t("contactsNotified")}</Text>

        {/* CONTACT CARD */}
        <View style={styles.contactCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={22} color="#06B6D4" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>Priya Sharma (Wife)</Text>
            <Text style={styles.contactPhone}>+91 98765 43210</Text>
          </View>

          <View style={styles.sentBadge}>
            <Text style={styles.sentText}>{t("sent")}</Text>
          </View>

          <Ionicons name="call" size={20} color="#06B6D4" />
        </View>

        {/* AMBULANCE */}
        <View style={styles.contactCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={22} color="#06B6D4" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>{t("ambulance")}</Text>

            <Text style={styles.contactPhone}>{t("dispatching")}</Text>
          </View>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>{t("active")}</Text>
          </View>

          <Ionicons name="call" size={20} color="#06B6D4" />
        </View>
      </ScrollView>

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

  sosOuter: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },

  sosInner: {
    width: 160,
    height: 160,
    backgroundColor: "#EF4444",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  sosText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 6,
  },

  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  locationTitle: {
    fontWeight: "700",
    color: "#64748B",
  },

  gpsBadge: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  gpsText: {
    color: "#0284C7",
    fontSize: 12,
  },

  map: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },

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
});
