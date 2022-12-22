<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<div class="theme-control">
	<label for="theme-toggle">Dark Mode</label>
	<input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
</div>

<style lang="scss">
	.theme-control {
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		input {
			position: relative;
			width: 40px;
			height: 20px;
			-webkit-appearance: none;
			appearance: none;
			border-radius: 2rem;
			cursor: pointer;
			box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
			&:before {
				content: '';
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: #fff;
				position: absolute;
				top: 0;
				left: 0;
				transition: 0.5s;
			}
			&:checked {
				background: transparent;
				&:before {
					transform: translateX(100%);
					background: #fff;
				}
			}
		}
	}
	.dark .theme-control {
		input {
			box-shadow: inset 0 0 5px rgb(0, 0, 0, 0.5);
			&:before {
				background-color: var(--primary-color);
			}
		}
	}
</style>
