class HashMap{
     constructor(){
        this.size=6
        this.bucket=new Array(this.size).fill(null);
        this.loadFactor=0.85;
        this.occupied=this.load();
     }
     load(){
        const length=this.length;
        if (length / this.bucket.length >= this.loadFactor) {
            this.size = this.size * 2;
            const oldArr = [...this.bucket];
            this.bucket = oldArr.concat(new Array(this.size).fill(null));
    }
        return length;
     }
     check(index){
        if(index<0 || index>=this.bucket.length()){
            throw new Error(`Trying to access index ${value}, which is out of bound`);
        }
     }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key,value){
        const hashCode=this.hash(key);
        if(!this.bucket[hashCode]){
            this.bucket=[];
        }
        this.bucket.push(hashCode,value)
        this.load()

    }
    get(key){
        const hashCode=this.hash(key)
        if(!this.bucket[hashCode]) return null;
        return this.bucket[hashCode]
    }
    has(key){
        const hashCode=this.hash(key)
        if(!this.bucket[hashCode]) return false;
        return true;
    }
    length(){
        let sum=0;
        this.bucket.forEach(i=>{
            if (this.bucket[i]!=null) sum++;
        })
        return sum;
    }
    clears(){
        this.bucket=[];
    }
    values(){
        let str=""
        this.bucket.forEach(i=>{
             str+=this.bucket[i]+","
        })
        return str;
    }
    remove(key) {
    if (!this.bucket[key]) return false;

    this.bucket.splice(key, 1);
    this.load();
    return true;
  }
  entries() {
    let array = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        array.push([i, this.bucket[i]]);
      }
    }
    return array;
  }
}
