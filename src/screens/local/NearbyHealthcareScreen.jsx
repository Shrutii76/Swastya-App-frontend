import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NearbyHealthcareScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#0F172A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t("nearbyHealthcare")}</Text>

        <Ionicons name="search" size={24} color="#0F172A" />
      </View>

      {/* MAP */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.209,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 28.6139,
            longitude: 77.209,
          }}
        >
          <View style={styles.marker}>
            <Ionicons name="medical" size={18} color="#fff" />
          </View>
        </Marker>
      </MapView>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#64748B" />

        <TextInput
          placeholder={t("searchHealthcare")}
          style={styles.searchInput}
        />

        <Ionicons name="mic-outline" size={18} color="#64748B" />
      </View>

      {/* FILTERS */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterActive}>
          <Ionicons name="options" size={16} color="#fff" />
          <Text style={styles.filterActiveText}>{t("all")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="local-hospital" size={16} color="#0F172A" />
          <Text style={styles.filterText}>{t("hospitals")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="medical-services" size={16} color="#0F172A" />
          <Text style={styles.filterText}>{t("phcs")}</Text>
        </TouchableOpacity>
      </View>

      {/* CLINIC CARD */}
      <View style={styles.clinicCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.tag}>{t("primaryHealthCentre")}</Text>

          <Text style={styles.clinicName}>Swastya Kalyan PHC</Text>

          <Text style={styles.address}>Sector 45, Gurugram • 0.8 km away</Text>

          <Text style={styles.open}>● {t("open247")}</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.navigateBtn}>
              <Ionicons name="navigate" size={18} color="#fff" />
              <Text style={styles.navigateText}>{t("navigate")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.callBtn}>
              <Ionicons name="call" size={20} color="#0F172A" />
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
          }}
          style={styles.clinicImage}
        />
      </View>

      {/* ZOOM CONTROLS */}
      <View style={styles.zoomControls}>
        <TouchableOpacity style={styles.zoomBtn}>
          <Ionicons name="add" size={22} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.zoomBtn}>
          <Ionicons name="remove" size={22} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  map: {
    flex: 1,
  },

  marker: {
    backgroundColor: "#06B6D4",
    padding: 8,
    borderRadius: 20,
  },

  searchBox: {
    position: "absolute",
    top: 90,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    marginHorizontal: 8,
  },

  filterRow: {
    position: "absolute",
    top: 150,
    flexDirection: "row",
    left: 20,
  },

  filterActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#06B6D4",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  filterActiveText: {
    color: "#fff",
    marginLeft: 5,
  },

  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  filterText: {
    marginLeft: 5,
  },

  clinicCard: {
    position: "absolute",
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
  },

  clinicImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },

  tag: {
    color: "#06B6D4",
    fontSize: 12,
    marginBottom: 4,
  },

  clinicName: {
    fontSize: 18,
    fontWeight: "700",
  },

  address: {
    color: "#64748B",
    marginVertical: 4,
  },

  open: {
    color: "#22C55E",
    marginBottom: 10,
  },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  navigateBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#06B6D4",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  navigateText: {
    color: "#fff",
    marginLeft: 5,
  },

  callBtn: {
    backgroundColor: "#E5E7EB",
    padding: 10,
    borderRadius: 10,
  },

  zoomControls: {
    position: "absolute",
    right: 20,
    top: 220,
  },

  zoomBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
