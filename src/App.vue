<template>
    <!-- menu main -->
    <Menu />
    <main class="flex-shrink-0 main has-footer">
        <!-- Fixed navbar -->
        <Header />
        <div class="main-container">
            <!-- page content start -->
            <router-view></router-view>
        </div>
    </main>
    <!-- footer-->
    <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Menu from './components/Menu.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Menu,
      Footer,
    }
  }
</script>