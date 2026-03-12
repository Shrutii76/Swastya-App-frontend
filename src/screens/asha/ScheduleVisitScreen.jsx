import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Switch
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleVisitScreen({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const [visitType, setVisitType] = useState("Home Visit");
    const [location, setLocation] = useState("Patient Home");

    const [reminder, setReminder] = useState(true);
    const [notifyType, setNotifyType] = useState("1day");

    const [notes, setNotes] = useState("");

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const formatTime = (time) => {
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#1F2937" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Schedule Visit</Text>

                <View style={{ width: 24 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* VISIT DETAILS */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>
                        <Ionicons name="calendar-outline" size={20} color="#06B6D4" />
                        <Text style={styles.sectionTitle}>Visit Details</Text>
                    </View>

                    <Text style={styles.label}>DATE</Text>

                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => setShowDate(true)}
                    >
                        <Text>{formatDate(date)}</Text>
                        <MaterialIcons name="calendar-today" size={18} />
                    </TouchableOpacity>

                    <Text style={styles.label}>TIME</Text>

                    <TouchableOpacity
                        style={styles.inputRow}
                        onPress={() => setShowTime(true)}
                    >
                        <Text>{formatTime(time)}</Text>
                        <Ionicons name="time-outline" size={18} />
                    </TouchableOpacity>

                </View>

                {/* VISIT TYPE */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>
                        <Feather name="clipboard" size={20} color="#06B6D4" />
                        <Text style={styles.sectionTitle}>Visit Type</Text>
                    </View>

                    <View style={styles.pickerBox}>
                        <Picker
                            selectedValue={visitType}
                            onValueChange={(itemValue) => setVisitType(itemValue)}
                        >
                            <Picker.Item label="Home Visit" value="Home Visit" />
                            <Picker.Item label="Routine Visit" value="Routine Visit" />
                            <Picker.Item label="Follow-up Visit" value="Follow-up Visit" />
                            <Picker.Item label="Emergency Visit" value="Emergency Visit" />
                        </Picker>
                    </View>

                </View>

                {/* LOCATION */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>
                        <Ionicons name="location-outline" size={20} color="#06B6D4" />
                        <Text style={styles.sectionTitle}>Location</Text>
                    </View>

                    <View style={styles.pickerBox}>
                        <Picker
                            selectedValue={location}
                            onValueChange={(itemValue) => setLocation(itemValue)}
                        >
                            <Picker.Item label="Patient Home" value="Patient Home" />
                            <Picker.Item label="Health Center" value="Health Center" />
                            <Picker.Item label="Clinic Visit" value="Clinic Visit" />
                        </Picker>
                    </View>

                </View>

                {/* REMINDER */}
                <View style={styles.card}>

                    <View style={styles.reminderRow}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="notifications-outline" size={20} color="#06B6D4" />
                            <Text style={styles.sectionTitle}>Reminder</Text>
                        </View>

                        <Switch
                            value={reminder}
                            onValueChange={setReminder}
                            trackColor={{ true: "#22C1DC" }}
                        />
                    </View>

                    <Text style={styles.label}>NOTIFY ME</Text>

                    <View style={styles.reminderButtons}>

                        <TouchableOpacity
                            style={[
                                styles.reminderBtn,
                                notifyType === "1day" && styles.reminderActive
                            ]}
                            onPress={() => setNotifyType("1day")}
                        >
                            <Text
                                style={[
                                    styles.reminderText,
                                    notifyType === "1day" && { color: "#fff" }
                                ]}
                            >
                                1 Day Before
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.reminderBtn,
                                notifyType === "2hours" && styles.reminderActive
                            ]}
                            onPress={() => setNotifyType("2hours")}
                        >
                            <Text
                                style={[
                                    styles.reminderText,
                                    notifyType === "2hours" && { color: "#fff" }
                                ]}
                            >
                                2 Hours Before
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

                {/* NOTES */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>
                        <Feather name="edit-2" size={20} color="#06B6D4" />
                        <Text style={styles.sectionTitle}>Notes</Text>
                    </View>

                    <TextInput
                        placeholder="Enter additional information about the visit..."
                        multiline
                        style={styles.notesInput}
                        value={notes}
                        onChangeText={setNotes}
                    />

                </View>

                {/* BUTTONS */}
                <TouchableOpacity
                    style={styles.scheduleBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.scheduleText}>Schedule Visit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

            </ScrollView>

            {/* DATE PICKER */}
            {showDate && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(e, selected) => {
                        setShowDate(false);
                        if (selected) setDate(selected);
                    }}
                />
            )}

            {/* TIME PICKER */}
            {showTime && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
                    onChange={(e, selected) => {
                        setShowTime(false);
                        if (selected) setTime(selected);
                    }}
                />
            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F7F9FB"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff"
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "600"
    },

    card: {
        backgroundColor: "#fff",
        margin: 16,
        padding: 18,
        borderRadius: 16,
        elevation: 3
    },

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 8
    },

    label: {
        fontSize: 12,
        color: "#6B7280",
        marginBottom: 6
    },

    inputRow: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },

    pickerBox: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10
    },

    reminderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    reminderButtons: {
        flexDirection: "row",
        marginTop: 10
    },

    reminderBtn: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        marginRight: 10
    },

    reminderActive: {
        backgroundColor: "#22C1DC",
        borderColor: "#22C1DC"
    },

    reminderText: {
        fontSize: 14
    },

    notesInput: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10,
        padding: 12,
        height: 100,
        textAlignVertical: "top"
    },

    scheduleBtn: {
        backgroundColor: "#22C1DC",
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: "center"
    },

    scheduleText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
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