const videoUno = document.getElementById("videoUno");
const videoDos = document.getElementById("videoDos");
const videoTres = document.getElementById("videoTres");
const videoCuatro = document.getElementById("videoCuatro");
const videoCinco = document.getElementById("videoCinco");
const videoSeis = document.getElementById("videoSeis");

function mostrarAlerta(url) {
    document.getElementById("contenedor-video").style.display = 'block';
    const video = document.getElementById('mi-video');
    video.src=url;
    video.play();
    video.addEventListener('ended', function() {
        document.getElementById("contenedor-video").style.display = 'none';
    });
}

videoUno.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_1_HORIZONTAL.mp4');});
videoDos.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_2_HORIZONTAL.mp4');});
videoTres.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_3_HORIZONTAL.mp4');});
videoCuatro.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_4_HORIZONTAL.mp4');});
videoCinco.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_5_HORIZONTAL.mp4');});
videoSeis.addEventListener("click",function(){mostrarAlerta('./img/25JUN2024_CIBERPAZ_CAPSULAS_6_HORIZONTAL.mp4');});
