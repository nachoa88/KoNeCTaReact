import "../components/css/K0N3CT4.css"

export default function K0N3CT4() {

    return (
        <div className="contenedor">
            <div className="row">
                <div className="col-2"></div>
                <div className="aboutus col-8">
                    <h1>Sobre K0N3CT4</h1>
                    <p>El proyecto surge a partir de una consigna: ¿Cómo relacionar a los adolescentes y la cultura? Esto nos ha llevado a pensar diferentes formas de acercar a los adolescentes, con sus necesidades y restricciones, a la cultura.</p>
                    <p>Es por esto que decidimos crear una applicación especifica para que los adolescentes encuentren aquello que les gusta, que sea práctica y sencilla, y que brinde una solución a un problema que trae de cabeza a todos los padres y educadores.</p>
                    <p>El proyecto reunirá información de eventos culturales gratuitos del "underground" (descripción, tipo de evento, horario y lugar). Estos eventos se muestran en dos formatos, un listado con todos los detalles y también en un mapa. Tanto el listado como el mapa, permiten a los usuarios filtrar el contenido para poder encontrar de manera rápida y sencilla el evento que se ajuste a sus necesidades. Estos filtros pueden ser personalizados a la hora de crear un usuario al completar los campos de intereses.</p>
                    <p>A su vez, los usuarios pueden interactuar entre ellos, ver los eventos a los que asistirán sus amigos y pueden desbloquear recompenzas por participar en la comunidad comentando y calificando eventos a los que han asistido.</p>
                    <h1 id="infoproject">El proyecto</h1>
                    <fieldset>
                    <h2>Tecnologías</h2>
                        <p className="sizeh5">React * Bootstrap * Javascript * CSS</p>
                        <h2>Próximamente</h2>
                        <p className="sizeh5">Asistencia a eventos</p>
                        <p className="sizeh5">Interacción entre usuarios</p>
                        <p className="sizeh5">Mapa funcional</p>
                        <p className="sizeh5">Sistema de recompensa (tokens)</p>
                    </fieldset>
                    <fieldset>
                        <h2>Colaboradores</h2>
                        <p className="sizeh5">Ignacio Albiol</p>
                        <p className="sizeh5">Ingrid Barrachina</p>
                        <p className="sizeh5">Eugenia Cames</p>
                        <p className="sizeh5">Carles Ramos</p>
                        <p className="sizeh5">Anthony Torres</p>
                        
                    </fieldset>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )

}