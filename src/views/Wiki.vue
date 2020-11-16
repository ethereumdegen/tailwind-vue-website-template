<template>
  <div class="about" >

    <nav id="header" class="w-full z-10 pin-t">

    	<div id="progress" class="h-1 z-20 pin-t" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3  px-4" style="background-color:#111;">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl text-yellow-400"  href="#">
    				 Wiki
    				</a>
          </div>



    		</div>
    	</nav>




      <div class="flex mb-4   " style="min-height:450px">
        <div class="w-1/3 bg-gray-800 overflow-y-scroll text-white ">
          <div class="m-6 p-4 bg-gray-900">

            <ul>
              <li> <a href="#" @click="setContent('topic1')"> Topic1 </a> </li>
              <li> <a href="#" @click="setContent('topic2')"> Topic2 </a> </li>
          </ul>

          </div>
        </div>
        <div class="w-2/3 bg-gray-800 text-white " >
          <div class="m-6 p-4 bg-gray-900">


            <div v-if="activeContent == 'topic1'">
              <h3 class="text-lg">  Topic1 </h3>
              <br>

              <p>
                hi
                </p>


            </div>

            <div v-if="activeContent == 'topic2'">
              <h3 class="text-lg"> Topic2 </h3>
              <br>

              <p> hello  </p>

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
      activeContent: 'topic1'
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
