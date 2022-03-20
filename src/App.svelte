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
	<div class="antialiased text-gray-900 flex justify-center">
		<div class="max-w-xl mx-auto py-12 md:max-w-4xl">
			<div class="py-4">
				<h1 class="text-4xl font-bold flex justify-center text-center">Dollars to Cents Converter</h1>
				<h2 class="mt-1 text-lg text-gray-600 flex justify-center text-center">Find the Smallest Amount of Coins Given Current Cents</h2>
				<br>
				<hr>
			</div>
			<div class="py-2" id="inputBox">
				<div class="mt-1 max-w-md">			
					<form id="dollarConvertForm" name="convert">
						<div class="grid grid-cols-1 gap-1">
							<label class="block" for="dollars">
								<span class="text=gray-700 flex justify-center">Dollar Amount to Convert:</span>
								<input class="mt-1 block w-full" type="number" id="dollars" step=".01" min="0" placeholder=0 required bind:value={$dollarAmt}>
							</label>
							<br>
							<label class="block" for="converted">
								<span class="text-gray-700 flex justify-center">Converted Amount in Cents:</span>
								<input class="mt-1 block w-full" type="text" id="converted" name="outputBox" placeholder=0>
							</label>
							<br>
						</div>
					</form>
				</div>
			</div>
			<div class="flex justify-center" id="submitBtn">
				<button form="dollarConvertForm" type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Convert Dollars to Cents!</button>
				<button id="coinConvert" type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Convert Cents to Coins!</button>
			</div>
			<div>
				<p class="mt-1 max-w-sm text-center" id="finalOutput"></p>
			</div>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>