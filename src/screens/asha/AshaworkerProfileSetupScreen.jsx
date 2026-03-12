import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AshaWorkerProfileSetupScreen({ navigation }) {

    const [image, setImage] = useState(null);

    const [name, setName] = useState("");
    const [ashaId, setAshaId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const [dob, setDob] = useState(new Date());
    const [showDobPicker, setShowDobPicker] = useState(false);

    const [joiningDate, setJoiningDate] = useState(new Date());
    const [showJoinPicker, setShowJoinPicker] = useState(false);

    const [village, setVillage] = useState("");
    const [block, setBlock] = useState("");
    const [district, setDistrict] = useState("");
    const [phc, setPhc] = useState("");

    const [experience, setExperience] = useState("");
    const [households, setHouseholds] = useState("");

    const [showGenderDropdown, setShowGenderDropdown] = useState(false);

    const pickImage = async () => {

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        navigation.replace("Dashboard");
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("en-GB");
    };

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* HEADER */}

                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={24} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.headerTitle}>Complete Your Profile</Text>
                        <Text style={styles.subtitle}>
                            Please provide your details to continue
                        </Text>
                    </View>
                </View>

                {/* PROFILE PHOTO */}

                <View style={styles.photoSection}>

                    <View style={styles.photoWrapper}>

                        <Image
                            source={
                                image
                                    ? { uri: image }
                                    : require("../../assets/images/images.jpeg")
                            }
                            style={styles.avatar}
                        />

                        <TouchableOpacity style={styles.cameraBtn} onPress={pickImage}>
                            <Ionicons name="camera" size={18} color="#fff" />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.changePhoto}>Tap to change photo</Text>

                </View>

                {/* PERSONAL INFO */}

                <Text style={styles.sectionTitle}>Personal Information</Text>

                <InputField
                    icon="person"
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName}
                />

                <InputField
                    icon="card"
                    placeholder="Enter 10-digit ID"
                    value={ashaId}
                    onChangeText={setAshaId}
                />

                <InputField
                    icon="call"
                    placeholder="+91 00000 00000"
                    value={phone}
                    onChangeText={setPhone}
                />

                <InputField
                    icon="mail"
                    placeholder="name@email.com"
                    value={email}
                    onChangeText={setEmail}
                />



                {/* DOB */}

                <TouchableOpacity
                    style={styles.inputBox}
                    onPress={() => setShowDobPicker(true)}
                >
                    <Ionicons name="calendar" size={18} color="#94A3B8" />
                    <Text style={styles.dropdownText}>{formatDate(dob)}</Text>
                </TouchableOpacity>

                {showDobPicker && (
                    <DateTimePicker
                        value={dob}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowDobPicker(false);
                            if (selectedDate) setDob(selectedDate);
                        }}
                    />
                )}

                {/* WORK AREA */}

                <Text style={styles.sectionTitle}>Work Area Information</Text>

                <InputField
                    icon="location"
                    placeholder="Search Village"
                    value={village}
                    onChangeText={setVillage}
                />

                <InputField
                    icon="business"
                    placeholder="Enter Block"
                    value={block}
                    onChangeText={setBlock}
                />

                <InputField
                    icon="map"
                    placeholder="Enter District"
                    value={district}
                    onChangeText={setDistrict}
                />

                <InputField
                    icon="medkit"
                    placeholder="Assigned PHC"
                    value={phc}
                    onChangeText={setPhc}
                />

                {/* PROFESSIONAL */}

                <Text style={styles.sectionTitle}>Professional Information</Text>

                <InputField
                    icon="briefcase"
                    placeholder="Years of Experience"
                    value={experience}
                    onChangeText={setExperience}
                />

                {/* JOIN DATE */}

                <TouchableOpacity
                    style={styles.inputBox}
                    onPress={() => setShowJoinPicker(true)}
                >
                    <Ionicons name="calendar" size={18} color="#94A3B8" />
                    <Text style={styles.dropdownText}>{formatDate(joiningDate)}</Text>
                </TouchableOpacity>

                {showJoinPicker && (
                    <DateTimePicker
                        value={joiningDate}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowJoinPicker(false);
                            if (selectedDate) setJoiningDate(selectedDate);
                        }}
                    />
                )}

                <InputField
                    icon="home"
                    placeholder="Households Covered"
                    value={households}
                    onChangeText={setHouseholds}
                />

                {/* SAVE BUTTON */}

                <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => navigation.navigate("Dashboard")}
                >
                    <Text style={styles.saveText}>Save & Continue</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}

function InputField({ icon, placeholder, value, onChangeText }) {
    return (
        <View style={styles.inputBox}>
            <Ionicons name={icon} size={18} color="#94A3B8" />
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F6F8",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "700",
    },

    subtitle: {
        fontSize: 12,
        color: "#6B7280",
    },

    photoSection: {
        alignItems: "center",
        marginBottom: 10,
    },

    photoWrapper: {
        position: "relative",
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 60,
    },

    cameraBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#1CC4E9",
        padding: 8,
        borderRadius: 20,
    },

    changePhoto: {
        color: "#1CC4E9",
        marginTop: 6,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 8,
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 20,
        paddingHorizontal: 12,
        borderRadius: 10,
        height: 50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        justifyContent: "space-between",
    },

    input: {
        flex: 1,
        marginLeft: 10,
    },

    dropdownText: {
        flex: 1,
        marginLeft: 10,
        color: "#374151",
    },

    dropdown: {
        marginHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    dropdownItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#E5E7EB",
    },

    saveBtn: {
        backgroundColor: "#1CC4E9",
        margin: 20,
        borderRadius: 12,
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },

    saveText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

});