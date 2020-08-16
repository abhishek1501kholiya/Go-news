class User{
    constructor(){
        this.name = "";
        this.index = null;
        this.comments = "";
        this.caption = "";
        this.post = "";
    }
   // updateCount(count){
     //   database.ref('/').update({
       //   playerCount: count
       // });
     // }
    
      update(){
        var userIndex = "Users/user" + this.index;
        database.ref(userIndex).set({
          name :  this.name
          
        });
        
      }
}