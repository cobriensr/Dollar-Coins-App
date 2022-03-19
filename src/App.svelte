<script lang="ts">
	import { dollarAmt } from './stores/content';
	import centsConvert from '../src/services/convertDollarsToCents';
	import coinsConvert from '../src/services/convertCentsToCoins';

	window.onload = () => {
		const form = document.getElementById('dollarConvertForm');
		form?.addEventListener('submit', centsConvert);
		const button = document.getElementById('coinConvert');
		button?.addEventListener('click', coinsConvert);
	};
</script>

<main>
	<h1>Dollars to Cents Converter</h1>
	<h2>Find the Smallest Amount of Coins Given Current Cents</h2>
	<div id="inputBox">
		<form id="dollarConvertForm" name="convert">
			<label for="dollars">Dollar Amount to Convert:</label>
			<input type="number" id="dollars" step=".01" min="0" placeholder=0 required bind:value={$dollarAmt}>
			<label for="converted">Converted Amount in Cents:</label>
			<input type="text" id="converted" name="outputBox" placeholder=0>
		</form>
	</div>
	<div id="submitBtn">
		<button form="dollarConvertForm" type="submit">Convert Dollars to Cents!</button>
		<button id="coinConvert" type="button">Convert Cents to Coins!</button>
	</div>
	<div>
		<p id="finalOutput"></p>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>