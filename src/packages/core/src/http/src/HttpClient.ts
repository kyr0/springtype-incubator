
export const JSON = (r: Response): any => {
    return r.json();
};


export const PLAIN_TEXT =  (r: Response): any => {
    return r.text();
};


export class AbortablePromise<T> implements Promise<T> {

    readonly [Symbol.toStringTag]: string;

    constructor(private abortSignal: AbortController, public promise: Promise<T>) {

    }


    catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): AbortablePromise<T | TResult> {
        return new AbortablePromise(this.abortSignal,this.promise.catch(onrejected));
    }

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): AbortablePromise<TResult1 | TResult2> {
      return  new AbortablePromise(this.abortSignal,this.promise.then(onfulfilled, onrejected));
    }

    abort() {
        this.abortSignal.abort();
    }
}

export const send = (request: RequestInfo, mapper: (response: Response) => any = JSON): AbortablePromise<any> => {
    const abortController = new AbortController();
    const response = fetch(request, {signal: abortController.signal}).then(mapper);
    return new AbortablePromise(abortController, response);
};

