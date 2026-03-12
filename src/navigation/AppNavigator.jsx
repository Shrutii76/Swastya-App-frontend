import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Dashboard from "../screens/Dashboard";
import LanguageScreen from "../screens/auth/LanguageScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OtpScreen from "../screens/auth/OtpScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import RoleSelectionScreen from "../screens/auth/RoleSelectionScreen";
import SplashScreen from "../screens/common/SplashScreen";
import AlertsScreen from "../screens/local/AlertsScreen";
import AppointmentbookingListScreen from "../screens/local/AppointbookingListScreen";
import AppointmentBookingScreen from "../screens/local/AppointmentBookingScreen";
import ConsultDoctorScreen from "../screens/local/ConsultDoctorScreen";
import HealthRecordsScreen from "../screens/local/HealthRecordsScreen";
import HomeScreen from "../screens/local/HomeScreen";
import NearbyHealthcareScreen from "../screens/local/NearbyHealthcareScreen";
import ProfileScreen from "../screens/local/ProfileScreen";
import ProfileSetupScreen from "../screens/local/ProfileSetupScreen";
import RemindersScreen from "../screens/local/RemindersScreen";
import SosScreen from "../screens/local/SosScreen";
import SymptomCheckerScreen from "../screens/local/SymptomCheckerScreen";
import PHCProfileSetupScreen from "../screens/phc/PHCprofilesetupScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />

        <Stack.Screen name="Language" component={LanguageScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Otp" component={OtpScreen} />

        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />

        <Stack.Screen name="Role" component={RoleSelectionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SOS" component={SosScreen} />
        <Stack.Screen name="SymptomChecker" component={SymptomCheckerScreen} />
        <Stack.Screen name="NearbyClinics" component={NearbyHealthcareScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="ConsultDoctor" component={ConsultDoctorScreen} />
        <Stack.Screen name="HealthRecords" component={HealthRecordsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="AppointmentBooking"
          component={AppointmentBookingScreen}
        />
        <Stack.Screen
          name="AppointmentBookingList"
          component={AppointmentbookingListScreen}
        />
        <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
        <Stack.Screen
          name="PHCprofileSetup"
          component={PHCProfileSetupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
