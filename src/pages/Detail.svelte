<script lang="ts">
  import { onMount } from "svelte";
  import { favorites } from "../utils/Store";
  import HttpRequest, { BASE_URL } from "../utils/HttpRequest";
  import type { IResponsePokemon } from "../types/response";
  import type { IPokemonData } from "../types/pokemon";
  export let id: number;

  let dataPokemon: IPokemonData;
  let loading = true;

  onMount(async () => {
    HttpRequest<IPokemonData>(`${BASE_URL}/${id}`)
      .then((res) => res.parsedBody)
      .then((res) => {
        dataPokemon = res;
        loading = false;
      });
  });

  function onFavorite() {
    if (!$favorites.find((item) => item === dataPokemon.name)) {
      favorites.update((prev) => [...prev, dataPokemon.name]);
      alert("Berhasil ditambah");
    }
  }
</script>

<div class="container">
  {#if loading}
    <p>Loading ...</p>
  {:else}
    <h1>Detail Pokemon</h1>
    <p>name: {dataPokemon.name}</p>
    <p>types:</p>
    {#each dataPokemon.types as type}
      <p>• {type.type.name}</p>
    {/each}
    <p>stats:</p>
    {#each dataPokemon.stats as stat}
      <p>• {stat.stat.name}: {stat.base_stat}</p>
    {/each}
    <button on:click={onFavorite}>Add favorite</button>
  {/if}

</div>
