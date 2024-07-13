class MyArray{
    constructor(){
        this.length=0;
        this.data={};

    }
    //Access to the data
    get(index){
        return this.data[index];
    }

    //push method for inserting the data into the array 

    push(element){
        this.data[this.length]=element;
        return this.length++;
    }

    //pop method for reomoving the data from the array

    pop(){
        const item = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--;
        return item;
    }


    //delete the data from the specific index

    delete(index){
        const item = this.data[this.length-1];
        
        this.shiftItem(index);
    }

    shiftItem(index){
        let length = this.length-1;
        for(let i= index;i<length;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1]
    }

}

let obj =new MyArray();
obj.push(45);
obj.push('vinayak');
obj.push('ahswini');
obj.push('sunita');

obj.push(45);
obj.push('HI');


obj.pop();

obj.delete(2)
console.log(obj)

