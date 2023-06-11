import 'reflect-metadata';
export declare function configureRoutes(app: any, controllers: any[]): void;
export declare const Controller: (prefix?: string) => ClassDecorator;
export declare const JwtMiddleware: () => MethodDecorator & ClassDecorator;
