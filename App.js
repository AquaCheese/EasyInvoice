import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CreateInvoiceScreen from './screens/CreateInvoiceScreen';
import InvoicesScreen from './screens/InvoicesScreen';
import CustomersScreen from './screens/CustomersScreen';
import { CurrencyProvider } from './context/CurrencyContext';

const Tab = createBottomTabNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#667eea',
    primaryContainer: '#667eea20',
    secondary: '#764ba2',
    surface: '#ffffff',
    background: '#f8f9fa',
    text: '#1a1a1a',
    textSecondary: '#666666',
    border: '#e0e0e0',
    error: '#dc3545',
  },
};

function TabBarIcon({ name, color, size = 24 }) {
  return <Ionicons name={name} size={size} color={color} />;
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <CurrencyProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: theme.colors.textSecondary,
              tabBarStyle: {
                backgroundColor: theme.colors.surface,
                borderTopColor: theme.colors.border,
                elevation: 8,
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
              },
              headerStyle: {
                backgroundColor: theme.colors.primary,
                elevation: 4,
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
            }}
          >
            <Tab.Screen
              name="Create"
              component={CreateInvoiceScreen}
              options={{
                title: 'Create Invoice',
                tabBarLabel: 'Create',
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="add-circle" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Invoices"
              component={InvoicesScreen}
              options={{
                title: 'My Invoices',
                tabBarLabel: 'Invoices',
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="document-text" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Customers"
              component={CustomersScreen}
              options={{
                title: 'Customers',
                tabBarLabel: 'Customers',
                tabBarIcon: ({ color, size }) => (
                  <TabBarIcon name="people" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </CurrencyProvider>
    </PaperProvider>
  );
}