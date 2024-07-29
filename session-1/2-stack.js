class Stack{
    constructor(){
        //Index = -1 when stack is empty
        this.index = -1
        this.stack_items = []
    }

    push(item){
        //Catches non string inputs
        if (typeof item !== 'string'){
            console.log("Input is not a string.")
            return ""
        }
        this.index = this.index + 1
        this.stack_items[this.index] = item
        console.log(item + " inserted to stack.")
    }

    pop(){
        //Catches pop command when stack is empty
        if (this.stack_items.length == 0){
            console.log("Stack is empty!")
            return
        }
        let item = this.stack_items[this.index] 
        //Cuts last index in array
        this.stack_items = this.stack_items.slice(0,this.index)
        this.index = this.index - 1
        console.log(item + " removed from stack.")
        //returns popped item in array
        return item
    }

    check(){
        if (this.stack_items.length == 0) console.log("Stack is empty!")
        else console.log(this.stack_items)
    }


}

//Test
const stack = new Stack()
stack.push(123123)
stack.check()
stack.push("Milk")
stack.check()
stack.push("Eggs")
stack.check() // ['Milk','Eggs']
stack.pop()
stack.check() //['Milk']
stack.pop() //[]
stack.pop() //'Stack empty'

//For loop test
stack.check()
for(let i = 0; i < 10; i++){
    stack.push(String(i))
    stack.check()
}

for(let i = 0; i<10;i++){
    stack.pop()
    stack.check()
}
