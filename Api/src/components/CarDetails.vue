<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const route = useRoute()
const car = ref(null)
const error = ref(null)

onMounted(async () => {
  const carId = route.params.carId
  const corsProxy = 'https://cors-anywhere.herokuapp.com/'
  const targetUrl = 'https://car-rental-merito-application.azurewebsites.net/api/cars/get-all-cars'
  const url = corsProxy + targetUrl

  try {
    const response = await fetch(url)
    const result = await response.json()
    car.value = result.cars.find(car => car._id === carId)

    if (!car.value) {
      error.value = 'Samochód nie znaleziony'
    }
  } catch (err) {
    error.value = 'Błąd pobierania'
    console.error(err)
  }
})
</script>

<template>
  <div :class="$style.carDetails">
    <div :class="$style.heroSection">
      <div :class="$style.heroSectionChild"></div>
      <img :class="$style.mainPictureIcon" alt="" src="@/assets/Main Picture.png" />

      <div :class="$style.headerText">
        <div :class="$style.cieszSiYciemDzikiNaszymParent">
          <div :class="$style.cieszSiYciemContainer">
            <p :class="$style.cieszSiYciemText">Ciesz się życiem dzięki</p>
            <p :class="$style.cieszSiYciemText">naszym wygodnym</p>
            <p :class="$style.cieszSiYciemText">samochodom.</p>
          </div>
          <div :class="$style.carentJestGotowy">
            Carent jest gotowy zaoferować najlepsze doświadczenie w zakresie wynajmu samochodów.
          </div>
        </div>
        <div :class="$style.zalogujSiZarejestrujSiWrapper">
          <div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
        </div>
      </div>

      <div :class="$style.headMenu">
        <div :class="$style.zalogujSi">CARENT</div>
        <div :class="$style.menu">
          <div :class="$style.menuItems">
            <div :class="$style.zalogujSi">Główna</div>
            <div :class="$style.oNas">O nas</div>
            <div :class="$style.zalogujSi">Rezerwacja</div>
            <div :class="$style.zalogujSi">Samochody</div>
            <div :class="$style.zalogujSi">Kontakt</div>
            <div :class="$style.cta">
              <div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.socialMenu">
        <div :class="$style.socialMenuChild"></div>
        <div :class="$style.socials">
          <img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logofacebook.png" />
          <img :class="$style.socialMediaLogo1" alt="" src="@/assets/Social media logoinstagram.png" />
          <img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logox.png" />
          <img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logoviber.png" />
          <img :class="$style.socialMediaLogo1" alt="" src="@/assets/Social media logotelegram.png" />
        </div>
        <div :class="$style.socialMenuChild"></div>
      </div>

                     <div :class="$style.available">
                   <div :class="$style.darkMood">Dark Mood</div>
                   <div :class="$style.on" @click="toggleDark()">
      <div :class="$style.rectangleParent">
        <div :class="$style.groupChild" />
        <div :class="$style.offParent">
          <div :class="$style.off">{{ isDark ? 'On' : 'Off' }}</div>
          <div :class="[$style.groupItem, isDark ? 'active' : '']" />
      </div>
      </div>
      </div>
      </div>
      </div>
      
    


    <div v-if="car">
      <div :class="$style.textImgsParent">
        <div :class="$style.textImgs">
          <div :class="$style.textImg">
            <div :class="$style.z">{{ car.make }} {{ car.model }}</div>
            <div :class="$style.text1">
              <div :class="$style.z">{{ car.hourlyPrice }} zł </div>
              <div :class="$style.zaDzie">/ za godzinę</div>
            </div>
            <img :class="$style.imgIcon" :src="car.imageUrl" :alt="`Zdjęcie ${car.make} ${car.model}`" />
            <div :class="$style.edytuj">
                                  <div :class="$style.zarezerwujSamochd">Zarezerwuj samochód</div>
                                  <div :class="$style.inputs">
                                        <div :class="$style.input">
                                              <div :class="$style.content">
                                                    <div :class="$style.placeholder">Data wynajmu</div>
                                                    <img :class="$style.endAdornmentIcon" alt="" src="@/assets/end-adornment.svg" />
                                              </div>
                                        </div>
                                        <div :class="$style.input">
                                              <div :class="$style.content">
                                                    <div :class="$style.placeholder">Data powrotu</div>
                                                    <img :class="$style.endAdornmentIcon" alt="" src="@/assets/end-adornment.svg" />
                                              </div>
                                        </div>
                                        <div :class="$style.input">
                                              <div :class="$style.content">
                                                    <div :class="$style.placeholder">Miejsce wynajmu</div>
                                                    <img :class="$style.selectarrowIcon" alt="" src="@/assets/selectarrow.svg" />
                                              </div>
                                        </div>
                                        <div :class="$style.input3">
                                              <div :class="$style.content">
                                                    <div :class="$style.placeholder3">imię i nazwisko</div>
                                                    <img :class="$style.selectarrowIcon" alt="" src="@/assets/selectarrow.svg" />
                                              </div>
                                        </div>
                                  </div>
                                  <div :class="$style.button">
                                        <div :class="$style.zarezerwuj">Zarezerwuj</div>
                                  </div>
                            </div>
          </div>
        </div>

        <div :class="$style.textCardsButton">
          <div :class="$style.textCards">
            <div :class="$style.z">Specyfikacja techniczna</div>
            <div :class="$style.cards">
              <div :class="$style.card">
                <img :class="$style.gearShift11Icon" alt="" src="@/assets/gear-shift(1) 1.svg" />
                <div :class="$style.text2">
                  <div :class="$style.z1">Skrzynia biegów</div>
                  <div :class="$style.automat">{{ car.gearboxType }}</div>
                </div>
              </div>
              <div :class="$style.card">
                <img :class="$style.g17Icon" alt="" src="@/assets/g17.png" />
                <div :class="$style.text2">
                  <div :class="$style.z1">Paliwo</div>
                  <div :class="$style.automat">{{ car.fuelType }}</div>
                </div>
              </div>
              <div :class="$style.card">
              <img :class="$style.g17Icon" alt="" src="@/assets/g3353.png" />
              <div :class="$style.text2">
              <div :class="$style.z1">Kolor</div>
              <div :class="$style.automat">{{ car.color || 'Nieznany' }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.banner">
        <div :class="$style.bmwSerii7Container">
          <p :class="$style.cieszSiYciemdescription">{{ car.description }}</p>
        </div>
      </div>

      <div :class="$style.banner1">
        <div :class="$style.textCards">
          <div :class="$style.text8">
            <img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
            <div :class="$style.pobierzNaszAplikacjParent">
              <div :class="$style.pobierzNaszAplikacj">Pobierz naszą aplikację</div>
              <b :class="$style.pobierzNaszAplikacj1">Pobierz naszą aplikację</b>
            </div>
            <div :class="$style.dzikiNaszejAplikacji">
              Dzięki naszej aplikacji możesz szybko i wygodnie rezerwować auta, zarządzać wynajmami i korzystać z ekskluzywnych promocji. Wszystko w jednym miejscu!
            </div>
          </div>
          <div :class="$style.buttons">
            <img :class="$style.appStoreIcon" alt="" src="@/assets/App Store.svg" />
            <img :class="$style.googlePlayIcon" alt="" src="@/assets/Google Play.svg" />
          </div>
        </div>
      </div>

      <div :class="$style.banner2">
        <div :class="$style.frameParent">
          <div :class="$style.frameGroup">
            <div :class="$style.groupParent">
              <img :class="$style.groupIcon1" alt="" src="@/assets/Group.svg" />
              <b :class="$style.zarejestrujSiI">Zarejestruj się i odbierz 10% rabatu!</b>
              <div :class="$style.doczDoNaszejContainer">
                <p :class="$style.cieszSiYciem">Dołącz do naszej społeczności i ciesz się wyjątkowymi korzyściami! Zarejestruj się na naszej stronie już dziś, a otrzymasz 10% zniżki na pierwszy wynajem samochodu.</p>
                <p :class="$style.cieszSiYciem">✅ Szybka i prosta rejestracja</p>
                <p :class="$style.cieszSiYciem">✅ Ekskluzywne rabaty i oferty specjalne</p>
                <p :class="$style.cieszSiYciem">✅ Wygodne zarządzanie rezerwacjami</p>
                <p :class="$style.cieszSiYciem">Nie czekaj – załóż konto i ruszaj w podróż taniej!</p>
              </div>
            </div>
            <div :class="$style.button2">
              <div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
            </div>
          </div>
          <div :class="$style.discountlabelfr2Wrapper">
            <img :class="$style.discountlabelfr2Icon" alt="" src="@/assets/discountLabelfr 2.png" />
          </div>
        </div>
      </div>

      <div :class="$style.banner3">
        <div :class="$style.banner4">
          <div :class="$style.textCards">
            <div :class="$style.text8">
              <img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
              <div :class="$style.pobierzNaszAplikacjParent">
                <div :class="$style.pobierzNaszAplikacj">Pobierz naszą aplikację</div>
                <b :class="$style.pobierzNaszAplikacj1">Pobierz naszą aplikację</b>
              </div>
              <div :class="$style.dzikiNaszejAplikacji">
                Dzięki naszej aplikacji możesz szybko i wygodnie rezerwować auta, zarządzać wynajmami i korzystać z ekskluzywnych promocji. Wszystko w jednym miejscu!
              </div>
            </div>
            <div :class="$style.buttons">
              <img :class="$style.appStoreIcon" alt="" src="@/assets/App Store.svg" />
              <img :class="$style.googlePlayIcon" alt="" src="@/assets/Google Play.svg" />
            </div>
          </div>
        </div>
        <div :class="$style.img">
          <div :class="$style.iphone1415Pro41" />
          <img :class="$style.imgIcon1" alt="" src="@/assets/iPhone 14.png" />
          <div :class="$style.logo1">CARENT</div>
        </div>
      </div>
    </div>

    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>

    <div v-else>
      <p>Ładowanie danych samochodu...</p>
    </div>
  </div>
  <!-- FOOTER -->
<div :class="$style.footer">
  <div :class="$style.iconsTextButtons">
    <div :class="$style.iconsText1">
      <div :class="$style.logo2">
        <img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
        <div :class="$style.text10">
          <b :class="$style.zalogujSi">CARENT</b>
        </div>
      </div>
      <div :class="$style.iconsText2">
        <img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2.svg" />
        <div :class="$style.text11">
          <div :class="$style.adres">Adres</div>
          <div :class="$style.ulZota59Container">
            <p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
            <p :class="$style.cieszSiYciem">&nbsp;</p>
          </div>
        </div>
      </div>
      <div :class="$style.iconsText3">
        <img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2m.svg" />
        <div :class="$style.text12">
          <div :class="$style.adres">Email</div>
          <div :class="$style.carentgmailcom">carent@gmail.com</div>
        </div>
      </div>
      <div :class="$style.iconsText3">
        <img :class="$style.iconbg" alt="" src="@/assets/telefon+bg.svg" />
        <div :class="$style.text13">
          <div :class="$style.adres">Telefon</div>
          <div :class="$style.carentgmailcom">+48 222 22 22 00</div>
        </div>
      </div>
    </div>
    <div :class="$style.textIcons1">
      <div :class="$style.textIcons2">
        <div :class="$style.cieszSiYciemContainer1">
          <p :class="$style.cieszSiYciem">Ciesz się życiem dzięki</p>
          <p :class="$style.cieszSiYciem">naszym wygodnym</p>
          <p :class="$style.cieszSiYciem">samochodom.</p>
        </div>
        <div :class="$style.socialIcons">
          <img :class="$style.groupIcon3" alt="" src="@/assets/Groupmeta.svg" />
          <img :class="$style.groupIcon3" alt="" src="@/assets/Groupinst.svg" />
          <img :class="$style.groupIcon3" alt="" src="@/assets/Groupx.svg" />
          <img :class="$style.groupIcon3" alt="" src="@/assets/Groupyou.svg" />
        </div>
      </div>
      <div :class="$style.text14">
        <div :class="$style.przydatneLinki">Przydatne linki</div>
        <div :class="$style.text15">
          <div :class="$style.oNas1">O nas</div>
          <div :class="$style.minivan">Główna</div>
          <div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
        </div>
      </div>
      <div :class="$style.text14">
        <div :class="$style.przydatneLinki">Pojazdy</div>
        <div :class="$style.text15">
          <div :class="$style.adres">Sedan</div>
          <div :class="$style.adres">Cabriolet</div>
          <div :class="$style.adres">Pickup</div>
          <div :class="$style.minivan">Minivan</div>
          <div :class="$style.adres">SUV</div>
        </div>
      </div>
      <div :class="$style.text14">
        <div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
        <div :class="$style.buttons2">
          <img :class="$style.appStoreIcon" alt="" src="@/assets/App Store.svg" />
          <img :class="$style.googlePlayIcon" alt="" src="@/assets/Group-4.svg" />
        </div>
      </div>
    </div>
  </div>
  <div :class="$style.wsbMeritoTworzenieContainer">
    <p :class="$style.cieszSiYciem">WSB MERITO Tworzenie aplikacji internetowych i mobilnych (Projekt zaliczeniowy)</p>
    <p :class="$style.cieszSiYciem">Autorzy: Michał Michalski, Nazar Mykhailiuk, Miłosz Gajda</p>
  </div>
</div>
<!-- END FOOTER -->
</template>

<style module>
/* Тут додається твій CSS з усіма секціями, темною темою та повним стилем */
</style>







<style  module> 
body {
background-color: #fff;
color: #000;
}
.heroSectionChild {
background-color: #fff;
}
.card {
background-color: #fafafa;
color: #000;
}                 
html.dark body {
background-color: #141414;
color: #fff;
}

html.dark .heroSectionChild {
background-color: #1e1e1e;
}

html.dark .card {
background-color: #2a2a2a;
color: #fff;
}
body {
background-color: var(--bg);
color: var(--text);
}
.card {
background-color: var(--card-bg);
}
.heroSectionChild {
     position: absolute;
     top: 0;
     left: 0;
     width: 613px;
     height: 710px;
     background-color: #000000; /* Світла тема за замовчуванням */
    }

/* Темна тема */
html.dark .heroSectionChild {
    background-color: #ffffff;
}
        
              .mainPictureIcon {
                    position: absolute;
                    top: 103.86px;
                    left: 531px;
                    width: 909px;
                    height: 544.3px;
                    object-fit: cover;
              }


              .cieszSiYciemText{
              margin: 0;
                  color: #ffffff !important; /* Завжди білий текст */
}
                  
             .cieszSiYciem {
    margin: 0;
    
}
 .cieszSiYciemdescription {
    margin: 0;
    font-size: 18px; /* Задайте бажаний розмір тексту */
    line-height: 1.5; /* Оптимальний міжрядковий інтервал */
    color: var(--text-color); /* Використовує змінну кольору */
}



              .cieszSiYciemContainer {
                    position: relative;
                    font-weight: 800;
              }
              .carentJestGotowy {
                    width: 453px;
                    position: relative;
                    font-size: 24px;
                    line-height: 40px;
                    font-weight: 500;
                    font-family: Poppins;
                    color: rgba(255, 255, 255, 0.85);
                    display: inline-block;
              }
              .cieszSiYciemDzikiNaszymParent {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 16px;
              }
              .zalogujSi {
                    position: relative;
              }
              .zalogujSiZarejestrujSiWrapper {
                    width: 266px;
                    border-radius: 4px;
                    background-color: #fe8400;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 24px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #141414;
                    font-family: Poppins;
              }
              .headerText {
                    position: absolute;
                    top: 148.8px;
                    left: 160px;
                    background-color: rgba(0, 0, 0, 0.15);
                    width: 615px;
                    height: 472.4px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 32px 32px 32px 0px;
                    box-sizing: border-box;
                    gap: 48px;
              }
              .oNas {
                 position: relative;
                 white-space: nowrap;
                overflow-x: auto; 
               }
              .cta {
                 width: 240px;
                 border-radius: 4px;
                 background-color: #fe8400;
                 height: 50px;
                 display: flex;
                 flex-direction: row;
                 align-items: center;
                 justify-content: center;
                 padding: 8px;
                 box-sizing: border-box;
               }
                .menuItems {
                 width: 890px;
                 display: flex;
                 flex-direction: row;
                 align-items: center;
                 justify-content: flex-start;
                 gap: 30px;
               }
                .menu {
width: 590px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 16px;
color: var(--menu-text-color);
font-family: Poppins;
}
              
              .headMenu {
                    position: absolute;
                    top: 31.96px;
                    left: calc(50% - 560px);
                    width: 1152px;
                    height: 39.9px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0px;
                    font-size: 26px;
                    color: #fe8400;
                    font-family: 'Arial Black';
              }

              .socialMenuChild {
                    width: 1px;
                    position: relative;
                    border-right: 1px solid #fe8400;
                    box-sizing: border-box;
                    height: 39px;
              }
              .socialMediaLogo {
                    width: 16px;
                    position: relative;
                    height: 16px;
                    object-fit: cover;
              }
              .socialMediaLogo1 {
                    width: 16px;
                    position: relative;
                    height: 16px;
                    overflow: hidden;
                    flex-shrink: 0;
                    object-fit: cover;
              }
              .socials {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 12px;
              }
              .socialMenu {
                    position: absolute;
                    top: calc(50% - 117.84px);
                    left: 72px;
                    width: 16px;
                    height: 235.7px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
              }
.darkMood {
    position: absolute;
    height: 58.33%;
    width: 44.35%;
    top: 20.83%;
    left: 0%;
    line-height: 28px;
    display: inline-block;
    color:  #ffffff !important;  
}
              
              .groupChild {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: 50px;
                    background-color: rgba(254, 132, 0, 0.05);
                    width: 95.6px;
                    height: 48px;
              }
              .off {
                    position: absolute;
                    height: 70.59%;
                    width: 32.88%;
                    top: 14.71%;
                    left: 67.16%;
                    display: inline-block;
              }
              .groupItem {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: 50px;
                    background-color: #fe8400;
                    width: 34.6px;
                    height: 34px;
              }
              .offParent {
                    position: absolute;
                    height: 70.83%;
                    width: 77.62%;
                    top: 14.58%;
                    right: 7.49%;
                    bottom: 14.58%;
                    left: 14.89%;
              }
              .rectangleParent {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 95.6px;
                    height: 48px;
              }
              .on {
                    position: absolute;
                    top: 0px;
                    left: 101.69px;
                    width: 95.6px;
                    height: 48px;
                    color: #fff9f9;
              }
              .available {
                    position: absolute;
                    height: 6.48%;
                    width: 13.7%;
                    top: 3.78%;
                    right: 60.59%;
                    bottom: 89.74%;
                    left: 25.71%;
                    font-size: 16px;
                    font-family: Poppins;
              }
              .heroSection {
                    align-self: stretch;
                    position: relative;
                    height: 741px;
                    font-family: Montserrat;
              }
              .z {
    position: relative;
    text-transform: capitalize;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-color); /* Використання змінної для кольору */
}                                    
              .zaDzie {
                    position: relative;
                    font-size: 16px;
                    color: #fe8400;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
              }
              .text1 {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 4px;
                    font-size: 40px;
                    color: #fe8400;
              }
              .imgIcon {
                    width: 636px;
                    position: relative;
                    height: 303px;
                    object-fit: contain;
              }
              .zarezerwujSamochd {
                    align-self: stretch;
                    position: relative;
                    font-size: 28px;
                    font-weight: 600;
                    text-align: center;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 38px;
                    flex-shrink: 0;
              }
              .placeholder {
                    flex: 1;
                    position: relative;
                    line-height: 20px;
              }
              .endAdornmentIcon {
                    width: 16px;
                    position: relative;
                    height: 16px;
              }
              .content {
                    align-self: stretch;
                    border-radius: 12px;
                    background-color: #fafafa;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 9px 16px;
                    gap: 8px;
              }
              .input {
                    align-self: stretch;
                    border-radius: 12px;
                    background-color: #5937e0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
              }
              .selectarrowIcon {
                    width: 16px;
                    position: relative;
                    height: 16px;
                    overflow: hidden;
                    flex-shrink: 0;
              }
              .placeholder3 {
                    flex: 1;
                    position: relative;
                    letter-spacing: 0.05em;
                    line-height: 11.23px;
                    text-transform: uppercase;
              }
              .input3 {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    color: #1e1e1e;
              }
              .inputs {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 20px;
              }
              .zarezerwuj {
                    position: relative;
                    font-weight: 600;
              }
              .button {
                    align-self: stretch;
                    border-radius: 12px;
                    background-color: #ff9e0c;
                    height: 40px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 13px 28px;
                    box-sizing: border-box;
                    color: #fff;
                    font-family: Inter;
              }
              .edytuj {
                    width: 636px;
                    border-radius: 20px;
                    background-color: #fff;
                    height: 442px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 8px 40px 40px;
                    box-sizing: border-box;
                    gap: 40px;
                    font-size: 16px;
              }
              .textImg {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 20px;
              }
              .textImgs {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
              }
              .gearShift11Icon {
                    width: 24px;
                    position: relative;
                    height: 24px;
                    overflow: hidden;
                    flex-shrink: 0;
              }
              .automat {
                    position: relative;
                    text-transform: capitalize;
                    color: rgba(0, 0, 0, 0.6);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
              }
              .text2 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 8px;
              }
              .card {
                    width: 196px;
                    border-radius: 12px;
                    background-color: #ffffff;
                    height: 148px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 24px;
                    box-sizing: border-box;
                    gap: 20px;
              }
              .g17Icon {
                    width: 24px;
                    position: relative;
                    height: 24px;
                    object-fit: cover;
              }
              .cards {
                    width: 636px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    gap: 24px;
                    font-size: 16px;
              }
              .textCards {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 40px;
              }
              .button1 {
                    width: 290px;
                    border-radius: 12px;
                    background-color: #fe8400;
                    height: 50px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 13px 28px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #fff;
                    font-family: Inter;
              }
              .vectorIcon {
                    width: 10.6px;
                    position: relative;
                    height: 7.3px;
              }
              .vectorWrapper {
                    width: 24px;
                    border-radius: 50px;
                    background-color: #fe8400;
                    height: 24px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
              }
              .abs {
position: relative;
text-transform: capitalize;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
color: var(--text-color); /* додай це */
}

              .instanceParent {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 16px;
              }
              .column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 17px;
              }
              .iconsText {
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 60px;
                    font-size: 16px;
                    color: rgba(0, 0, 0, 0.6);
              }
              .textIcons {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 40px;
              }
              .textCardsButton {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 64px;
              }
              .textImgsParent {
                    align-self: stretch;
                    height: 940px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 60px 312px;
                    box-sizing: border-box;
                    gap: 24px;
                    font-size: 24px;
                    color: #000;
              }
              .span {
                    color: #fff;
              }
              .details {
                    color: #ff9e0c;
              }
              .homeDetailsContainer {
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
              }
              .details1 {
                    position: relative;
                    font-size: 50px;
                    color: #000;
              }
              .homeDetailsParent {
                    width: 1296px;
                    border-radius: 40px;
                    height: 240px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    text-align: center;
                    font-size: 20px;
                    color: #5937e0;
              }
              .mercedesaSKlasy1 {
                    text-decoration: underline;
              }
              .mercedesaSKlasy {
                    color: inherit;
              }
              .bmwSerii7Container {
                    width: 1246px;
                    position: relative;
                    line-height: 32px;
                    display: inline-block;
                    height: auto;
                    flex-shrink: 0;
              }
              .groupIcon {
                    width: 219.93%;
                    position: absolute;
                    margin: 0 !important;
                    height: 86.34%;
                    top: -23.2%;
                    right: -90.77%;
                    bottom: 36.86%;
                    left: -29.17%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    z-index: 0;
              }
              .pobierzNaszAplikacj {
                    position: relative;
                    text-transform: uppercase;
              }
              .pobierzNaszAplikacj1 {
                    position: relative;
                    font-size: 50px;
              }
              .pobierzNaszAplikacjParent {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 4px;
                    z-index: 1;
              }
              .dzikiNaszejAplikacji {
                    width: 600px;
                    position: relative;
                    line-height: 24px;
                    text-align: left;
                    display: inline-block;
                    z-index: 2;
              }
              .text8 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    position: relative;
                    gap: 40px;
              }
              .appStoreIcon {
                    width: 171.4px;
                    position: relative;
                    height: 50px;
              }
              .googlePlayIcon {
                    width: 171.4px;
                    position: relative;
                    height: 50px;
              }
              .buttons {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 24px;
              }
              .banner1 {
                    width: 1048px;
                    border-radius: 40px;
                    background-color: #ff9100;
                    height: 802px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: none;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 80px 136px;
                    box-sizing: border-box;
                    opacity: 0.96;
                    text-align: center;
                    font-size: 16px;
                    color: #000000;
                    font-family: 'Work Sans';
              }
              /* Світла тема (за замовчуванням) */
              .banner {
align-self: stretch;
height: 356px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 29px 0px 60px;
box-sizing: border-box;
font-size: 18px;
background-color: var(--bg-color);
color: var(--text-color);
font-family: Poppins;
}
              
              .groupIcon1 {
                    width: 141.29%;
                    position: absolute;
                    margin: 0 !important;
                    height: 43.38%;
                    top: -11.95%;
                    right: -30.21%;
                    bottom: 68.57%;
                    left: -11.08%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    z-index: 0;
              }
              .zarejestrujSiI {
                    width: 932px;
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 117px;
                    flex-shrink: 0;
                    z-index: 1;
              }
              .doczDoNaszejContainer {
                    width: 801px;
                    position: relative;
                    font-size: 16px;
                    line-height: 24px;
                    display: -webkit-inline-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 8;
                    -webkit-box-orient: vertical;
                    z-index: 2;
                    margin-top: -49px;
              }
              .groupParent {
                    width: 885px;
                    height: 272px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    position: relative;
              }
              .button2 {
                    border-radius: 12px;
                    background-color: #ff9e0c;
                    height: 40px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: 13px 28px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #141414;
                    font-family: Poppins;
              }
              .frameGroup {
                    height: 352px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 40px;
                    z-index: 0;
              }
              .discountlabelfr2Icon {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 200.1px;
                    height: 97px;
                    object-fit: cover;
              }
              .discountlabelfr2Wrapper {
                    width: 664px;
                    position: absolute;
                    margin: 0 !important;
                    top: 147px;
                    left: 636px;
                    height: 272px;
                    background-image: url('@/assets/Frame.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: top;
                    z-index: 1;
              }
              .frameParent {
                    width: 1296px;
                    border-radius: 20px;
                    background-color: #fe890a;
                    height: 427px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 58px 86px;
                    box-sizing: border-box;
                    position: relative;
              }
              .banner4 {
                    width: 1296px;
                    border-radius: 40px;
                    background-color: #fe890a;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 80px 136px;
                    box-sizing: border-box;
                    opacity: 0.96;
                    z-index: 0;
                }
           
              .iphone1415Pro41 {
                    position: absolute;
                    top: 11px;
                    left: 16px;
                    border-radius: 20px;
                    background-color: #fff;
                    width: 236px;
                    height: 512px;
              }
              .imgIcon1 {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 267px;
                    height: 540px;
                    object-fit: cover;
              }
              .logo1 {
                    position: absolute;
                    top: 251px;
                    left: 74px;
              }
              .img {
                    width: 267px;
                    position: absolute;
                    margin: 0 !important;
                    top: 40px;
                    left: 450px;
                    height: 540px;
                    z-index: 1;
                    text-align: left;
                    font-size: 26px;
                    color: #fe8400;
                    font-family: 'Arial Black';
              }
              .banner3 {
                    align-self: stretch;
                    height: 629px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 100px 0px 60px;
                    box-sizing: border-box;
                    position: relative;
                    text-align: center;
                    font-size: 16px;
              }
              .banner2 {
                    align-self: stretch;
                    height: 545px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 4px 0px 60px;
                    box-sizing: border-box;
                    font-size: 50px;
              }
              .car31Icon {
                    width: 48px;
                    position: relative;
                    height: 48px;
                    overflow: hidden;
                    flex-shrink: 0;
              }
              .text10 {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
              }
              .logo2 {
                    width: 180px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 12px;
                    font-family: Inter;
              }
              .iconbg {
                    width: 40px;
                    position: relative;
                    border-radius: 50px;
                    height: 40px;
                    overflow: hidden;
                    flex-shrink: 0;
              }
              .adres {
                    position: relative;
                    line-height: 26px;
              }
              .ulZota59Container {
                    width: 244px;
                    position: relative;
                    line-height: 26px;
                    font-weight: 600;
                    display: inline-block;
                    height: 40px;
                    flex-shrink: 0;
              }
              .text11 {
                    width: 234px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 12px;
              }
              .iconsText2 {
                    width: 286px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 12px;
              }
              .carentgmailcom {
                    position: relative;
                    line-height: 26px;
                    font-weight: 600;
              }
              .text12 {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 12px;
              }
              .iconsText3 {
                    width: 180px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 12px;
              }
              .text13 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 12px;
              }
              .iconsText1 {
                    width: 1296px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0px;
              }
              .cieszSiYciemContainer1 {
                    align-self: stretch;
                    position: relative;
                    font-weight: 800;
                    display: -webkit-inline-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
              }
              .groupIcon3 {
                    width: 24px;
                    position: relative;
                    height: 24px;
              }
              .socialIcons {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 20px;
              }
              .textIcons2 {
                    align-self: stretch;
                    width: 280px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 0px;
                    font-size: 16px;
                    font-family: Montserrat;
              }
              .przydatneLinki {
                    position: relative;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
              }
              .oNas1 {
                    position: relative;
                    line-height: 26px;
                    white-space: pre-wrap;
                    display: -webkit-inline-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
              }
              .text15 {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 16px;
                    font-size: 16px;
              }
              .text14 {
                    width: 180px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 24px;
              }
              .minivan {
                    position: relative;
                    line-height: 26px;
                    display: -webkit-inline-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
              }
              .pobierzAplikacj {
                    width: 233px;
                    position: relative;
                    font-weight: 600;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    height: 48px;
                    flex-shrink: 0;
              }
              .buttons2 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 24px;
              }
              .textIcons1 {
                    width: 1296px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 0px;
                    font-size: 20px;
              }
              .iconsTextButtons {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 60px;
              }
              .wsbMeritoTworzenieContainer {
                    position: relative;
                    font-size: 14px;
                    line-height: 26px;
                    font-family: Inter;
                    color: #fff9f9;
              }
              .footer {
align-self: stretch;
background-color: var(--footer-bg-color);
color: var(--footer-text-color);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 60px 72px 40px;
gap: 0px;
font-size: 16px;
}
.carDetails {
width: 100%;
position: relative;
background-color: var(--car-bg);
color: var(--car-text);
height: 3217px;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
text-align: left;
font-size: 48px;
font-family: 'Work Sans';
}

/* ДОДАЙ це нижче */
html.dark .carDetails {
background-color: #000000; /* темна тема */
color: white;
}
              
        
        </style>
