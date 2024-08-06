import React from 'react';
import DependencyProvider from '../ioc/IoCProvider';
import useDependency from '../hooks/useDependency';

interface MyService {
  getMessage: () => string;
}

const MyServiceComponent: React.FC = () => {
  const myService = useDependency<MyService>('myService');
  return <div>{myService ? myService.getMessage() : 'No service found'}</div>;
};

const App: React.FC = () => {
  const dependencies = {
    myService: {
      getMessage: () => 'Hello from myService!',
    },
  };

  return (
      <DependencyProvider dependencies={dependencies}>
        <MyServiceComponent />
      </DependencyProvider>
  );
};

export default App;
