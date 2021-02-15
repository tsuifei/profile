<script>
export default {
  
  }
</script>

<template>
<div class="job">
<h3>Expériences professionnelles</h3>
  <ul class="job__timeline">
    <li class="job__date" data-year="Nov 2019 - 2020">
      <h5 class="job__title">Développeuse Front-end / Intégratrice </h5>
        <ul>
          <li>Conception, développement et Intégration du site web Installation et maintenance</li>
          <li>Prise en compte des compatibilités croisées sur tous les navigateurs</li>
          <li>Intégration web avec VueJs</li>
        </ul>
        <div class="job__skill">
        Skills : HTML, CSS, RWD, JavaScript, VueJs, SASS, Git, WordPress, Shell
        </div>
        <div class="job__info">
        Projets personnels | Paris - Taiwan
        </div>
    </li>
    <li class="job__date" data-year="Mai 2019 - Oct 2019">
      <h5 class="job__title">Développeuse Front-end / Intégratrice</h5>
        <ul>
          <li>Effectuer la maintenance évolutive et corrective des applications VueJs (2.6)</li>
          <li>Prise en compte des compatibilités croisées sur tous les navigateurs</li>
          <li>Intégration d’API Rest en coordination avec l'équipe backend</li>
          <li>Intégration web avec VueJs</li>
        </ul>
        <div class="job__skill">
        Skills : HTML, CSS, RWD, JavaScript, SASS, Bootstrap, Git, Shell, VueJs
        </div>
        <div class="job__info">
        Good Ideas Studio | Taïwan
        </div>
    </li>
    <li class="job__date" data-year="Oct 2018 - Avril 2019">
      <h5 class="job__title">Développeuse web</h5>
        <ul>
          <li>Conception, développement et Intégration du site web Installation et maintenance d'une plateforme Moodle d'apprentissage en ligne.</li>
          <li>Rechercher et création de visuelle pour les documents multimedia de presentation.</li>
        </ul>
        <div class="job__skill">
        Skills : HTML, CSS, RWD, JavaScript, WordPress, PHP, MySql, Shell.
        </div> 
        <div class="job__info">
        VirtualiSurg . stage | Paris 
        </div>   
    </li>

    <li class="job__date" data-year="Sept 2007 - Avril 2016">
      <h5 class="job__title">Développeuse web / Intégratrice / Graphiste / Infographiste</h5>
      <ul>
        <li>Conception, web design et développement de 4 sites internet dont 1 site de e-commerce B2B, intégration des interfaces adaptées pour le client.</li>
        <li>Intégration et création des newsletters e-commerce et documents multimédia.</li>
      </ul>
      <div class="job__skill">Skills : HTML, CSS, JavaScript, Jquery, PHP, MySql, Photoshop, Illustrateur, InDesign.</div> 
      <div class="job__info">PC International | Paris </div>  
    </li>

    <li class="job__date" data-year="2005 - Aout 2007">
      <h5 class="job__title">Développeuse web / Webdesigner Freelance</h5>
      <ul>
        <li>Développement et Création de sites web : Cahier des charges, Design graphique, Integration, Développement.</li>
      </ul>
      <div class="job__skill">Skills : HTML, CSS, JavaScript, Jquery, WordPress, PHP, MySql, Photoshop, Illustrator</div>
      <div class="job__info">Indépendant | Paris</div>  
    </li>

    <li class="job__date" data-year="2003 - 2005">
      <h5 class="job__title">Développeuse web / Webdesigner</h5>
      <ul>
        <li>Conception, Design et Développement des sites Web de deux marques de haute couture.</li>
        <li>Conception graphique du site et print</li>
      </ul>
      <div class="job__skill">Skills : Flash, JavaScript, CSS, HTML, Photoshop, Illustrator</div> 
      <div class="job__info">Yufengshawn Haute Couture | Paris, </div>   
    </li>

    <li class="job__date" data-year="1993 - 2001">
      <h5 class="job__title">Graphiste / Infographiste</h5>
      <p>Conception graphique Print ( identité visuelle, logo, brochure, affiche, presse,…).</p>
      <div class="job__skill">Skills : Photoshop, Illustrator, Indesign, Flash, Dreamweaver, actionScript</div>
      <div class="job__info">Taipei Taïwan</div>   
    </li>
  </ul> 

</div>
</template>

<style scoped lang="scss">
/* Import */
// @import "@/assets/css/variables";
// @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700|Oswald:400,300,700);

@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";


.job {
  position: relative;

  .job__timeline {
    border-left: $line solid $color-primary;
    border-bottom-right-radius: $radius;
    border-top-right-radius: $radius;    
    background: fade($color-light, 3%);
    color: fade(white, 80%);
    font-family: $font-text;  
    margin: $spacing ($spacing * 0.1) $spacing ($spacing * 4);  
    letter-spacing: 0.5px;   
    position: relative;
    line-height: 1.4rem;
    font-size: 1.03rem;   
    padding: 0 $spacing;   
    list-style: none;
    text-align: left;  
    max-width: 85%; 
    // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) { 
      margin: ($spacing * 0.1); 
      padding: ($spacing * 0.3);
      max-width: 100%; 
    }
    .job__date {
      border-bottom: 1px dashed $color-primary;
      // border-bottom: 1px dashed fade($color-primary, 60%);
      padding-bottom: ($spacing * 0.5);
      margin-bottom: $spacing;  
      position: relative;
  
      &:last-of-type { 
        padding-bottom: 0;
        margin-bottom: 0; 
        border: none;      
      }
  
      &:before, &:after {
        position: absolute;
        display: block;
        top: 0;
        @media (max-width: 575.98px) { 
          position: revert;
          
        }
      }
  
      &:before {
        left: ((($date * 0.6) + $spacing + $line + $dot + ($dotborder * 2)) * 1.5) * -1;    
        color: fade($color-light, 40%);    
        content: attr(data-year);
        text-align: right;
        font-weight: 100;    
        font-size: 0.9rem;
        min-width: $date;
      }
  
      &:after {
        box-shadow: 0 0 0 $dotborder fade($color-primary,100%);    
        left: ($spacing + $line + ($dot * 0.35)) * -1;        
        background: lighten($color-primary,5%);    
        border-radius: 50%;  
        height: $dot;
        width: $dot;
        content: "";
        top: 5px;
        @media (max-width: 575.98px) { 
          display: none;
        }
      }
    }
    .job__title{
      margin-top: 0.5rem;
    }
    .job__skill {
    // font-weight: 300;
    // padding-top: 0.3rem;
    font-weight: 400;
    padding-top: 0.3rem;
    color:lighten($color-second,20%);
    }
    .job__info{
    color: $color-gris;
    font-size: 1rem;
    margin-top: 0.5rem;
    // font-family: $font-title;
    font-weight: 300;
    }
    ul li {
    font-family: $font-text;
    font-weight: 400;
    // color:$color-gris;
    color:$color-dark;
    }
  }
}

</style>