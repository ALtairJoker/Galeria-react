import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/footer";

function App() {
  const datos_cards = [
    {
      url: "https://scontent.fscl19-1.fna.fbcdn.net/v/t1.6435-9/126060184_10157883708536172_6731931219904222163_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeHN30nfj4iv1nVy4L6Ia196BcM7UONq15gFwztQ42rXmIdcGwZtGL5SqvIVuQ8Eyw0&_nc_ohc=Fe_PAdF8cscAX92-iPf&_nc_ht=scontent.fscl19-1.fna&oh=00_AfCvtQRFE1V_5EE9xdfvXh8zvPqn_LOIdYXUZEIz_UUGpw&oe=6393C71B",
      titulo: "Cuesta barriga",
      descripcion: "Foto nocturna en cuesta barrida",
    },
    {
      url: "https://scontent.fscl19-1.fna.fbcdn.net/v/t1.6435-9/126166113_10157883708526172_7072595001026690664_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeHeNMoElGTuOP5M45UbwlpfAMo6-8JgkfMAyjr7wmCR8-JYs-stS5at9r12QQtAnJ4&_nc_ohc=ivJYMO11SVoAX-hmCmd&tn=WgvKjXRSxff5RQmf&_nc_ht=scontent.fscl19-1.fna&oh=00_AfDGwYAWP4fXcJg2knN34VA6QkqqAFNyPl4qd38x7hmH9Q&oe=6393B0A2",
      titulo: "Cerro la cruz",
      descripcion: "Foto en cuesta del cerro la cruz",
    },
    {
      url: "https://scontent.fscl19-1.fna.fbcdn.net/v/t39.30808-6/276159029_10158800396611172_7343791499270535801_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHutIb_3tYjco6pTDX8tlnrRKjX_oH2--BEqNf-gfb74EZPGfZxTT-8CcVIE0HIpf0&_nc_ohc=OMR3DmcbpRwAX8Yu9PR&_nc_ht=scontent.fscl19-1.fna&oh=00_AfA3AZB6yhg8L5No9TCztlMFjQp-dVpSSU_sjVOlPy0ACw&oe=63746A61",
      titulo: "Volcan Osorno",
      descripcion: "Foto del volcan osorno desde lago Llanquihue",
    },
  ];
  return (
    <div>
      <Header titulo="Galería de Imágenes con React" />
      {datos_cards.map((card) => (
        <Cards
          url={card.url}
          titulo={card.titulo}
          descripcion={card.descripcion}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
