"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = exports.Controller = exports.configureRoutes = void 0;
require("reflect-metadata");
function configureRoutes(app, controllers) {
    for (const Controller of controllers) {
        const instance = new Controller();
        const prefix = Reflect.getMetadata('prefix', Controller);
        const routes = Reflect.getMetadata('routes', Controller);
        for (const route of routes) {
            const method = route.requestMethod.toLowerCase();
            const path = prefix + route.path;
            app[method](path, (req, res) => {
                instance[route.methodName](req, res);
            });
        }
    }
}
exports.configureRoutes = configureRoutes;
const Controller = (prefix = '') => {
    return (target) => {
        Reflect.defineMetadata('prefix', prefix, target);
        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    };
};
exports.Controller = Controller;
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
const JwtMiddleware = () => {
    return (target, propertyKey) => {
        if (propertyKey) {
            const routes = Reflect.getMetadata('routes', target.constructor) || [];
            routes.push(propertyKey);
            Reflect.defineMetadata('routes', routes, target.constructor);
            Reflect.defineMetadata('middleware', jwtMiddlewareFunction, target, propertyKey);
        }
        else {
            Reflect.defineMetadata('middleware', jwtMiddlewareFunction, target);
            if (!Reflect.hasMetadata('routes', target)) {
                Reflect.defineMetadata('routes', [], target);
            }
        }
    };
};
exports.JwtMiddleware = JwtMiddleware;
const jwtMiddlewareFunction = (request, response, next) => {
    // Votre logique de middleware JWT ici
    console.log('Jwt Guard activated');
    return next();
};
