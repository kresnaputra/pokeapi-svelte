export const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon";

interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

export default async function HttpRequest<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
        request
    );
    response.parsedBody = await response.json();
    return response;
}
