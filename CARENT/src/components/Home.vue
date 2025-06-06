<script setup>
import { ref, onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import axios from 'axios'

// Темна тема (VueUse)
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Список авто
const cars = ref([])             // усі авто з API
const visibleCars = ref([])      // ті, що відображаються на екрані
const showAll = ref(false)       // чи показати всі

// Отримання даних
onMounted(async () => {
  try {
    const response = await axios.get('https://carent.site/proxy.php')
    cars.value = response.data?.cars || []
    visibleCars.value = cars.value.slice(0, 6)
  } catch (err) {
    console.error('❌ Помилка при завантаженні авто:', err)
  }
})

// Обробка кнопки "Zobacz wszystkie samochody"
function showAllCars() {
  visibleCars.value = cars.value
  showAll.value = true
}
</script>






<template>

  	<div :class="$style.home">
    		<div :class="$style.heroSection">
      			<div :class="$style.heroSectionChild" />
      			<img :class="$style.mainPictureIcon" alt="" src="@/assets/Main Picture.png" />
      			<div :class="$style.headerText">
        				<div :class="$style.cieszSiYciemDzikiNaszymParent">
          					<div :class="$style.cieszSiYciemContainer">
            						<p :class="$style.cieszSiYciemText">Ciesz się życiem dzięki</p>
            						<p :class="$style.cieszSiYciemText">naszym wygodnym</p>
            						<p :class="$style.cieszSiYciemText">samochodom.</p>
          					</div>
          					<div :class="$style.carentJestGotowy">Carent jest gotowy zaoferować najlepsze doświadczenie w zakresie wynajmu samochodów.</div>
        				</div>
        				<div :class="$style.zalogujSiZarejestrujSiWrapper">
          					<div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
        				</div>
      			</div>
      			 <div :class="$style.headMenu">
    <div :class="$style.kuphalLlc">CARENT</div>
    <div :class="$style.menu">
      <div :class="$style.menuItems">
        <router-link :to="'/'" :class="$style.kuphalLlc">Główna</router-link>
        <router-link :to="'/o-nas'" :class="$style.oNas1">O nas</router-link>
        <router-link :to="'/rezerwacja'" :class="$style.kuphalLlc">Rezerwacja</router-link>
        <router-link :to="'/samochody'" :class="$style.kuphalLlc">Samochody</router-link>
        <router-link :to="'/kontakt'" :class="$style.kuphalLlc">Kontakt</router-link>
        <div :class="$style.cta">
          <div :class="$style.kuphalLlc">Zaloguj się | Zarejestruj się</div>
        </div>
      </div>
    </div>
  </div>
      			<div :class="$style.socialMenu">
        				<div :class="$style.socialMenuChild" />
        				<div :class="$style.socials">
          					<img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logofacebook.png" />
                        <img :class="$style.socialMediaLogo1" alt="" src="@/assets/Social media logoinstagram.png" />
                        <img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logox.png" />
                        <img :class="$style.socialMediaLogo" alt="" src="@/assets/Social media logoviber.png" />
                        <img :class="$style.socialMediaLogo1" alt="" src="@/assets/Social media logotelegram.png" />
        				</div>
        				<div :class="$style.socialMenuChild" />
      			</div>
      			<div :class="$style.available">
					  <div :class="$style.darkMood">Dark Mode</div>
  <div :class="$style.on" @click="toggleDark()">
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild"></div>
      <div :class="$style.offParent">
        <!-- Текст, який рухається протилежно кнопці -->
        <div :class="[$style.off, isDark ? $style.textRight : $style.textLeft]">{{ isDark ? 'On' : 'Off' }}</div>
        <div :class="[$style.groupItem, isDark ? $style.active : '']"></div>
      </div>
    </div>
  </div>
</div>
</div>
    		</div>
    		<div :class="$style.brand">
      			<img :class="$style.bmwIcon" alt="" src="@/assets/BMW.png" />
      			<img :class="$style.lexusLogoIcon" alt="" src="@/assets/lexus-logo.png" />
      			<img :class="$style.bmwIcon" alt="" src="@/assets/Marcedes.png" />
      			<img :class="$style.hondaIcon" alt="" src="@/assets/Honda.png" />
      			<img :class="$style.hyundaiIcon" alt="" src="@/assets/Hyundai.png" />
      			<img :class="$style.nissanIcon" alt="" src="@/assets/Nissan.png" />
      			<img :class="$style.toyotaIcon" alt="" src="@/assets/Toyota.png" />
      			<img :class="$style.kiaIcon" alt="" src="@/assets/KIA-4.png" />
      			<img :class="$style.kiaIcon" alt="" src="@/assets/KIA-2.png" />
      			<img :class="$style.kiaIcon" alt="" src="@/assets/KIA-3.png" />
    		</div>
    		<div :class="$style.infoBlock">
      			<div :class="$style.iconText">
        				<div :class="$style.iconText1">
          					<img :class="$style.location1Icon" alt="" src="@/assets/location 1.png" />
          					<div :class="$style.dostpno">Dostępność</div>
        				</div>
        				<div :class="$style.naszaPrzestrzeJestContainer">
          					<p :class="$style.cieszSiYciem">Nasza przestrzeń jest zawsze na wyciągnięcie ręki, z łatwym dojazdem, elastycznymi godzinami wynajmu oraz możliwością rezerwacji i zarządzania wynajmem przez wygodny panel online.</p>
        				</div>
      			</div>
      			<div :class="$style.iconText">
        				<div :class="$style.iconText1">
          					<div :class="$style.car21">
            						<div :class="$style.g582">
              							<img :class="$style.g584Icon" alt="" src="@/assets/car(2) 1.png" />
										
              							
            						</div>
          					</div>
          					<div :class="$style.dostpno">Komfort</div>
        				</div>
        				<div :class="$style.nowoczesneWyposaenieI">Nowoczesne wyposażenie i przyjazna atmosfera sprawią, że każde wydarzenie będzie przyjemnością</div>
      			</div>
      			<div :class="$style.iconText">
        				<div :class="$style.iconText1">
          					<img :class="$style.location1Icon" alt="" src="@/assets/wallet(1) 1.png" />
          					<div :class="$style.dostpno">Oszczędności</div>
        				</div>
        				<div :class="$style.oferujemyKonkurencyjneCeny">Oferujemy konkurencyjne ceny i elastyczne pakiety wynajmu, dopasowane do Twoich potrzeb.</div>
      			</div>
    		</div>
    		<div :class="$style.cards">
  <div v-for="car in visibleCars" :key="car._id" :class="$style.card">
    <div :class="$style.imgTextIcons">
      <img
        :class="$style.imgIcon"
        :alt="car.make"
        :src="car.imageUrl || `https://car-rental-merito-application.azurewebsites.net/${car.imagePath}`"
      />
      <div :class="$style.textIcons">
        <div :class="$style.text">
          <div :class="$style.text1">
            <div :class="$style.carPrice">{{ car.make }}</div>
            <div :class="$style.sedan">{{ car.bodyType }}</div>
          </div>
          <div :class="$style.text2">
            <div :class="$style.carPrice">{{ car.hourlyPrice }} Zł</div>
            <div :class="$style.zaDzie">za godzinę</div>
          </div>
        </div>
        <div :class="$style.iconsText">
          <div :class="$style.iconText6">
            <img :class="$style.gearShift11Icon" alt="Gear" src="@/assets/gear-shift(1) 1.svg" />
            <div :class="$style.automat">{{ car.gearboxType }}</div>
          </div>
          <div :class="$style.iconText6">
            <img :class="$style.g17Icon" alt="Fuel" src="@/assets/g17.png" />
            <div :class="$style.automat">{{ car.fuelType }}</div>
          </div>
		  <div :class="$style.iconText6">
  <img :class="$style.g17Icon" alt="AC" src="@/assets/g3353.png" />
  <div :class="$style.automat">{{ car.color }}</div>
</div>
          
        </div>
      </div>
    </div>
    <router-link :to="`/samochody/${car._id}`" :class="$style.button">
  <div :class="$style.zobaczSzczegy">Zobacz szczegóły</div>
</router-link>

  </div>
</div>

<!-- Кнопка для показу всіх авто -->
<div v-if="!showAll && cars.length > 6" :class="$style.button6" @click="showAllCars">
  <div :class="$style.zobaczSzczegy">Zobacz wszystkie samochody</div>
</div>

    		<div :class="$style.testimonials">
      			<b :class="$style.opinieNaszychKlientw">Opinie naszych klientów</b>
      			<div :class="$style.cards1">
        				<div :class="$style.card6">
          					<div :class="$style.textbg">
            						<div :class="$style.wynajcieAutaWContainer">
              							<p :class="$style.cieszSiYciem"> Wynajęcie auta w tej firmie to czysta przyjemność! Proces rezerwacji online był szybki i intuicyjny, a samochód (Porsche 911) w idealnym stanie – czysty, zatankowany i gotowy do jazdy. Obsługa bardzo profesjonalna i pomocna. Zdecydowanie skorzystam ponownie!</p>
            						</div>
          					</div>
          					<div :class="$style.textBg">
            						<div :class="$style.zalogujSi">Kuphal LLC</div>
            						<div :class="$style.emanuelBoyle">Emanuel Boyle</div>
          					</div>
          					<img :class="$style.imgIcon6" alt="" src="@/assets/Img-5.png" />
          					
        				</div>
        				<div :class="$style.card6">
          					<div :class="$style.textbg">
            						<div :class="$style.wynajemPorsche911Container">
              							<p :class="$style.cieszSiYciem"> Wynająłem Porsche 911 na weekend i to było niesamowite doświadczenie! Auto w perfekcyjnym stanie, elastyczne warunki wynajmu i przystępna cena jak na taki luksus. Polecam każdemu, kto chce poczuć prawdziwe emocje za kierownicą!</p>
            						</div>
          					</div>
          					<div :class="$style.textBg">
            						<div :class="$style.zalogujSi">Glover - Orn</div>
            						<div :class="$style.emanuelBoyle">River Graves</div>
          					</div>
          					<img :class="$style.imgIcon6" alt="" src="@/assets/Img-4.png" />
          					
        				</div>
        				<div :class="$style.card6">
          					<div :class="$style.textbg">
            						<div :class="$style.bardzoDobrySerwis"> Bardzo dobry serwis – szybka rezerwacja online, brak ukrytych opłat i doskonały kontakt z obsługą. Samochód spełnił wszystkie moje oczekiwania, a nawet je przewyższył! Jeśli szukasz sprawdzonej firmy do wynajmu luksusowego auta, to nie ma lepszego miejsca!</div>
          					</div>
          					<div :class="$style.textBg">
            						<div :class="$style.zalogujSi">Haag LLC</div>
            						<div :class="$style.emanuelBoyle">Ryder Malone</div>
          					</div>
          					<img :class="$style.imgIcon6" alt="" src="@/assets/Img-6.png" />
          					
        				</div>
      			</div>
    		</div>
    		<div :class="$style.frameParent">
      			<div :class="$style.frameGroup">
        				<div :class="$style.groupParent">
          					<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
          					<b :class="$style.zarejestrujSiI">Zarejestruj się i odbierz 10% rabatu!</b>
          					<div :class="$style.doczDoNaszejContainer">
            						<p :class="$style.cieszSiYciem">Dołącz do naszej społeczności i ciesz się wyjątkowymi korzyściami! Zarejestruj się na naszej stronie już dziś, a otrzymasz 10% zniżki na pierwszy wynajem samochodu.</p>
            						<p :class="$style.cieszSiYciem">&nbsp;</p>
            						<p :class="$style.cieszSiYciem">✅ Szybka i prosta rejestracja</p>
            						<p :class="$style.cieszSiYciem">✅ Ekskluzywne rabaty i oferty specjalne</p>
            						<p :class="$style.cieszSiYciem">✅ Wygodne zarządzanie rezerwacjami</p>
            						<p :class="$style.cieszSiYciem">&nbsp;</p>
            						<p :class="$style.cieszSiYciem">Nie czekaj – załóż konto i ruszaj w podróż taniej!</p>
          					</div>
        				</div>
        				<div :class="$style.button7">
          					<div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
        				</div>
      			</div>
      			<div :class="$style.discountlabelfr2Wrapper">
        				<img :class="$style.discountlabelfr2Icon" alt="" src="@/assets/discountLabelfr 2.png" />
      			</div>
    		</div>
    		<div :class="$style.banner">
      			<div :class="$style.img">
        				<div :class="$style.iphone1415Pro41" />
      			</div>
      			<div :class="$style.banner1">
        				<div :class="$style.banner2">
          					<div :class="$style.textButtons">
            						<div :class="$style.text18">
              							<img :class="$style.groupIcon1" alt="" src="@/assets/Group.svg" />
              							<div :class="$style.pobierzNaszAplikacjParent">
                								<div :class="$style.pobierzNaszAplikacj">Pobierz naszą aplikację</div>
                								<b :class="$style.pobierzNaszAplikacj1">Pobierz naszą aplikację</b>
              							</div>
              							<div :class="$style.dzikiNaszejAplikacji">Dzięki naszej aplikacji możesz szybko i wygodnie rezerwować auta, zarządzać wynajmami i korzystać z ekskluzywnych promocji. Wszystko w jednym miejscu!</div>
            						</div>
            						<div :class="$style.buttons">
              							<img :class="$style.appStoreIcon" alt="" src="@/assets/App Store.svg" />
              							<img :class="$style.googlePlayIcon" alt="" src="@/assets/Google Play.svg" />
            						</div>
          					</div>
        				</div>
        				<div :class="$style.img1">
          					<div :class="$style.iphone1415Pro411" />
          					<img :class="$style.imgIcon9" alt="" src="@/assets/iPhone 14.png" />
          					<div :class="$style.logo1">CARENT</div>
        				</div>
      			</div>
      			<div :class="$style.banner3">
        				<div :class="$style.banner2">
          					<div :class="$style.textButtons">
            						<div :class="$style.text18">
              							<img :class="$style.groupIcon1" alt="" src="@/assets/Group.svg" />
              							<div :class="$style.pobierzNaszAplikacjParent">
                								<div :class="$style.pobierzNaszAplikacj">Pobierz naszą aplikację</div>
                								<b :class="$style.pobierzNaszAplikacj1">Pobierz naszą aplikację</b>
              							</div>
              							<div :class="$style.dzikiNaszejAplikacji">Dzięki naszej aplikacji możesz szybko i wygodnie rezerwować auta, zarządzać wynajmami i korzystać z ekskluzywnych promocji. Wszystko w jednym miejscu!</div>
            						</div>
            						<div :class="$style.buttons">
              							<img :class="$style.appStoreIcon" alt="" src="@/assets/App Store.svg" />
              							<img :class="$style.googlePlayIcon" alt="" src="@/assets/Google Play.svg" />
            						</div>
          					</div>
        				</div>
        				<div :class="$style.img1">
          					<div :class="$style.iphone1415Pro411" />
          					<img :class="$style.imgIcon9" alt="" src="@/assets/Img.png" />
          					<div :class="$style.logo1">CARENT</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.footer">
      			<div :class="$style.iconsTextButtons">
        				<div :class="$style.iconsText6">
          					<div :class="$style.logo3">
            						<img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
            						<div :class="$style.text20">
              							<b :class="$style.zalogujSi">CARENT </b>
            						</div>
          					</div>
          					<div :class="$style.iconsText7">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2.svg" />
            						<div :class="$style.text21">
              							<div :class="$style.adres">Adres</div>
              							<div :class="$style.ulZota59Container">
                								<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                								<p :class="$style.cieszSiYciem">&nbsp;</p>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText8">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2m.svg" />
            						<div :class="$style.text22">
              							<div :class="$style.adres">Email </div>
              							<div :class="$style.carentgmailcom">carent@gmail.com</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText8">
            						<img :class="$style.iconbg" alt="" src="@/assets/telefon+bg.svg" />
            						<div :class="$style.text23">
              							<div :class="$style.adres">Telefon </div>
              							<div :class="$style.carentgmailcom">+48 22 222 22 00</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.textIcons6">
          					<div :class="$style.textIcons7">
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
          					<div :class="$style.text24">
            						<div :class="$style.przydatneLinki">Przydatne linki</div>
            						<div :class="$style.text25">
              							<div :class="$style.oNas1">O nas  </div>
              							<div :class="$style.minivan">Główna</div>
              							<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
            						</div>
          					</div>
          					<div :class="$style.text24">
            						<div :class="$style.przydatneLinki">Pojazdy</div>
            						<div :class="$style.text25">
              							<div :class="$style.adres">Sedan</div>
              							<div :class="$style.adres">Cabriolet</div>
              							<div :class="$style.adres">Pickup</div>
              							<div :class="$style.minivan">Minivan</div>
              							<div :class="$style.adres">SUV</div>
            						</div>
          					</div>
          					<div :class="$style.text24">
            						<div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
            						<div :class="$style.buttons2">
              							<div :class="$style.appStoreIcon">
                								<img :class="$style.groupIcon7" alt="" src="@/assets/App Store.svg" />
              							</div>
              							<div :class="$style.googlePlayIcon">
                								<img :class="$style.groupIcon7" alt="" src="@/assets/Group-4.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.wsbMeritoTworzenieContainer">
        				<p :class="$style.cieszSiYciem"> WSB MERITO Tworzenie aplikacji internetowych i mobilnych (Projekt zaliczeniowy)</p>
        				<p :class="$style.cieszSiYciem">Autorzy: Michał Michalski, Nazar Mykhailiuk, Miłosz Gajda</p>
      			</div>
    		</div>
    		<div :class="$style.available1">
      			<div :class="$style.rectangleGroup">
        				<div :class="$style.rectangleGroup">
          					<div :class="$style.groupInner" />
          					<div :class="$style.offGroup">
            						<div :class="$style.off1">Off</div>
            						<div :class="$style.rectangleDiv" />
          					</div>
        				</div>
      			</div>
    		</div>
  	
</template>
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
background-color: #000000;
color: #fff;
}

