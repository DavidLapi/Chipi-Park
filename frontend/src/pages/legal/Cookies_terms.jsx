import React from 'react'

import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const Cookies_terms = () => {
  return (
    <>
        <Header />
        <div className='m-5 p-5'>
            <h1>Política de Cookies</h1>
            <p className='mt-4'>1. ¿Qué son las cookies?</p>
            <p className='mt-4'>Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador, smartphone o tablet cuando los visita. Su objetivo es que el sitio web sea capaz de recordar su visita cuando vuelva a navegar por esa página, mejorando su experiencia de usuario.</p>
            
            <p className='mt-4'>2. ¿Qué tipos de cookies utiliza esta Juguetería?</p>
            <p className='mt-4'>En Chipi Park utilizamos las siguientes categorías:</p>
            <ul>
                <li><strong>Cookies Técnicas (Necesarias): </strong>Son esenciales para que la web funcione. Permiten que usted pueda añadir juguetes al carrito, usar la pasarela de pago o acceder a su cuenta de cliente de forma segura. Sin ellas, la tienda no puede operar.</li>
                <li><strong>Cookies de Personalización: </strong>Permiten recordar sus preferencias, como el idioma seleccionado o la región desde la que accede, para ofrecerle una experiencia más cercana.</li>
                <li><strong>Cookies de Análisis (Estadísticas): </strong>Nos ayudan a entender cómo interactúan los usuarios con nuestra web (por ejemplo, qué categorías de juguetes son las más visitadas). Utilizamos herramientas como Google Analytics para obtener datos anónimos.</li>
                <li><strong>Cookies de Marketing (Publicitarias): </strong>Se utilizan para mostrarle anuncios que sean relevantes para usted (por ejemplo, si buscó "juguetes de madera", podríamos mostrarle ofertas relacionadas en otras redes sociales).</li>
            </ul>
            
            <p className='mt-4'>3. Detalle de las cookies utilizadas</p>
            <p className='mt-4'>A continuación, detallamos las cookies específicas que instalamos:</p>
            <table>
                <tr>
                    <th>Nombre de la Cookie</th>
                    <th>Proveedor</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                </tr>
                <tr>
                    <td>session_id</td>
                    <td>Propia</td>
                    <td>Mantener la sesión del usuario y el carrito.</td>
                    <td>Sesión</td>
                </tr>
                <tr>
                    <td>_ga / _gid</td>
                    <td>Google Analytics</td>
                    <td>Medir las visitas y el comportamiento del usuario.</td>
                    <td>2 años / 24h</td>
                </tr>
                <tr>
                    <td>cookie_consent</td>
                    <td>Propia</td>
                    <td>Recordar si aceptaste el aviso de cookies.</td>
                    <td>1 año</td>
                </tr>
                <tr>
                    <td>ads/ga-audiences</td>
                    <td>Google/Meta</td>
                    <td>Remarketing y publicidad personalizada.</td>
                    <td>Persistente</td>
                </tr>
            </table>
            
            <p className='mt-4'>4. ¿Cómo puedes configurar o desactivar las cookies?</p>
            <p className='mt-4'>Usted tiene derecho a aceptar, bloquear o eliminar las cookies instaladas en su equipo. Puede hacerlo a través de la configuración de su navegador:</p>
            <ul>
                <li>Google Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                <li>Safari: Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
                <li>Mozilla Firefox: Ajustes &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
            </ul>
            <p className='mt-4'>Tenga en cuenta que si bloquea las cookies técnicas, es posible que no pueda completar el proceso de compra en nuestra tienda.</p>
            
            <p className='mt-4'>5. Actualizaciones</p>
            <p className='mt-4'>Esta Política de Cookies puede ser modificada en función de nuevas exigencias legislativas o para adaptarla a instrucciones de la Agencia de Protección de Datos. Le recomendamos revisarla periódicamente.</p>
        </div>
        <Footer />
    </>
  )
}

export default Cookies_terms