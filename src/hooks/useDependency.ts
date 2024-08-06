import { useContext } from 'react';
import { IoCContext } from '../ioc/IoCProvider';

const useDependency = <T>(token: string | symbol): T | null => {
  const container = useContext(IoCContext);
  return container.resolve<T>(token);
};

export default useDependency;