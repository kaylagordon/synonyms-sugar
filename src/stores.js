import { writable } from 'svelte/store';

export const word = writable('chicken');

export const synonyms = writable([]);
