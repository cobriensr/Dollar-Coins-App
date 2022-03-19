<script lang="ts">
	import { dollarAmt } from './stores/content';
	import centsConvert from './services/convertCentsToCoins';

	window.onload = () => {
		const form = document.getElementById('dollarConvertForm');
		form?.addEventListener('submit', centsConvert)
	};
</script>

<main>
	<h1>Dollars to Cents Converter</h1>
	<h2>Find the Smallest Amount of Coins Given Current Cents</h2>
	<div id="inputBox">
		<form id="dollarConvertForm" name="convert">
			<label for="dollars">Dollar Amount to Convert</label>
			<input type="number" id="dollars" step="any" min="0" placeholder=0 required bind:value={$dollarAmt}>
			<label for="converted">Coin Converted Amount:</label>
			<input type="text" id="converted" name="outputBox" placeholder=0>
		</form>
	</div>
	<div id="submitBtn">
		<button form="dollarConvertForm" type="submit">Convert!</button>
	</div>
</main>

<style>
</style>