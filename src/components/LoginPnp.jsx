import React from 'react'
import '../styles/loginPnp.css'


export default function LoginPnp() {
  return (
    <div>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>
            <div id='logoPnp'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Escudo_de_la_Polic%C3%ADa_Nacional_del_Per%C3%BA.png" 
                    id='logo'/>
            </div>
            <h3>Iniciar Sesión</h3>

            <label for="username">Usuario</label>
            <input type="text" placeholder="Ingrese usuario " id="username"/>

            <label for="password">Contraseña</label>
            <input type="password" placeholder="Ingrese contraseña" id="password"/>

            <button>Ingresar</button>
            <div class="social">
                <div class="go"><i class="fab fa-google"></i> Registro</div>
                <div class="fb"><i class="fab fa-facebook"></i> Contacto</div>
            </div>
        </form>
    </div>
  )
}
