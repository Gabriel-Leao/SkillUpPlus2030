import ScreenPageContainer from '@/components/layout/ScreenPageContainer'
import ScreenPageTitle from '@/components/layout/ScreenPageTitle'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { ScrollView, Text, View } from 'react-native'

export default function CareerTips() {
  return (
    <ScreenPageContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <ScreenPageTitle className='py-6'>Dicas de Carreira</ScreenPageTitle>

        <Text className='text-gray-300 text-base text-center mb-8'>
          Construa um futuro profissional sólido com base em propósito,
          aprendizado e evolução constante.
        </Text>

        <View className='gap-5'>
          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='user-graduate'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Aprenda Sempre
            </Text>
            <Text className='text-gray-400'>
              Profissionais que mantêm o hábito de aprender têm mais destaque e
              adaptabilidade no mercado.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='hands-helping'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Construa Networking
            </Text>
            <Text className='text-gray-400'>
              Relacionamentos profissionais podem abrir portas, gerar
              oportunidades e impulsionar sua carreira.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='lightbulb'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Desenvolva Soft Skills
            </Text>
            <Text className='text-gray-400'>
              Comunicação, empatia e criatividade são habilidades que
              diferenciam profissionais de alto desempenho.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='chart-line'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Planeje o Crescimento
            </Text>
            <Text className='text-gray-400'>
              Crie um plano de carreira realista e alinhe seus objetivos
              pessoais e profissionais.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='clock'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Gerencie Seu Tempo
            </Text>
            <Text className='text-gray-400'>
              Saber priorizar tarefas e equilibrar trabalho e vida pessoal é
              essencial para o sucesso sustentável.
            </Text>
          </View>

          <View className='bg-[#0D1B2A] p-5 rounded-2xl border border-[#243B55]'>
            <FontAwesome5
              name='rocket'
              size={26}
              color='#B872FF'
            />
            <Text className='text-white font-bold text-lg mt-3 mb-1'>
              Inove Sempre
            </Text>
            <Text className='text-gray-400'>
              Não espere o futuro chegar. Seja protagonista, proponha ideias e
              busque novos caminhos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenPageContainer>
  )
}
