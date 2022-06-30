
        function myFunction(){
            alert("Bienvenu dans mon premier site")
        }


        function choizz() {
            
            if (document.f.choix[0].checked) 
                alert("Bonjour "+ document.f.name.value+" votre voiture est "+ document.f.choix[0].value) ;
            else if (document.f.choix[1].checked)  
                alert("Bonjour "+ document.f.name.value+" votre voiture est "+ document.f.choix[1].value) ;
            else 
                alert("Bonjour "+ document.f.name.value+" votre voiture est "+ document.f.choix[2].value) ;
        }