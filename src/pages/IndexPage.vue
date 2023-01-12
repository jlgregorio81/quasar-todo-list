<template>
  <transition appear enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
    <div style="margin-top: 2rem" class="row q-pa-md justify-center items-start q-gutter-md">
      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-indigo-14 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo" src="~assets/quasar-logo.svg" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">Quasar Framework</div>
            <div class="text-subtitle2 text-center">
              O novo <em> "Write Once, Run Everywhere..."</em>
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p>
              Com o Quasar Framework, que baseado no Vue.js, é possível criar:
            </p>
            <ul>
              <li>SPAs - <em>Single Page Applications</em></li>
              <li>PWAs - <em>Progressive Web Applications</em></li>
              <li>Aplicações Mobile, Web e Desktop</li>
              <li>E muito mais!</li>
            </ul>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="indigo-10"
              style="width: 100%"
              @click="navigate('http://firebase.google.com')"
              >Site Oficial</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <!-- -------------------------------------------------- -->
      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-cyan-10 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo" src="~assets/vue-logo.svg" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">Vue.js Framework</div>
            <div class="text-subtitle2 text-center">
              É como o React, mas bem melhor!😉
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p>
              O Vue.js é um framework Javascript para a construção de interfaces
              do usuário.
            </p>
            <p>
              É ideal para a construção de SPAs
              <em>(Single Page Applications)</em>, provendo um modelo de
              programação declarativa e baseada em componentes.
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="green-14"
              style="width: 100%"
              @click="navigate('http://vuejs.org')"
              >Site Oficial</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-green-14 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo" src="~assets/pinia-logo.svg" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">Pinia</div>
            <div class="text-subtitle2 text-center">
              Gerenciador de estados padrão do Vue.js
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p>
              Pinia é uma biblioteca de armazenamento local (<em>store</em>),
              que substitui o Vuex, permitindo o compartilhamento de estados
              entre os componentes de uma aplicação Vue.
            </p>
            <p>
              É ideal para a construção de aplicações de múltiplas páginas,
              provendo segurança e uma série de outra vantagens.
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="yellow-14"
              text-color="green-14"
              style="width: 100%"
              @click="navigate('https://pinia.vuejs.org/')"
              >Site Oficial</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </transition>
  <transition appear enter-active-class="animated bounceInLeft">
    <div class="row q-pa-md justify-center q-gutter-md">
      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-cyan-10 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo" src="~assets/vue-chartjs-logo.png" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">VueChart.js</div>
            <div class="text-subtitle2 text-center">
              Biblioteca para construção de gráficos, baseda em Chart.js
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p>
              Baseado no Chart.js, uma das mais populares bibliotecas para
              construção de gráficos em Javascript, o VueChart.js é uma
              excelente opção.
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="cyan-14"
              style="width: 100%"
              @click="navigate('https://vue-chartjs.org/')"
              >Site Oficial</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-orange-10 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo" src="~assets/firebase-logo.png" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">Firebase (by Google)</div>
            <div class="text-subtitle2 text-center">
              Simplifica a construção de aplicações Web e Mobile
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p>
              O Google Firebase é uma plataforma de serviços digitais para
              ajudar e facilitar a construção de aplicações Web e Mobile.
            </p>
            <p>
              Além de disponibilizar um banco de dados em tempo real, ele
              fornece uma série de outros serviços como autenticação,
              hospedagem, entre outros.
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="orange-14"
              style="width: 100%"
              @click="navigate('https://firebase.google.com/')"
              >Site Oficial</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <!--  -->
      <div class="col-xs-12 col-md-3">
        <q-card class="my-card bg-blue-grey-9 text-white" bordered>
          <q-card-section class="bg-white">
            <img class="logo rounded" src="~assets/me.jpg" alt="" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center">
              Criado por: Jorge Luís Gregório
            </div>
            <div class="text-subtitle2 text-center">
              Professor e Desenvolvedor de Sistemas
            </div>
          </q-card-section>
          <q-card-section class="custom-section">
            <p class="text-center">Me siga nas redes sociais:</p>
            <div class="row justify-center q-gutter-md">
              <q-btn
                stack
                glossy
                color="pink-6"
                icon="fa-brands fa-instagram"
                label="Instagram"
                @click="navigate('https://www.instagram.com/prof.jlgregorio')"
              />
              <q-btn
                stack
                glossy
                color="blue-10"
                icon="fa-brands fa-facebook"
                label="Facebook"
                @click="
                  navigate('https://www.facebook.com/jorgeluis.gregorio/')
                "
              />
              <q-btn
                stack
                glossy
                color="blue-14"
                icon="fa-brands fa-linkedin"
                label="LinkedIn"
                @click="navigate('https://www.linkedin.com/in/jlgregorio/')"
              />
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="blue-14"
              style="width: 100%"
              icon="fa-solid fa-globe"
              @click="navigate('https://www.jlgregorio.com.br')"
              label="Viste meu site!"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </transition>
</template>

<script setup>
const navigate = (URL) => {
  window.open(URL, "_blank");
};
</script>

<style scoped>
.logo {
  width: 128px;
  height: 128px;
  display: block;
  margin: 0 auto;
}

.rounded {
  border-radius: 50%;
}

.custom-section {
  min-height: 170px;
}
</style>
