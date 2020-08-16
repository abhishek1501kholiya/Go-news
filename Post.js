class Post {
    constructor(){
        this.name = createElement('h1');
        this.comment = createInput('Comments');
        this.caption = createElement('h2');
        this.post
    }
    hide(){
        this.body.hide();
        this.comment.hide();
        this.caption.hide();

    }
  displayImage(row,image){ 
  image.getDownloadURL().then(function(url){ console.log(url.toString()); 
   var Postname = image.name.split(".")[0]; 
   var modURL = "https://cors-anywhere.herokuapp.com/"+url;
    tab = createImg(modURL,"test"); 
   tab.position(30,row-100); tab.style("width","100px");
   tab.style("height","100px"); //readCriminals(Postname,row);
 });
 }
 store(){
     database  = firebase.database();
     var storageRef = firebase.storage().ref();
      //lists the images and displays it with a proper gap between them 
      storageRef.child('/').listAll().
      then(function(result){  
      result.items.forEach(function(imageRef){ 
      console.log(imageRef.toString()); 
      i+=150; 
      displayImage(i,imageRef);
     }); 
    });
 }
    }