html.dark .heroSectionChild {
background-color: #000000;
}

html.dark .card {
background-color: #000000;
color: #fff;
}
body {
background-color: var(--bg);
color: var(--text);
}
.card {
background-color: var(--card-bg);
}
							html.dark .heroSectionChild {
    background-color: #ffffff;
}
.heroSectionChild {
  	 position: absolute;
     top: 0;
     left: 0;
     width: 613px;
     height: 710px;
     background-color: #000000; 
}
  	.mainPictureIcon {
    		position: absolute;
    		top: 103.86px;
    		left: 531px;
    		width: 909px;
    		height: 544.3px;
    		object-fit: cover;
  	}
  	.cieszSiYciem {
    		margin: 0;
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
                    color: #000000;
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
    		white-space: pre-wrap;
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
  top: 200px; /* або інше значення, яке підійде до розмітки */
  left: 24px;
  width: 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 10;
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
    		background-color: rgba(0, 0, 0, 0.05);
    		width: 95.6px;
    		height: 48px;
  	}
  	.off {
    		position: absolute;
  height: 70.59%;
  width: 32.88%;
  top: 14.71%;
  display: inline-block;
  font-size: 16px;
  color: #ffffff;
  transition: transform 0.3s ease;
  	}
		.textLeft {
  left: 45px; 
}
.textRight {
  right: 40px; 
}
  	.groupItem {
    		position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50px;
  background-color: #fe8400;
  width: 34.6px;
  height: 34px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ffffff;
  	}
	.active {
  transform: translateX(48px);
  } 
