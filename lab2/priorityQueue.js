
class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor()
    {
        this.items = [];
    }


    push(element, priority)
    {
        let qElement = new QElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    pop()
    {
        return this.items.shift();
    }

    printPQueue()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i].element + " " + this.items[i].priority;
        return str;
    }

}
let priorityQueue = new PriorityQueue();

priorityQueue.push("Sumit", 1);
priorityQueue.push("Gourav", 4);
priorityQueue.push("Piyush", 1);
priorityQueue.push("Sunny", 2);
priorityQueue.push("Sheru", 3);

console.log(priorityQueue.printPQueue());


console.log(priorityQueue.pop().element);
console.log(priorityQueue.pop().element);

priorityQueue.push("Sunil", 2);

console.log(priorityQueue.printPQueue());
