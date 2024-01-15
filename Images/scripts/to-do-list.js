const newArray = ['eat','sleep','pray'];
    
    render();
   
    function render(){
      let htmlElement = '';
      for( let index = 0; index < newArray.length; index++){
        let todo = newArray[index];
        let html = `<p>${todo}</p>`;
        htmlElement += html;
      }
      document.querySelector('.list').innerHTML = htmlElement;
  }
    function addItem(){
      let input = document.querySelector('.input');
      let item = input.value;
      newArray.push(item);
      console.log(newArray);
     
      input.value = '';

      render();
      
    }

    function enterKey(event){
      if(event.key === 'Enter'){
        addItem();
      }
    }