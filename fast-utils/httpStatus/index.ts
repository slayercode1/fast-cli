export const HttpCode = (code: number) =>{
  return function (target: any, propertyKey: any, descriptor: any) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      this.res.status(code);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
};