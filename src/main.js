import './style.css';

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="page">
    <header class="nav">
      <a class="brand" href="#top" aria-label="Sansandae home"><span class="brand-mark">산</span><span>SANSANDAE</span></a>
      <nav class="nav-links" aria-label="Primary navigation"><a href="#about">The club</a><a href="#peaks">Peaks</a><a href="#join">Join us</a></nav>
      <a class="nav-cta" href="#join">Next hike ↗</a>
    </header>

    <main id="top">
      <section class="hero" aria-label="Sansandae introduction">
        <div class="hero-copy">
          <div><h1><span>산산대 / hiking club</span>Find your<br>higher ground.</h1></div>
          <p class="hero-note"><strong>Est. 2021 · Seoul</strong>Small groups. Long ridgelines. A slower way to see the city, the seasons, and each other.</p>
        </div>
        <div class="mountain-wrap" id="mountainWrap">
          <img class="mountain" src="/assets/sansandae-mountain.png" alt="Low-poly mountain island with a winding trail and waterfall" />
          <a class="hotspot spot-top" href="#join" data-label="The summit · next hike" aria-label="Go to next hike"></a>
          <a class="hotspot spot-water" href="#about" data-label="Waterfall · our rhythm" aria-label="Go to about the club"></a>
          <a class="hotspot spot-grove" href="#peaks" data-label="Sakura grove · peak stories" aria-label="Go to conquered peaks"></a>
        </div>
        <div class="scroll-cue"><i></i> Scroll to ascend</div>
      </section>

      <section class="section reveal" id="about">
        <div class="eyebrow">01 / The club</div>
        <div class="section-heading"><h2>We take the long way<br>up — <em>together.</em></h2><p>Sansandae is a hiking club for curious people who believe the best conversations happen somewhere between the trailhead and the summit.</p></div>
        <div class="about-grid">
          <div><p class="about-statement">A monthly ritual of <em>quiet effort</em>, new trails, and the small joy of sharing a view you had to earn.</p><div class="stats"><div class="stat"><b>1,248</b><span>km walked</span></div><div class="stat"><b>37</b><span>peaks found</span></div><div class="stat"><b>86</b><span>trail friends</span></div></div></div>
          <aside class="about-aside"><span class="aside-label">Our field note / 004</span><p class="aside-quote">“The mountain is not a destination. It is a way of paying attention.”</p><span class="aside-label">— Sansandae, Seoul</span></aside>
        </div>
      </section>

      <section class="peaks reveal" id="peaks">
        <div class="eyebrow">02 / Peak stories</div>
        <div class="section-heading"><h2>Recent walks,<br>still in our legs.</h2><p>Every ascent leaves a trace: a new line on the map, a shared snack, a little more sky in the week ahead.</p></div>
        <div class="peak-grid">
          <article class="peak-card large"><img src="/assets/sansandae-mountain.png" alt="Mountain island with a waterfall" /><div class="peak-meta"><small>September 2024 · 08.4 km</small><h3>Waterfall Route</h3></div></article>
          <article class="peak-card"><img src="/assets/sansandae-mountain.png" alt="Mountain trail detail" /><div class="peak-meta"><small>August 2024 · 11.2 km</small><h3>Gwanaksan</h3></div></article>
          <article class="peak-card"><img src="/assets/sansandae-mountain.png" alt="Rocky summit and pine trees" /><div class="peak-meta"><small>June 2024 · 06.7 km</small><h3>Bukhansan</h3></div></article>
        </div>
      </section>

      <section class="join reveal" id="join"><div class="eyebrow" style="justify-content:center">03 / The next ascent</div><h2>Leave room<br>for a <em>view.</em></h2><p>Our next walk is a small group heading north at first light. Come as you are.</p><a class="join-button" href="mailto:hello@sansandae.club?subject=I want to hike with Sansandae">Join the club <span>↗</span></a></section>
    </main>

    <footer class="footer"><div class="footer-top"><div class="footer-brand">산산대 Sansandae</div><div class="footer-links"><a href="mailto:hello@sansandae.club">Email</a><a href="#join">KakaoTalk</a><a href="#join">Instagram</a></div></div><div class="footer-bottom"><span>© 2024 Sansandae Hiking Club</span><span>Made for the mountain-minded</span></div></footer>
  </div>`;

const wrap = document.querySelector('#mountainWrap');
window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - .5) * 2;
  const y = (event.clientY / window.innerHeight - .5) * 2;
  wrap.style.transform = `translate(${x * 9}px, calc(3vh + ${y * 7}px)) rotateY(${x * 2.5}deg) rotateX(${y * -2.5}deg)`;
}, { passive: true });
window.addEventListener('scroll', () => {
  const progress = Math.min(window.scrollY / window.innerHeight, 1);
  wrap.style.filter = `blur(${progress * 1.5}px)`;
  wrap.style.opacity = `${1 - progress * .5}`;
}, { passive: true });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .16 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
