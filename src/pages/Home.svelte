<script lang="ts">
  import { navigate, Link } from "svelte-routing";
  import type { IPokemon } from "../types/pokemon";
  import type { IResponsePokemon } from "../types/response";
  import HttpRequest, { BASE_URL } from "../utils/HttpRequest";
  import { onMount } from "svelte";
  let pokemons: IPokemon[] = [];

  onMount(async () => {
    HttpRequest<IResponsePokemon>(BASE_URL)
      .then((res) => res.parsedBody)
      .then((res) => (pokemons = [...pokemons, ...res.results]));
  });
</script>

<div class="container">
  <div class="row">
    <h1>Home</h1>
    <div class="row">
      {#each pokemons as pokemon, index}
        <div class="col s6">
          <Link to={`/detail/${index+1}`}>
            <button>{pokemon.name}</button>
          </Link>
        </div>
      {/each}
    </div>
  </div>
</div>
