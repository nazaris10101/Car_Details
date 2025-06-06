<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

// Темна тема
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Дані авто
const cars = ref([])

// Фільтр по типу кузова
const selectedBodyType = ref('') // '' — всі авто

// Завантаження даних з API
onMounted(async () => {
  try {
    const response = await axios.get('https://car-rental-merito-application.azurewebsites.net/api/cars/get-all-cars')
    cars.value = response.data.cars // ✅ ТУТ!
  } catch (error) {
    console.error('Błąd podczas pobierania samochodów:', error)
  }
})

// Фільтрація
const filteredCars = computed(() => {
  if (!selectedBodyType.value) return cars.value
  return cars.value.filter(car => car.bodyType === selectedBodyType.value)
})
</script>


<template>
  	<div :class="$style.content">
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
        <router-link to="/" :class="$style.kuphalLlc">Główna</router-link>
        <router-link to="/o-nas" :class="$style.oNas1">O nas</router-link>
        <router-link to="/rezerwacja" :class="$style.kuphalLlc">Rezerwacja</router-link>
        <router-link to="/samochody" :class="$style.kuphalLlc">Samochody</router-link>
        <router-link to="/kontakt" :class="$style.kuphalLlc">Kontakt</router-link>
        <div :class="$style.cta">
          <div :class="$style.kuphalLlc">Zaloguj się | Zarejestruj się</div>
        </div>
      </div>
    </div>
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
    		
    		<div :class="$style.content1">
  <div :class="$style.navBarSide">
    <div :class="$style.tYPE">
      <div :class="$style.tYp">TYP</div>
      <div :class="$style.tYPE1">
        <div
          v-for="type in ['SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback']"
          :key="type"
          :class="$style.filterOption"
          @click="selectedBodyType = type"
        >
          <div :class="$style.checkbox">
            <img
              v-if="selectedBodyType === type"
              :class="$style.checkIcon"
              src="@/assets/tick-square.svg"
              alt="✓"
            />
          </div>
          <span :class="$style.typeLabel">{{ type }}</span>
        </div>
      </div>
    </div>
        				<div :class="$style.pRICE">
          					<div :class="$style.tYp">CENA</div>
          					<div :class="$style.pRICERANGE">
            						<div :class="$style.pRICERANGE1">
              							<div :class="$style.line2" />
              							<div :class="$style.line1" />
              							<div :class="$style.mark" />
            						</div>
            						<div :class="$style.maks70000Z">Maks. 700,00 zł</div>
          					</div>
        				</div>
      			</div>
      			
      			
      			
    <div :class="$style.catalogue1">
  <div v-for="car in filteredCars" :key="car._id" :class="$style.catalog1">
    <div :class="$style.buttonRental">
      <div :class="$style.wynajmij">Wynajmij</div>
    </div>

    <div :class="$style.carName">
      <b :class="$style.mercedes">{{ car.make }}</b>
      <b :class="$style.sport1">{{ car.model }}</b>
    </div>

    <div :class="$style.price">{{ car.hourlyPrice }} zł/h</div>

    <div :class="$style.spesification">
      <div :class="$style.sport">
        <img :class="$style.vuesaxboldtickSquareIcon" src="@/assets/gas-station.svg" />
        <div :class="$style.pb95">{{ car.fuelType }}</div>
      </div>
      <div :class="$style.sport">
        <img :class="$style.ceklistIcon" src="@/assets/Car-2.png" />
        <div :class="$style.manual">{{ car.gearboxType }}</div>
      </div>
      <div :class="$style.capacity">
        <img :class="$style.vuesaxboldtickSquareIcon" src="@/assets/profile-2user.svg" />
        <div :class="$style.osoby">
          <span :class="$style.osoby1">{{ car.capacity }} Osoby</span>
        </div>
      </div>
    </div>

    <img
      :class="$style.carIcon1"
      :src="car.imageUrl"
      :alt="`${car.make} ${car.model}`"
    />

    <div :class="$style.shadow" />
  </div>
