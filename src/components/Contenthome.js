import { Link } from 'react-scroll'

function Contenthome() {
  return (
    <div className="content_home" id="content_home">
      <div className="home_title">
        <h1>Natur'Ally Jardins et Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, nisi. Error optio rem praesentium omnis rerum modi
          excepturi nemo ipsum vitae, recusandae, commodi labore quam
          exercitationem deleniti, quia quasi dolorem. Quod ducimus voluptates
          deserunt. Facilis voluptate totam adipisci praesentium quisquam ut
          magnam exercitationem quis alias consectetur ab excepturi sint cumque
          fugit ea minus ipsam, autem quod beatae impedit provident.
        </p>
        <div className="buttons">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={700}>
            <button className="button_contact">Contactez nous</button>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <button className="button_infos">Plus d'infos</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contenthome
