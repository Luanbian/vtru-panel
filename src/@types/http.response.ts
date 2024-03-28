export enum HttpStatusCode {
    ok = 200,
    created = 201,
    noContent = 204,
    unathorized = 401,
    badRequest = 400,
    notFound = 404,
}

export interface HttpResponse {
    statusCode: HttpStatusCode
    body?: object
}
