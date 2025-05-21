<template>
  	<div :class="$style.carDetails">
    		<div :class="$style.heroSection">
      			<div :class="$style.heroSectionChild" />
      			<img :class="$style.mainPictureIcon" alt="" src="@/assets/Main Picture.png" />
      			<div :class="$style.headerText">
        				<div :class="$style.cieszSiYciemDzikiNaszymParent">
          					<div :class="$style.cieszSiYciemContainer">
            						<p :class="$style.cieszSiYciem">Ciesz się życiem dzięki</p>
            						<p :class="$style.cieszSiYciem">naszym wygodnym</p>
            						<p :class="$style.cieszSiYciem">samochodom.</p>
          					</div>
          					<div :class="$style.carentJestGotowy">Carent jest gotowy zaoferować najlepsze doświadczenie w zakresie wynajmu samochodów.</div>
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
            						<div :class="$style.oNas">O nas  </div>
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
        				<div :class="$style.darkMood">Dark Mood</div>
        				<div :class="$style.on">
          					<div :class="$style.rectangleParent">
            						<div :class="$style.groupChild" />
            						<div :class="$style.offParent">
              							<div :class="$style.off">Off</div>
              							<div :class="$style.groupItem" />
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.desktop13Wrapper">
      			<div :class="$style.desktop13">
        				<div :class="$style.leftSide">
          					<div :class="$style.submit">
            						<img :class="$style.submitBackgroundIcon" alt="" src="@/assets/background.svg" />
            						<div :class="$style.submit1">Wysłać</div>
          					</div>
          					<div :class="$style.inputFields">
            						<div :class="$style.nameInputDark2">
              							<div :class="$style.background" />
              							<div :class="$style.name">
                								<div :class="$style.name1">Imię i nazwisko</div>
              							</div>
            						</div>
            						<div :class="$style.nameInputDark2">
              							<div :class="$style.background" />
              							<div :class="$style.email">
                								<div :class="$style.email1">Email</div>
              							</div>
            						</div>
            						<div :class="$style.contentInputDark2">
              							<div :class="$style.background2" />
              							<div :class="$style.content">Treść</div>
            						</div>
            						<div :class="$style.newsletterSignupDark" />
          					</div>
          					<div :class="$style.skontaktujSiZ">Skontaktuj się z nami</div>
        				</div>
        				<div :class="$style.rightSide">
          					<div :class="$style.describtion">
            						<div :class="$style.introduction">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
            						<div :class="$style.location">
              							<img :class="$style.mapsIcon" alt="" src="@/assets/Maps.png" />
              							<div :class="$style.text">
                								<div :class="$style.carent">CARENT </div>
                								<b :class="$style.ulZota59">ul. Złota 59</b>
                								<div :class="$style.warszawa00120">
                  									<b>Warszawa</b>
                  									<span> </span>
                  									<b>00-120</b>
                								</div>
              							</div>
            						</div>
            						<div :class="$style.informations">
              							<div :class="$style.email2">
                								<img :class="$style.emailIcon" alt="" src="@/assets/Email Icon.svg" />
                								<b :class="$style.zalogujSi">carent@gmail.com</b>
              							</div>
              							<div :class="$style.phone">
                								<img :class="$style.phoneIcon" alt="" src="@/assets/Phone Icon.svg" />
                								<b :class="$style.zalogujSi">+48 22 222 22 00</b>
              							</div>
              							<div :class="$style.location1">
                								<img :class="$style.locationIcon" alt="" src="@/assets/Location Icon.svg" />
                								<b :class="$style.zalogujSi">ul. Złota 59 00-120 Warszawa</b>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.socialMediaIcons">
            						<img :class="$style.instagramIcon" alt="" src="@/assets/Instagram.svg" />
            						<img :class="$style.twitterIcon" alt="" src="@/assets/Twitter.svg" />
            						<img :class="$style.facebookIcon" alt="" src="@/assets/Facebook.svg" />
            						<img :class="$style.youtubeIcon" alt="" src="@/assets/Youtube.svg" />
          					</div>
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
        				<div :class="$style.button">
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
          					<div :class="$style.text1">
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
            						<div :class="$style.text2">
              							<b :class="$style.zalogujSi">CARENT </b>
            						</div>
          					</div>
          					<div :class="$style.iconsText1">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
            						<div :class="$style.text3">
              							<div :class="$style.adres">Adres</div>
              							<div :class="$style.ulZota59Container">
                								<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                								<p :class="$style.cieszSiYciem">&nbsp;</p>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
            						<div :class="$style.text4">
              							<div :class="$style.adres">Email </div>
              							<div :class="$style.carentgmailcom">carent@gmail.com</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
            						<div :class="$style.text5">
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
              							<img :class="$style.groupIcon2" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon2" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon2" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon2" alt="" src="@/assets/Group.svg" />
            						</div>
          					</div>
          					<div :class="$style.text6">
            						<div :class="$style.przydatneLinki">Przydatne linki</div>
            						<div :class="$style.text7">
              							<div :class="$style.oNas1">O nas  </div>
              							<div :class="$style.minivan">Główna</div>
              							<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
            						</div>
          					</div>
          					<div :class="$style.text6">
            						<div :class="$style.przydatneLinki">Pojazdy</div>
            						<div :class="$style.text7">
              							<div :class="$style.adres">Sedan</div>
              							<div :class="$style.adres">Cabriolet</div>
              							<div :class="$style.adres">Pickup</div>
              							<div :class="$style.minivan">Minivan</div>
              							<div :class="$style.adres">SUV</div>
            						</div>
          					</div>
          					<div :class="$style.text6">
            						<div :class="$style.pobierzAplikacj">Pobierz aplikację</div>
            						<div :class="$style.buttons1">
              							<div :class="$style.appStoreIcon">
                								<img :class="$style.groupIcon6" alt="" src="@/assets/Group.svg" />
              							</div>
              							<div :class="$style.googlePlayIcon">
                								<img :class="$style.groupIcon6" alt="" src="@/assets/Group.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div :class="$style.text10"> </div>
    		</div>
  	</div>
