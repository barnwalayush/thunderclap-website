// global easing
let easing = "power1.out";

function heroLoadDesktop() {
  // brightscout hero load animations
  let brightscoutHeroTl = gsap.timeline();

  brightscoutHeroTl.set(".page-wrapper", {
    opacity: 1
  });

  brightscoutHeroTl
    .from($(".bs-hero_heading-wrapper").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.5,
      delay: 0.75,
      stagger: {
        each: 0.2
      },
      ease: easing
    })
    .from($(".bs-hero_para").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from(".bs-hero_image-wrapper", {
      yPercent: 15,
      opacity: 0,
      duration: 0.5,
      ease: easing
    })
    .from(".bs-hero_arrow-wrapper", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: easing
    })
    .from(
      $(".bs-hero_absolute-embed").find("rect"),
      {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.15,
          from: "end"
        },
        ease: easing
      },
      "<"
    );
}

function heroLoadMobile() {
  // brightscout hero load animations
  let brightscoutHeroTl = gsap.timeline();

  brightscoutHeroTl.set(".page-wrapper", {
    opacity: 1
  });

  brightscoutHeroTl
    .from($(".bs-hero_heading-wrapper").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.5,
      delay: 0.75,
      stagger: {
        each: 0.2
      },
      ease: easing
    })
    .from(".bs-hero_image-wrapper", {
      yPercent: 15,
      opacity: 0,
      duration: 0.5,
      ease: easing
    })
    .from($(".bs-hero_para").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from(".bs-hero_arrow-wrapper", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: easing
    })
    .from(
      $(".bs-hero_absolute-embed").find("rect"),
      {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.15,
          from: "end"
        },
        ease: easing
      },
      "<"
    );
}

// about brightscout section scroll into view animtion
$(".bs-about_wrapper").each(function (index) {
  let brightscoutAboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  brightscoutAboutTl
    .from($(this).find(".bs-about_top").find(".text-title, .line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(this).find("p").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(".bs-about_absolute.is-1st").find("rect"), {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.15,
        from: "start"
      },
      ease: easing
    })
    .from(
      $(".bs-about_absolute.is-2nd").find("rect"),
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

// brightscout challanges section scroll into view animtion
$(".bs-challenge_content").each(function (index) {
  let brightscoutChallangeTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  brightscoutChallangeTl
    .from($(this).find(".padding-bottom").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(this).find("p").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(".home-challenge_flex"), {
      opacity: 0,
      yPercent: 10,
      duration: 1,
      ease: easing
    })
    .from($(".bs-challenge_absolute").find("rect"), {
      opacity: 0,
      duration: 0.3,
      stagger: {
        each: 0.15,
        from: "start"
      },
      ease: easing
    });
});

// brightscout stats section scroll into view animtion
$(".bs-stats_wrapper").each(function (index) {
  let brightscoutStatsTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  brightscoutStatsTl
    .from($(this).find(".heading-style-h5").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      stagger: {
        each: 0.15
      },
      ease: easing
    })
    .from($(this).find(".bs-stats_block"), {
      opacity: 0,
      yPercent: 40,
      duration: 0.5,
      stagger: {
        each: 0.2
      },
      ease: easing
    })
    .from($(this).find(".bs-stats_bottom-para").find(".line"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.3,
      stagger: {
        each: 0.15
      },
      ease: easing
    });
});

// thunderclap help header scroll into view animtion
$(".bs-help_top").each(function (index) {
  let helpHeaderTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  helpHeaderTl.from($(this).find(".line"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.5,
    stagger: {
      each: 0.15
    },
    ease: easing
  });
});

// thunderclap help item grid scroll into view animtion
$(".bs-help_grid").each(function (index) {
  let helpiteamTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  helpiteamTl.from($(this).find(".bs-help_block"), {
    opacity: 0,
    yPercent: 30,
    duration: 0.4,
    stagger: {
      each: 0.2
    },
    ease: easing
  });
});

// bs work top
$(".bs-work_top").each(function (index) {
  let workHeaderTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  workHeaderTl.from($(this).find(".line"), {
    opacity: 0,
    yPercent: 50,
    duration: 0.5,
    stagger: {
      each: 0.15
    },
    ease: easing
  });
});

// hoe work list scroll into view animtion
$(".home-work_block, .home-work_button-wrapper").each(function (index) {
  let homeWorkListTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 85%",
      end: "bottom bottom"
    }
  });
  homeWorkListTl.from($(this), {
    opacity: 0,
    yPercent: 30,
    duration: 1,
    ease: easing
  });
});

// Check screen width and run the code if it's larger than 992px
if (window.innerWidth > 992) {
  // on work card hover play the video from 0
  $(".home-work_block").hover(
    function () {
      var videoElement = $("video", this).get(0);
      videoElement.currentTime = 0;
      videoElement.playbackRate = 1.25;
      videoElement.play();
    },
    function () {
      var videoElement = $("video", this).get(0);
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  );
}

// Check screen width and run the code based on the condition
if (window.innerWidth <= 992) {
  // on work card scroll into view, play the video and make it loop

  $(".home-work_block").each(function () {
    var videoElement = $("video", this).get(0);

    ScrollTrigger.create({
      trigger: this,
      start: "top 85%",
      end: "bottom top",
      onEnter: function () {
        videoElement.currentTime = 0;
        videoElement.playbackRate = 1.25;
        videoElement.play();
      },
      onLeaveBack: function () {
        videoElement.pause();
        videoElement.currentTime = 0;
      },
      onEnterBack: function () {
        videoElement.currentTime = 0;
        videoElement.playbackRate = 1.25;
        videoElement.play();
      },
      onLeave: function () {
        videoElement.pause();
        videoElement.currentTime = 0;
      },
      markers: false // Set to true for debugging
    });
  });
}

// bs work top
$(".bs-awards_wrapper").each(function (index) {
  let awardsTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      end: "bottom bottom"
    }
  });
  awardsTl.from($(this).find(".heading-style-h1, .bs-awards_flex"), {
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.2
    },
    ease: easing
  });
});

// home testimonial section scroll into view animtion
$(".home-testimonial_wrapper").each(function (index) {
  let homeTestimonialTl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 60%",
      end: "bottom bottom"
    }
  });
  homeTestimonialTl
    .from($(this).find(".home-testimonial_top"), {
      opacity: 0,
      yPercent: 50,
      duration: 0.5,
      ease: easing
    })
    .from(
      $(this).find(".slider-main_component"),
      {
        opacity: 0,
        //yPercent: 30,
        duration: 1,
        ease: easing
      },
      "-=0.2"
    );
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

// match media
let mm = gsap.matchMedia();
// on desktop
mm.add("(min-width: 768px)", () => {
  // your gsap timeline here
  heroLoadDesktop();
  return () => {
    // optional: clean up non-gsap code when leaving this breakpoint
  };
});
// on tablet and below
mm.add("(max-width: 767px)", () => {
  // your gsap timeline here
  heroLoadMobile();
});
