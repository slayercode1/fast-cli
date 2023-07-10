import 'reflect-metadata';
import express from 'express';
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

export const applyMiddleware = (app: any, middleware: any[]) =>{
  middleware.map((mw) => {
    app.use(mw);
  });
};

