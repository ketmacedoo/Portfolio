// Animação ao rolar para mostrar elementos
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));

// Botão voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.textContent = '↑ Topo';
btnTopo.id = 'btn-topo';
document.body.appendChild(btnTopo);

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});


// Mudar cor da barra ao rolar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
