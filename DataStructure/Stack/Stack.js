/*
 * @author Sagar D B (DropCodes)
 * Github: github.com/imdropcodes
 * Date: 03/01/2020
 * 
 * Implementing Stack using Array
 * 
 * Stack : 
 * It is a DataStructure. Which user LIFO (Last In First Out) ordering,
 * most recently added item into stack will removed first,
 * At starting stack top will be pointing to -1
 * 
 * there are 4 function of stack:
 * 
 * pop() : Remove top top item of the stack.
 * push(item): Add the item into top of the stack.
 * peek(): Return the top item of the stack.
 * isEmpty(): it return true only if stack is empty ie top pointing to -1.
 * 
 */

class Stack{
    
    constructor(){
        this.array = [];
    }

	// Pushing an Element into stack
    push(element){
        this.array.push(element);
    }
    // Pop an Element from stack
    pop(){
        if(this.array.length == 0){
            return "Stack UnderFlow";
        }else{
            return this.array.pop();
        }
    }
    // return the top element of stack
    peek(){
        return this.array[this.array.length - 1];
    }
    // this check if stck is empty
    isEmpty(){
        return this.array.length == 0;
    }

    // For printing stack element
    printStack(){
        let res = " ";
        for(let i = 0; i < this.array.length ; i++ ){
            res = res + this.array[i]+ " ";
        }
        return res;
    }
}