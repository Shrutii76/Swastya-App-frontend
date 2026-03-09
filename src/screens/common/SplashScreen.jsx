import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  const [progress, setProgress] = useState(68);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Language");
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Circle */}
      <View>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Title */}

      {/* Subtitle */}
      <Text style={styles.subtitle}>Community Healthcare for All</Text>

      {/* Initialising */}
      <View style={styles.initRow}>
        <View>
          <Text style={styles.initTitle}>INITIALISING</Text>
          <Text style={styles.initText}>Securing Connection...</Text>
        </View>

        <Text style={styles.percent}>{progress}%</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.powered}>POWERED BY SWASTYA NETWORK</Text>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.active]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F7",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: "#D4D8F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#E8F3F6",
  },

  logo: {
    width: 500,
    height: 500,
    resizeMode: "contain",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 60,
  },

  initRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  initTitle: {
    fontSize: 12,
    letterSpacing: 2,
    color: "#94A3B8",
    marginBottom: 4,
  },

  initText: {
    fontSize: 16,
    color: "#0F172A",
  },

  percent: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0EA5E9",
  },

  progressBar: {
    width: "100%",
    height: 8,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
    marginTop: 14,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#1CC4E9",
  },

  footer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },

  powered: {
    fontSize: 12,
    color: "#94A3B8",
    marginBottom: 10,
  },

  dots: {
    flexDirection: "row",
    gap: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
  },

  active: {
    backgroundColor: "#1CC4E9",
  },
});
