<template>
	<div class="section card">
		<div class="content has-text-centered">
			<h3 class="title has-text-weight-light">
				There are more on my
				<a
					href="https://github.com/CHanson92"
					target="_blank"
					rel="noopener noreferrer"
					>GitHub</a
				>
				profile where you can also see my recent activity.
			</h3>
			<p class="is-size-5 has-text-weight-light">
				Click through the buttons below to see my projects.
			</p>
			<span
				v-for="(entry, index) in filters"
				:key="index"
				:item="entry"
				class="filterbutton button"
				:class="{ active: entry == currentFilter }"
				@click="currentFilter = entry"
				>{{ entry }}</span
			>
			<div>
				<transition-group
					name="projects"
					mode="out-in"
					tag="div"
					class="columns is-multiline is-vcentered"
				>
					<div
						v-for="project in filterProjects"
						:key="project.title"
						:project="project"
						class="column has-text-centered is-one-third-desktop is-half-tablet"
					>
						<h4 class="title has-text-weight-light">
							{{ project.title }}
						</h4>
						<picture>
							<source
								:data-srcset="
									require(`~/assets/images/${project.image}?webp`)
								"
								type="image/webp"
							/>
							<source
								:data-srcset="
									require(`~/assets/images/${project.image}`)
								"
								type="image/png"
							/>
							<img
								:alt="project.title"
								:data-src="
									require(`~/assets/images/${project.image}`)
								"
								class="image lazyload"
								data-sizes="auto"
							/>
						</picture>
						<p>{{ project.description }}</p>
						<p>{{ project.language }}</p>
						<a
							v-if="project.website !== null"
							:href="project.website"
							class="button"
							target="_blank"
							>Website</a
						>
						<a
							:href="project.github"
							class="button"
							target="_blank"
						>
							<img
								alt="GitHub logo"
								class="image lazyload is-32x32"
								data-src="~/assets/images/GitHub-Mark-120px-plus.png"
							/>
							GitHub Repo
						</a>
					</div>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
import projects from '../assets/js/projects'

export default {
	name: 'Portfolio',

	data() {
		return {
			currentFilter: 0,
			filters: [
				'HTML/CSS/jQuery',
				'PHP/WordPress',
				'React',
				'React Native',
				'Vue'
			],
			projects
		}
	},

	computed: {
		filterProjects() {
			return this.projects.filter(p => p.language === this.currentFilter)
		}
	}
}
</script>

<style lang="scss" scoped>
.projects-enter-active,
.projects-leave-active {
	transition: opacity 1s ease-out;
}

.projects-leave-active {
	position: absolute;
}

.projects-enter-active {
	transition-delay: 0.75s;
}

.projects-enter,
.projects-leave-to {
	opacity: 0;
}

.projects-move {
	transition: transform 1s;
}
</style>
