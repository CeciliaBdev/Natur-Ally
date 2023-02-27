import services from '../assets/services.png'

function Impots() {
  return (
    <div className="impots" id="impots">
      <div className="bloc_impot">
        <div className="content_impots">
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
        <div className="impots_details">
          Lorsque vous faites appel à nos services à votre domicile, vous avez
          droit à un avantage fiscal important pour réduire le coût d'une aide à
          domicile. Vous pouvez bénéficier de 50% de déduction d'impôt par
          rapport aux sommes que vous avez engagées.
        </div>
      </div>
    </div>
  )
}

export default Impots
