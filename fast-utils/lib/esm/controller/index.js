import 'reflect-metadata';
export function configureRoutes(app, controllers) {
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
export const Controller = (prefix = '') => {
    return (target) => {
        Reflect.defineMetadata('prefix', prefix, target);
        if (!Reflect.hasMetadata('routes', target)) {
            Reflect.defineMetadata('routes', [], target);
        }
    };
};
export const applyMiddleware = (app, middleware) => {
    middleware.map((mw) => {
        app.use(mw);
    });
};
