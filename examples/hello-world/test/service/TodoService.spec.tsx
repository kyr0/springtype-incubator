import {TestSuite} from "../../../../src/package/test";
import {Test} from "../../../../src/package/test";
import {TodoService} from "../../src/service/TodoService";
import {Component} from "../../../../src/package/di";
import {ITodoItem} from "../../src/state/ITodoState";

@TestSuite
export class TodoServiceTest extends TodoService {

    @Test({
        returns: [{
            id: 1,
            text: "Foo"
        }, {
            id: 2,
            text: "Bar"
        }]
    })
    getTodos(): Array<ITodoItem> {
        return super.getTodos();
    }

    @Test({
        params: [1],
        returns: {
            id: 1,
            text: "Foo"
        }
    })
    @Test({
        params: [2],
        returns: {
            id: 2,
            text: "Bar"
        }
    })
    getById(id: number): ITodoItem {
        return super.getById(id);
    }
}

@Component
class whatever2 {

    calc(n: number, n2: number): number {
        return n + n2;
    }
}

class whatever2Test extends whatever2 {

    @Test({
        params: [2, 2],
        returns: 4
    })
    calc(n: number, n2: number): number {
        return super.calc(n, n2);
    }
}

@TestSuite
class whatever {

    constructor(private whatEver: whatever2Test) {}

    @Test({
        params: ['foo'],
        returns: 'foo4'
    })
    testFoo(text: string): string {
        return `${text}${this.whatEver.calc(2,2)}`;
    }
}