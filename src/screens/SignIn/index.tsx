import React, {useState} from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from '@hooks/auth';

import brandImg from '@assets/brand.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { 
    Container, 
    Content, 
    Title, 
    Brand, 
    ForgotPasswordButton, 
    ForgotPasswordLabel 
} from './styles';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, isLogging, forgotPassword } = useAuth();

    function handleSignIn(){        
        signIn(email, password);
    }

    function handleForgotPassword(){        
        forgotPassword(email);
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Content>

                    <Brand source={brandImg} />

                    <Title>Login</Title>

                    <Input
                        placeholder='E-mail'
                        type='secondary'
                        autoCorrect={false} // Não deixar a auto correção ativa
                        autoCapitalize="none" // Não deixar implementar a primeira letra maiúscula sozinho
                        onChangeText={setEmail}
                    />

                    <Input
                        placeholder='Senha'
                        type='secondary'
                        secureTextEntry
                        onChangeText={setPassword}
                    />

                    <ForgotPasswordButton onPress={handleForgotPassword}>
                        <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button
                        title='Entrar'
                        type='secondary'
                        onPress={handleSignIn}
                        isLoading={isLogging}
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}