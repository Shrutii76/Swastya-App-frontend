import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddVisitRecordScreen({ navigation }) {

    const [visitType, setVisitType] = useState("Routine Visit");
    const [symptom, setSymptom] = useState("Fever");

    const [bp, setBp] = useState("");
    const [weight, setWeight] = useState("");
    const [temperature, setTemperature] = useState("");
    const [pulse, setPulse] = useState("");
    const [notes, setNotes] = useState("");

    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowCalendar(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#111827" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Add Visit Record</Text>

                <View style={{ width: 24 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* VISIT INFORMATION */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>VISIT INFORMATION</Text>

                    <Text style={styles.label}>Visit Date</Text>

                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => setShowCalendar(true)}
                    >
                        <Text style={styles.dateText}>{formatDate(date)}</Text>
                        <MaterialIcons name="calendar-today" size={20} color="#94A3B8" />
                    </TouchableOpacity>

                    <Text style={styles.label}>Visit Type</Text>

                    <View style={styles.pickerBox}>
                        <Picker
                            selectedValue={visitType}
                            style={styles.picker}
                            mode="dropdown"
                            onValueChange={(itemValue) => setVisitType(itemValue)}
                        >
                            <Picker.Item label="Home Visit" value="Home Visit" />
                            <Picker.Item label="Routine Visit" value="Routine Visit" />
                            <Picker.Item label="Follow-up Visit" value="Follow-up Visit" />
                            <Picker.Item label="Emergency Visit" value="Emergency Visit" />
                        </Picker>
                    </View>

                </View>

                {/* HEALTH MEASUREMENTS */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>HEALTH MEASUREMENTS</Text>

                    <View style={styles.row}>

                        <View style={styles.halfInput}>
                            <Text style={styles.label}>Blood Pressure</Text>
                            <TextInput
                                placeholder="120/80"
                                style={styles.input}
                                value={bp}
                                onChangeText={setBp}
                            />
                        </View>

                        <View style={styles.halfInput}>
                            <Text style={styles.label}>Weight (kg)</Text>
                            <TextInput
                                placeholder="65"
                                style={styles.input}
                                keyboardType="numeric"
                                value={weight}
                                onChangeText={setWeight}
                            />
                        </View>

                    </View>

                    <View style={styles.row}>

                        <View style={styles.halfInput}>
                            <Text style={styles.label}>Temperature (°F)</Text>
                            <TextInput
                                placeholder="98.6"
                                style={styles.input}
                                keyboardType="numeric"
                                value={temperature}
                                onChangeText={setTemperature}
                            />
                        </View>

                        <View style={styles.halfInput}>
                            <Text style={styles.label}>Pulse (bpm)</Text>
                            <TextInput
                                placeholder="72"
                                style={styles.input}
                                keyboardType="numeric"
                                value={pulse}
                                onChangeText={setPulse}
                            />
                        </View>

                    </View>

                </View>

                {/* SYMPTOMS */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>SYMPTOMS</Text>

                    <View style={styles.pickerBox}>
                        <Picker
                            selectedValue={symptom}
                            style={styles.picker}
                            mode="dropdown"
                            onValueChange={(itemValue) => setSymptom(itemValue)}
                        >
                            <Picker.Item label="Fever" value="Fever" />
                            <Picker.Item label="Headache" value="Headache" />
                            <Picker.Item label="Cough" value="Cough" />
                            <Picker.Item label="Weakness" value="Weakness" />
                            <Picker.Item label="Vomiting" value="Vomiting" />
                            <Picker.Item label="Dizziness" value="Dizziness" />
                        </Picker>
                    </View>

                </View>

                {/* NOTES */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>NOTES</Text>

                    <TextInput
                        placeholder="Enter additional notes..."
                        multiline
                        numberOfLines={4}
                        style={styles.notesInput}
                        value={notes}
                        onChangeText={setNotes}
                    />

                </View>

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="save-outline" size={20} color="#fff" />
                    <Text style={styles.saveText}>Save Record</Text>
                </TouchableOpacity>

                {/* CANCEL BUTTON */}
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

            </ScrollView>

            {/* CALENDAR */}
            {showCalendar && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                    maximumDate={new Date()}
                />
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
        paddingTop: 15
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#fff"
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111827"
    },

    card: {
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 14,
        elevation: 3
    },

    sectionTitle: {
        color: "#1CC4E9",
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 12
    },

    label: {
        fontSize: 14,
        color: "#374151",
        marginBottom: 6
    },

    inputRow: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },

    dateText: {
        fontSize: 16,
        color: "#111827"
    },

    pickerBox: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        backgroundColor: "#F9FAFB",
        overflow: "hidden",
        marginBottom: 12
    },

    picker: {
        height: 50,
        width: "100%"
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    halfInput: {
        width: "48%"
    },

    input: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#F9FAFB"
    },

    notesInput: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 12,
        height: 100,
        textAlignVertical: "top",
        backgroundColor: "#F9FAFB"
    },

    saveBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1CC4E9",
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        marginTop: 10
    },

    saveText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 8
    },

    cancelBtn: {
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#E5E7EB",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40
    },

    cancelText: {
        fontSize: 16,
        color: "#374151"
    }

});