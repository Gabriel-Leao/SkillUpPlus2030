import { useUserContext } from '@/components/context/useUserContext'
import ScreenPageContainer from '@/components/layout/ScreenPageContainer'
import ScreenPageTitle from '@/components/layout/ScreenPageTitle'
import { ROUTES } from '@/constants/routes'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  const { currentUser: user, logout, deleteUser } = useUserContext()

  if (!user) return null

  const onLogoutPressed = async () => {
    await logout()
    router.push(ROUTES.SIGN_IN.ROUTE)
  }

  const onDeletePressed = async () => {
    try {
      await deleteUser(user.id)
      router.push(ROUTES.SIGN_IN.ROUTE)
    } catch (e: any) {
      alert(e.message)
    }
  }

  return (
    <ScreenPageContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <ScreenPageTitle className='py-6'>Meu Perfil</ScreenPageTitle>

        <View className='items-center mb-8'>
          <View className='w-36 h-36 rounded-full overflow-hidden border-4 border-[#B872FF]'>
            <Image
              source={require('@assets/images/profile-pic.png')}
              className='w-full h-full'
            />
          </View>
          <Text className='text-white text-2xl font-bold mt-3'>
            {user.name}
          </Text>
          <Text className='text-gray-400 mt-1'>{user.email}</Text>
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55] mb-6'>
          <Text className='text-white font-bold text-lg mb-3'>
            Informações Pessoais
          </Text>

          <View className='flex-row items-center mb-2'>
            <FontAwesome5
              name='calendar'
              size={18}
              color='#B872FF'
            />
            <Text className='text-gray-300 text-base ml-2'>
              Idade: {user.age} anos
            </Text>
          </View>

          <View className='flex-row items-center mb-2'>
            <FontAwesome5
              name='venus-mars'
              size={18}
              color='#B872FF'
            />
            <Text className='text-gray-300 text-base ml-2'>
              Sexo: {user.sex}
            </Text>
          </View>

          <View className='flex-row items-center mb-2'>
            <MaterialCommunityIcons
              name='target-account'
              size={20}
              color='#B872FF'
            />
            <Text className='text-gray-300 text-base ml-2'>
              Foco atual: {user.goal ?? 'Não informado'}
            </Text>
          </View>
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55] mb-6'>
          <Text className='text-white font-bold text-lg mb-3'>
            Estatísticas e Progresso
          </Text>
          <Text className='text-gray-400 mb-3'>
            Acompanhe seu desenvolvimento e veja como o aprendizado contínuo
            está impactando sua carreira.
          </Text>
          <View className='flex-row justify-between mt-2'>
            <View className='items-center'>
              <FontAwesome5
                name='book'
                size={24}
                color='#B872FF'
              />
              <Text className='text-white mt-1 font-semibold'>5</Text>
              <Text className='text-gray-400 text-xs'>Trilhas</Text>
            </View>
            <View className='items-center'>
              <FontAwesome5
                name='briefcase'
                size={24}
                color='#B872FF'
              />
              <Text className='text-white mt-1 font-semibold'>3</Text>
              <Text className='text-gray-400 text-xs'>Dicas Lidas</Text>
            </View>
            <View className='items-center'>
              <MaterialCommunityIcons
                name='clock-outline'
                size={26}
                color='#B872FF'
              />
              <Text className='text-white mt-1 font-semibold'>12h</Text>
              <Text className='text-gray-400 text-xs'>Estudo</Text>
            </View>
          </View>
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55] mb-6'>
          <Text className='text-white font-bold text-lg mb-2'>
            Sua jornada está só começando
          </Text>
          <Text className='text-gray-400'>
            Continue aprendendo e evoluindo. O futuro do trabalho é feito por
            quem busca conhecimento e propósito.
          </Text>
        </View>

        <View className='py-6 gap-4'>
          <TouchableOpacity
            onPress={onLogoutPressed}
            className='bg-[#243B55] rounded-xl py-3 flex-row items-center justify-center gap-2 border border-[#3A4B70]'>
            <FontAwesome5
              name='sign-out-alt'
              size={22}
              color='white'
            />
            <Text className='text-white font-semibold text-lg'>Sair</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onDeletePressed}
            className='bg-red-600 rounded-xl py-3 flex-row items-center justify-center gap-2'>
            <FontAwesome5
              name='trash-alt'
              size={22}
              color='white'
            />
            <Text className='text-white font-semibold text-lg'>
              Apagar conta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenPageContainer>
  )
}

export default Profile
