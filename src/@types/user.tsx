export type User = {
  id: string
  name: string
  email: string
  age: number
  goal?:
    | 'Conseguir meu primeiro emprego'
    | 'Crescer na carreira'
    | 'Mudar de área'
    | 'Aprender novas habilidades'
    | 'Melhorar produtividade'
  sex: 'Masculino' | 'Feminino'
  password: string
}
