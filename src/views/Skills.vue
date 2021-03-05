<script>
export default {
  
  }
</script>

<template>
<div class="wrap" data-aos="fade-up">
  <h1>Skills</h1>
<h3>Mes Competences</h3>

<div class="skill__map">
	<a href="https://whimsical.com/my-skills-AbLqkV8cgEY5YouZEDYvt4">
	<img src="~@/assets/images/mySkills.png" alt="my skills">
	</a>
	<!-- <iframe style="border:none" width="100%" src="https://whimsical.com/embed/AbLqkV8cgEY5YouZEDYvt4"></iframe> -->
</div>
<ul class="skill__icons" data-aos="fade-up">
	<li>
			<i class="devicons devicon-javascript-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-vuejs-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-jquery-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-git-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-c-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-php-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-wordpress-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-mongodb-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-mysql-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-html5-plain"></i>
	</li>
	<li>
			<i class="devicons devicon-css3-plain"></i>
	</li>
	<li>
		<i class="devicons devicon-sass-original"></i>
	</li>
	<li>
		<i class="devicons devicon-bootstrap-plain"></i>
	</li>
</ul>
  <h3>COMPETENCES PRINCIPALES </h3>
  <p>
 JavaScript, 
 HTML/CSS/RWD, 
 Vue.js, 
 CMS(Wordpress)
 </p>
<h4 class="skill__second">Metiers : </h4>
<p>Développement Front-End, Intégration, Développement Full-Stack, Maintenance évolutive, Conception technique</p>
  <h3>Compétences techniques</h3>
<h4 class="skill__second">Langages</h4>
<p>JavaScript, ES6+, HTML, CSS, PHP, C, Shell. </p>
<h4 class="skill__second">Logiciels</h4>
<p>Slack, Trello, Notion, Hackmd, Zoom, Teams, Meet, Visual Studio Code, git, Adobe XD, Figma, Zeplin, Photoshop, Illustrator, Indesign</p>
<h4 class="skill__second">Frameworks</h4>
<p>Vuejs, Bootstrap</p>
<h4 class="skill__second">Librairies</h4>
<p>Vue-Router, Vuex, RxJS, GraphQL, npm, Yarn, Jest, Sass, Pug, Webpack, Babel</p>
<h4 class="skill__second">Système d'exploitation</h4>
<p>MacOS, Linux (Ubuntu), Windows </p>
<h4 class="skill__second">Methodologies</h4>
<p>SCRUM, Cascade</p>
<h4 class="skill__second">Base de données</h4>
<p>JSON, MySQL, MongoDB, Postman</p>
<h4 class="skill__second">Système de gestion de contenu</h4>
<p>WordPress, OpenCart, Prestashop, Drupal</p>

<h3>Compétences fonctionnelles </h3>
<p>Management, Gestion de projet, Analyse fonctionnelle et technique des besoins,
Rédaction des spécifications fonctionnelles, Recette, Communication, Travail en équipe, Travail à distance, Organisation</p>
</div>
</template>
<style scoped lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";
.skill__map{
    padding-top: 50px;
		> img{
			width: 100%;
			height: 800px;
			@media screen and (max-width: 575.98px) {
      width: 100%;
			height:auto;
    	}
		}
		
}
.skill__primary{}
.skill__second{
    font-size: 1.1rem;
    color: $color-primary;
    font-weight: 500;
    margin-top: 1.3rem;
    margin-bottom: 0.3rem;;
    font-family:$font-title;
    // text-transform:uppercase;
    // capitalize, lowercase, uppercase
    
    }
.skill__icons {
	margin: $spacing auto ($spacing /2);
	display: flex;
	flex-wrap:wrap;
	li {
		padding-right: 2rem;
		font-size: 3.5rem;
		color: $color-primary;
		i {
		font-size: 3rem;
		color: $color-primary;
		}
	}
	@media screen and (max-width: 575.98px) {
		display: none;
	}
}


</style>