</div>

    		<div :class="$style.footer">
      			<div :class="$style.iconsTextButtons">
        				<div :class="$style.iconsText">
          					<div :class="$style.logo1">
            						<img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
            						<div :class="$style.text">
              							<b :class="$style.zalogujSi">CARENT </b>
            						</div>
          					</div>
          					<div :class="$style.iconsText1">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2.svg" />
            						<div :class="$style.text1">
              							<div :class="$style.adres">Adres</div>
              							<div :class="$style.ulZota59Container">
                								<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                								<p :class="$style.cieszSiYciem">&nbsp;</p>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2m.svg" />
            						<div :class="$style.text2">
              							<div :class="$style.adres">Email </div>
              							<div :class="$style.carentgmailcom">carent@gmail.com</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/telefon+bg.svg" />
            						<div :class="$style.text3">
              							<div :class="$style.adres">Telefon </div>
              							<div :class="$style.carentgmailcom">+48 22 222 22 00</div>
            						</div>
          					</div>
        				</div>
        				<div :class="$style.textIcons">
          					<div :class="$style.textIcons1">
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
          					<div :class="$style.textButtons">
            						<div :class="$style.przydatneLinki">Przydatne linki</div>
            						<div :class="$style.text5">
              							<div :class="$style.oNas1">O nas  </div>
              							<div :class="$style.minivan">Główna</div>
              							<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
            						</div>
          					</div>
          					<div :class="$style.textButtons">
            						<div :class="$style.przydatneLinki">Pojazdy</div>
            						<div :class="$style.text5">
              							<div :class="$style.adres">Sedan</div>
              							<div :class="$style.adres">Cabriolet</div>
              							<div :class="$style.adres">Pickup</div>
              							<div :class="$style.minivan">Minivan</div>
              							<div :class="$style.adres">SUV</div>
            						</div>
          					</div>
          					<div :class="$style.textButtons">
            						<div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
            						<div :class="$style.buttons">
              							<div :class="$style.appStore">
                								<img :class="$style.groupIcon4" alt="" src="@/assets/App Store.svg" />
              							</div>
              							<div :class="$style.googlePlay">
                								<img :class="$style.groupIcon4" alt="" src="@/assets/Group-4.svg" />
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
  	</div>
</div>	
	

</template>
<style  module>
body {
background-color: #000000;
color: #000000;
}
.heroSectionChild {
background-color: var(--hero-bg);
}
.card {
background-color: #fafafa;
color: #000;
}                 
html.dark body {
background-color: #000000;
color: #fff;
}


:root {
  --hero-bg: #fff;
}

