function botresp () {
    let rng = Math.floor(Math.random() * 8);
    let response = '';
    
    switch(rng){
        case 1:
        response.replace("lean");
        break;
    
        case 2:
        response.replace("The White Liquid?");
        break;
    
        case 3:
        response.replace("HE SAID THE WORD");
        break;
    
        case 4:
        response.replace("SIUUUU");
        break;
    
        case 5:
        response.replace("Milk");
        break;
    
        case 6:
        response.replace("Your Mother");
        break;
    
        case 7:
        response.replace("Gulp");
        break;
    
        case 8:
        response.replace("mmm... soup")
        break;
    
        default:
        response.replace("more lean");
        break;
    }
  }

  export { response };