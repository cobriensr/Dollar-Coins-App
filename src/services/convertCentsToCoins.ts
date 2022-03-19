import { get } from 'svelte/store';
import { dollarAmt } from '../stores/content';

export default function coinsConvert (): void {
    const dollarAmtValue: number = get(dollarAmt)
    const result: string = convertCentstoCoins(dollarAmtValue)
    const selection = document.getElementById('converted') as HTMLInputElement
    selection.value = result
}

function convertCentstoCoins (value: number): string {
    return ''
}
