<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useDark, useToggle } from '@vueuse/core'

// 🌙 Темна тема
const isDark = useDark()
const toggleDark = useToggle(isDark)

// 📦 Список авто з API
const carList = ref([])
const selectedCar = ref('')

// 📡 Завантаження авто
onMounted(async () => {
  try {
    const response = await axios.get('https://car-rental-merito-application.azurewebsites.net/api/cars/get-all-cars')
    carList.value = response.data.cars // або просто .data — залежно від API
  } catch (error) {
    console.error('Błąd podczas pobierania samochodów:', error)
  }
})
</script>


<template>
  	<div :class="$style.carDetails">
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
    		
  <div :class="$style.edytujWrapper">
    <div :class="$style.edytuj">
      <div :class="$style.zarezerwujSamochd">Zarezerwuj samochód</div>
      <div :class="$style.inputs">
        
        <!-- 📅 Data wynajmu -->
        <div :class="$style.input">
          <div :class="$style.content">
            <div :class="$style.placeholder">Data wynajmu</div>
            <input
              type="date"
              v-model="rentalDate"
              :class="$style.dateInput"
            />
          </div>
        </div>

        <!-- 📅 Data powrotu -->
        <div :class="$style.input">
          <div :class="$style.content">
            <div :class="$style.placeholder">Data powrotu</div>
            <input
              type="date"
              v-model="returnDate"
              :class="$style.dateInput"
            />
          </div>
        </div>

        <!-- 🚗 Samochód -->
<div :class="$style.input2">
  <div :class="$style.content">
    <div :class="$style.placeholder">Samochód</div>
    <select v-model="selectedCar" :class="$style.selectInput">
      <option value="" disabled selected>Wybierz samochód</option>
      <option
        v-for="car in carList"
        :key="car._id"
        :value="car.make + ' ' + car.model"
      >
        {{ car.make }} {{ car.model }}
      </option>
    </select>
  </div>