</template>
<style  module>.heroSectionChild {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	background-color: #141414;
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
    		width: 256px;
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
    		width: 220px;
    		border-radius: 4px;
    		background-color: #fe8400;
    		height: 40px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		padding: 8px;
    		box-sizing: border-box;
  	}
  	.menuItems {
    		width: 670px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 32px;
  	}
  	.menu {
    		width: 643px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		font-size: 16px;
    		color: #141414;
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
    		top: calc(50% - 64.5px);
    		left: 84.41px;
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
    		font-size: 48px;
    		font-family: Montserrat;
  	}
  	.backgroundIcon {
    		position: absolute;
    		top: -144px;
    		left: -122px;
    		width: 1200px;
    		height: 853px;
  	}
  	.submitBackgroundIcon {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		width: 109px;
    		height: 37px;
  	}
  	.submit1 {
    		position: absolute;
    		top: 4px;
    		left: 18px;
    		font-weight: 500;
  	}
  	.submit {
    		position: absolute;
    		top: 463.67px;
    		left: 0px;
    		width: 90.8px;
    		height: 30.8px;
  	}
  	.background {
    		position: absolute;
    		height: 77.27%;
    		width: 100%;
    		top: 22.73%;
    		right: 0%;
    		bottom: 0%;
    		left: 0%;
    		background-color: #fff;
    		border-bottom: 1px solid #fff;
    		box-sizing: border-box;
  	}
  	.name1 {
    		position: absolute;
    		top: -25%;
    		left: 0%;
  	}
  	.name {
    		position: absolute;
    		top: 19px;
    		left: 8px;
    		width: 49px;
    		height: 16px;
  	}
  	.nameInputDark2 {
    		width: 430px;
    		position: relative;
    		height: 44px;
  	}
  	.email1 {
    		position: absolute;
    		top: -50%;
    		left: 0%;
  	}
  	.email {
    		position: absolute;
    		top: 21px;
    		left: 8px;
    		width: 44px;
    		height: 12px;
  	}
  	.background2 {
    		position: absolute;
    		height: 93.93%;
    		width: 100%;
    		top: 7.1%;
    		right: 0%;
    		bottom: -1.04%;
    		left: 0%;
    		background-color: #fff;
    		border-bottom: 1px solid #fff;
    		box-sizing: border-box;
  	}
  	.content {
    		position: absolute;
    		top: 12%;
    		left: 1.86%;
  	}
  	.contentInputDark2 {
    		width: 430px;
    		position: relative;
    		height: 150px;
  	}
  	.newsletterSignupDark {
    		width: 243px;
    		height: 28px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.inputFields {
    		position: absolute;
    		top: 106.17px;
    		left: 0px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 27.5px;
    		font-size: 16px;
    		color: #000;
  	}
  	.skontaktujSiZ {
    		position: absolute;
    		top: 0px;
    		left: 1px;
    		font-size: 52px;
    		font-weight: 600;
    		display: inline-block;
    		width: 955px;
    		height: 65px;
  	}
  	.leftSide {
    		position: absolute;
    		top: 22px;
    		left: 37px;
    		width: 956px;
    		height: 494.5px;
  	}
  	.introduction {
    		width: 416px;
    		position: relative;
    		font-family: Inter;
    		display: none;
  	}
  	.mapsIcon {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		width: 416px;
    		height: 174px;
    		object-fit: cover;
  	}
  	.carent {
    		position: absolute;
    		top: 4px;
    		left: 7px;
    		font-size: 12px;
    		font-weight: 600;
    		color: #de6e4b;
  	}
  	.ulZota59 {
    		position: absolute;
    		top: 24px;
    		left: 8px;
  	}
  	.warszawa00120 {
    		position: absolute;
    		top: 41px;
    		left: 8px;
  	}
  	.text {
    		position: absolute;
    		top: 10px;
    		left: 292px;
    		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    		border-radius: 10px;
    		background-color: #fff;
    		width: 113px;
    		height: 63px;
    		overflow: hidden;
  	}
  	.location {
    		width: 416px;
    		position: relative;
    		border-radius: 10px;
    		height: 174px;
    		font-size: 11px;
  	}
  	.emailIcon {
    		width: 22px;
    		position: relative;
    		height: 17.6px;
  	}
  	.email2 {
    		position: absolute;
    		top: 72px;
    		left: 0px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.phoneIcon {
    		width: 22px;
    		position: relative;
    		height: 22px;
  	}
  	.phone {
    		position: absolute;
    		top: 37px;
    		left: 2px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.locationIcon {
    		width: 26.4px;
    		position: relative;
    		height: 24px;
  	}
  	.location1 {
    		position: absolute;
    		top: 0px;
    		left: 2px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.informations {
    		width: 283.4px;
    		position: relative;
    		height: 96px;
  	}
  	.describtion {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 28px;
  	}
  	.instagramIcon {
    		width: 18.8px;
    		position: relative;
    		height: 18.8px;
  	}
  	.twitterIcon {
    		width: 20.9px;
    		position: relative;
    		height: 17px;
  	}
  	.facebookIcon {
    		width: 20px;
    		position: relative;
    		height: 20px;
  	}
  	.youtubeIcon {
    		width: 20px;
    		position: relative;
    		height: 14px;
  	}
  	.socialMediaIcons {
    		position: absolute;
    		top: 375.83px;
    		left: 247.5px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 13px;
  	}
  	.rightSide {
    		position: absolute;
    		top: 137.33px;
    		left: 562.17px;
    		width: 416px;
    		height: 395.8px;
    		font-size: 16px;
    		color: #000;
  	}
  	.desktop13 {
    		width: 1005px;
    		position: relative;
    		box-shadow: 0px 8px 10px rgba(222, 110, 75, 0.25);
    		border-radius: 30px;
    		background-color: #fe890a;
    		border: 2px solid rgba(0, 0, 0, 0.25);
    		box-sizing: border-box;
    		height: 565px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.desktop13Wrapper {
    		align-self: stretch;
    		height: 697px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: center;
    		padding: 60px 312px;
    		box-sizing: border-box;
    		font-family: Poppins;
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
  	.text1 {
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
    		width: 137.1px;
    		position: relative;
    		height: 40px;
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
    		font-size: 16px;
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
    		color: #5937e0;
  	}
  	.car31Icon {
    		width: 48px;
    		position: relative;
    		height: 48px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.text2 {
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
  	.text3 {
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
  	.text4 {
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
  	.text5 {
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
    		white-space: pre-wrap;
    		display: -webkit-inline-box;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		-webkit-line-clamp: 3;
    		-webkit-box-orient: vertical;
  	}
  	.text7 {
    		align-self: stretch;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
    		font-size: 16px;
  	}
  	.text6 {
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
  	.text10 {
    		position: relative;
    		font-size: 14px;
    		line-height: 26px;
    		font-family: Inter;
  	}
  	.footer {
    		align-self: stretch;
    		background-color: #000;
    		height: 565px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 60px 72px 40px;
    		box-sizing: border-box;
    		gap: 80px;
    		font-size: 16px;
  	}
  	.carDetails {
    		width: 100%;
    		position: relative;
    		background-color: #fff;
    		height: 3142px;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 30px;
    		text-align: left;
    		font-size: 20px;
    		color: #fff;
    		font-family: 'Work Sans';
  	}

</style>