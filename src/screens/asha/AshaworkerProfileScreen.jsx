import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AshaWorkerProfileScreen({ navigation }) {

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => navigation.replace("AshaWorkerProfileSetupScreen")
        }
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>ASHA Worker Profile</Text>

        <TouchableOpacity
          style={styles.logoutHeader}
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" size={22} color="#EF4444" />
        </TouchableOpacity>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* PROFILE SECTION */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../assets/images/images.jpeg")}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.name}>Anjali Sharma</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>ASHA-12345</Text>
          </View>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#64748B" />
            <Text style={styles.locationText}>Rampur Village</Text>
          </View>
        </View>

        {/* STATS CARD */}
        <View style={styles.statsCard}>

          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: "#06B6D4" }]}>8+</Text>
            <Text style={styles.statLabel}>EXPERIENCE</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: "#7C3AED" }]}>150</Text>
            <Text style={styles.statLabel}>HOUSES</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: "#10B981" }]}>98%</Text>
            <Text style={styles.statLabel}>RATING</Text>
          </View>

        </View>

        {/* PERSONAL DETAILS */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <Ionicons name="person-outline" size={18} color="#06B6D4" />
            <Text style={styles.cardTitle}>Personal Details</Text>
          </View>

          <InfoRow label="Phone" value="+91 98765 43210" />
          <InfoRow label="Email" value="anjali.s@health.gov.in" />
          <InfoRow label="Gender" value="Female" />
          <InfoRow label="DOB" value="12 May 1988" />

        </View>

        {/* WORK AREA */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <Ionicons name="map-outline" size={18} color="#7C3AED" />
            <Text style={styles.cardTitle}>Work Area</Text>
          </View>

          <InfoRow label="Village" value="Rampur" />
          <InfoRow label="Block/Taluka" value="Chandni Chowk" />
          <InfoRow label="District" value="North Delhi" />
          <InfoRow label="PHC" value="Rampur Community Health" />

        </View>

        {/* PROFESSIONAL DETAILS */}
        <View style={styles.card}>

          <View style={styles.cardHeader}>
            <Ionicons name="medkit-outline" size={18} color="#06B6D4" />
            <Text style={styles.cardTitle}>Professional Details</Text>
          </View>

          <InfoRow label="Experience" value="8 Years, 4 Months" />
          <InfoRow label="Joining Date" value="15 Jan 2016" />
          <InfoRow label="Households Covered" value="150 Families" />

        </View>

      </ScrollView>
    </View>
  );
}

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FB",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  logoutHeader: {
    padding: 6,
  },

  profileSection: {
    alignItems: "center",
    marginTop: 10,
  },

  avatarContainer: {
    borderWidth: 3,
    borderColor: "#CFFAFE",
    borderRadius: 70,
    padding: 5,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  badge: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    marginTop: 6,
  },

  badgeText: {
    color: "#06B6D4",
    fontWeight: "600",
    fontSize: 12,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  locationText: {
    marginLeft: 5,
    color: "#64748B",
  },

  statsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    margin: 16,
    padding: 18,
    borderRadius: 16,
    elevation: 3,
  },

  statItem: {
    alignItems: "center",
    flex: 1,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "700",
  },

  statLabel: {
    fontSize: 10,
    marginTop: 3,
    color: "#64748B",
  },

  divider: {
    width: 1,
    backgroundColor: "#E5E7EB",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  cardTitle: {
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 15,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  infoLabel: {
    color: "#64748B",
  },

  infoValue: {
    fontWeight: "500",
  }

});