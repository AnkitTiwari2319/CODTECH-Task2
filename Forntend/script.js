// auto type in header 
var typed = new Typed(".auto-typed" , {

    strings: ["Full Stack Developer", "Coder", "DevOps Enthusiast", "DSA Solver", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true

})

let scene, camera, renderer, material, clock;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    clock = new THREE.Clock();

    const geometry = new THREE.PlaneBufferGeometry(2, 2);
    material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec2 resolution;

            void main(void) {
                vec2 uv = gl_FragCoord.xy / resolution.xy;
                float color = 0.0;
                color += sin(uv.x * cos(time / 15.0) * 80.0) + cos(uv.y * cos(time / 15.0) * 10.0);
                color += sin(uv.y * sin(time / 10.0) * 40.0) + cos(uv.x * sin(time / 25.0) * 40.0);
                color *= sin(time / 10.0) * 0.5;
                gl_FragColor = vec4(vec3(color * 0.5, color * 0.3, color * 0.5), 1.0);
            }
        `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('hero-bg').appendChild(renderer.domElement);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += clock.getDelta();
    renderer.render(scene, camera);
}

init();




// Read More 

document.getElementById("more-btn").addEventListener("click" , function(){
  var moreText = document.getElementById("more-text");
  if (moreText.style.display == "none"){
    moreText.style.display = "block";
    this.textContent = "Read Less" ;

  }else {
    moreText.style.display = "none";
    this.textContent = "read More" ;
  }
});

//swiper

const swiper = new Swiper('.slider-cont', {

    loop: true,
    grabCursor: true,
    spaceBetween: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      dynamicBullet: true,

    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView : 1
        },
        620: {
            slidesPerView : 2
        },
        1024: {
            slidesPerView : 3
        },
        1200: {
            slidesPerView : 3
        }
      },
  });


  // locomotive code 
      