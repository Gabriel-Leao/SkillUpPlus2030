import { useUserContext } from '@/components/context/useUserContext'
import { ROUTES } from '@/constants/routes'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router, Tabs } from 'expo-router'
import { useEffect } from 'react'

export default function TabsLayout() {
  const { currentUser } = useUserContext()

  useEffect(() => {
    if (!currentUser) {
      router.push(ROUTES.SIGN_IN.ROUTE)
    }
  }, [currentUser])

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#021123',
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: '#B872FF',
        tabBarInactiveTintColor: '#FFFFFF',
      }}>
      <Tabs.Screen
        name={ROUTES.HOME.NAME}
        options={{
          title: ROUTES.HOME.LABEL,
          tabBarIcon: () => (
            <FontAwesome5
              name={ROUTES.HOME.ICON}
              size={24}
              color='white'
            />
          ),
        }}
      />

      <Tabs.Screen
        name={ROUTES.LEARNING_TRACKS.NAME}
        options={{
          title: ROUTES.LEARNING_TRACKS.LABEL,
          tabBarIcon: () => (
            <FontAwesome5
              name={ROUTES.LEARNING_TRACKS.ICON}
              size={24}
              color='white'
            />
          ),
        }}
      />

      <Tabs.Screen
        name={ROUTES.CAREER_TIPS.NAME}
        options={{
          title: ROUTES.CAREER_TIPS.LABEL,
          tabBarIcon: () => (
            <FontAwesome5
              name={ROUTES.CAREER_TIPS.ICON}
              size={24}
              color='white'
            />
          ),
        }}
      />

      <Tabs.Screen
        name={ROUTES.PROFILE.NAME}
        options={{
          title: ROUTES.PROFILE.LABEL,
          tabBarIcon: () => (
            <FontAwesome5
              name={ROUTES.PROFILE.ICON}
              size={24}
              color='white'
            />
          ),
        }}
      />
    </Tabs>
  )
}
