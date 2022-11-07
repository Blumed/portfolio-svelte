<script lang="ts">
	import { browser } from '$app/environment';
	export let toggle: boolean;
	if (browser) {
		const ctx = canvas.getContext('2d');

		// Object to hold mouse coords
		const lookat = { x: 150, y: 75 };
		// details need to make eye look at mouse coords
		const eye = {
			radius: 50,
			iris: 30,
			// limits of movement
			limMin: -0.1,
			limMax: 1.1
		};
		const drawEye = (lookat: { x: number; y: number }) => {
			let { x, y } = lookat;

			// normalise lookat range from 0 to 1 across and down canvas
			x /= canvas.width;
			y /= canvas.height;

			// limit eye movement to -0.1 to 1.1  or what ever you prefer
			x = x < eye.limMin ? eye.limMin : x > eye.limMax ? eye.limMax : x;
			y = y < eye.limMin ? eye.limMin : y > eye.limMax ? eye.limMax : y;

			// move lookat so that 0.5 is center
			x -= 0.5;
			y -= 0.5;

			// get range of movement of iris
			const range = (eye.radius - eye.iris) * 2;

			// scale the lookats to the range of movement
			x *= range;
			y *= range;

			// draw outer eyes  left, right
			ctx.strokeStyle = 'transparent';
			ctx.beginPath();
			ctx.arc(75, 75, eye.radius, 0, Math.PI * 2, false);
			ctx.stroke();

			// use eyes to create a clip so iris does not draw outside the eye.
			// first save canvas state so clip can be turned off at end
			ctx.save();
			// turn on clip which will use the two circles currently the active path
			ctx.clip();

			// draw  iris & pupil are offset by x,y within the clip

			//iris left, right
			ctx.fillStyle = 'white';
			ctx.beginPath();
			ctx.arc(75 + x, 75 + y, eye.iris, 0, Math.PI * 2, false);
			ctx.fill();

			//pupil left, right
			ctx.fillStyle = 'black';
			ctx.beginPath();
			ctx.arc(75 + x, 75 + y, 15, 0, Math.PI * 2, false);
			ctx.fill();

			// turn the clip off by restoring canvas state
			ctx.restore();
		};

		// add mouse move listener to whole page
		addEventListener('mousemove', (event) => {
			// make mouse coords relative to the canvas  ignoring scroll in this case
			const bounds = canvas.getBoundingClientRect();
			lookat.x = event.pageX - bounds.left; // - scrollX;
			lookat.y = event.pageY - bounds.top; // - scrollY;

			ctx.clearRect(0, 0, 150, 150);
			drawEye(lookat);
		});

		drawEye(lookat);
	}
</script>

<div class={`outer-ring ${toggle ? 'active' : ''}`}>
	<canvas id="canvas" width="150" height="150" />
</div>

<style lang="scss">
	canvas {
		position: absolute;
		left: -63px;
		scale: 0.24;
		top: -62px;
	}
	.outer-ring {
		position: relative;
		width: 22px;
		height: 22px;
		top: -96px;
		background: transparent;
		left: 25px;
		&.active:after {
			background-color: white;
		}
		&:after {
			content: '';
			border: 2px solid white;
			position: absolute;
			left: 0;
			top: 0;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			z-index: -1;
		}
	}
	@media (max-width: 768px) {
		.outer-ring {
			display: none;
		}
	}
</style>
