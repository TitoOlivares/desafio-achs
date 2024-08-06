import { render, screen } from '@testing-library/react';
import { IoCContext } from '../ioc/IoCProvider';
import useDependency from '../hooks/useDependency';
import IoCContainer from '../ioc/IoCContainer';

// Componente de prueba para usar el hook
const TestComponent: React.FC<{ token: string | symbol }> = ({ token }) => {
  const dependency = useDependency<any>(token);
  return <div>{dependency ? dependency.value : 'No service found'}</div>;
};

describe('IoC Container', () => {
  it('resolves a registered dependency', () => {
    const TOKEN = 'myDependency';
    const dependency = { value: 'test' };
    const container = IoCContainer();
    container.register(TOKEN, dependency);

    render(
      <IoCContext.Provider value={container}>
        <TestComponent token={TOKEN} />
      </IoCContext.Provider>
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('returns null for an unregistered dependency', () => {
    const TOKEN = 'unregisteredDependency';
    const container = IoCContainer();

    render(
      <IoCContext.Provider value={container}>
        <TestComponent token={TOKEN} />
      </IoCContext.Provider>
    );

    expect(screen.getByText('No service found')).toBeInTheDocument();
  });
});
