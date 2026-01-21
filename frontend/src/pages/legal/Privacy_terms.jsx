import React from 'react'

import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Link } from 'react-router'

const Privacy_terms = () => {
  return (
    <>
        <Header />
            <div className='p-5 m-5'>
                <h1>Política de Privacidad</h1>

                <p className='mt-4'>1. Responsable del Tratamiento de los Datos</p>
                <p className='mt-4'>El responsable del tratamiento de sus datos personales es:</p>
                <ul>
                    <li>Nombre comercial: Chipi Park</li>
                    <li>Razón Social: Chipi Park</li>
                    <li>NIF/CIF: 00000000R</li>
                    <li>Domicilio: [Dirección física]</li>
                    <li>Email de contacto: [Correo electrónico para temas de privacidad]</li>
                </ul>

                <p className='mt-4'>2. ¿Qué datos recopilamos?</p>
                <p className='mt-4'>Recogemos la información estrictamente necesaria para gestionar su compra y mejorar su experiencia:</p>
                <ul>
                    <li>Datos de identificación: Nombre, apellidos y DNI (si es necesario para facturación).</li>
                    <li>Datos de contacto: Dirección de envío, correo electrónico y número de teléfono.</li>
                    <li>Datos de navegación: Dirección IP, cookies y datos de uso del sitio web.</li>
                    <li>Datos de pago: Los datos de su tarjeta son gestionados directamente por pasarelas de pago seguras (Stripe, PayPal, etc.). Nosotros no almacenamos sus datos bancarios completos.</li>
                </ul>

                <p className='mt-4'>3. Finalidad del Tratamiento</p>
                <p className='mt-4'>Utilizamos sus datos para:</p>
                <ol>
                    <li>Gestionar su pedido: Procesar la compra, el envío y la facturación.</li>
                    <li>Comunicación: Notificarle sobre el estado de su pedido o resolver dudas.</li>
                    <li>Marketing (con consentimiento): Enviarle boletines sobre nuevos juguetes, ofertas y promociones si se ha suscrito a nuestra Newsletter.</li>
                    <li>Seguridad: Prevenir fraudes y garantizar la seguridad de nuestra tienda online.</li>
                </ol>

                <p className='mt-4'>4. Base Legal para el Tratamiento</p>
                <p className='mt-4'>Tratamos sus datos basándonos en:</p>
                <ul>
                    <li>La ejecución de un contrato: Necesitamos sus datos para enviarle el juguete que ha comprado.</li>
                    <li>El consentimiento: Cuando acepta recibir publicidad o el uso de cookies.</li>
                    <li>Interés legítimo: Para mejorar nuestros servicios y garantizar la seguridad de la web.</li>
                </ul>

                <p className='mt-4'>5. ¿Con quién compartimos sus datos?</p>
                <p className='mt-4'>No vendemos sus datos a terceros. Solo los compartimos con proveedores esenciales para el servicio:</p>
                <ul>
                    <li>Empresas de transporte: Para que puedan entregarle el paquete.</li>
                    <li>Pasarelas de pago: Para procesar el cobro de forma segura.</li>
                    <li>Proveedores tecnológicos: Servicios de hosting y herramientas de email marketing.</li>
                    <li>Obligaciones legales: Cuando lo requiera una autoridad judicial o administrativa.</li>
                </ul>
                
                <p className='mt-4'>6. Protección de Menores</p>
                <p className='mt-4'>Nuestros servicios están dirigidos a personas mayores de <strong>[18/16 años según país]</strong>. No recopilamos conscientemente datos de menores de edad. Si un padre o tutor tiene conocimiento de que su hijo nos ha facilitado datos personales, debe contactarnos para proceder a su eliminación inmediata.</p>

                <p className='mt-4'>7. Sus Derechos</p>
                <p className='mt-4'>Usted tiene derecho a:</p>
                <ul>
                    <li>Acceder a sus datos personales.</li>
                    <li>Rectificar datos inexactos.</li>
                    <li>Suprimir sus datos cuando ya no sean necesarios.</li>
                    <li>Oponerse al envío de publicidad en cualquier momento.</li>
                    <li>Portabilidad de sus datos a otro servicio.</li>
                </ul>
                <p>Para ejercer estos derechos, envíenos un correo electrónico a: [Email de contacto].</p>

                <p className='mt-4'>8. Conservación de Datos</p>
                <p className='mt-4'>Mantendremos sus datos mientras dure la relación comercial y, posteriormente, durante el tiempo legalmente exigido para cumplir con obligaciones fiscales y legales (normalmente entre 5 y 10 años).</p>

                <p className='mt-4'>9. Cookies</p>
                <p className='mt-4'>Este sitio utiliza cookies para mejorar la navegación. Puede consultar el detalle de las mismas en nuestra <Link to="/cookiesterms">[Enlace a Política de Cookies].</Link></p>
            </div>
        <Footer />
    </>
  )
}

export default Privacy_terms