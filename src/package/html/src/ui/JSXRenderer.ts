interface AttributeNormalization {
    [attributeName: string]: string
}

interface StateHeapCache {
    [stateHeapPtr: string]: any;
}

class JSXRenderer {

    stateHeapCache: StateHeapCache = {};

    protected attrNormalizations: AttributeNormalization = {
        classname: 'class'
    };

    protected stateHeapPtr: number = 0;

    constructor(protected _nativeCreateElement: Function) {
    }

    protected normalizeAttributeName(name: string): string {
        return this.attrNormalizations[name.toLowerCase()] || name;
    }

    protected getStateHeapPtr(): string {
        return 'state-' + (++(<any>window).React.stateHeapPtr);
    }

    protected appendChild(child: string|number|boolean|Node|Array<Node>, element: Node) {

        let childToAppend = child;

        console.log('child', child);

        if (child instanceof Node) {

            childToAppend = child;

        } else if (
            typeof child == 'string' ||
            typeof child == 'number' ||
            typeof child == 'boolean'
        ) {

            childToAppend = document.createTextNode(child.toString());

        } else if (child instanceof Array) {

            // Array of Node
            // TODO: Array of any other type?
            child.forEach((childNode: Node) => {
                this.appendChild(childNode, element);
            });
            return element;
        }

        if (childToAppend instanceof Node) {

            return element.appendChild(
                childToAppend
            )
        }
    };

    nativeCreateElement(tagName: string, nativeOptions?: any): Element {
        return this._nativeCreateElement(tagName, nativeOptions);
    }

    createElement(name: string, attributes?: any, ...children: Array<any>) {

        attributes = attributes || {};

        const nativeOptions = !!attributes.is ? { is: attributes.is } : undefined;

        delete attributes.is;

        const element: any = this.nativeCreateElement(name, nativeOptions);

        // content attributes vs IDL attributes have many cases
        Object.entries(attributes).forEach(([name, value]) => {

            // set event handler
            if (name.startsWith('on')) {

                element.addEventListener(name.substring(2, name.length), value);

                console.log('element', element, name);

            } else if (typeof value !== 'string') {

                const stateHeapPtr = this.getStateHeapPtr();

                this.stateHeapCache[stateHeapPtr] = value;

                element.setAttribute(name, stateHeapPtr);

            } else {

                // set string HTML attribute
                element.setAttribute(this.normalizeAttributeName(name), value);
            }
        });

        children
            .filter(child => !(child == null || typeof child == 'undefined'))
            .forEach((child) => {
                return this.appendChild(child, element);
            });

        return element;
    }
}

// implement React JSX rendering API (used globally by TypeScript compiler --jsx emitted code)
(<any>window).React = new JSXRenderer(
    document.createElement.bind(document)
);

document.createElement = (<any>window).React.createElement.bind((<any>window).React);