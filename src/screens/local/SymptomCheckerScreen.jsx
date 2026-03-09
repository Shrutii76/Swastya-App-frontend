import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SymptomCheckerScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [selected, setSelected] = useState([]);

  const symptoms = [
    {
      id: "fever",
      icon: <FontAwesome5 name="thermometer-half" size={18} color="#F97316" />,
      bg: "#FEF3C7",
    },
    {
      id: "cough",
      icon: <FontAwesome5 name="wind" size={18} color="#3B82F6" />,
      bg: "#DBEAFE",
    },
    {
      id: "aches",
      icon: <FontAwesome5 name="running" size={18} color="#EF4444" />,
      bg: "#FEE2E2",
    },
    {
      id: "throat",
      icon: (
        <MaterialIcons name="record-voice-over" size={20} color="#8B5CF6" />
      ),
      bg: "#F3E8FF",
    },
    {
      id: "breath",
      icon: <FontAwesome5 name="lungs" size={18} color="#06B6D4" />,
      bg: "#E0F2FE",
    },
    {
      id: "fatigue",
      icon: <MaterialIcons name="bedtime" size={20} color="#F59E0B" />,
      bg: "#FEF9C3",
    },
  ];

  const toggleSymptom = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const SymptomCard = ({ item }) => {
    const active = selected.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.card, active && styles.cardActive]}
        onPress={() => toggleSymptom(item.id)}
      >
        <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
          {item.icon}
        </View>

        <Text style={styles.symptomText}>{t(item.id)}</Text>

        {active ? (
          <View style={styles.checkedBox}>
            <Ionicons name="checkmark" size={16} color="#fff" />
          </View>
        ) : (
          <View style={styles.checkbox} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#0F172A" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{t("symptomChecker")}</Text>

          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#0F172A"
          />
        </View>

        {/* TITLE */}
        <Text style={styles.title}>{t("howFeeling")}</Text>

        <Text style={styles.subtitle}>{t("symptomSubtitle")}</Text>

        {/* SYMPTOMS */}
        {symptoms.map((item) => (
          <SymptomCard key={item.id} item={item} />
        ))}

        {/* RESULT BOX */}
        <View style={styles.resultBox}>
          <View style={styles.resultIcon}>
            <Ionicons name="bar-chart" size={24} color="#06B6D4" />
          </View>

          <Text style={styles.resultTitle}>{t("assessmentResult")}</Text>

          <Text style={styles.resultText}>{t("analysisPlaceholder")}</Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{t("analyzeSymptoms")}</Text>
          <Ionicons name="arrow-forward" size={20} color="#0F172A" />
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  cardActive: {
    borderWidth: 2,
    borderColor: "#06B6D4",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  symptomText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#06B6D4",
    borderRadius: 6,
  },

  checkedBox: {
    width: 22,
    height: 22,
    backgroundColor: "#06B6D4",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  resultBox: {
    marginTop: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#BEE3F8",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },

  resultIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#E0F2FE",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  resultTitle: {
    fontWeight: "700",
    fontSize: 18,
  },

  resultText: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 6,
  },

  button: {
    backgroundColor: "#1CC4E9",
    padding: 18,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});
