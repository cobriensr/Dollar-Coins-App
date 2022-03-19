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
	<div class="antialiased text-gray-900 px-6">
		<div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
			<div class="py-8">
				<h1 class="text-4xl font-bold">Dollars to Cents Converter</h1>
				<h2 class="mt-2 text-lg text-gray-600">Find the Smallest Amount of Coins Given Current Cents</h2>
			</div>
			<div class="py-12" id="inputBox">
				<div class="mt-8 max-w-md">			
					<form id="dollarConvertForm" name="convert">
						<div class="grid grid-cols-1 gap-">
							<label class="block" for="dollars">
								<span class="text=gray-700">Dollar Amount to Convert:</span>
								<input class="mt-1 block w-full" type="number" id="dollars" step=".01" min="0" placeholder=0 required bind:value={$dollarAmt}>
							</label>
							<label class="block" for="converted">
								<span class="text-gray-700">Converted Amount in Cents:</span>
								<input class="mt-1 block w-full" type="text" id="converted" name="outputBox" placeholder=0>
							</label>
						</div>
					</form>
				</div>
			</div>
			<div id="submitBtn">
				<button form="dollarConvertForm" type="submit">Convert Dollars to Cents!</button>
				<button id="coinConvert" type="button">Convert Cents to Coins!</button>
			</div>
			<div>
				<p id="finalOutput"></p>
			</div>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>