import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PregnancyPatientProfile({ navigation }) {
    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#1E2A38" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Patient Profile</Text>

                <Ionicons name="ellipsis-vertical" size={22} color="#1E2A38" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* PROFILE */}
                <View style={styles.profileSection}>

                    <Image
                        source={require("../../assets/images/images.jpeg")}
                        style={styles.avatar}
                    />

                    <Text style={styles.name}>Ananya Sharma</Text>

                    <View style={styles.weekBadge}>
                        <Text style={styles.weekText}>WEEK 24</Text>
                    </View>

                    <Text style={styles.subtitle}>Pregnancy Progress</Text>

                </View>

                {/* HEALTH SUMMARY CARD */}
                <View style={styles.healthCard}>

                    <View style={styles.heartIcon}>
                        <Ionicons name="heart" size={32} color="white" />
                    </View>

                    <View style={styles.healthInfo}>
                        <Text style={styles.healthLabel}>HEALTH SUMMARY</Text>
                        <Text style={styles.healthTitle}>Stable & Healthy</Text>

                        <View style={styles.statusRow}>
                            <View style={styles.greenDot} />
                            <Text style={styles.statusText}>Current Health Status</Text>
                        </View>

                    </View>

                </View>

                {/* PERSONAL INFO TITLE */}
                <Text style={styles.sectionTitle}>Personal Information</Text>

                {/* AGE CARD */}
                <View style={styles.infoCard}>

                    <Ionicons name="person" size={22} color="#1CC4E9" />

                    <View style={styles.infoText}>
                        <Text style={styles.label}>Age</Text>
                        <Text style={styles.value}>28 Years</Text>
                    </View>

                </View>

                {/* ADDRESS CARD */}
                <View style={styles.infoCard}>

                    <Ionicons name="location" size={22} color="#1CC4E9" />

                    <View style={styles.infoText}>
                        <Text style={styles.label}>Address</Text>
                        <Text style={styles.value}>
                            H.No 452, Green Valley Apartments, Sector 12, Bengaluru
                        </Text>
                    </View>

                </View>

                {/* CONTACT CARD */}
                <View style={styles.infoCard}>

                    <Ionicons name="call" size={22} color="#1CC4E9" />

                    <View style={styles.infoText}>
                        <Text style={styles.label}>Contact</Text>
                        <Text style={styles.value}>+91 98765 43210</Text>
                    </View>

                </View>

                {/* DATE ROW */}
                <View style={styles.row}>

                    <View style={styles.smallCard}>
                        <Text style={styles.label}>Pregnancy Start</Text>
                        <Text style={styles.value}>May 12, 2023</Text>
                    </View>

                    <View style={styles.smallCard}>
                        <Text style={styles.label}>Exp. Delivery</Text>
                        <Text style={[styles.value, { color: "#1CC4E9" }]}>
                            Feb 16, 2024
                        </Text>
                    </View>

                </View>

                {/* ACTION BUTTONS */}

                <TouchableOpacity
                    style={styles.primaryBtn}
                    onPress={() => navigation.navigate("AddVisitReportScreen")}
                >
                    <MaterialIcons name="note-add" size={22} color="white" />
                    <Text style={styles.primaryText}>Add Visit Report</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryBtn}>
                    <Ionicons name="notifications" size={22} color="#1CC4E9" />
                    <Text style={styles.secondaryText}>Send Reminder</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F7FB",
        paddingTop: 55,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1E2A38",
    },

    profileSection: {
        alignItems: "center",
        marginTop: 20,
    },

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 70,
    },

    name: {
        fontSize: 26,
        fontWeight: "700",
        marginTop: 15,
        color: "#1E2A38",
    },

    weekBadge: {
        backgroundColor: "#DFF4F7",
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 20,
        marginTop: 8,
    },

    weekText: {
        color: "#1CC4E9",
        fontWeight: "700",
        letterSpacing: 1,
    },

    subtitle: {
        marginTop: 6,
        color: "#7A8A9A",
    },

    healthCard: {
        margin: 20,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "#1CC4E9",
    },

    heartIcon: {
        alignItems: "center",
        padding: 35,
    },

    healthInfo: {
        backgroundColor: "white",
        padding: 20,
    },

    healthLabel: {
        color: "#7A8A9A",
        fontWeight: "700",
        letterSpacing: 1,
    },

    healthTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 4,
    },

    statusRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },

    greenDot: {
        width: 8,
        height: 8,
        backgroundColor: "#32C48D",
        borderRadius: 5,
        marginRight: 6,
    },

    statusText: {
        color: "#7A8A9A",
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 20,
        marginTop: 10,
    },

    infoCard: {
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 12,
        padding: 16,
        borderRadius: 14,
        alignItems: "center",
    },

    infoText: {
        marginLeft: 12,
        flex: 1,
    },

    label: {
        color: "#7A8A9A",
        fontSize: 13,
    },

    value: {
        fontSize: 15,
        fontWeight: "600",
        marginTop: 2,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 15,
    },

    smallCard: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 14,
        width: "48%",
    },

    primaryBtn: {
        flexDirection: "row",
        backgroundColor: "#1CC4E9",
        margin: 20,
        padding: 16,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },

    primaryText: {
        color: "white",
        fontWeight: "700",
        marginLeft: 8,
    },

    secondaryBtn: {
        flexDirection: "row",
        backgroundColor: "#DFF4F7",
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
    },

    secondaryText: {
        color: "#1CC4E9",
        fontWeight: "700",
        marginLeft: 8,
    },

});