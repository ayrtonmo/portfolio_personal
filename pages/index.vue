<script setup lang="ts">
	import {ref, watch, onMounted} from 'vue';

</script>

<template>
	<div class="header-container">
	<h2 class="card-title primary-font">Sobre mi</h2>
	</div>
	<div class="content-container">
		<div class="text-container primary-font">
			<p class="sobre-mi-text">
				Mi nombre es Ayrton Morrison, soy un estudiante de 3er año de Ingeniería Civil en Informática en la Universidad de Magallanes. Me gusta mucho la programación y el desarrollo de software, constantemente me encuentro aprendiendo y mejorando mis habilidades.
			</p>
		</div>

		<div class="header-container">
			<h2 class="card-title primary-font">Experiencia</h2>
		</div>

		<div class="text-container primary-font">
			<p class="sobre-mi-text">
				Actualmente estoy enfocado en el desarrollo web, principalmente en frontend, utilizando tecnologías como Vue.js, Nuxt.js, y Bootstrap para crear aplicaciones web modernas y responsivas. Sin embargo, mis proyectos principales fueron realizados en <a href="https://es.wikipedia.org/wiki/C_%28lenguaje_de_programaci%C3%B3n%29" target="_blank" rel="noopener noreferrer">C</a> y <a href="https://es.wikipedia.org/wiki/Python" target="_blank" rel="noopener noreferrer">Python</a>. Más adelante se podrán observar algunos proyectos en los que he participado.
			</p>
		</div>

		<div class="header-container">
			<h2 class="card-title primary-font">Proyectos</h2>
		</div>

		<div class="item-container  primary-font">
			<div class="item">
				<a href="https://github.com/ayrvanmo/Fly" target="_blank" rel="noopener noreferrer"> Fly</a>
				<br />
				<p>Motor de búsqueda de palabras clave dentro de directorios realizado en C.</p>
			</div>
			<div class="item">
				<a href="https://github.com/ayrvanmo/ForKing" target="_blank" rel="noopener noreferrer"> ForKing</a>
				<br />
				<p>Simulador de gestor de procesos desarrollado en C con algunas funcionalidades en Python.</p>
			</div>
			<div class="item">
				<a href="https://github.com/ayrvanmo/ugit" target="_blank" rel="noopener noreferrer"> Ugit </a>
				<br />
				<p>Clon simplificado del software <a href="https://es.wikipedia.org/wiki/Git" target="_blank" rel="noopener noreferrer">Git</a>.</p>
			</div>
			<div class="item">
				<a href="https://github.com/ayrvanmo/GrapeFruit" target="_blank" rel="noopener noreferrer"> GrapeFruit</a>
				<br />
				<p> Simulador simplificado de red social, implementando algoritmos de recomendación.</p>
			</div>
		</div>

		<div class="header-container">
			<h2 class="card-title primary-font"> Experiencia con </h2>
		</div>

				<div class="item-container primary-font">
					<div class="item">
						<a href="https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)" target="_blank" rel="noopener noreferrer">
							<img class="item-image" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" />
						</a>
					</div>
					<div class="item">
						<a href="https://es.wikipedia.org/wiki/Python" target="_blank" rel="noopener noreferrer">
							<img class="item-image" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
						</a>
					</div>
					<div class="item">
						<a href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)" target="_blank" rel="noopener noreferrer">
							<img class="item-image" src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" />
						</a>
					</div>
					<div class="item">
						<a href="https://es.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">
							<img class="item-image" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML/CSS" />
						</a>
					</div>
				</div>
			</div>

			<div class="footer-container primary-font">
				<p>Contacto:</p>
				<p>Correo: <a class="mail" href="mailto:ayrtonmorrison15@gmail.com">ayrtonmorrison15@gmail.com</a></p>
			</div>


		</template>

<style scoped>





</style>