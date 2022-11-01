let cad=`
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="index.html">La Concesionaria</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>        
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="sucursales.html">Sucursales</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="acerca_de.html">Acerca de Nosotros</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
              </li>    
            </ul>
          </div>
      </div>
    </nav>          
`
document.getElementById("idheader").innerHTML=cad;
 
cad=`      
<nav>
<div>
  <a class="redsocial" href="https://facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
  <a class="redsocial" href="http://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
  <a class="redsocial" href="http://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a>
  <p class="smallBlanca">Derechos reservados @2022 - Creada en septiembre de 2022</br>Maximiliano Martins de Vargas - Sebastian Longhitano - Sonia Ibañez Alvarez</p>
</div>
</nav> 
`
document.getElementById("idfooter").innerHTML=cad;