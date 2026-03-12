import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AddVaccinationPatientScreen({ navigation }) {

    const [type, setType] = useState("child");

    return (

        <View style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={26} color="#1F2A37" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Add Vaccination Patient</Text>

                <View style={styles.headerIcon}>
                    <Ionicons name="person-add-outline" size={22} color="#22B6D3" />
                </View>

            </View>

            {/* TABS */}

            <View style={styles.tabs}>

                <TouchableOpacity
                    style={[styles.tab, type === "child" && styles.activeTab]}
                    onPress={() => setType("child")}
                >
                    <Text style={[styles.tabText, type === "child" && styles.activeTabText]}>
                        Child
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, type === "pregnancy" && styles.activeTab]}
                    onPress={() => setType("pregnancy")}
                >
                    <Text style={[styles.tabText, type === "pregnancy" && styles.activeTabText]}>
                        Pregnancy
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, type === "general" && styles.activeTab]}
                    onPress={() => setType("general")}
                >
                    <Text style={[styles.tabText, type === "general" && styles.activeTabText]}>
                        General
                    </Text>
                </TouchableOpacity>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* CHILD FORM */}

                {type === "child" && (

                    <>

                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>CHILD INFORMATION</Text>

                            <Text style={styles.label}>Child Name</Text>
                            <TextInput placeholder="Enter child name" style={styles.input} />

                            <View style={styles.row}>

                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={styles.label}>Date of Birth</Text>

                                    <View style={styles.dateInput}>
                                        <TextInput placeholder="mm/dd/yyyy" style={{ flex: 1 }} />
                                        <MaterialIcons name="calendar-today" size={18} color="#7B8794" />
                                    </View>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.label}>Age</Text>
                                    <TextInput placeholder="2 years" style={styles.input} />
                                </View>

                            </View>

                        </View>


                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>GUARDIAN INFORMATION</Text>

                            <Text style={styles.label}>Mother Name</Text>
                            <TextInput placeholder="Enter mother name" style={styles.input} />

                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput placeholder="+91 00000 00000" keyboardType="phone-pad" style={styles.input} />

                            <Text style={styles.label}>Village / Address</Text>
                            <TextInput placeholder="Enter address" style={[styles.input, { height: 70 }]} multiline />

                        </View>


                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>VACCINATION DETAILS</Text>

                            <Text style={styles.label}>Select Vaccine</Text>

                            <View style={styles.dropdown}>
                                <Text style={{ color: "#6B7280" }}>BCG / OPV / DPT / Measles</Text>
                                <Ionicons name="chevron-down" size={20} color="#6B7280" />
                            </View>

                            <View style={styles.row}>

                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={styles.label}>Dose Number</Text>
                                    <TextInput placeholder="01" style={styles.input} />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.label}>Next Due Date</Text>

                                    <View style={styles.dateInput}>
                                        <TextInput placeholder="mm/dd/yyyy" style={{ flex: 1 }} />
                                        <MaterialIcons name="calendar-today" size={18} color="#7B8794" />
                                    </View>

                                </View>

                            </View>

                            <Text style={styles.label}>Notes</Text>
                            <TextInput placeholder="Additional remarks" style={styles.input} />

                        </View>

                    </>

                )}

                {/* PREGNANCY FORM */}

                {type === "pregnancy" && (

                    <>

                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>MOTHER INFORMATION</Text>

                            <Text style={styles.label}>Mother Name</Text>
                            <TextInput placeholder="Enter mother name" style={styles.input} />

                            <Text style={styles.label}>Husband Name</Text>
                            <TextInput placeholder="Enter husband name" style={styles.input} />

                            <View style={styles.row}>

                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={styles.label}>Age</Text>
                                    <TextInput placeholder="Enter age" style={styles.input} />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.label}>Pregnancy Month</Text>
                                    <TextInput placeholder="Example: 5 months" style={styles.input} />
                                </View>

                            </View>

                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput placeholder="+91 00000 00000" keyboardType="phone-pad" style={styles.input} />

                            <Text style={styles.label}>Village / Address</Text>
                            <TextInput placeholder="Enter address" style={[styles.input, { height: 70 }]} multiline />

                        </View>


                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>PREGNANCY VACCINE</Text>

                            <Text style={styles.label}>Select Vaccine</Text>

                            <View style={styles.dropdown}>
                                <Text style={{ color: "#6B7280" }}>TT1 / TT2 / Booster</Text>
                                <Ionicons name="chevron-down" size={20} color="#6B7280" />
                            </View>

                            <Text style={styles.label}>Expected Delivery Date</Text>

                            <View style={styles.dateInput}>
                                <TextInput placeholder="mm/dd/yyyy" style={{ flex: 1 }} />
                                <MaterialIcons name="calendar-today" size={18} color="#7B8794" />
                            </View>

                            <Text style={styles.label}>Notes</Text>
                            <TextInput placeholder="Remarks" style={styles.input} />

                        </View>

                    </>

                )}

                {/* GENERAL FORM */}

                {type === "general" && (

                    <>

                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>PATIENT INFORMATION</Text>

                            <Text style={styles.label}>Patient Name</Text>
                            <TextInput placeholder="Enter patient name" style={styles.input} />

                            <View style={styles.row}>

                                <View style={{ flex: 1, marginRight: 10 }}>
                                    <Text style={styles.label}>Age</Text>
                                    <TextInput placeholder="Enter age" style={styles.input} />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.label}>Gender</Text>
                                    <TextInput placeholder="Male / Female" style={styles.input} />
                                </View>

                            </View>

                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput placeholder="+91 00000 00000" keyboardType="phone-pad" style={styles.input} />

                            <Text style={styles.label}>Village / Address</Text>
                            <TextInput placeholder="Enter address" style={[styles.input, { height: 70 }]} multiline />

                        </View>


                        <View style={styles.card}>

                            <Text style={styles.sectionTitle}>VACCINATION DETAILS</Text>

                            <Text style={styles.label}>Select Vaccine</Text>

                            <View style={styles.dropdown}>
                                <Text style={{ color: "#6B7280" }}>Rabies / Covid / Hepatitis / Tetanus</Text>
                                <Ionicons name="chevron-down" size={20} color="#6B7280" />
                            </View>

                            <Text style={styles.label}>Vaccination Date</Text>

                            <View style={styles.dateInput}>
                                <TextInput placeholder="mm/dd/yyyy" style={{ flex: 1 }} />
                                <MaterialIcons name="calendar-today" size={18} color="#7B8794" />
                            </View>

                            <Text style={styles.label}>Dose Number</Text>
                            <TextInput placeholder="Dose 1 / Dose 2" style={styles.input} />

                            <Text style={styles.label}>Notes</Text>
                            <TextInput placeholder="Remarks" style={styles.input} />

                        </View>

                    </>

                )}

                <View style={{ height: 120 }} />

                <View style={styles.bottomButtons}>

                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.saveBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="save-outline" size={18} color="#fff" />
                        <Text style={styles.saveText}>Save Patient</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            {/* BUTTONS */}



        </View>

    );
}

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#F4F6F8" },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 10
    },

    headerTitle: { fontSize: 18, fontWeight: "700", color: "#1F2A37" },

    headerIcon: { backgroundColor: "#E6F7FA", padding: 8, borderRadius: 30 },

    tabs: {
        flexDirection: "row",
        backgroundColor: "#E9EEF2",
        marginHorizontal: 20,
        borderRadius: 12,
        padding: 4,
        marginBottom: 10
    },

    tab: { flex: 1, paddingVertical: 8, alignItems: "center", borderRadius: 10 },

    activeTab: { backgroundColor: "#fff" },

    tabText: { color: "#6B7280", fontWeight: "600" },

    activeTabText: { color: "#22B6D3" },

    card: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 14,
        padding: 16
    },

    sectionTitle: {
        fontSize: 13,
        fontWeight: "700",
        color: "#7B8794",
        marginBottom: 12
    },

    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 6,
        color: "#374151"
    },

    input: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#fff"
    },

    dateInput: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12
    },

    dropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 14,
        marginBottom: 12
    },

    row: { flexDirection: "row" },

    bottomButtons: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        width: "100%",
        padding: 16,
        marginBottom: 20,
        backgroundColor: "#F4F6F8"
    },

    cancelBtn: {
        flex: 1,
        backgroundColor: "#E5E7EB",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        marginRight: 10
    },

    cancelText: { fontWeight: "600", color: "#4B5563" },

    saveBtn: {
        flex: 1.5,
        flexDirection: "row",
        backgroundColor: "#22B6D3",
        padding: 16,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    saveText: { color: "#fff", fontWeight: "700", marginLeft: 6 }

});