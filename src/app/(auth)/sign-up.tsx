import { useUserContext } from '@/components/context/useUserContext'
import CustomButton from '@/components/form/CustomButton'
import CustomInput from '@/components/form/CustomInput'
import CustomPicker from '@/components/form/CustomPicker'
import FormWrapper from '@/components/form/FormWrapper'
import ScreenPageContainer from '@/components/layout/ScreenPageContainer'
import ScreenPageTitle from '@/components/layout/ScreenPageTitle'
import { ROUTES } from '@/constants/routes'
import { Link, router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

type SignUpFormData = {
  name: string
  email: string
  age: number
  goal:
    | 'Conseguir meu primeiro emprego'
    | 'Crescer na carreira'
    | 'Mudar de área'
    | 'Aprender novas habilidades'
    | 'Melhorar produtividade'
  sex: 'Masculino' | 'Feminino'
  password: string
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignUpFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const { register } = useUserContext()

  const onCreatePressed = async (data: SignUpFormData) => {
    try {
      await register(data)
      router.push(ROUTES.HOME.ROUTE)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <ScreenPageContainer
      className='gap-8 pt-24'
      hideFooter={true}>
      <ScreenPageTitle>Criar conta</ScreenPageTitle>
      <FormWrapper>
        <View className='gap-3 items-center'>
          <CustomInput
            name='name'
            placeholder='Nome completo'
            control={control}
            rules={{
              required: 'Nome é obrigatório',
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/,
                message: 'Nome inválido',
              },
            }}
          />

          <CustomInput
            name='email'
            placeholder='E-mail'
            control={control}
            keyboardType='email-address'
            rules={{
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'E-mail inválido',
              },
            }}
          />

          <CustomInput
            name='password'
            placeholder='Senha'
            control={control}
            secureTextEntry={true}
            rules={{
              required: 'Senha é obrigatória',
              minLength: {
                value: 8,
                message: 'A senha deve ter no mínimo 8 caracteres',
              },
            }}
          />

          <CustomInput
            name='age'
            placeholder='Idade'
            control={control}
            keyboardType='numeric'
            rules={{
              required: 'Idade é obrigatória',
              min: {
                value: 18,
                message: 'É necessário ter no mínimo 18 anos',
              },
              max: {
                value: 120,
                message: 'Idade muito alta, verifique',
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'A idade deve conter apenas números inteiros',
              },
            }}
          />

          <CustomPicker
            control={control}
            name='sex'
            placeholder='Sexo'
            rules={{ required: 'Selecione seu sexo' }}
            options={[
              { label: 'Masculino', value: 'Masculino' },
              { label: 'Feminino', value: 'Feminino' },
            ]}
          />

          <CustomPicker
            control={control}
            name='goal'
            placeholder='Objetivo profissional'
            rules={{ required: 'Selecione seu objetivo' }}
            options={[
              {
                label: 'Conseguir meu primeiro emprego',
                value: 'Conseguir meu primeiro emprego',
              },
              { label: 'Crescer na carreira', value: 'Crescer na carreira' },
              { label: 'Mudar de área', value: 'Mudar de área' },
              {
                label: 'Aprender novas habilidades',
                value: 'Aprender novas habilidades',
              },
              {
                label: 'Melhorar produtividade',
                value: 'Melhorar produtividade',
              },
            ]}
          />

          <CustomButton
            onPress={handleSubmit(onCreatePressed)}
            disabled={!isValid}
            label='Criar conta'
          />
        </View>
      </FormWrapper>
      <Link
        href={ROUTES.SIGN_IN.ROUTE}
        className='text-[#fff] text-center pt-12'>
        Já tem conta? Faça login
      </Link>
    </ScreenPageContainer>
  )
}

export default SignUp
