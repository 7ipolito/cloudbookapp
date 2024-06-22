import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipagem para o contexto de autenticação
type AuthContextType = {
  userId: number | null;
  login: (userId: number) => void;
  logout: () => void;
};

// Criando o contexto do Auth
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para acessar o contexto do Auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provedor do contexto do Auth
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    // Função para carregar o userId do AsyncStorage ao iniciar o aplicativo
    const loadUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          setUserId(Number(storedUserId));
        }
      } catch (error) {
        console.error('Erro ao carregar usuário do AsyncStorage:', error);
      }
    };

    // Carrega o userId ao montar o componente
    loadUserId();
  }, []);

  // Função para fazer login do usuário e armazenar no AsyncStorage
  const login = async (userId: number) => {
    try {
      await AsyncStorage.setItem('userId', String(userId));
      setUserId(userId);
    } catch (error) {
      console.error('Erro ao salvar usuário no AsyncStorage:', error);
    }
  };

  // Função para fazer logout do usuário e limpar o AsyncStorage
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      setUserId(null);
    } catch (error) {
      console.error('Erro ao remover usuário do AsyncStorage:', error);
    }
  };

  const authContextValue: AuthContextType = {
    userId,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