</div>

        <!-- 📍 Miejsce wynajmu -->
        <div :class="$style.input">
          <div :class="$style.content">
            <div :class="$style.placeholder">Miejsce wynajmu</div>
            <select v-model="selectedCity" :class="$style.selectInput">
              <option value="" disabled selected>Wybierz miasto</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Kraków">Kraków</option>
              <option value="Wrocław">Wrocław</option>
              <option value="Gdańsk">Gdańsk</option>
            </select>
          </div>
        </div>

        <!-- 👤 Imię i nazwisko -->
        <div :class="$style.input4">
          <div :class="$style.content">
            <input
              type="text"
              v-model="fullName"
              :class="$style.textInput"
              placeholder="Wpisz swoje imię i nazwisko"
            />
          </div>
        </div>

      </div>

      <div :class="$style.button">
        <div :class="$style.zarezerwuj">Zarezerwuj</div>
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
        				<div :class="$style.button1">
          					<div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
        				</div>
      			</div>
      			<div :class="$style.discountlabelfr2Wrapper">
        				<img :class="$style.discountlabelfr2Icon" alt="" src="@/assets/discountLabelfr 2.png" />
      			</div>
    		</div>
    		<div :class="$style.banner">
      			<div :class="$style.banner1">
        				<div :class="$style.textButtons">
          					<div :class="$style.text">
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
      			<div :class="$style.img">
        				<div :class="$style.iphone1415Pro41" />
        				<img :class="$style.imgIcon" alt="" src="@/assets/iPhone 14.png" />
        				<div :class="$style.logo1">CARENT</div>
      			</div>
    		</div>
    		<div :class="$style.homeDetailsParent">
      			<div :class="$style.homeDetailsContainer">
        				<span>Home /</span>
        				<span :class="$style.span"> </span>
        				<span :class="$style.details">Details</span>
      			</div>
      			<b :class="$style.details1">Details</b>
    		</div>
    		<div :class="$style.footer">
      			<div :class="$style.iconsTextButtons">
        				<div :class="$style.iconsText">
          					<div :class="$style.logo2">
            						<img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
            						<div :class="$style.text1">
              							<b :class="$style.zalogujSi">CARENT </b>
            						</div>
          					</div>
          					<div :class="$style.iconsText1">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2.svg" />
            						<div :class="$style.text2">
              							<div :class="$style.adres">Adres</div>
              							<div :class="$style.ulZota59Container">
                								<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                								<p :class="$style.cieszSiYciem">&nbsp;</p>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg-2m.svg" />
            						<div :class="$style.text3">
              							<div :class="$style.adres">Email </div>
              							<div :class="$style.carentgmailcom">carent@gmail.com</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/telefon+bg.svg" />
            						<div :class="$style.text4">
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
          					<div :class="$style.text5">
            						<div :class="$style.przydatneLinki">Przydatne linki</div>
            						<div :class="$style.text6">
              							<div :class="$style.oNas1">O nas  </div>
              							<div :class="$style.minivan">Główna</div>
              							<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
            						</div>
          					</div>
          					<div :class="$style.text5">
            						<div :class="$style.przydatneLinki">Pojazdy</div>
            						<div :class="$style.text6">
              							<div :class="$style.adres">Sedan</div>
              							<div :class="$style.adres">Cabriolet</div>
              							<div :class="$style.adres">Pickup</div>
              							<div :class="$style.minivan">Minivan</div>
              							<div :class="$style.adres">SUV</div>
            						</div>
          					</div>
          					<div :class="$style.text5">
            						<div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
            						<div :class="$style.buttons1">
              							<div :class="$style.appStoreIcon">
                								<img :class="$style.groupIcon6" alt="" src="@/assets/App Store.svg" />
              							</div>
              							<div :class="$style.googlePlayIcon">
                								<img :class="$style.groupIcon6" alt="" src="@/assets/Group-4.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.text9"> </div>
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
							html.dark .heroSectionChild {
    background-color: #ffffff;
}
.heroSectionChild {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	background-color: #000000;
  	width: 613px;
  	height: 741px;
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
	.cieszSiYciemText{
              margin: 0;
                  color: #ffffff !important; 
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
  	.zarezerwujSamochd {
    		width: 630px;
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
  	.input2 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
  	}
  	.placeholder4 {
    		flex: 1;
    		position: relative;
    		letter-spacing: 0.05em;
    		line-height: 11.23px;
    		text-transform: uppercase;
  	}
  	.input4 {
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
    		width: 416px;
    		border-radius: 20px;
    		background-color: #fff;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 40px;
    		box-sizing: border-box;
    		gap: 40px;
  	}
  	.edytujWrapper {
    		width: 1416px;
    		height: 713px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: center;
    		padding: 60px 312px;
    		box-sizing: border-box;
    		color: #000;
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
  	.button1 {
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
    		width: 1296px;
    		border-radius: 20px;
    		background-color: #fe890a;
    		height: 419px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 58px 86px;
    		box-sizing: border-box;
    		position: relative;
    		font-size: 50px;
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
  	.text {
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
  	.banner1 {
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
  	.iphone1415Pro41 {
    		position: absolute;
    		top: 11px;
    		left: 16px;
    		border-radius: 20px;
    		background-color: #fff;
    		width: 236px;
    		height: 512px;
  	}
  	.imgIcon {
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
    		left: 241px;
    		height: 540px;
    		z-index: 1;
    		text-align: left;
    		font-size: 26px;
    		color: #fe8400;
    		font-family: 'Arial Black';
  	}
  	.banner {
    		align-self: stretch;
    		height: 684px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 200px 0px 60px;
    		box-sizing: border-box;
    		position: relative;
    		text-align: center;
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
  	.car31Icon {
    		width: 48px;
    		position: relative;
    		height: 48px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.text1 {
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
  	.text2 {
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
  	.text3 {
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
  	.text4 {
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
  	.groupIcon2 {
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
  	.text6 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
    		font-size: 16px;
  	}
  	.text5 {
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
  	.groupIcon6 {
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
  	.buttons1 {
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
  	.text9 {
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
  	.carDetails {
    		
  width: 100%;
  position: relative;
  background-color: var(--car-bg);
  color: var(--car-text); /* це добре — але враховуй наслідки */
  font-size: 16px; /* не 48px! */
  font-family: 'Work Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  text-align: left;
}
  	
html.dark .carDetails {
background-color: #000000; 
color: white;
}


.dateInput,
.textInput,
.selectInput {
  width: 100%;
  flex: 1;
  padding: 12px 16px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  background-color: transparent;
  color: inherit;
  outline: none;
  box-sizing: border-box;
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
</style>
