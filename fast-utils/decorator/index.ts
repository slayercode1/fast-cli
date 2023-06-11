import { RouteDefinition } from '../Model/RouteDefinition';

export const Get = (path: string) => {
  return (target: any, propertyKey: string): void => {
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

export const Post = (path: string) => {
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

export const BodyCorps = (): MethodDecorator => {
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

export const Res = (): MethodDecorator => {
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

export const Req = (): MethodDecorator => {
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

export const Params = (params: string): MethodDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      const param = request.params[params];
      arguments_.push(param);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const Cookies = (cookies: string): MethodDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      const cookie = request.cookies[cookies];
      arguments_.push(cookie);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const UserReq = (): MethodDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      const user = request.user;
      arguments_.push(user);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

export const Headers = (headers: string): MethodDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const originalMethod = target[propertyKey];

    target[propertyKey] = function (...arguments_: any[]) {
      const [request] = arguments_;
      const header = request.headers[headers];
      arguments_.push(header);
      return originalMethod.apply(this, arguments_);
    };

    return target;
  };
};

