// global easing
let easing = "power1.out";

// about hero animtion
let aboutHeroTl = gsap.timeline();

aboutHeroTl.set(".page-wrapper", {
  opacity: 1
});

aboutHeroTl
  .from($(".about-hero_heading").find(".line"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.4,
    delay: 0.5,
    stagger: {
      each: 0.15
    },
    ease: easing
  })
  .from(".about-hero_image-wrapper", {
    yPercent: 20,
    opacity: 0,
    duration: 0.8,
    ease: easing
  })
  .from($(".about-hero_para").find(".line"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.3,
    stagger: {
      each: 0.15
    },
    ease: easing
  })
  .from(
    $(".about-hero_absolute.is-1st").find("rect"),
    {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.1,
        from: "start"
      },
      ease: easing
    },
    "<"
  )
  .from($(".about-hero_absolute.is-2nd").find("rect"), {
    opacity: 0,
    duration: 0.3,
    stagger: {
      each: 0.1,
      from: "start"
    },
    ease: easing
  });

// about hero CTA scroll into view
$(".about-hero_circle").each(function (index) {
  let aboutCircleTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 80%",
      end: "bottom bottom"
    }
  });
  aboutCircleTl
    .from($(this), {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: easing
    })
    .from(
      $(this).find(".home-hero_arrow-circle"),
      {
        rotation: -90,
        duration: 1.5,
        ease: easing
      },
      0
    );
});

// about stats bar scroll into view
$(".about-stats_wrapper").each(function (index) {
  let aboutStatsTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      //markers: true,
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutStatsTl
    .from($(this), {
      yPercent: 20,
      opacity: 0,
      duration: 0.5,
      ease: easing
    })
    .from($(".about-stats_absolute.is-1st").find("rect"), {
      opacity: 0,
      duration: 0.5,
      stagger: {
        each: 0.2,
        from: "start"
      },
      ease: easing
    })
    .from(
      $(".about-stats_absolute.is-2nd").find("rect"),
      {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.2,
          from: "start"
        },
        ease: easing
      },
      "<"
    );
});

$(".counterup").each(function (index) {
  // assign ID
  let thisId = "countup" + index;
  $(this).attr("id", thisId);
  // create variables
  let startNumber = 0;
  let endNumber = +$(this).text();
  let decimals = 0;
  let duration = 5;
  // animate number
  let myCounter = new CountUp(
    thisId,
    startNumber,
    endNumber,
    decimals,
    duration
  );
  // Scroll into view trigger
  ScrollTrigger.create({
    trigger: $(this).closest(".about-stats_wrapper"),
    start: "top 65%",
    end: "bottom top",
    onEnter: () => {
      myCounter.start();
    }
  });
});

// about valuse header scroll into view
$(".about-features_sticky").each(function (index) {
  let aboutValuesTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutValuesTl.from($(this).find(".line"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.4,
    stagger: {
      each: 0.15
    },
    ease: easing
  });
});

// about valuse items scroll into view
$(".about-features_grid").each(function (index) {
  let aboutValuesItemTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutValuesItemTl.from($(this).find(".about-features_block"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.6,
    stagger: {
      each: 0.2
    },
    ease: easing
  });
});

// about valuse items scroll into view
$(".about-team_wrapper").each(function (index) {
  let aboutTeamTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      //markers: true,
      toggleActions: "play none play none",
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutTeamTl.from($(this).find(".about-team_top, .about-team_block"), {
    opacity: 0,
    yPercent: 30,
    duration: 0.6,
    stagger: {
      each: 0.3
    },
    ease: easing
  });
});

// about Quorte header scroll into view
$(".about-testimonial_wrapper").each(function (index) {
  let aboutQuorteTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutQuorteTl
    .from(
      $(this).find(
        ".about-testimonial_author-image, .about-testimonial_content"
      ),
      {
        opacity: 0,
        yPercent: 50,
        duration: 0.5,
        stagger: {
          each: 0.2
        },
        ease: easing
      }
    )
    .from($(this).find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.5,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from(
      $(".about-testimonial_image").find("rect"),
      {
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.1,
          from: "start"
        },
        ease: easing
      },
      0
    );
});

// about logo scroll into view
$(".about-logos_content").each(function (index) {
  let aboutLogoTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 65%",
      end: "bottom bottom"
    }
  });
  aboutLogoTl
    .from($(this).find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.5,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(".about-logos_flex"), {
      opacity: 0,
      duration: 1,
      ease: easing
    });
});

// cta scrtion scroll
$(".section_cta").each(function (index) {
  let ctaSectionTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 50%",
      end: "bottom bottom"
    }
  });
  ctaSectionTl
    .from($(this).find(".cta_imge-wrapper"), {
      opacity: 0,
      yPercent: 20,
      duration: 0.6,
      ease: easing
    })
    .from($(this).find(".line, .button"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.6,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(this).find(".cta_absolute-embed.is-1st").find("rect"), {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.15,
        from: "start"
      },
      ease: easing
    })
    .from(
      $(this).find(".cta_absolute-embed.is-2nd").find("rect"),
      {
        opacity: 0,
        duration: 0.3,
        stagger: {
          each: 0.15,
          from: "start"
        },
        ease: easing
      },
      "<"
    );
});
