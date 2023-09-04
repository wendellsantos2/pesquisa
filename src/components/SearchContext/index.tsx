// Importando as dependências necessárias do React.
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo a forma (interface) do contexto. Isso ajuda com a verificação de tipos em TypeScript.
interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Definindo a forma das props para o componente provedor (SearchProvider).
interface SearchProviderProps {
  children: ReactNode;
}

// Criando o contexto React. O tipo é definido com base na interface acima.
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// Hook personalizado para usar o contexto Search. Isso torna mais fácil de usar.
export const useSearch = () => {
  // Utilizando o hook useContext para acessar o estado e os métodos do contexto.
  const context = useContext(SearchContext);
  // Verificando se o hook está sendo usado dentro de um componente que é "embrulhado" pelo SearchProvider.
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context; // Retornando o contexto para ser usado no componente.
};

// Componente provedor. Este componente envolverá partes da aplicação que necessitam de acesso ao contexto.
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  // Definindo o estado local. Nesse caso, o estado é uma string que representa a consulta de pesquisa.
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Retornando o provedor do contexto que envolve os filhos e passa o estado e o setter como valor do contexto.
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children} {/* Renderizando todos os componentes filhos que são passados para este componente. */}
    </SearchContext.Provider>
  );
};
