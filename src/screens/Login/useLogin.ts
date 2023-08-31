import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';

interface IDataProps {
  email: string;
  password: string;
}
export const useLogin = () => {
  const {navigate} = useNavigation();

  const schema = yup.object({
    email: yup
      .string()
      .required('Email obrigatório')
      .email('Insira um email válido'),
    password: yup.string().required('Digite sua senha'),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<IDataProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IDataProps) => {
    console.log('data', data);
    navigate('Home' as never);
    reset();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    Controller,
    errors,
  };
};
