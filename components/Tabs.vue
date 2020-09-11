<template>
	<section class="tabsection section">
		<div class="tabs is-boxed is-fullwidth is-large">
			<ul>
				<li
					:class="[selected === 'Portfolio' ? 'is-active' : '']"
					@click="selected = tabs[1]"
				>
					<a>
						<span class="icon">
							<font-awesome-icon icon="laptop-code" /> </span
						>Portfolio
					</a>
				</li>
				<li
					:class="[selected === 'About' ? 'is-active' : '']"
					@click="selected = tabs[0]"
				>
					<a>
						<span class="icon">
							<font-awesome-icon icon="book-reader" /> </span
						>About Me
					</a>
				</li>
			</ul>
		</div>
		<section>
			<transition name="fade" mode="out-in">
				<component :is="selected"></component>
			</transition>
		</section>
	</section>
</template>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-leave,
.fade-enter-to {
	opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}
</style>

<script>
import About from './About'
import Portfolio from './Portfolio'
export default {
	name: 'Tabs',
	components: {
		About,
		Portfolio
	},
	data() {
		return {
			tabs: ['About', 'Portfolio'],
			selected: 'Portfolio'
		}
	}
}
</script>
