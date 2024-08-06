type Token = string | symbol;

const IoCContainer = () => {
  const dependencies = new Map<Token, any>();

  const register = <T>(token: Token, instance: T): void => {
    dependencies.set(token, instance);
  };

  const resolve = <T>(token: Token): T | null => {
    return dependencies.get(token) || null;
  };

  return {
    register,
    resolve,
  };
};

export default IoCContainer;