
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function UpdateStatusScreen({ navigation, route }) {

    // SAFE PARAMS
    const name = route?.params?.name || "";
    const vaccine = route?.params?.vaccine || "";

    const [patientName, setPatientName] = useState(name);
    const [patientVaccine, setPatientVaccine] = useState(vaccine);
    const [status, setStatus] = useState("completed");

    return (

        <View style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Update Status</Text>

                <View style={{ width: 24 }} />

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* GENERAL PATIENT FORM */}

                <View style={styles.card}>

                    <Text style={styles.title}>Information</Text>

                    <Text>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={patientName}
                        onChangeText={setPatientName}
                        placeholder="Enter Patient Name"
                    />

                    <Text>Vaccine</Text>
                    <TextInput
                        style={styles.input}
                        value={patientVaccine}
                        onChangeText={setPatientVaccine}
                        placeholder="Enter Vaccine"
                    />

                </View>

                {/* STATUS */}

                <View style={styles.card}>

                    <Text style={styles.title}>Status</Text>

                    <View style={styles.statusRow}>

                        <TouchableOpacity
                            style={[
                                styles.statusBtn,
                                status === "completed" && styles.activeStatus
                            ]}
                            onPress={() => setStatus("completed")}
                        >
                            <Text style={status === "completed" ? styles.activeText : null}>
                                Completed
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.statusBtn,
                                status === "postponed" && styles.activeStatus
                            ]}
                            onPress={() => setStatus("postponed")}
                        >
                            <Text style={status === "postponed" ? styles.activeText : null}>
                                Postponed
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.statusBtn,
                                status === "missed" && styles.activeStatus
                            ]}
                            onPress={() => setStatus("missed")}
                        >
                            <Text style={status === "missed" ? styles.activeText : null}>
                                Missed
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ height: 120 }} />

            </ScrollView>

            {/* BUTTONS */}

            <View style={styles.bottom}>

                <TouchableOpacity
                    style={styles.updateBtn}
                    onPress={() =>
                        navigation.navigate("VaccinationTracker", {
                            updated: true
                        })
                    }
                >
                    <Text style={{ color: "#fff", fontWeight: "600" }}>
                        Update Status
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F7FB"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: 50
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "700"
    },

    card: {
        backgroundColor: "#fff",
        margin: 16,
        padding: 16,
        borderRadius: 12
    },

    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },

    statusRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    statusBtn: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        padding: 10,
        borderRadius: 8,
        width: "30%",
        alignItems: "center"
    },

    activeStatus: {
        backgroundColor: "#06B6D4",
        borderColor: "#06B6D4"
    },

    activeText: {
        color: "#fff",
        fontWeight: "600"
    },

    bottom: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 16,
        backgroundColor: "#F4F7FB"
    },

    updateBtn: {
        backgroundColor: "#06B6D4",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10
    },

    cancelBtn: {
        backgroundColor: "#E5E7EB",
        padding: 16,
        borderRadius: 10,
        alignItems: "center"
    }

});

