<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  	<div :class="$style.aboutUs">
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
        <router-link :to="'/o-nas'" :class="$style.oNas1m">O nas</router-link>
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
    		<div :class="$style.hero">
      			<div :class="$style.oNas1">O nas  </div>
      			<div :class="$style.gwnaOContainer">
        				<span>Główna</span>
        				<span :class="$style.span"> /</span>
        				<span> O nas</span>
      			</div>
    		</div>
    		<div :class="$style.counter">
      			<div :class="$style.text">
        				<b :class="$style.zalogujSi">20k+</b>
        				<b :class="$style.zadowoleniKlienci">Zadowoleni klienci</b>
      			</div>
      			<div :class="$style.text">
        				<b :class="$style.oNas">  6+</b>
        				<b :class="$style.zadowoleniKlienci">Liczba samochodów</b>
      			</div>
      			<div :class="$style.text">
        				<b :class="$style.oNas">  5+</b>
        				<b :class="$style.zadowoleniKlienci">Lata doświadczenia</b>
      			</div>
    		</div>
    		<div :class="$style.infoBlock">
      			<div :class="$style.textIcons">
        				<div :class="$style.text3">
          					<b :class="$style.odblokujNiezapomnianeWspomni">Odblokuj niezapomniane wspomnienia w podróży</b>
        				</div>
        				<div :class="$style.planujeszWakacjePodr">Planujesz wakacje, podróż służbową lub spontaniczny wypad za miasto? Z nami masz pełną swobodę wyboru i komfort jazdy! Oferujemy szeroką gamę samochodów, dopasowanych do Twoich potrzeb.</div>
          					<div :class="$style.row">
            						<div :class="$style.iconText">
              							<img :class="$style.iconBg" alt="" src="@/assets/check.svg" />
              							<div :class="$style.szerokiWybrPojazdw">Szeroki wybór pojazdów – Od kompaktowych aut miejskich po luksusowe SUV-y i przestronne vany.</div>
            						</div>
            						<div :class="$style.iconText">
              							<img :class="$style.iconBg" alt="" src="@/assets/check.svg" />
              							<div :class="$style.szerokiWybrPojazdw">Elastyczność i wygoda – Możliwość wynajmu krótkoterminowego i długoterminowego na atrakcyjnych warunkach.</div>
            						</div>
          					</div>
          					<div :class="$style.row">
            						<div :class="$style.iconText">
              							<img :class="$style.iconBg" alt="" src="@/assets/check.svg" />
              							<div :class="$style.caodoboweWsparcieJestemy">Bezproblemowy wynajem – Prosty proces rezerwacji, przejrzyste warunki i minimum formalności.</div>
            						</div>
            						<div :class="$style.iconText">
              							<img :class="$style.iconBg" alt="" src="@/assets/check.svg" />
              							<div :class="$style.caodoboweWsparcieJestemy">Całodobowe wsparcie – Jesteśmy do Twojej dyspozycji 24/7, abyś mógł cieszyć się bezstresową podróżą.</div>
            						</div>
          					</div>
          					</div>
          					</div>
          					<div :class="$style.whereEveryDriveFeelsExtrao">
            						<div :class="$style.text5">
              							<b :class="$style.gdzieKadaJazda">Gdzie każda jazda samochodem jest wyjątkowa</b>
              							<div :class="$style.text6">
                								<div :class="$style.frameParent">
                  									<div :class="$style.markiRnorodneParent">
                    										<div :class="$style.markiRnorodne">Marki różnorodne</div>
                    										<div :class="$style.markiRnorodneOferujemy">Marki różnorodne – Oferujemy szeroki wybór samochodów różnych marek i klas. Bez względu na to, czy potrzebujesz ekonomicznego auta na miasto, luksusowego sedana czy przestronnego SUV-a – u nas znajdziesz idealny pojazd dla siebie.</div>
                  									</div>
                  									<div :class="$style.markiRnorodneParent">
                    										<div :class="$style.markiRnorodne">Niesamowite wsparcie</div>
                    										<div :class="$style.naszZespJest">Nasz zespół jest do Twojej dyspozycji 24/7. W razie jakichkolwiek pytań lub problemów zapewniamy szybką i profesjonalną pomoc.</div>
                  									</div>
                								</div>
                								<div :class="$style.frameGroup">
                  									<div :class="$style.markiRnorodneParent">
                    										<div :class="$style.markiRnorodne">Maksymalna wolność</div>
                    										<div :class="$style.naszZespJest">Podróżuj bez ograniczeń! Nasze samochody są gotowe do jazdy zarówno po mieście, jak i na dłuższe trasy. Ty decydujesz, dokąd zmierzasz.</div>
                  									</div>
                  									<div :class="$style.markiRnorodneParent">
                    										<div :class="$style.markiRnorodne">elastyczność w podróży</div>
                    										<div :class="$style.wynajmijAutoNa">Wynajmij auto na dzień, tydzień lub nawet miesiąc – dostosujemy ofertę do Twoich potrzeb. Oferujemy atrakcyjne warunki wynajmu i przejrzyste zasady.</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div :class="$style.banner">
              							<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.imgIcon" alt="" src="@/assets/Img.png" />
              							<div :class="$style.text7">
                								<b :class="$style.faktyWLiczbach">Fakty w liczbach</b>
                								<div :class="$style.ametCrasHacOrciLacusFaucWrapper">
                  									<div :class="$style.ametCrasHac">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</div>
                								</div>
              							</div>
              							<div :class="$style.counter1">
                								<div :class="$style.iconText4">
                  									<img :class="$style.iconbg1" alt="" src="@/assets/Icon+bg.svg" />
                  									<div :class="$style.text8">
                    										<b :class="$style.m">6+</b>
                    										<div :class="$style.klienci">Samochody</div>
                  									</div>
                								</div>
                								<div :class="$style.iconText4">
                  									<img :class="$style.iconbg1" alt="" src="@/assets/Icon+bg.svg" />
                  									<div :class="$style.text8">
                    										<b :class="$style.m">20k+</b>
                    										<div :class="$style.klienci">Klienci</div>
                  									</div>
                								</div>
                								<div :class="$style.iconText4">
                  									<img :class="$style.iconbg1" alt="" src="@/assets/Icon+bg.svg" />
                  									<div :class="$style.text8">
                    										<b :class="$style.m">25+</b>
                    										<div :class="$style.klienci">Lata</div>
                  									</div>
                								</div>
                								<div :class="$style.iconText4">
                  									<img :class="$style.iconbg1" alt="" src="@/assets/Icon+bg.svg" />
                  									<div :class="$style.text8">
                    										<b :class="$style.m">2m+</b>
                    										<div :class="$style.klienci">Km</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.banner1">
            						<div :class="$style.frameContainer">
              							<div :class="$style.frameDiv">
                								<div :class="$style.groupParent">
                  									<img :class="$style.groupIcon1" alt="" src="@/assets/Group.svg" />
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
                								<div :class="$style.button">
                  									<div :class="$style.zalogujSi">Zaloguj się | Zarejestruj się</div>
                								</div>
              							</div>
              							<div :class="$style.discountlabelfr2Wrapper">
                								<img :class="$style.discountlabelfr2Icon" alt="" src="@/assets/discountLabelfr 2.png" />
              							</div>
            						</div>
            						<div :class="$style.banner2">
              							<div :class="$style.banner3">
                								<div :class="$style.textButtons">
                  									<div :class="$style.text12">
                    										<img :class="$style.groupIcon2" alt="" src="@/assets/Group.svg" />
                    										<div :class="$style.pobierzNaszAplikacjParent">
                      											<div :class="$style.pobierzNaszAplikacj">Pobierz naszą aplikację</div>
                      											<b :class="$style.pobierzNaszAplikacj1">Pobierz naszą aplikację</b>
                    										</div>
                    										<div :class="$style.dzikiNaszejAplikacji">Dzięki naszej aplikacji możesz szybko i wygodnie rezerwować auta, zarządzać wynajmami i korzystać z ekskluzywnych promocji. Wszystko w jednym miejscu!</div>
                  									</div>
                  									<div :class="$style.frameGroup">
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
          					<div :class="$style.footer">
            						<div :class="$style.iconsTextButtons">
              							<div :class="$style.iconsText">
                								<div :class="$style.logo2">
                  									<img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
                  									<div :class="$style.text13">
                    										<b :class="$style.zalogujSi">CARENT </b>
                  									</div>
                								</div>
                								<div :class="$style.iconsText1">
                  									<img :class="$style.iconbg5" alt="" src="@/assets/Icon+bg-2.svg" />
                  									<div :class="$style.text14">
                    										<div :class="$style.adres">Adres</div>
                    										<div :class="$style.ulZota59Container">
                      											<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                      											<p :class="$style.cieszSiYciem">&nbsp;</p>
                    										</div>
                  									</div>
                								</div>
                								<div :class="$style.iconsText2">
                  									<img :class="$style.iconbg5" alt="" src="@/assets/Icon+bg-2m.svg" />
                  									<div :class="$style.text15">
                    										<div :class="$style.adres">Email </div>
                    										<div :class="$style.carentgmailcom">carent@gmail.com</div>
                  									</div>
                								</div>
                								<div :class="$style.iconsText2">
                  									<img :class="$style.iconbg5" alt="" src="@/assets/telefon+bg.svg" />
                  									<div :class="$style.text16">
                    										<div :class="$style.adres">Telefon </div>
                    										<div :class="$style.carentgmailcom">+48 22 222 22 00</div>
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
                								<div :class="$style.text17">
                  									<div :class="$style.przydatneLinki">Przydatne linki</div>
                  									<div :class="$style.text18">
                    										<div :class="$style.oNas2">O nas  </div>
                    										<div :class="$style.minivan">Główna</div>
                    										<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
                  									</div>
                								</div>
                								<div :class="$style.text17">
                  									<div :class="$style.przydatneLinki">Pojazdy</div>
                  									<div :class="$style.text18">
                    										<div :class="$style.adres">Sedan</div>
                    										<div :class="$style.adres">Cabriolet</div>
                    										<div :class="$style.adres">Pickup</div>
                    										<div :class="$style.minivan">Minivan</div>
                    										<div :class="$style.adres">SUV</div>
                  									</div>
                								</div>
                								<div :class="$style.text17">
                  									<div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
                  									<div :class="$style.buttons1">
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
    color: var(--text-color); 
}   
            						.oNas1m {
  position: relative;
                    line-height: 26px;
                    white-space: nowrap;
                    display: -webkit-inline-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
}
            						.span {
              							color: #9b9b9b;
            						}
            						.gwnaOContainer {
              							position: relative;
              							font-size: 20px;
              							font-family: 'Work Sans';
              							overflow: hidden;
              							text-overflow: ellipsis;
              							white-space: nowrap;
              							color: var(--text-color);
;
            						}
            						.hero {
              							width: 1296px;
              							border-radius: 40px;
              							height: 240px;
              							overflow: hidden;
              							flex-shrink: 0;
              							display: flex;
              							flex-direction: column;
              							align-items: center;
              							justify-content: center;
              							gap: 20px;
              							text-align: center;
              							color: var(--text-color);

              							font-family: Poppins;
            						}
            						.zadowoleniKlienci {
              							position: relative;
              							font-size: 20px;
              							color: var(--text-color);
;
            						}
            						.text {
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
            						}
            						.counter {
              							align-self: stretch;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: space-between;
              							padding: 60px 120px;
              							gap: 0px;
              							font-size: 80px;
              							color: #fe8400;
            						}
            						.odblokujNiezapomnianeWspomni {
              							width: 643px;
              							position: relative;
              							display: inline-block;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							white-space: nowrap;
              							height: 117px;
              							flex-shrink: 0;
            						}
            						.text3 {
              							display: flex;
              							flex-direction: row;
              							align-items: flex-end;
              							justify-content: flex-start;
              							font-size: 50px;
              							color: var(--text-color);

            						}
            						.planujeszWakacjePodr {
              							align-self: stretch;
              							position: relative;
              							display: -webkit-inline-box;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							-webkit-line-clamp: 3;
              							-webkit-box-orient: vertical;
            						}
            						.iconBg {
              							width: 32px;
              							position: relative;
              							border-radius: 50px;
              							height: 32px;
              							overflow: hidden;
              							flex-shrink: 0;
            						}
            						.szerokiWybrPojazdw {
              							flex: 1;
              							position: relative;
              							display: -webkit-inline-box;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							-webkit-line-clamp: 4;
              							-webkit-box-orient: vertical;
            						}
            						.iconText {
              							flex: 1;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 10px;
            						}
            						.row {
              							align-self: stretch;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 40px;
            						}
            						.caodoboweWsparcieJestemy {
              							flex: 1;
              							position: relative;
              							display: -webkit-inline-box;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							-webkit-line-clamp: 3;
              							-webkit-box-orient: vertical;
            						}
            						.textIcons {
              							width: 878px;
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 40px;
            						}
            						.infoBlock {
              							align-self: stretch;
              							filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25) inset);
              							display: flex;
              							flex-direction: row;
              							align-items: center;
              							justify-content: flex-end;
              							padding: 60px 209px 60px 72px;
              							font-size: 16px;
              							color: var(--text-color);

            						}
									.cieszSiYciemText{
              margin: 0;
                  color: #ffffff !important; 
}
            						.gdzieKadaJazda {
              							width: 381px;
              							position: relative;
              							display: inline-block;
              							flex-shrink: 0;
            						}
            						.markiRnorodne {
              							width: 336px;
              							position: relative;
              							text-transform: capitalize;
              							font-weight: 600;
              							display: inline-block;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							white-space: nowrap;
            						}
            						.markiRnorodneOferujemy {
              							width: 382px;
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
            						.markiRnorodneParent {
              							width: 416px;
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 20px;
            						}
            						.naszZespJest {
              							width: 382px;
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
            						.frameParent {
              							height: 191px;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 24px;
            						}
            						.wynajmijAutoNa {
              							width: 383px;
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
            						.frameGroup {
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 24px;
            						}
            						.text6 {
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 24px;
              							font-size: 28px;
            						}
            						.text5 {
              							width: 1296px;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: center;
              							gap: 80px;
            						}
            						.groupIcon {
              							width: 50.3%;
              							position: absolute;
              							margin: 0 !important;
              							height: 74.8%;
              							top: 27.83%;
              							right: 47.17%;
              							bottom: -2.64%;
              							left: 2.53%;
              							max-width: 100%;
              							overflow: hidden;
              							max-height: 100%;
              							object-fit: contain;
              							z-index: 0;
            						}
            						.imgIcon {
              							width: 799px;
              							position: absolute;
              							margin: 0 !important;
              							top: 97px;
              							left: 243px;
              							height: 408px;
              							object-fit: cover;
              							z-index: 1;
            						}
            						.faktyWLiczbach {
              							width: 756px;
              							position: relative;
              							text-transform: capitalize;
              							display: inline-block;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							white-space: nowrap;
            						}
            						.ametCrasHac {
              							width: 712px;
              							position: relative;
              							display: none;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							-webkit-line-clamp: 2;
              							-webkit-box-orient: vertical;
            						}
            						.ametCrasHacOrciLacusFaucWrapper {
              							width: 712px;
              							height: 42px;
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							font-size: 16px;
            						}
            						.text7 {
              							display: flex;
              							flex-direction: column;
              							align-items: center;
              							justify-content: flex-start;
              							gap: 20px;
              							z-index: 2;
            						}
            						.iconbg1 {
              							width: 72px;
              							position: relative;
              							border-radius: 12px;
              							height: 68px;
              							overflow: hidden;
              							flex-shrink: 0;
            						}
            						.text8 {
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 8px;
            						}
            						.iconText4 {
              							width: 240px;
              							border-radius: 20px;
              							background-color: #fff;
              							overflow: hidden;
              							flex-shrink: 0;
              							display: flex;
              							flex-direction: row;
              							align-items: center;
              							justify-content: flex-start;
              							padding: 16px;
              							box-sizing: border-box;
              							gap: 16px;
            						}
            						.klienci {
              							position: relative;
              							font-size: 16px;
              							text-transform: capitalize;
              							font-weight: 600;
              							color: var(--text-color);

            						}
            						.m {
              							position: relative;
              							text-transform: capitalize;
            						}
            						.counter1 {
              							width: 1296px;
              							display: flex;
              							flex-direction: row;
              							align-items: flex-start;
              							justify-content: center;
              							gap: 64px;
              							z-index: 3;
              							font-size: 24px;
              							color: var(--text-color);

            						}
            						.banner {
              							width: 1270px;
              							border-radius: 20px;
              							background-color: #ff9e0c;
              							height: 487px;
              							overflow: hidden;
              							flex-shrink: 0;
              							display: none;
              							flex-direction: column;
              							align-items: center;
              							justify-content: flex-start;
              							padding: 68px 72px 60px;
              							box-sizing: border-box;
              							position: relative;
              							gap: 80px;
              							text-align: center;
              							color: #fff;
            						}
            						.whereEveryDriveFeelsExtrao {
              							align-self: stretch;
              							height: 528px;
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							padding: 60px 72px 0px;
              							box-sizing: border-box;
              							gap: 40px;
              							font-size: 50px;
              							color: var(--text-color);

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
            						.button {
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
            						.frameDiv {
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
            						.frameContainer {
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
            						.groupIcon2 {
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
            						.text12 {
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
            						.textButtons {
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 40px;
            						}
            						.banner3 {
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
              							left: 241px;
              							height: 540px;
              							z-index: 1;
              							text-align: left;
              							font-size: 26px;
              							color: #fe8400;
              							font-family: 'Arial Black';
            						}
            						.banner2 {
              							align-self: stretch;
              							height: 629px;
              							display: flex;
              							flex-direction: column;
              							align-items: center;
              							justify-content: flex-start;
              							padding: 200px 0px 60px;
              							box-sizing: border-box;
              							position: relative;
              							text-align: center;
              							font-size: 16px;
            						}
            						.banner1 {
              							align-self: stretch;
              							height: 1111px;
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
            						.text13 {
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
            						.iconbg5 {
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
            						.text14 {
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
            						.text15 {
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
            						.text16 {
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
            						.oNas2 {
              							position: relative;
              							line-height: 26px;
              							white-space: pre-wrap;
              							display: -webkit-inline-box;
              							overflow: hidden;
              							text-overflow: ellipsis;
              							-webkit-line-clamp: 3;
              							-webkit-box-orient: vertical;
            						}
            						.text18 {
              							align-self: stretch;
              							display: flex;
              							flex-direction: column;
              							align-items: flex-start;
              							justify-content: flex-start;
              							gap: 16px;
              							font-size: 16px;
            						}
            						.text17 {
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
            						.buttons1 {
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
            						.aboutUs {
              							width: 100%;
position: relative;
background-color: var(--car-bg);
color: var(--car-text);
height: 3817px;
overflow: hidden;
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
    
          					
          					</style>