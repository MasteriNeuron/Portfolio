$(document).ready(function(){

    // sticky navbar on scroll
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

});
