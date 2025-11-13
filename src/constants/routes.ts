import { Href } from 'expo-router'


export const ROUTES = {
  HOME: {
    ROUTE: '/' as Href,
    LABEL: 'Home',
    NAME: 'index',
    ICON: 'home'
  },
  LEARNING_TRACKS: {
    ROUTE: '/learning-tracks' as Href,
    LABEL: 'Trilhas',
    NAME: 'learning-tracks',
    ICON: 'graduation-cap',
  },
  CAREER_TIPS: {
    ROUTE: '/career-tips' as Href,
    LABEL: 'Dicas',
    NAME: 'career-tips',
    ICON: 'lightbulb',
  },
  PROFILE: {
    ROUTE: '/profile' as Href,
    LABEL: 'Perfil',
    NAME: 'profile',
    ICON: 'user-alt'
  },
  SIGN_IN: {
    ROUTE: '/sign-in' as Href,
    LABEL: 'Login',
    NAME: 'sign-in'
  },
  SIGN_UP: {
    ROUTE: '/sign-up' as Href,
    LABEL: 'Criar Conta',
    NAME: 'sign-up',
  }
} as const