html.dark {
  --hero-bg: #1e1e1e;
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
							html.dark .heroSectionChild {
    background-color: var(--hero-bg);
}
.heroSectionChild {
  position: absolute;
  top: 0;
  left: 0;
  width: 613px;
  height: 710px;
  background-color: #000000; /* ⛔️ ЗАЙВЕ */
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
	.cieszSiYciemdescription {
    margin: 0;
    font-size: 18px;
    line-height: 1.5; 
    color: var(--text-color); 
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
    		white-space: pre-wrap;
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
    		background-color: rgba(254, 132, 0, 0.05);
    		width: 94px;
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
            						
  	.offParent {
    		position: absolute;
    		height: 70.83%;
    		width: 77.66%;
    		top: 14.58%;
    		right: 7.45%;
    		bottom: 14.58%;
    		left: 14.89%;
  	}
  	.rectangleParent {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 94px;
    		height: 48px;
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
    		height: 690px;
    		z-index: 0;
    		font-size: 48px;
    		font-family: Montserrat;
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
.filterOption {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filterOption:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

html.dark .filterOption:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--button-bg);
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

html.dark .checkbox {
  background-color: #1e1e1e;
}

.checkIcon {
  width: 22px;
  height: 22px;
}

.typeLabel {
  font-size: 16px;
  font-weight: 600;
  color: black
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
    		position: relative;
    		top: 756px;
    		left: 14px;
    		width: 1421px;
    		height: 177px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		gap: 32.9px;
    		opacity: 0.35;
  	}
  	.tYp {
    		width: 104px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.vuesaxboldtickSquareIcon {
    		width: 24px;
    		position: relative;
    		height: 24px;
  	}
  	.span {
    		color: #90a3bf;
    		white-space: pre-wrap;
  	}
  	.sport10TxtContainer {
    		width: 100%;
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
  	.sport10 {
    		width: 144px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.sport {
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.suv12 {
    		width: 80px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.ceklistIcon {
    		width: 24px;
    		position: relative;
    		height: 24px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.mpv16 {
    		width: 88px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
	/* Видаляє вигляд стандартного лінка */
a {
  text-decoration: none;
  color: inherit;
}

/* Підсвічує активний пункт меню (опціонально) */
.router-link-active {
  font-weight: bold;
  color: #fe8400;
}

  	.sedan20 {
    		width: 112px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.tYPE1 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 32px;
    		text-align: justify;
    		font-size: 20px;
    		color: #596780;
  	}
  	.tYPE {
    		position: absolute;
    		top: 32px;
    		left: 32px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 28px;
  	}
  	.line2 {
    		position: absolute;
    		top: 4px;
    		left: 0px;
    		border-radius: 12px;
    		background-color: #90a3bf;
    		width: 296px;
    		height: 12px;
  	}
  	.line1 {
    		position: absolute;
    		top: 4px;
    		left: 0px;
    		border-radius: 12px;
    		background-color: #fe8400;
    		width: 220px;
    		height: 12px;
  	}
  	.mark {
    		position: absolute;
    		top: -2px;
    		left: 208px;
    		border-radius: 50%;
    		background-color: #fe8400;
    		border: 4px solid #fff;
    		box-sizing: border-box;
    		width: 24px;
    		height: 24px;
  	}
  	.pRICERANGE1 {
    		width: 296px;
    		position: relative;
    		height: 20px;
  	}
  	.maks70000Z {
    		width: 296px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.pRICERANGE {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 12px;
    		text-align: justify;
    		font-size: 20px;
    		color: #596780;
  	}
  	.pRICE {
    		position: absolute;
    		top: 430px;
    		left: 32px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 28px;
  	}
  	.navBarSide {
    		position: absolute;
    		top: 20px;
    		left: 0px;
    		background-color: #fff;
    		border-right: 1px solid #f3f5f7;
    		box-sizing: border-box;
    		width: 360px;
    		height: 578px;
    		overflow: hidden;
    		font-size: 12px;
    		color: #90a3bf;
  	}
  	.showMoreCar {
    		width: 116px;
    		position: absolute;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
	.cieszSiYciemText{
              margin: 0;
                  color: #ffffff !important; 
				  }
  	.showMore1 {
    		width: 156px;
    		border-radius: 4px;
    		background-color: #fe8400;
    		height: 44px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		padding: 0px 20px;
    		box-sizing: border-box;
  	}
  	.car {
    		width: 140px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		text-align: right;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.showMore {
    		position: relative;
    		top: 1492px;
    		left: 822px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 290px;
    		text-align: center;
    		font-size: 16px;
  	}
  	.bg {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 410px;
    		height: 136px;
  	}
  	.markIcon {
    		width: 16px;
    		border-radius: 70px;
    		height: 16px;
  	}
  	.wynajem {
    		width: 81px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.pickUp1 {
    		position: relative;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.miejsce {
    		width: 77px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.wybierzSwojeMiasto {
    		width: 123px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.vuesaxoutlinearrowDownIcon {
    		width: 14px;
    		position: relative;
    		height: 14px;
  	}
  	.wybierzSwojeMiastoParent {
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
    		font-size: 12px;
    		color: #90a3bf;
  	}
  	.locations {
    		display: none;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.pickUpChild {
    		width: 1px;
    		position: absolute;
    		border-right: 1px solid rgba(195, 212, 233, 0.4);
    		box-sizing: border-box;
    		height: 49px;
  	}
  	.dataWynajmu {
    		width: 116px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.wybierzDat {
    		width: 94px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.date {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.pickUp2 {
    		position: absolute;
    		top: 60px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
  	}
  	.pickUp {
    		position: absolute;
    		top: 16px;
    		left: 376px;
    		border-radius: 10px;
    		width: 410px;
    		height: 132px;
    		overflow: hidden;
    		font-size: 16px;
    		color: #1a202c;
  	}
  	.wynajmij {
    		width: 76px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.buttonRental {
    		position: absolute;
    		top: 320px;
    		right: 24px;
    		border-radius: 4px;
    		background-color: #fe8400;
    		width: 116px;
    		height: 44px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		padding: 0px 20px;
    		box-sizing: border-box;
    		text-align: center;
  	}
  	.mercedes {
    		width: 128px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.sport1 {
    		width: 128px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		display: flex;
    		color: #90a3bf;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.carName {
    		position: absolute;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
    		font-size: 20px;
    		color: #000;
  	}
  	.price {
  position: absolute;
  top: 320px;
  left: 24px;
  width: 128px;
  height: 44px;

  /* Додай ці властивості: */
  color: #000; /* або #fff — залежно від фону */
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2; /* щоб бути над тлом чи тінню */
}
  	.pb95 {
    		width: 38px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.manual {
    		width: 52px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.osoby1 {
    		font-weight: 500;
  	}
  	.osoby {
    		width: 60px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.capacity {
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 7px;
  	}
  	.spesification {
    		position: absolute;
    		top: 260px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 17px;
    		font-size: 14px;
    		color: #90a3bf;
  	}
  	.carIcon1 {
    		position: absolute;
    		top: 119px;
    		left: 24px;
    		width: 270px;
    		height: 109px;
    		object-fit: cover;
  	}
  	.shadow {
    		position: absolute;
    		top: 219px;
    		left: 30px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 260px;
    		height: 13px;
  	}
    	.catalog1 {
  width: 317px;
  position: relative;
  border-radius: 10px;
  background-color: #ffffff;
  height: 388px;
  overflow: hidden;
  font-size: 16px;

  /* Важливо: дозволити переноси */
  flex-shrink: 0;
}

  	
  	.buttonRental1 {
    		position: absolute;
    		top: 320px;
    		right: 24px;
    		border-radius: 4px;
    		background-color: #fe8400;
    		width: 116px;
    		height: 44px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		padding: 0px 20px;
    		box-sizing: border-box;
    		text-align: center;
    		font-size: 16px;
  	}
  	.carName1 {
    		position: absolute;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
    		color: #000;
  	}
  	.z25000 {
    		width: 138px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.price1 {
    		position: absolute;
    		top: 316px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		color: #1a202c;
  	}
  	.osoby2 {
    		width: 60px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.carIcon3 {
    		position: absolute;
    		top: 119px;
    		left: 24px;
    		width: 248px;
    		height: 93px;
    		object-fit: contain;
  	}
  	.shadow1 {
    		position: absolute;
    		top: 229px;
    		left: 24px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 266px;
    		height: 3px;
  	}
  	.catalog2 {
    		width: 317px;
    		position: relative;
    		border-radius: 10px;
    		background-color: var(--card-bg);
    		height: 388px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.mercedesBenzS {
    		width: 161px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		white-space: pre-wrap;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.carIcon5 {
    		position: absolute;
    		top: 128px;
    		left: 9px;
    		width: 271px;
    		height: 92px;
    		object-fit: contain;
  	}
  	.shadow2 {
    		position: absolute;
    		top: 228px;
    		left: 24px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 266px;
    		height: 4px;
  	}
  	.z45000 {
    		width: 136px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.price2 {
    		position: absolute;
    		top: 320px;
    		left: 36px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		color: #1a202c;
  	}
 	 	.catalogue1 {
  position: absolute;
  top: 18px;
  left: 376px;
  width: 1021px;

  display: flex;
  flex-wrap: wrap;              /* ⬅️ Дозволяє переносити рядки */
  gap: 32px;
  justify-content: flex-start;
 
}

  	.teslaModelS {
    		width: 181px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.z40000 {
    		width: 145px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.elektro {
    		width: 47px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.capacity3 {
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 5px;
  	}
  	.spesification3 {
    		position: absolute;
    		top: 260px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 11px;
    		font-size: 14px;
    		color: #90a3bf;
  	}
  	.carIcon7 {
    		position: absolute;
    		top: 91px;
    		left: 0px;
    		width: 317px;
    		height: 151px;
    		object-fit: cover;
  	}
  	.shadow3 {
    		position: absolute;
    		top: 201px;
    		left: 26px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 264px;
    		height: 31px;
  	}
  	.landRover {
    		width: 225px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.carIcon9 {
    		position: absolute;
    		top: 92px;
    		left: 0px;
    		width: 314px;
    		height: 140px;
    		object-fit: contain;
  	}
  	.shadow4 {
    		position: absolute;
    		top: 214px;
    		left: 26px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 264px;
    		height: 18px;
  	}
  	.z35000 {
    		width: 148px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.porsche911Carrera {
    		width: 209px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.sport4 {
    		width: 140px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		display: flex;
    		color: #90a3bf;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.pb954 {
    		width: 40px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.carIcon11 {
    		position: absolute;
    		top: 89px;
    		left: 0px;
    		width: 317px;
    		height: 153px;
    		object-fit: cover;
  	}
  	.shadow5 {
    		position: absolute;
    		top: 216px;
    		left: 26px;
    		background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff);
    		width: 264px;
    		height: 16px;
  	}
  	.catalogue2 {
  position: absolute;
  top: 578px;
  left: 382px;
  width: 1015px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
}

  	
  	.z250001 {
    		width: 140px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.price6 {
    		position: absolute;
    		top: 486px;
    		left: 411px;
    		width: 133px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		color: #1a202c;
  	}
  	.content1 {
  position: relative;         /* або взагалі видали позиціонування */
  background-color: var(--car-bg); /* адаптується до теми */
  width: 100%;
  padding: 0px 24px;         /* додає внутрішній відступ */
  font-size: 0px;
  font-family: 'Plus Jakarta Sans';
  display: flex;
  flex-direction: row;
  gap: 0	px;
  flex-wrap: wrap;            /* щоб контент не виходив за межі */
}

  	
  	.car31Icon {
    		width: 48px;
    		position: relative;
    		height: 48px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.text {
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
  	}
  	.logo1 {
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
  	.text1 {
    		width: 234px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText1 {
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
  	.text2 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText2 {
    		width: 180px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 12px;
  	}
  	.text3 {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: center;
    		gap: 12px;
  	}
  	.iconsText {
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
  	.socialIcons {
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 20px;
  	}
  	.textIcons1 {
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
  	.text5 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
    		font-size: 16px;
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
  	.groupIcon4 {
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
  	.appStore {
    		width: 171.4px;
    		position: relative;
    		height: 50px;
  	}
  	.googlePlay {
    		width: 171.4px;
    		position: relative;
    		height: 50px;
  	}
  	.buttons {
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
  	}
  	.textButtons {
    		width: 180px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
  	}
  	.textIcons {
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
padding: 1850px 72px 40px;
gap: 0px;
font-size: 16px;
  	}

  	
  .content {
  width: 100%;
  position: relative;
  background-color: var(--car-bg);
  color: var(--car-text);
  min-height: 100vh;       /* мінімальна висота на весь екран */
  height: auto;            /* автоматична висота відповідно до вмісту */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 48px;
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
  color: #2d2d2d;
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
html.dark .socialMenu {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
}

html.dark .socialMediaLogo,
html.dark .socialMediaLogo1 {
  filter: brightness(1.2) invert(0); /* або invert(1) якщо іконки темні */
}

.sport {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  cursor: pointer;
}
.vuesaxboldtickSquareIcon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

</style>