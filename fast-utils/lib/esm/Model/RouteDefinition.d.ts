export type RouteDefinition = {
    path: string;
    requestMethod: 'get' | 'post' | 'delete' | 'options' | 'put' | 'patch';
    methodName: string;
};
