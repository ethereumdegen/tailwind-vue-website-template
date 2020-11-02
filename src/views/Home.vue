<template>
<div>


<Navbar />

<div class="w-full flex flex-wrap w-full my-8 pt-2 bg-gray-800" >
	<div class="pt-6 md:pt-0  md:flex-1 md:order-last">

		<carousel :per-page="1" :autoplay="true" :navigationEnabled="false" :paginationEnabled="false">

			<slide>
						<img src="@/assets/img/promo1.png" class="w-full"  />
			</slide>


			<slide>
				 		<img src="@/assets/img/production1.png" class="w-full"  />
			</slide>

			<slide>

					<img src="@/assets/img/starmap1.png"  class="w-full" />

			</slide>
			</carousel>

	</div>
	<div class="w-full p-6 pb-12 md:p-12 md:w-5/12 flex justify-center items-center relative">
		<div class="w-full relative text-center py-12 px-12 md:p-0 md:text-right">

			<div class='text-gray-200 text-lg'>
			   Browser-based Space MMO
			</div>

			<div class='text-gray-400'>
				 Cryptocurrency fuels the engines to war
			</div>


			<div class="items-center p-6">
				<a href="http://amber.ethereumspacewar.com" class="inline-block bg-yellow-500 text-black px-6 py-3 font-bold text-md hover:bg-gray-400"  >
					Play the Alpha
				</a>
			</div>
		<!--
			<h1 class="text-2xl mb-4">You abused the gift of Magic.</h1>
			<p class="leading-loose tracking-wide text-gray-700">The Void comes to rid you your planet .</p>
		-->

		</div>
	</div>
</div>




<Footer />

</div>
</template>


<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import { Carousel, Slide } from 'vue-carousel';

import Navbar from './Navbar.vue'

import Footer from './Footer.vue'


const Web3 = require('web3');



export default {
  name: 'Home',
  components: {
     Navbar, Carousel, Slide, Footer
  },
  data () {
    return {
      activeAccountAddress: null,
			network: 'ethereum',
			providerNetworkID: null,
			assetName: '0xBTC'
    }
  },
  created () {




  },
  methods: {



  }

}
</script>
