function outer() {
    var b = "Veronica ";
       function inner() {
            
             var a = "Juma"; 
            var together = b.concat(" ",a);
            console.log(together);
        }
       return inner();
    }
    var myname = outer(); 
    