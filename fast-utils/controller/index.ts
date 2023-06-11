import 'reflect-metadata';
import express, {NextFunction, Response} from 'express';
import {RouteDefinition} from '../Model/RouteDefinition';

export function configureRoutes(app: any, controllers: any[]) {
  for (const Controller of controllers) {
    const instance = new Controller();
    const prefix = Reflect.getMetadata('prefix', Controller);
    const routes: RouteDefinition[] = Reflect.getMetadata('routes', Controller);

    for (const route of routes) {
      const method = route.requestMethod.toLowerCase();
      const path = prefix + route.path;

      app[method](path, (req: express.Request, res: express.Response) => {
        instance[route.methodName](req, res);
      });
    }
  }
}

export const Controller = (prefix = ''): ClassDecorator => {
  return (target: any) => {
    Reflect.defineMetadata('prefix', prefix, target);

    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }
  };
};


// export const JwtMiddleware = (): ClassDecorator => {
//   return (target: any) => {
//     Reflect.defineMetadata('middleware', jwtMiddlewareFunction, target);
//
//     if (!Reflect.hasMetadata('routes', target)) {
//       Reflect.defineMetadata('routes', [], target);
//     }
//   };
// };


//Todo: a Verifier
export const JwtMiddleware = (): MethodDecorator & ClassDecorator => {
  return (target: any, propertyKey?: string | symbol) => {
    if (propertyKey) {
      const routes = Reflect.getMetadata('routes', target.constructor) || [];
      routes.push(propertyKey);
      Reflect.defineMetadata('routes', routes, target.constructor);
      Reflect.defineMetadata('middleware', jwtMiddlewareFunction, target, propertyKey);
    } else {
      Reflect.defineMetadata('middleware', jwtMiddlewareFunction, target);
      if (!Reflect.hasMetadata('routes', target)) {
        Reflect.defineMetadata('routes', [], target);
      }
    }
  };
};

const jwtMiddlewareFunction = (request:Request , response:Response, next: NextFunction) => {
  // Votre logique de middleware JWT ici
  console.log('Jwt Guard activated');
  return next();
};

