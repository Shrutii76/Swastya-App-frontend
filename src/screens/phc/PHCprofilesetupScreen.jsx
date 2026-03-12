import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PHCProfileSetupScreen() {
  const [phcName, setPhcName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [ambulance, setAmbulance] = useState(true);

  const [serviceInput, setServiceInput] = useState("");
  const [services, setServices] = useState([]);

  /* AUTO LOCATION */
  const detectLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    const reverse = await Location.reverseGeocodeAsync({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });

    if (reverse.length > 0) {
      const place = reverse[0];
      setLocation(`${place.city}, ${place.region}`);
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  /* ADD SERVICE */
  const addService = () => {
    if (!serviceInput) return;
    setServices([...services, serviceInput]);
    setServiceInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={24} />
          <Text style={styles.headerTitle}>PHC Profile Setup</Text>
          <View style={{ width: 24 }} />
        </View>

        <Text style={styles.title}>Complete your Swastya Profile</Text>

        {/* PHC NAME */}
        <Text style={styles.label}>PHC Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter PHC Name"
          value={phcName}
          onChangeText={setPhcName}
        />

        {/* LOCATION */}
        <Text style={styles.label}>Location</Text>

        <View style={styles.locationRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={location}
            placeholder="Auto detected location"
          />

          <TouchableOpacity style={styles.detectBtn} onPress={detectLocation}>
            <Ionicons name="location" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />

        {/* ADDRESS */}
        <Text style={styles.label}>Full Address</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter detailed address"
          multiline
          value={address}
          onChangeText={setAddress}
        />

        {/* SERVICES */}
        <Text style={styles.label}>Services Available</Text>

        <View style={styles.serviceRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Add service"
            value={serviceInput}
            onChangeText={setServiceInput}
          />

          <TouchableOpacity style={styles.addBtn} onPress={addService}>
            <Ionicons name="add" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* SERVICES LIST */}
        {services.map((item, index) => (
          <View key={index} style={styles.serviceTag}>
            <Text>{item}</Text>
          </View>
        ))}

        {/* OPERATING HOURS */}
        <Text style={styles.label}>Operating Hours</Text>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Open (08:00)"
            value={openTime}
            onChangeText={setOpenTime}
          />

          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 10 }]}
            placeholder="Close (17:00)"
            value={closeTime}
            onChangeText={setCloseTime}
          />
        </View>

        {/* AMBULANCE */}
        <View style={styles.ambulanceCard}>
          <View style={styles.ambulanceIcon}>
            <MaterialCommunityIcons
              name="ambulance"
              size={22}
              color="#06B6D4"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.ambulanceTitle}>Ambulance Availability</Text>
            <Text style={styles.ambulanceSub}>
              Available for emergencies 24/7
            </Text>
          </View>

          <Switch
            value={ambulance}
            onValueChange={setAmbulance}
            trackColor={{ true: "#06B6D4" }}
          />
        </View>

        {/* SAVE BUTTON */}
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Profile</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
  },

  label: {
    fontWeight: "600",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  detectBtn: {
    backgroundColor: "#06B6D4",
    padding: 14,
    borderRadius: 12,
    marginLeft: 8,
  },

  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  addBtn: {
    backgroundColor: "#06B6D4",
    padding: 14,
    borderRadius: 12,
    marginLeft: 8,
  },

  serviceTag: {
    backgroundColor: "#E0F2FE",
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
  },

  ambulanceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F6FA",
    padding: 15,
    borderRadius: 14,
    marginTop: 10,
  },

  ambulanceIcon: {
    marginRight: 10,
  },

  ambulanceTitle: {
    fontWeight: "600",
  },

  ambulanceSub: {
    color: "#64748B",
  },

  saveBtn: {
    backgroundColor: "#06B6D4",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  saveText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