.button6 {
  margin: 40px auto 0;
  background-color: white;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  width: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
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
    		width: 1440px;
    		position: relative;
    		height: 741px;
    		z-index: 0;
    		font-size: 48px;
    		font-family: Montserrat;
  	}
  	.bmwIcon {
    		width: 47px;
    		position: relative;
    		height: 47px;
    		object-fit: cover;
  	}
  	.lexusLogoIcon {
    		width: 54.8px;
    		position: relative;
    		height: 41.1px;
    		object-fit: cover;
  	}
  	.hondaIcon {
    		width: 43.5px;
    		position: relative;
    		height: 35.3px;
    		object-fit: cover;
  	}
  	.hyundaiIcon {
    		width: 64.6px;
    		position: relative;
    		height: 35.3px;
    		object-fit: cover;
  	}
  	.nissanIcon {
    		width: 40.9px;
    		position: relative;
    		height: 35.3px;
    		object-fit: cover;
  	}
  	.toyotaIcon {
    		width: 50.9px;
    		position: relative;
    		height: 35.3px;
    		object-fit: cover;
  	}
  	.kiaIcon {
    		width: 58.5px;
    		position: relative;
    		height: 29.4px;
    		object-fit: cover;
  	}
  	.brand {
    		align-self: stretch;
    		height: 177px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		gap: 32.9px;
    		opacity: 0.35;
    		z-index: 1;
  	}
  	.location1Icon {
    		width: 64px;
    		position: relative;
    		height: 64px;
    		overflow: hidden;
    		flex-shrink: 0;
    		object-fit: cover;
  	}
  	.dostpno {
    		width: 336px;
    		position: relative;
    		font-weight: 600;
    		display: inline-block;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.iconText1 {
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 20px;
  	}
  	.naszaPrzestrzeJestContainer {
    		width: 357px;
    		position: relative;
    		font-size: 16px;
    		line-height: 24px;
    		font-family: Inter;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 6;
    		-webkit-box-orient: vertical;
  	}
  	.iconText {
    		width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
  	}
  	.g584Icon {
    		position: absolute;
height: 100%;
width: 28.28%;
right: 35.84%;
bottom: 100%;
left: 35.88%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
  	}
  	.g588Icon {
    		position: absolute;
height: 100%;
width: 100%;
top: -100%;
right: 0%;
bottom: 100%;
left: 0%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
object-fit: cover;	
  	}
  	.g582 {
    		position: absolute;
height: 100%;
width: 100%;
top: 100%;
right: 0%;
bottom: -100%;
left: 0%;
  	}
  	.car21 {
    		width: 100%;
position: relative;
height: 64px;
overflow: hidden;
flex-shrink: 0;	
  	}
  	.nowoczesneWyposaenieI {
    		width: 336px;
    		position: relative;
    		font-size: 16px;
    		line-height: 24px;
    		font-family: Inter;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 5;
    		-webkit-box-orient: vertical;
  	}
  	.oferujemyKonkurencyjneCeny {
    		width: 357px;
    		position: relative;
    		font-size: 16px;
    		line-height: 24px;
    		font-family: Inter;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 3;
    		-webkit-box-orient: vertical;
  	}
  
 .infoBlock {
  align-self: stretch;
  display: flex;
  flex-direction: row; /* розташування в ряд */
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px 72px;
  gap: 48px;
  text-align: center;
  font-size: 24px;
  color: var(--text);
  flex-wrap: wrap; /* якщо екрани менші — переносить блоки вниз */
}
.dostpno, .naszaPrzestrzeJestContainer, .nowoczesneWyposaenieI, .oferujemyKonkurencyjneCeny {
  color: var(--text);
}
  	.imgIcon {
    		align-self: stretch;
    		position: relative;
    		max-width: 100%;
    		overflow: hidden;
    		height: 240px;
    		flex-shrink: 0;
    		object-fit: cover;
  	}
  	.mercedes {
    		position: relative;
    		text-transform: capitalize;
    		font-weight: 600;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  	}
	.carPrice {
  position: relative;
  font-weight: 600;
  font-size: 18px;
  color: #fe8400; /* або будь-який колір для ціни */
}
  	.sedan {
    		position: relative;
    		font-size: 16px;
    		text-transform: capitalize;
    		color: rgba(0, 0, 0, 0.6);
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  	}
  	.text1 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
  	}
  	.zaDzie {
    		position: relative;
    		font-size: 14px;
    		color: rgba(0, 0, 0, 0.6);
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  	}
  	.text2 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-end;
    		justify-content: flex-start;
    		gap: 4px;
    		color: #fe8400;
  	}
  	.text {
    		align-self: stretch;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: space-between;
    		gap: 0px;
  	}
	.cieszSiYciemText{
              margin: 0;
                  color: #ffffff !important; 
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
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  	}
  	.iconText6 {
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.g17Icon {
    		width: 24px;
    		position: relative;
    		height: 24px;
    		object-fit: cover;
  	}
  	.iconsText {
    		align-self: stretch;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: space-between;
    		gap: 0px;
    		font-size: 16px;
    		color: rgba(0, 0, 0, 0.6);
  	}
  	.textIcons {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 40px;
  	}
  	.imgTextIcons {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 20px;
  	}
  	.zobaczSzczegy {
    		position: relative;
    		font-weight: 1600;
  	}
  	.button {
    		align-self: stretch;
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
  	.card {
    		width: 416px;
    		border-radius: 20px;
    		background-color: #fafafa;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 24px;
    		box-sizing: border-box;
    		gap: 40px;
  	}
  	.imgIcon2 {
    		align-self: stretch;
    		position: relative;
    		max-width: 100%;
    		overflow: hidden;
    		height: 240px;
    		flex-shrink: 0;
    		object-fit: cover;
    		mix-blend-mode: normal;
  	}
  	.card4 {
    		width: 416px;
    		border-radius: 20px;
    		background-color: #fafafa;
    		height: 513px;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 24px;
    		box-sizing: border-box;
    		gap: 40px;
  	}
  	.imgIcon5 {
    		align-self: stretch;
    		position: relative;
    		border-radius: 10px;
    		max-width: 100%;
    		overflow: hidden;
    		height: 236px;
    		flex-shrink: 0;
    		object-fit: cover;
  	}
  	.cards {
  width: 100%;
  max-width: 1296px;
  margin: 0 auto; /* Центрує блок по горизонталі */
  padding: 0 16px; /* Щоб не залипав до країв на менших екранах */
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  justify-content: center; /* Центрує картки, можна змінити на flex-start */
  align-content: flex-start;

  z-index: 3;
  font-size: 24px;
  color: #000;
}

  	.button6 {
    		width: 264px;
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
    		z-index: 4;
    		font-family: Inter;
  	}
  .opinieNaszychKlientw {
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 32px;
  color: var(--text); /* або конкретно #000 чи #fff */
  display: block;
}


  	.wynajcieAutaWContainer {
    		position: absolute;
    		top: 103px;
    		left: 10px;
    		font-weight: 500;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 9;
    		-webkit-box-orient: vertical;
    		width: 372px;
  	}
  	.textbg {
    		align-self: stretch;
    		flex: 1;
    		position: relative;
    		overflow: hidden;
    		z-index: 0;
  	}
  	.emanuelBoyle {
    		position: relative;
    		font-size: 20px;
    		font-weight: 600;
    		color: #fff;
  	}
  	.textBg {
    		align-self: stretch;
    		background-color: #fe890a;
    		height: 124px;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-end;
    		padding: 24px 135px;
    		box-sizing: border-box;
    		gap: 4px;
    		z-index: 1;
    		text-align: left;
    		font-size: 16px;
    		color: rgba(255, 255, 255, 0.6);
  	}
  	.imgIcon6 {
    		width: 84px;
    		position: absolute;
    		margin: 0 !important;
    		top: 314px;
    		left: 166px;
    		border-radius: 50px;
    		height: 84px;
    		overflow: hidden;
    		flex-shrink: 0;
    		object-fit: cover;
    		z-index: 2;
  	}
  	.icon {
    		width: 39px;
    		position: absolute;
    		margin: 0 !important;
    		top: 52px;
    		left: 55px;
    		height: 32px;
    		z-index: 3;
  	}
  	.card6 {
    		width: 416px;
    		border-radius: 20px;
    		background-color: #f9f9f9;
    		height: 480px;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-end;
    		position: relative;
  	}
  	.wynajemPorsche911Container {
    		position: absolute;
    		top: 102px;
    		left: 19px;
    		font-weight: 500;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 9;
    		-webkit-box-orient: vertical;
    		width: 361px;
  	}
  	.bardzoDobrySerwis {
    		position: absolute;
    		top: 100px;
    		left: 8px;
    		font-weight: 500;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 10;
    		-webkit-box-orient: vertical;
    		width: 372px;
  	}
  	.cards1 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
    		font-size: 20px;
  	}
  	.testimonials {
  align-self: stretch;
  padding: 60px 72px;
  gap: 40px;
  z-index: 5;
  text-align: center;
  font-size: 50px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 60px; /* Відступ перед наступним блоком */
}
  	.groupIcon {
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
  	.button7 {
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
    		background-image: url('@/assets/Frame 130.png');
    		background-size: cover;
    		background-repeat: no-repeat;
    		background-position: top;
    		z-index: 1;
  	}
	.frameParent {
  width: 100%;
  max-width: 1296px;
  border-radius: 20px;
  background-color: #fe890a;
  min-height: 427px; /* динамічна висота */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 58px 86px;
  box-sizing: border-box;
  position: relative;
  z-index: 6;
  font-size: 50px;
  margin: 0 auto; /* центрує блок */
}


  	
  	.iphone1415Pro41 {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 20px;
    		background-color: #fff;
    		width: 236px;
    		height: 512px;
  	}
  	.img {
    		width: 236px;
    		position: absolute;
    		margin: 0 !important;
    		top: 51px;
    		left: 257px;
    		height: 512px;
    		z-index: 0;
  	}
  	.groupIcon1 {
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
  	.text18 {
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
  	.textButtons {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 40px;
  	}
  	.banner2 {
    		width: 1296px;
    		border-radius: 40px;
    		background-color: #fe8400;
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
  	.iphone1415Pro411 {
    		position: absolute;
    		top: 11px;
    		left: 16px;
    		border-radius: 20px;
    		background-color: #fff;
    		width: 236px;
    		height: 512px;
  	}
  	.imgIcon9 {
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
  	.img1 {
    		width: 267px;
    		position: absolute;
    		margin: 0 !important;
    		top: 40px;
    		left: 241px;
    		height: 540px;
    		z-index: 1;
    		text-align: left;
    		font-size: 26px;
    		color: #fe8400;
    		font-family: 'Arial Black';
  	}
  	.banner1 {
    		align-self: stretch;
    		height: 694px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 200px 0px 60px;
    		box-sizing: border-box;
    		position: relative;
    		z-index: 1;
  	}
  	.banner3 {
    		width: 1459px;
    		height: 629px;
    		display: none;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 200px 0px 60px;
    		box-sizing: border-box;
    		position: relative;
    		z-index: 2;
  	}
  	.banner {
    		align-self: stretch;
    		height: 694px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 0px 0px 60px;
    		box-sizing: border-box;
    		position: relative;
    		z-index: 7;
    		text-align: center;
  	}
  	.car31Icon {
    		width: 48px;
    		position: relative;
    		height: 48px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.text20 {
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
  	}
  	.logo3 {
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
  	.text21 {
    		width: 234px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText7 {
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
  	.text22 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText8 {
    		width: 180px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 12px;
  	}
  	.text23 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText6 {
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
  	.textIcons7 {
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
    		white-space: nowrap;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 3;
    		-webkit-box-orient: vertical;
  	}
  	.text25 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
    		font-size: 16px;
  	}
  	.text24 {
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
  	.groupIcon7 {
    		position: absolute;
    		height: 100%;
    		width: 100%;
    		top: 0%;
    		right: 0%;
    		bottom: 0%;
    		left: 0%;
    		max-width: 100%;
    		overflow: hidden;
    		max-height: 100%;
  	}
  	.buttons2 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
  	}
  	.textIcons6 {
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
  	.groupInner {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 50px;
    		background-color: rgba(0, 0, 0, 0.05);
    		width: 94px;
    		height: 48px;
  	}
  	.off1 {
    		position: absolute;
    		height: 71.47%;
    		width: 35.85%;
    		top: 16.14%;
    		left: 64.14%;
    		display: inline-block;
  	}
  	.rectangleDiv {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 50px;
    		background-color: #fe8400;
    		width: 34px;
    		height: 34px;
  	}
  	.offGroup {
    		position: absolute;
    		height: 70.83%;
    		width: 70.32%;
    		top: 14.58%;
    		right: 14.79%;
    		bottom: 14.58%;
    		left: 14.89%;
  	}
  	.rectangleGroup {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 94px;
    		height: 48px;
  	}
  	.available1 {
    		width: 94px;
    		position: absolute;
    		margin: 0 !important;
    		top: 54px;
    		left: 488px;
    		height: 48px;
    		display: none;
    		z-index: 9;
    		color: #fff9f9;
    		font-family: Poppins;
  	}
 .home {
  width: 100%;
  position: relative;
  background-color: var(--bg);
  color: var(--text);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 16px;
  font-family: 'Work Sans';
}

html.dark .carDetails {
background-color: #000000; 
color: white;
}


.dateInput, .textInput, .selhectInput {
  width: calc(100% - 250px); 
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 35px;
}

.selectInput {
  appearance: none;
  background-color: #fff;
}

.endAdornmentIcon, .selectarrowIcon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.reservationMessage {
  margin-top: 20px;
  padding: 10px;
  background-color: #e0ffe0;
  border: 1px solid #b2ffb2;
  border-radius: 4px;
  color: #000000;
}

.zarezerwujSamochd {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.button {
  margin-top: 10px;
  background-color: #fe8400;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: #e67300;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.placeholder, .placeholder3 {
  margin-bottom: 5px;
  font-weight: bold;
}
  	
</style>