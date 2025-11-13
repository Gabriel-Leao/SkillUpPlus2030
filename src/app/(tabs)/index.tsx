import { useUserContext } from '@/components/context/useUserContext'
import ScreenPageContainer from '@/components/layout/ScreenPageContainer'
import ScreenPageTitle from '@/components/layout/ScreenPageTitle'
import { ROUTES } from '@/constants/routes'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Index = () => {
  const { currentUser } = useUserContext()

  return (
    <ScreenPageContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <ScreenPageTitle className='text-2xl text-center py-6'>
          Olá, {currentUser?.name}
        </ScreenPageTitle>
        <Text className='text-gray-400 mb-6 text-center'>
          Bem-vindo ao{' '}
          <Text className='text-[#B872FF] font-semibold'>
            Futuro do Trabalho.
          </Text>{' '}
          explore como aprendizado e tecnologia estão moldando as profissões de
          amanhã.
        </Text>

        <Text className='text-gray-100 text-xl text-center font-bold mb-2'>
          O Futuro Começa com Conhecimento
        </Text>

        <Image
          source='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200'
          className='w-full h-52 rounded-2xl mb-8'
        />

        <View className='flex-row justify-between mb-8'>
          <TouchableOpacity
            onPress={() => router.push(ROUTES.LEARNING_TRACKS.ROUTE)}
            className='bg-[#0D1B2A] w-[48%] p-5 rounded-2xl items-center justify-center border border-[#243B55]'>
            <FontAwesome5
              name='book-open'
              size={28}
              color='#B872FF'
            />
            <Text className='text-white font-semibold mt-2 text-center'>
              Trilhas de Aprendizado
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push(ROUTES.CAREER_TIPS.ROUTE)}
            className='bg-[#0D1B2A] w-[48%] p-5 rounded-2xl items-center justify-center border border-[#243B55]'>
            <FontAwesome5
              name='briefcase'
              size={28}
              color='#B872FF'
            />
            <Text className='text-white font-semibold mt-2 text-center'>
              Dicas de Carreira
            </Text>
          </TouchableOpacity>
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl mb-6 border border-[#243B55]'>
          <Text className='text-white font-bold text-lg mb-2'>
            Mercado em Transformação
          </Text>
          <Text className='text-gray-400 mb-3'>
            Automação, IA e trabalho remoto estão redefinindo carreiras.
            Adapte-se desenvolvendo novas habilidades e aprendendo
            continuamente.
          </Text>
          <FontAwesome5
            name='robot'
            size={22}
            color='#B872FF'
          />
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl mb-6 border border-[#243B55]'>
          <Text className='text-white font-bold text-lg mb-2'>
            Trabalho Remoto e Colaborativo
          </Text>
          <Text className='text-gray-400 mb-3'>
            Equipes distribuídas exigem domínio de ferramentas digitais e
            comunicação clara. O futuro é híbrido e conectado.
          </Text>
          <FontAwesome5
            name='globe'
            size={22}
            color='#B872FF'
          />
        </View>

        <View className='bg-[#0D1B2A] p-5 rounded-2xl mb-6 border border-[#243B55]'>
          <Text className='text-white font-bold text-lg mb-2'>
            Equilíbrio e Propósito
          </Text>
          <Text className='text-gray-400 mb-3'>
            As novas gerações buscam sentido no trabalho. Qualidade de vida e
            propósito agora importam tanto quanto o salário.
          </Text>
          <FontAwesome5
            name='balance-scale'
            size={22}
            color='#B872FF'
          />
        </View>

        <ScreenPageTitle className='mb-4 mt-8'>
          Tendências do Futuro
        </ScreenPageTitle>
        <View className='gap-5'>
          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <MaterialCommunityIcons
              name='brain'
              size={28}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-2'>
              Inteligência Artificial e Criatividade
            </Text>
            <Text className='text-gray-400 mt-1'>
              A IA está se tornando uma parceira na criação de soluções, não
              apenas uma ferramenta de automação.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <MaterialCommunityIcons
              name='laptop'
              size={28}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-2'>
              Aprendizado Contínuo
            </Text>
            <Text className='text-gray-400 mt-1'>
              Atualizar-se constantemente é essencial para acompanhar as
              mudanças do mercado e manter-se relevante.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <MaterialCommunityIcons
              name='earth'
              size={28}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-2'>
              Sustentabilidade e Ética
            </Text>
            <Text className='text-gray-400 mt-1'>
              Empresas buscam profissionais conscientes do impacto social e
              ambiental de suas ações.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenPageContainer>
  )
}

export default Index
