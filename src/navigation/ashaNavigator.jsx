import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/asha/Dashboard";

import VaccinationTracker from "../screens/asha/VaccinationTracker";
import CriticalPatientProfile from "../screens/asha/CriticalPatientProfile";

import PatientsScreen from "../screens/asha/PatientsScreen";
import AddPatientScreen from "../screens/asha/AddPatientScreen";
import PatientProfileScreen from "../screens/asha/PatientProfileScreen";
``

import PregnancyListScreen from "../screens/asha/PregnancyListScreen";
import AddPregnantWomanScreen from "../screens/asha/AddPregnantWomanScreen";
import PregnancyPatientProfile from "../screens/asha/PregnancyPatientProfile";
import AddVisitReportScreen from "../screens/asha/AddVisitReportScreen";
import AddVaccinationPatientScreen from "../screens/asha/AddVaccinationPatientScreen";
import UpdateStatusScreen from "../screens/asha/UpdateStatusScreen";
import CriticalAlertsListScreen from "../screens/asha/CriticalAlertsListScreen";
import AddVisitRecordScreen from "../screens/asha/AddVisitRecordScreen";
import ScheduleVisitScreen from "../screens/asha/ScheduleVisitScreen";
import AshaworkerProfileScreen from "../screens/asha/AshaworkerProfileScreen";
import AshaworkerProfileSetupScreen from "../screens/asha/AshaworkerProfileSetupScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AshaWorkerProfileSetupScreen"
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />

        <Stack.Screen
          name="PatientRegistration"
          component={PatientsScreen}
        />

        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
        />

        <Stack.Screen
          name="PatientProfile"
          component={PatientProfileScreen}
        />



        {/* Pregnancy Monitoring */}
        <Stack.Screen
          name="PregnancyMonitoring"
          component={PregnancyListScreen}
        />

        {/* ⭐ Add Pregnant Woman Screen */}
        <Stack.Screen
          name="AddPregnantWoman"
          component={AddPregnantWomanScreen}
        />

        <Stack.Screen
          name="VaccinationTracker"
          component={VaccinationTracker}
        />

        <Stack.Screen
          name="CriticalPatientProfile"
          component={CriticalPatientProfile}
        />




        <Stack.Screen
          name="PregnancyPatientProfile"
          component={PregnancyPatientProfile}
        />

        <Stack.Screen
          name="AddVisitReportScreen"
          component={AddVisitReportScreen}
        />

        <Stack.Screen
          name="AddVaccinationPatientScreen"
          component={AddVaccinationPatientScreen}
        />

        <Stack.Screen
          name="UpdateStatusScreen"
          component={UpdateStatusScreen}
          options={{ headerShown: false }}
        />

        {/* Critical Alerts Screen */}
        <Stack.Screen name="CriticalAlertsListScreen"
          component={CriticalAlertsListScreen} />

        <Stack.Screen
          name="AddVisitRecordScreen"
          component={AddVisitRecordScreen}
        />

        
        <Stack.Screen
          name="ScheduleVisitScreen"
          component={ScheduleVisitScreen}
        />

        <Stack.Screen
        name="AshaworkerProfileScreen"
        component={AshaworkerProfileScreen}
      />

      
        <Stack.Screen
        name="AshaworkerProfileSetupScreen"
        component={AshaworkerProfileSetupScreen}
      />



      </Stack.Navigator>
    </NavigationContainer>
  );
}