<script lang="ts">
  import Navbar from "./layout/navbar.svelte";
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Detail from "./pages/Detail.svelte";
  import Favorite from "./pages/Favorite.svelte";
</script>

<Router>
  <Navbar />
  <Route path="/" component={Home} />
  <Route path="/Favorite" component={Favorite} />
  <Route path="/detail/:id" let:params>
    <Detail id={params.id} />
  </Route>
</Router>
