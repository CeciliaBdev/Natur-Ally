import icon_tondeuse from '../assets/tondeuse.png'
import icon_cisailles from '../assets/cisailles.png'
import icon_feuille from '../assets/feuille.png'
import icon_contrat from '../assets/contrat.png'
import pelouse from '../assets/pelouse.jpg'

const datasMocked = [
  {
    type: 'tondeuse',
    img: icon_tondeuse,
    title: 'Tondeuse',
    text: 'Tonte de pelouse, Scarification',
  },
  {
    type: 'cisailles',
    img: icon_cisailles,
    title: 'Cisailles',
    text: 'Taille des haies, arbustes, arbres, fruitiers',
  },
  {
    type: 'feuilles',
    img: icon_feuille,
    title: 'Feuilles',
    text: 'Ramassage de feuilles, désherbage',
  },
  {
    type: 'contart',
    img: icon_contrat,
    title: 'Contrat',
    text: `Contrat d'entretien annuel`,
  },
]

function NosServices() {
  return (
    <div className="services" id="services">
      <div className="background_icons">
        <p>
          Nous vous proposons les prestations suivantes pour entrenir vos
          espaces verts
        </p>

        <div className="icones_services">
          {datasMocked.map((data, index) => (
            <div key={index} className="content_icons ">
              <div className="icons">
                <div className="rond_icon">
                  <img src={data.img} alt={data.type} className="" />
                </div>

                <p className="">{data.text}</p>
              </div>
              {/* <p className="">{data.title}</p> */}
            </div>
          ))}
        </div>

        <div className="bg_img">
          <img src={pelouse} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NosServices
