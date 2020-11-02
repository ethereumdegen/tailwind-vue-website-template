<template>
  <div class="about" >

    <nav id="header" class="w-full z-10 pin-t">

    	<div id="progress" class="h-1 z-20 pin-t" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3  px-4" style="background-color:#111;">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl text-yellow-400"  href="#">
    					Ethereum Space War Wiki
    				</a>
          </div>



    		</div>
    	</nav>




      <div class="flex mb-4   " style="min-height:450px">
        <div class="w-1/3 bg-gray-800 overflow-y-scroll text-white ">
          <div class="m-6 p-4 bg-gray-900">

            <ul>
              <li> <a href="#" @click="setContent('thegame')"> The Game </a> </li>
              <li> <a href="#" @click="setContent('connecting')"> Connecting with Metamask </a> </li>
          </ul>

          </div>
        </div>
        <div class="w-2/3 bg-gray-800 text-white " >
          <div class="m-6 p-4 bg-gray-900">


            <div v-if="activeContent == 'thegame'">
              <h3 class="text-lg">  Ethereum Space War </h3>
              <br>

              <p>
                Ethereum Space War is a 3D Space MMORPG that is played in a browser such as Chrome or Firefox.
                </p>
                <br>
                <p>
                   In order to connect to the game, you will need to download the Ethereum Wallet plugin 'Metamask' in order to log into the game and so that you can interact with the in-game currency named '0xBTC'.
               </p>

            </div>

            <div v-if="activeContent == 'connecting'">
              <h3 class="text-lg"> Getting Connected </h3>
              <br>

              <p> To connect to this Application, you will need a Web3 compatible browser or extension such as Metamask. (<a href="https://metamask.io" target="_blank" >https://metamask.io</a>)    </p>
              <br>
              <p> Once you have installed Metamask, you will need to add a Custom RPC for the Matic Network so that you will be able to digitally sign transactions for the Matic Network.   To do this, click on the 'Networks' dropdown at the very top of Metamask and change it from 'Main Ethereum Network' to 'Custom RPC' and use the following information: </p>
                <br>
                <ul>
                  <li> Network Name: "Matic Network"</li>
                  <li> New RPC URL: "https://rpc-mainnet.matic.network"</li>
                  <li> Chain ID: "137" </li>
                  <li> Symbol: "M" </li>
                  <li> Block Explorer URL: "https://explorer.matic.network" </li>
                </ul>
                <br>
                <p> Once you have added the Matic Network information to Metamask, switch Metamask back to 'Ethereum Mainnet Network'.  During the use of the Dapp, you may be asked to switch over to the 'Matic Mainnet Network' when you intend to digitally sign transactions for the Matic Network and now you are prepared to do so.  </p>
            </div>



          </div>
        </div>
      </div>

      <Footer />

  </div>
</template>


<script>
import Footer from './Footer.vue'

export default {
  name: 'Wiki',
  props: [],
  components:{Footer},
  data() {
    return {
      activeContent: 'thegame'
    }
  },
  methods: {

    setContent (contentName) {
      console.log('set content', contentName)
      this.activeContent = contentName;
    }
  }
}
</script>
