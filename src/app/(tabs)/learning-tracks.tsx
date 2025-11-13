import ScreenPageContainer from '@/components/layout/ScreenPageContainer'
import ScreenPageTitle from '@/components/layout/ScreenPageTitle'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { ScrollView, Text, View } from 'react-native'

export default function LearningTracks() {
  return (
    <ScreenPageContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <ScreenPageTitle className='py-6'>
          Trilhas de Aprendizado
        </ScreenPageTitle>

        <Text className='text-gray-300 text-base text-center mb-8'>
          Explore caminhos de conhecimento que unem tecnologia, criatividade e
          habilidades humanas.
        </Text>

        <View className='gap-5'>
          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='laptop-code'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Desenvolvimento de Software
            </Text>
            <Text className='text-gray-400'>
              Aprenda a construir soluções digitais e dominar frameworks
              modernos para o mercado global.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='brain'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Inteligência Artificial
            </Text>
            <Text className='text-gray-400'>
              Entenda como algoritmos e aprendizado de máquina moldam o futuro
              do trabalho e da inovação.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='users'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Liderança e Gestão
            </Text>
            <Text className='text-gray-400'>
              Desenvolva habilidades de gestão humanizada e liderança em
              ambientes digitais e colaborativos.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='cloud'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Computação em Nuvem
            </Text>
            <Text className='text-gray-400'>
              Domine AWS, Azure e Google Cloud e aprenda a projetar soluções
              escaláveis e seguras.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='chart-pie'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Análise de Dados
            </Text>
            <Text className='text-gray-400'>
              Use dados para tomar decisões inteligentes e criar estratégias
              baseadas em evidências.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='palette'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Design e Criatividade
            </Text>
            <Text className='text-gray-400'>
              Desenvolva pensamento visual, UX/UI e storytelling para comunicar
              ideias de forma impactante.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenPageContainer>
  )
}
