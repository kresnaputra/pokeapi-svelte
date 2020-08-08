<script lang="ts">
  import { favorites } from "../utils/Store";

  function onDelete(name: string){
      const filter = $favorites.filter(item => item !== name)
      favorites.set(filter)
  }
</script>

<div class="container">
  <h1>Favorite</h1>

  {#each $favorites as favorite}
    <div class="row">
      <div class="col s6">
        <p>{favorite}</p>
      </div>
      <div class="col s6">
        <button on:click={() => onDelete(favorite)}>delete</button>
      </div>
    </div>
  {/each}
</div>
