class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
    pop(value) {
        this.top = - 1;
        this.items[this.top] = 0;
    }
}

describe('My Stack', () => {
    let stack;

    //initialize stack before each test
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        //const stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('5');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('5');

        stack.push('🌽');
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('🌽');
    });

    it('can pop off', () => {
        stack.pop('5');
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(0);
    });
})