import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipagem para o estado do usuário
type User = {
    id: number | null;
    name: string;
    role: string;
    emoji: number;
    photo: string;
};

// Tipagem para o contexto de autenticação
type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
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
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Função para carregar o usuário do AsyncStorage ao iniciar o aplicativo
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error(
                    'Erro ao carregar usuário do AsyncStorage:',
                    error
                );
            }
        };

        // Carrega o usuário ao montar o componente
        loadUser();
    }, []);

    // Função para fazer login do usuário e armazenar no AsyncStorage
    const login = async (userData: User) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error('Erro ao salvar usuário no AsyncStorage:', error);
        }
    };

    // Função para fazer logout do usuário e limpar o AsyncStorage
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.error('Erro ao remover usuário do AsyncStorage:', error);
        }
    };

    const authContextValue: AuthContextType = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
