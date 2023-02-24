import services from '../assets/services.png'

function Impots() {
  return (
    <div className="impots" id="impots">
      <div className="impots_texte">
        <h2>En faisant appel à nos services</h2>
        <div className="credit">
          <p>Bénéficiez de 50 % * de crédit d'impôt</p>
        </div>
        <p>selon l'article 100 sexdecies du code général des impôts</p>
      </div>
      <div className="services_personnes">
        <img src={services} alt="" />
      </div>
    </div>
  )
}

export default Impots
