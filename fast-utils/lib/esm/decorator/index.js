export const Get = (path) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'get',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
export const Post = (path) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
export const Patch = (path) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'patch',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
export const Put = (path) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'put',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
export const Delete = (path) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'delete',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
export const BodyCorps = () => {
    return (target, propertyKey) => {
        const originalMethod = target[propertyKey];
        target[propertyKey] = function (...arguments_) {
            const [request] = arguments_;
            const body = request.body;
            arguments_.push(body);
            return originalMethod.apply(this, arguments_);
        };
        return target;
    };
};
export const Res = () => {
    return (target, propertyKey) => {
        const originalMethod = target[propertyKey];
        target[propertyKey] = function (...arguments_) {
            const [response] = arguments_;
            arguments_.push(response);
            return originalMethod.apply(this, arguments_);
        };
        return target;
    };
};
export const Req = () => {
    return (target, propertyKey) => {
        const originalMethod = target[propertyKey];
        target[propertyKey] = function (...arguments_) {
            const [request] = arguments_;
            arguments_.push(request);
            return originalMethod.apply(this, arguments_);
        };
        return target;
    };
};
export const Params = (params) => {
    return (target, propertyKey) => {
        const originalMethod = target[propertyKey];
        target[propertyKey] = function (...arguments_) {
            const [request] = arguments_;
            const param = request.params[params];
            arguments_.push(param);
            return originalMethod.apply(this, arguments_);
        };
        return target;
    };
};
//query
//Headers
