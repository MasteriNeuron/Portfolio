$(document).ready(function(){

    var scrollUpBtn = document.querySelector('.scroll-up-btn');

    // sticky navbar + scroll progress + back-to-top ring, all driven by one scroll listener
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        document.querySelector('.scroll-progress').style.width = pct + '%';
        if (scrollUpBtn) scrollUpBtn.style.setProperty('--p', pct);
    });

    // scroll-up button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}, 500);
    });

    // close mobile menu after a link is clicked
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn > i').removeClass("active");
    });

    // mobile menu toggle
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // hero + about typing animation
    if (window.Typed) {
        new Typed(".typing", {
            strings: ["agentic AI systems", "RAG pipelines at scale", "multi-agent MCP workflows", "MLOps for production LLMs"],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 1400,
            loop: true
        });

        new Typed(".typing-2", {
            strings: ["Senior Data Scientist", "AI Engineer", "RAG & LLM Builder", "Multi-Agent Systems Architect"],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 1400,
            loop: true
        });
    }

    // ---- active nav link tracking (highlights current section while scrolling) ----
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.navbar .menu li a');
    if ('IntersectionObserver' in window && sections.length) {
        var navObserver = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    navLinks.forEach(function(link){
                        link.classList.toggle('active-link', link.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        sections.forEach(function(sec){ navObserver.observe(sec); });
    }

    // ---- scroll-reveal for cards, timeline items, skill groups ----
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        var revealObserver = new IntersectionObserver(function(entries, obs){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function(el){ revealObserver.observe(el); });
    } else {
        revealEls.forEach(function(el){ el.classList.add('in'); });
    }

    // ---- hero mouse-reactive glow ----
    var home = document.querySelector('.home');
    if (home) {
        home.addEventListener('mousemove', function(e){
            var rect = home.getBoundingClientRect();
            var mx = ((e.clientX - rect.left) / rect.width) * 100;
            var my = ((e.clientY - rect.top) / rect.height) * 100;
            home.style.setProperty('--mx', mx + '%');
            home.style.setProperty('--my', my + '%');
        });
    }

    // ---- project card tilt on hover ----
    document.querySelectorAll('.project-card').forEach(function(card){
        card.addEventListener('mousemove', function(e){
            var rect = card.getBoundingClientRect();
            var px = (e.clientX - rect.left) / rect.width - 0.5;
            var py = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty('--ry', (px * 6) + 'deg');
            card.style.setProperty('--rx', (py * -6) + 'deg');
        });
        card.addEventListener('mouseleave', function(){
            card.style.setProperty('--ry', '0deg');
            card.style.setProperty('--rx', '0deg');
        });
    });

});
