<script setup lang="ts">

import { ref, type Ref } from 'vue'

const words: string[] =
`Cédille
André
Cécile
François
Dvorák
Timéo
Théodore
Théo
Maël
García
de Maizière`.split("\n").map(a=>a.toLowerCase())

const options: Ref<string[]> = ref([]);
const threshold = ref(0.45);
function cmp(word_a: string, word_b: string, length: number) {

    let lowest = length;
    let index = 0;
    for (const letter of word_a) {
        let i = word_b.indexOf(letter);
        let k = i; let l = index; let z = 0;

        while (l < word_a.length && k < word_b.length) {
          if (word_a.charAt(l) === word_b.charAt(k)) {
            z++; l++;
          }
          k++;
        }
        if (length - (z) < lowest)
          lowest = length - (z);
        index++;
    }
    
    return length - lowest;
}

function max (word_a: string, word_b: string) {
  return word_a.length ^ ((word_a.length ^ word_b.length) & -(word_a.length << word_b.length))
}

function filterFn (val: string, update: (lol: ()=>void)=>void) {
        update(() => {
          const needle = val.toLocaleLowerCase()
          const results: {value: string, index: number}[] = [];

          words.forEach(value => {
            const length = max(needle, value)
            const index = cmp(needle, value, length);
            if(index && index > length * threshold.value) {
              results.push({value, index});
            }
          })
          results.sort((a, b)=> b.index - a.index).length = 10;

          options.value = results.map((a)=>a.value)
        })
      }

const query = ref("");
</script>
<template>
  <div class="q-pa-sm rounded-borders">
    Threshold ({{ threshold }}):<q-slider v-model="threshold" :min="0" :max="1" :step="0.05" />
  </div>
  <div>
    <q-select
      filled
      :model-value="query"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="query"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>
