
export  interface RequestInitial extends RequestInit{
    mapper: (response: Response) => any;
}


export const JSON = (r: Response): any => {
    return r.json();
};


export const PLAIN_TEXT = (r: Response): any => {
    return r.text();
};

export class AbortablePromise<T> implements Promise<T> {

    readonly [Symbol.toStringTag]: string;

    constructor(private abortSignal: AbortController, public promise: Promise<T>) {

    }

    catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): AbortablePromise<T | TResult> {
        return new AbortablePromise(this.abortSignal, this.promise.catch(onrejected));
    }

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): AbortablePromise<TResult1 | TResult2> {
        return new AbortablePromise(this.abortSignal, this.promise.then(onfulfilled, onrejected));
    }

    abort() {
        this.abortSignal.abort();
    }
}

export const send = <T>(request: RequestInfo, init: RequestInitial = {mapper: JSON}): AbortablePromise<T> => {
    const abortController = new AbortController();
    const promise = fetch(request, {... init, signal: abortController.signal})
        .then(init.mapper)
        .then(v => v as T);
    return new AbortablePromise(abortController, promise);
};

