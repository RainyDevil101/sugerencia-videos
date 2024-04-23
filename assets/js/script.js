// Requerimientos
// 1. Implementar el Patrón Módulo mediante IIFE, en donde:
// (2 Puntos)
// ● Se cree una función privada que reciba la url del video y el id de la etiqueta
// iframe, para así poder mostrar los videos en el documento HTML. Dato:
// puedes utilizar la instrucción “setAttribute” para manipular el DOM.
// ● Se retorne una función pública que reciba los parámetros (url, id), y realice el
// llamado a la función interna (privada) para insertar los elementos recibidos.
// 2. Establecer una clase padre denominada Multimedia para:
// (2 Puntos)
// ● Recibir la propiedad url, ejemplo:
// “https://www.youtube.com/embed/5PSNL1qE6VY”, la cual será el atributo src
// que necesite la etiqueta iframe para poder mostrar el video.
// Imagen 4. Iframe youtube.
// Fuente: Desafío Latam
// ● Proteger el atributo de la clase implementado closures.
// ● Agregar un método denominado “setInicio”, que retorne el siguiente mensaje:
// “Este método es para realizar un cambio en la URL del video”.
// 3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia para:
// (3 Puntos)
// _ 3
// www.desafiolatam.com
// ● Recibir la propiedad id, la cual será el elemento del DOM que se necesita para
// poder agregar la URL en la etiqueta iframe que corresponda. Por ejemplo: Si
// se envía una URL para Música, el id debe ser el perteneciente a la etiqueta
// iframe que se encuentra en la sección de música.
// ● Crear un método denominado “playMultimedia”, que permita hacer el llamado
// a la función pública de la IIFE, enviando los atributos url y id.
// ● Agregar un método denominado “setInicio”, que reciba y agregue un tiempo
// de inicio a la URL de la etiqueta iframe. Se puede utilizar el método
// “setAttribute” para modificar la URL agregando al final de la misma lo
// siguiente: “?start=${tiempo}”. Esto permitirá que cualquiera de los videos que
// implemente el método inicie en el tiempo pasado como argumento al método
// al ser invocado.
// 4. Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta
// iframe, por lo que se deben crear tres instancias, una para música, otra para película
// y otra para serie, con sus respectivas URL.
// (1 Puntos)
// 5. Invocar al método “playMultimedia” para cada instancia creada, mostrando así los
// videos en el documento HTML.
// (1 Puntos)
// 6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las
// instancias creadas.
// (1 Puntos)

const videoModule = (() => {
  const insertVideo = (url, id) => {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
  };

  return {
      playVideo: (url, id) => insertVideo(url, id)
  };
})();

class Multimedia {
  constructor(url) {
      let _url = url;

      this.getURL = () => _url;
  }

  setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
      super(url);
      this._id = id;
  }

  playMultimedia() {
      const url = this.getURL();
      videoModule.playVideo(url, this._id);
  }

  setInicio(tiempo) {
      const url = `${this.getURL()}?start=${tiempo}`;
      videoModule.playVideo(url, this._id);
  }
}

const music = new Reproductor(
  'https://www.youtube.com/embed/qU9mHegkTc4',
  'musica'
);
const movie = new Reproductor(
  'https://www.youtube.com/embed/5PSNL1qE6VY',
  'peliculas'
);
const serie = new Reproductor(
  'https://www.youtube.com/embed/V-mugKDQDlg',
  'series'
);

music.playMultimedia();
movie.playMultimedia();
serie.playMultimedia();

music.setInicio(5);
movie.setInicio(60);
serie.setInicio(15);
