// Condiciones y términos de uso

import React from 'react'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'

const Political_terms = () => {
  return (
    <>
        <Header />
        <div className='m-5 p-5'>
        <h1>Términos y Condiciones de Uso</h1>
        <ol>
            <li className='mt-4'>1. Información General</li>
            <p className='mt-4'>El presente documento establece las condiciones que regulan el uso de este sitio web "Chipi Park" y la compra de productos a través del mismo. Al utilizar esta página, usted acepta quedar vinculado por estas condiciones.</p>
            
            <li className='mt-4'>2. Propiedad Intelectual</li>
            <p className='mt-4'>Todo el contenido (imágenes, textos, logotipos y diseños) es propiedad exclusiva de "Chipi Park". Queda prohibida su reproducción o uso sin autorización previa.</p>
            
            <li className='mt-4'>3. Productos y Seguridad</li>
            <p className='mt-4'><strong>Descripción: </strong>Nos esforzamos por mostrar los colores y detalles de los juguetes con la mayor precisión posible. Sin  embargo, la percepción puede variar según el monitor.</p>
            <p><strong>Advertencias de Seguridad: </strong>Cada juguete incluye especificaciones de edad recomendada. "Chipi Park" no se hace responsable del uso inadecuado de los productos o de su entrega a menores de la edad recomendada por el fabricante.</p>

            <li className='mt-4'>4. Precios y Pago</li>
            <p className='mt-4'>Todos los precios incluyen [IVA/Impuestos correspondientes].</p>
            <p>Los gastos de envío se añadirán al importe total antes de finalizar la compra.</p>
            <p>Nos reservamos el derecho de modificar precios en cualquier momento, pero los cambios no afectarán a los pedidos ya confirmados.</p>

            <li className='mt-4'>5. Envíos y Entrega</li>
            <p className='mt-4'><strong>Plazos: </strong>Los tiempos de entrega estimados son de 3 a 15 días hábiles.</p>
            <p><strong>Responsabilidad:</strong> No nos hacemos responsables de retrasos causados por agencias de transporte externas o información de entrega incorrecta proporcionada por el cliente.</p>

            <li className='mt-4'>6. Política de Devoluciones y Desistimiento</li>
            <p className='mt-4'><strong>Derecho de Desistimiento: </strong>El cliente tiene [14 días, según ley local] naturales para devolver un producto sin necesidad de justificación.</p>
            <p><strong>Condiciones: </strong>El juguete debe estar sin usar, en su embalaje original sellado y con todas sus piezas. Por razones de higiene y seguridad, no se aceptarán devoluciones de productos desprecintados que puedan entrar en contacto con la boca (como silbatos o instrumentos de viento).</p>
            <p><strong>Productos defectuosos: </strong>En caso de recibir un juguete dañado, el cliente deberá notificarlo en un plazo de 48 horas tras la recepción.</p>

            <li className='mt-4'>7. Garantía</li>
            <p className='mt-4'>Todos nuestros productos cuentan con una garantía legal de 5 años contra defectos de fabricación. La garantía no cubre el desgaste natural por el uso, ni roturas por maltrato del juguete.</p>

            <li className='mt-4'>8. Protección de Datos</li>
            <p className='mt-4'>Tratamos sus datos personales de acuerdo con nuestra Política de Privacidad para gestionar sus pedidos y, si lo autoriza, enviarle promociones.</p>

            <li className='mt-4'>9. Ley Aplicable</li>
            <p className='mt-4'>Estas condiciones se rigen por la legislación de Principdo de Asturias. Cualquier disputa se someterá a los juzgados de Principado de Asturias.</p>
        </ol>
        </div>
        <Footer />
    </>
  )
}

export default Political_terms