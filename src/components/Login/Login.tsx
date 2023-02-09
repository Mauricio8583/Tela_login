import { useForm } from "react-hook-form"
import { Container, Form, FormButton, FormField, Title } from "./Styles"
import { defaultValues, IFormLogin } from "./Types"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo Obrigatorio"),
  password: yup.string().min(6, "No minimo 6 caracteres").required("Campo Obrigatorio")
}).required();

export const Login = () => {

   const {register, formState: {errors, isValid} } = useForm({
     resolver: yupResolver(schema),
     mode: 'onBlur',
     defaultValues,
     reValidateMode: 'onChange' });

     console.log(isValid)
     
  return (
    <Container>
        <Title>Login</Title>
        <Form>
            <FormField type="text" placeholder="E-mail" {...register('email')} />
            <FormField type="password" placeholder="Senha" {...register('password')} />
            <FormButton type="submit" disabled={!isValid}>Entrar</FormButton>
        </Form>
    </Container>
  )
}
