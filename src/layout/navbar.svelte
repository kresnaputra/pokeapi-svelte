<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<div class="navbar-fixed">
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <Link to="/" class="brand-logo">Pokeapi Svelte</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
