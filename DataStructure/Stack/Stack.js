class Stack{
    
    constructor(){
        this.array = [];
    }

    push(element){
        this.array.push(element);
    }
    pop(){
        if(this.array.length == 0){
            return "Stack UnderFlow";
        }else{
            return this.array.pop();
        }
    }
    peek(){
        return this.array[this.array.length - 1];
    }
    isEmpty(){
        return this.array.length == 0;
    }

    printStack(){
        let res = " ";
        for(let i = 0; i < this.array.length ; i++ ){
            res = res + this.array[i]+ " ";
        }
        return res;
    }
}