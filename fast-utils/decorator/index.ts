import {RouteDefinition} from '../Model/RouteDefinition';

export const Get = (path = '') => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({
      requestMethod: 'get',
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export const Post = (path = '') => {
  return (target: any, propertyKey: string): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({
      requestMethod: 'post',
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export const Patch = (path: string) => {
  return (target: any, propertyKey: string): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({
      requestMethod: 'patch',
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export const Put = (path: string) => {
  return (target: any, propertyKey: string): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({
      requestMethod: 'put',
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export const Delete = (path: string) => {
  return (target: any, propertyKey: string): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }
    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
    routes.push({
      requestMethod: 'delete',
      path,
      methodName: propertyKey,
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export const BodyCorps = () => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      const body = request.body;
      arguments_.push(body);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const Res = () => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [response] = arguments_;
      arguments_.push(response);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const Req = () => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      arguments_.push(request);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const Params = (params: string) => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      arguments_[parameterIndex] = request.params[params];
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const CookieSession = () => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request, response] = arguments_;
      const ssid = request.signedCookies.ssid;
      return ssid ? originalMethod.apply(this, arguments_) : response.status(401).send('Not Authorized');
    };

    return target;
  };
};

//Todo: a test


export const Next = () => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [next] = arguments_;
      arguments_.push(next);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

