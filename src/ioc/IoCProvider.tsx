import React, { createContext, ReactNode } from 'react';
import IoCContainer from './IoCContainer';

interface DependencyProviderProps {
  children: ReactNode;
  dependencies: Record<string, any>;
}

export const IoCContext = createContext(IoCContainer());

const DependencyProvider: React.FC<DependencyProviderProps> = ({ children, dependencies }) => {
  const localContainer = IoCContainer();
  
  for (const [token, instance] of Object.entries(dependencies)) {
    localContainer.register(token, instance);
  }

  return (
    <IoCContext.Provider value={localContainer}>
      {children}
    </IoCContext.Provider>
  );
};

export default DependencyProvider;