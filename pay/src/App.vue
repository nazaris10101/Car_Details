<template>
  	<div :class="$style.content">
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
    		<div :class="$style.content1">
      			<div :class="$style.rentalSummary">
        				<div :class="$style.rentalSummary1">
          					<b :class="$style.rentalSummary2">Rental Summary</b>
          					<div :class="$style.pricesMayChange">Prices may change depending on the length of the rental and the price of your rental car.</div>
        				</div>
        				<img :class="$style.lookIcon" alt="" src="@/assets/Look.png" />
        				<div :class="$style.carName">
          					<b :class="$style.porsche911">Porsche 911</b>
          					<div :class="$style.review">
            						<div :class="$style.reviewStar">
              							<img :class="$style.icActionsStarIcon" alt="" src="@/assets/ic-actions-star.svg" />
              							<img :class="$style.icActionsStarIcon" alt="" src="@/assets/ic-actions-star.svg" />
              							<img :class="$style.icActionsStarIcon" alt="" src="@/assets/ic-actions-star.svg" />
              							<img :class="$style.icActionsStarIcon" alt="" src="@/assets/ic-actions-star.svg" />
              							<img :class="$style.icActionsStarIcon" alt="" src="@/assets/ic-actions-star.svg" />
            						</div>
            						<div :class="$style.reviewer">440+ Reviewer</div>
          					</div>
        				</div>
        				<div :class="$style.line" />
        				<div :class="$style.subtotal">
          					<div :class="$style.subtotal1">Subtotal</div>
          					<div :class="$style.div">$80.00</div>
        				</div>
        				<div :class="$style.tax">
          					<div :class="$style.subtotal1">Tax</div>
          					<div :class="$style.div">$0</div>
        				</div>
        				<div :class="$style.applyNow">
          					<div :class="$style.bg" />
          					<div :class="$style.applyPromoCode">Apply promo code</div>
          					<div :class="$style.applyNow1">Apply now</div>
        				</div>
        				<div :class="$style.totalPrice">
          					<div :class="$style.totalRentalPrice">
            						<b :class="$style.rentalSummary2">Total Rental Price</b>
            						<div :class="$style.overallPriceAnd">Overall price and includes rental discount</div>
          					</div>
          					<b :class="$style.b">$80.00</b>
        				</div>
      			</div>
      			<div :class="$style.payment">
        				<div :class="$style.billingInfo">
          					<div :class="$style.confirmation">
            						<div :class="$style.billingInfo2">Billing Info</div>
            						<div :class="$style.pleaseEnterYour">Please enter your billing info</div>
          					</div>
          					<div :class="$style.name">
            						<div :class="$style.name1">Name</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.yourName1">Your name</div>
            						</div>
          					</div>
          					<div :class="$style.address">
            						<div :class="$style.text"> </div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.yourName1">Address</div>
            						</div>
          					</div>
          					<div :class="$style.townOrCity">
            						<div :class="$style.townCity">Town / City</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.yourName1">Town or city</div>
            						</div>
          					</div>
          					<div :class="$style.phoneNumber">
            						<div :class="$style.phoneNumber1">Phone Number</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.phoneNumber3">Phone number</div>
            						</div>
          					</div>
          					<div :class="$style.step1Of">Step 1 of 4</div>
        				</div>
        				<div :class="$style.rentalInfo">
          					<div :class="$style.confirmation">
            						<b :class="$style.rentalSummary2">Rental Info</b>
            						<div :class="$style.pleaseSelectYour">Please select your rental date</div>
          					</div>
          					<div :class="$style.step1Of">Step 2 of 4</div>
          					<div :class="$style.pickUp">
            						<img :class="$style.markIcon" alt="" src="@/assets/Mark.svg" />
            						<div :class="$style.pickUp1">Pick - Up</div>
          					</div>
          					<div :class="$style.locations">
            						<div :class="$style.locations1">Locations</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.yourName1">Select your city</div>
              							
            						</div>
          					</div>
          					<div :class="$style.date">
            						<div :class="$style.date1">Date</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.selectYourDate1">Select your date</div>
              							
            						</div>
          					</div>
          					<div :class="$style.time">
            						<div :class="$style.date1">Time</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.selectYourDate1">Select your time</div>
              							
            						</div>
          					</div>
          					<div :class="$style.dropOff">
            						<img :class="$style.markIcon" alt="" src="@/assets/Mark.svg" />
            						<div :class="$style.dropOff1">Drop - Off</div>
          					</div>
          					<div :class="$style.locations2">
            						<div :class="$style.locations1">Locations</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.yourName1">Select your city</div>
              							
            						</div>
          					</div>
          					<div :class="$style.date2">
            						<div :class="$style.date1">Date</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.selectYourDate1">Select your date</div>
              							
            						</div>
          					</div>
          					<div :class="$style.time2">
            						<div :class="$style.date1">Time</div>
            						<div :class="$style.yourName">
              							<div :class="$style.bg1" />
              							<div :class="$style.selectYourDate1">Select your time</div>
              							
            						</div>
          					</div>
        				</div>
        				<div :class="$style.paymentMethod">
          					<div :class="$style.confirmation">
            						<b :class="$style.rentalSummary2">Payment Method</b>
            						<div :class="$style.pleaseEnterYour1">Please enter your payment method</div>
          					</div>
          					<div :class="$style.step1Of">Step 3 of 4</div>
          					<div :class="$style.creditCard">
            						<div :class="$style.creditCard1">
              							<img :class="$style.markIcon" alt="" src="@/assets/Mark.svg" />
              							<div :class="$style.creditCard2">Credit Card</div>
            						</div>
            						<div :class="$style.cardNumber">
              							<div :class="$style.cardNumber1">Card Number</div>
              							<div :class="$style.ddMmYy">
                								<div :class="$style.bg11" />
                								<div :class="$style.ddMm">Card number</div>
              							</div>
            						</div>
            						<div :class="$style.cardHolder">
              							<div :class="$style.cardHolder1">Card Holder</div>
              							<div :class="$style.ddMmYy">
                								<div :class="$style.bg11" />
                								<div :class="$style.ddMm">Card holder</div>
              							</div>
            						</div>
            						<div :class="$style.exprationDate">
              							<div :class="$style.exprationDate1">Expration Date</div>
              							<div :class="$style.ddMmYy">
                								<div :class="$style.bg11" />
                								<div :class="$style.ddMm">DD / MM / YY</div>
              							</div>
            						</div>
            						<div :class="$style.visa">
              							<img :class="$style.visaIncLogo1Icon" alt="" src="@/assets/Visa_Inc._logo 1.svg" />
              							<img :class="$style.logomcIcon" alt="" src="@/assets/mc.svg" />
            						</div>
            						<div :class="$style.cvc">
              							<div :class="$style.cvc1">CVC</div>
              							<div :class="$style.ddMmYy">
                								<div :class="$style.bg11" />
                								<div :class="$style.yourName1">CVC</div>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.paypal">
            						<div :class="$style.bg15" />
            						
            						<div :class="$style.paypal1">PayPal</div>
            						<img :class="$style.paypalIcon" alt="" src="@/assets/PayPal.svg" />
          					</div>
          					<div :class="$style.bitcoin">
            						<div :class="$style.bg15" />
            						
            						<div :class="$style.bitcoin1">Bitcoin</div>
            						<img :class="$style.bitcoinIcon" alt="" src="@/assets/Bitcoin.svg" />
          					</div>
        				</div>
        				<div :class="$style.confirmationRental">
          					<div :class="$style.confirmation">
            						<b :class="$style.rentalSummary2">Confirmation</b>
            						<div :class="$style.weAreGetting">We are getting to the end. Just few clicks and your rental is ready!</div>
          					</div>
          					<div :class="$style.step1Of">Step 4 of 4</div>
          					<div :class="$style.confirmation2">
            						<div :class="$style.spamAgreement">
              							<div :class="$style.bg15" />
              							<div :class="$style.checkboxes">
                								
              							</div>
              							<div :class="$style.spamAgreement1">I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
            						</div>
            						<div :class="$style.spamAgreement">
              							<div :class="$style.bg15" />
              							<div :class="$style.checkboxes">
                								
              							</div>
              							<div :class="$style.iAgreeWith">I agree with our terms and conditions and privacy policy.</div>
            						</div>
          					</div>
          					<div :class="$style.safeData">
            						
            						<div :class="$style.safeData1">
              							<div :class="$style.allYourData">All your data are safe</div>
              							<div :class="$style.weAreUsing">We are using the most advanced security to provide you the best experience ever.</div>
            						</div>
          					</div>
          					<div :class="$style.buttonRental">
            						<b :class="$style.rentNow">Rent Now</b>
          					</div>
        				</div>
      			</div>
    		</div>
    		<div :class="$style.footer">
      			<div :class="$style.iconsTextButtons">
        				<div :class="$style.iconsText">
          					<div :class="$style.logo1">
            						<img :class="$style.car31Icon" alt="" src="@/assets/car(3) 1.svg" />
            						<div :class="$style.text1">
              							<b :class="$style.zalogujSi">CARENT </b>
            						</div>
          					</div>
          					<div :class="$style.iconsText1">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
            						<div :class="$style.text2">
              							<div :class="$style.adres">Adres</div>
              							<div :class="$style.ulZota59Container">
                								<p :class="$style.cieszSiYciem">ul. Złota 59 00-120 Warszawa</p>
                								<p :class="$style.cieszSiYciem">&nbsp;</p>
              							</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
            						<div :class="$style.text3">
              							<div :class="$style.adres">Email </div>
              							<div :class="$style.carentgmailcom">carent@gmail.com</div>
            						</div>
          					</div>
          					<div :class="$style.iconsText2">
            						<img :class="$style.iconbg" alt="" src="@/assets/Icon+bg.svg" />
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
              							<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
              							<img :class="$style.groupIcon" alt="" src="@/assets/Group.svg" />
            						</div>
          					</div>
          					<div :class="$style.textButtons">
            						<div :class="$style.przydatneLinki">Przydatne linki</div>
            						<div :class="$style.text6">
              							<div :class="$style.oNas1">O nas  </div>
              							<div :class="$style.minivan">Główna</div>
              							<div :class="$style.minivan">Zaloguj się | Zarejestruj się</div>
            						</div>
          					</div>
          					<div :class="$style.textButtons">
            						<div :class="$style.przydatneLinki">Pojazdy</div>
            						<div :class="$style.text6">
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
                								<img :class="$style.icActionsMultiIcon" alt="" src="@/assets/Group.svg" />
              							</div>
              							<div :class="$style.googlePlay">
                								<img :class="$style.icActionsMultiIcon" alt="" src="@/assets/Group.svg" />
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
<style  module>.heroSectionChild {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	background-color: #141414;
  	width: 613px;
  	height: 742px;
}
  	.mainPictureIcon {
    		position: absolute;
    		top: 104px;
    		left: 531px;
    		width: 909px;
    		height: 545px;
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
    		top: 149px;
    		left: 160px;
    		background-color: rgba(0, 0, 0, 0.15);
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		padding: 32px 32px 32px 0px;
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
    		top: 32px;
    		left: calc(50% - 560px);
    		width: 1152px;
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
    		top: calc(50% - 118px);
    		left: 72px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: center;
    		gap: 16px;
  	}
  	.darkMood {
    		position: absolute;
    		height: 58.33%;
    		width: 44.33%;
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
    		width: 94px;
    		height: 48px;
  	}
  	.off {
    		position: absolute;
    		height: 70.59%;
    		width: 32.88%;
    		top: 14.71%;
    		left: 67.12%;
    		display: inline-block;
  	}
  	.groupItem {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 50px;
    		background-color: #fe8400;
    		width: 34px;
    		height: 34px;
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
  	.on {
    		position: absolute;
    		top: 0px;
    		left: 100px;
    		width: 94px;
    		height: 48px;
    		color: #fff9f9;
  	}
  	.available {
    		position: absolute;
    		height: 6.47%;
    		width: 13.47%;
    		top: 3.77%;
    		right: 61.25%;
    		bottom: 89.76%;
    		left: 25.28%;
    		font-size: 16px;
    		font-family: Poppins;
  	}
  	.heroSection {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		width: 1440px;
    		height: 742px;
  	}
  	.rentalSummary2 {
    		width: 200px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.pricesMayChange {
    		width: 444px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 48px;
    		flex-shrink: 0;
  	}
  	.rentalSummary1 {
    		position: absolute;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
  	}
  	.lookIcon {
    		position: absolute;
    		top: 132px;
    		left: 24px;
    		border-radius: 8px;
    		width: 132px;
    		height: 108px;
    		overflow: hidden;
    		object-fit: cover;
  	}
  	.porsche911 {
    		width: 338px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		display: flex;
    		align-items: center;
    		height: 40px;
    		flex-shrink: 0;
  	}
  	.icActionsStarIcon {
    		width: 20px;
    		position: relative;
    		height: 20px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.reviewStar {
    		overflow: hidden;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 2px;
  	}
  	.reviewer {
    		width: 104px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.review {
    		height: 24px;
    		overflow: hidden;
    		flex-shrink: 0;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
    		font-size: 14px;
    		color: #596780;
  	}
  	.carName {
    		position: absolute;
    		top: 150px;
    		left: 172px;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 8px;
    		font-size: 32px;
  	}
  	.line {
    		position: absolute;
    		top: 271.5px;
    		left: 23.5px;
    		border-top: 1px solid rgba(195, 212, 233, 0.4);
    		box-sizing: border-box;
    		width: 445px;
    		height: 1px;
  	}
  	.subtotal1 {
    		width: 116px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.div {
    		width: 116px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		color: #1a202c;
    		text-align: right;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.subtotal {
    		position: absolute;
    		top: 304px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 212px;
    		font-size: 16px;
    		color: #90a3bf;
  	}
  	.tax {
    		position: absolute;
    		top: 348px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 212px;
    		font-size: 16px;
    		color: #90a3bf;
  	}
  	.bg {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 444px;
    		height: 56px;
  	}
  	.applyPromoCode {
    		position: absolute;
    		top: 16px;
    		left: 32px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		width: 128px;
    		height: 24px;
  	}
  	.applyNow1 {
    		position: absolute;
    		top: 16px;
    		left: 312px;
    		font-size: 16px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		color: #1a202c;
    		text-align: right;
    		display: flex;
    		align-items: center;
    		width: 100px;
    		height: 24px;
  	}
  	.applyNow {
    		position: absolute;
    		top: 400px;
    		left: 24px;
    		width: 444px;
    		height: 56px;
    		font-size: 14px;
    		color: #90a3bf;
  	}
  	.overallPriceAnd {
    		width: 284px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.totalRentalPrice {
    		width: 284px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
  	}
  	.b {
    		width: 128px;
    		position: relative;
    		font-size: 32px;
    		display: flex;
    		text-align: right;
    		align-items: center;
    		height: 48px;
    		flex-shrink: 0;
  	}
  	.totalPrice {
    		position: absolute;
    		top: 488px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 32px;
  	}
  	.rentalSummary {
    		position: absolute;
    		top: 32px;
    		left: 916px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 492px;
    		height: 560px;
    		overflow: hidden;
  	}
  	.billingInfo2 {
    		width: 192px;
    		position: relative;
    		letter-spacing: -0.03em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.pleaseEnterYour {
    		width: 192px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.name1 {
    		width: 48px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.bg1 {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 386px;
    		height: 56px;
  	}
  	.yourName1 {
    		position: absolute;
    		top: 16px;
    		left: 32px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		width: 104px;
    		height: 24px;
  	}
  	.yourName {
    		width: 386px;
    		position: relative;
    		height: 56px;
    		font-size: 14px;
    		color: #90a3bf;
  	}
  	.name {
    		position: absolute;
    		top: 104px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.text {
    		width: 68px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.address {
    		position: absolute;
    		top: 220px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.townCity {
    		width: 92px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.townOrCity {
    		position: absolute;
    		top: 220px;
    		left: 442px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.phoneNumber1 {
    		width: 116px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.phoneNumber3 {
    		position: absolute;
    		top: 16px;
    		left: 32px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		width: 132px;
    		height: 24px;
  	}
  	.phoneNumber {
    		position: absolute;
    		top: 104px;
    		left: 442px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.step1Of {
    		position: absolute;
    		top: 52px;
    		left: 756px;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		text-align: right;
    		display: flex;
    		align-items: center;
    		width: 72px;
    		height: 20px;
  	}
  	.billingInfo {
    		width: 852px;
    		position: relative;
    		border-radius: 10px;
    		background-color: #fff;
    		height: 336px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.pleaseSelectYour {
    		width: 200px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.markIcon {
    		width: 16px;
    		border-radius: 70px;
    		height: 16px;
  	}
  	.pickUp1 {
    		width: 68px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.pickUp {
    		position: absolute;
    		top: 104px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.locations1 {
    		width: 80px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.vuesaxoutlinearrowDownIcon {
    		position: absolute;
    		top: 21px;
    		left: 348px;
    		width: 14px;
    		height: 14px;
  	}
  	.locations {
    		position: absolute;
    		top: 148px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.date1 {
    		width: 40px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.selectYourDate1 {
    		position: absolute;
    		top: 16px;
    		left: 32px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		width: 112px;
    		height: 24px;
  	}
  	.date {
    		position: absolute;
    		top: 148px;
    		left: 442px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.time {
    		position: absolute;
    		top: 264px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.dropOff1 {
    		width: 80px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.dropOff {
    		position: absolute;
    		top: 388px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.locations2 {
    		position: absolute;
    		top: 432px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.date2 {
    		position: absolute;
    		top: 430px;
    		left: 442px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.time2 {
    		position: absolute;
    		top: 548px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.rentalInfo {
    		width: 852px;
    		position: relative;
    		border-radius: 10px;
    		background-color: #fff;
    		height: 664px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.pleaseEnterYour1 {
    		width: 236px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.creditCard2 {
    		width: 88px;
    		position: relative;
    		letter-spacing: -0.02em;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.creditCard1 {
    		position: absolute;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.cardNumber1 {
    		width: 104px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.bg11 {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 362px;
    		height: 56px;
  	}
  	.cardNumber {
    		position: absolute;
    		top: 76px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.cardHolder1 {
    		width: 94px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.cardHolder {
    		position: absolute;
    		top: 192px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.exprationDate1 {
    		width: 114px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.ddMm {
    		position: absolute;
    		top: 16px;
    		left: 30.01px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		display: flex;
    		align-items: center;
    		width: 97.5px;
    		height: 24px;
  	}
  	.ddMmYy {
    		width: 362px;
    		position: relative;
    		height: 56px;
    		font-size: 14px;
    		color: #90a3bf;
  	}
  	.exprationDate {
    		position: absolute;
    		top: 76px;
    		left: 418px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.visaIncLogo1Icon {
    		width: 48px;
    		position: relative;
    		height: 16px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.logomcIcon {
    		width: 32px;
    		position: relative;
    		height: 20px;
  	}
  	.visa {
    		position: absolute;
    		top: 24px;
    		right: 24px;
    		overflow: hidden;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: flex-start;
    		gap: 12px;
  	}
  	.cvc1 {
    		width: 36px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.cvc {
    		position: absolute;
    		top: 192px;
    		left: 418px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.creditCard {
    		position: absolute;
    		top: 104px;
    		left: 24px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 804px;
    		height: 308px;
    		overflow: hidden;
  	}
  	.bg15 {
    		position: absolute;
    		top: 0px;
    		left: 0px;
    		border-radius: 10px;
    		background-color: #fff;
    		width: 804px;
    		height: 56px;
  	}
  	.icActionsSelectIcon {
    		position: absolute;
    		top: 16px;
    		left: 32px;
    		width: 24px;
    		height: 24px;
    		overflow: hidden;
  	}
  	.paypal1 {
    		position: absolute;
    		top: 16px;
    		left: 76px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		width: 52px;
    		height: 24px;
  	}
  	.paypalIcon {
    		position: absolute;
    		height: 42.86%;
    		width: 12.44%;
    		top: 28.57%;
    		right: 3.98%;
    		bottom: 28.57%;
    		left: 83.58%;
    		max-width: 100%;
    		overflow: hidden;
    		max-height: 100%;
  	}
  	.paypal {
    		position: absolute;
    		top: 436px;
    		left: 24px;
    		width: 804px;
    		height: 56px;
  	}
  	.bitcoin1 {
    		position: absolute;
    		top: 16px;
    		left: 76px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		width: 56px;
    		height: 24px;
  	}
  	.bitcoinIcon {
    		position: absolute;
    		height: 35.71%;
    		width: 11.69%;
    		top: 32.14%;
    		right: 3.98%;
    		bottom: 32.14%;
    		left: 84.33%;
    		max-width: 100%;
    		overflow: hidden;
    		max-height: 100%;
  	}
  	.bitcoin {
    		position: absolute;
    		top: 516px;
    		left: 24px;
    		width: 804px;
    		height: 56px;
  	}
  	.paymentMethod {
    		width: 852px;
    		position: relative;
    		border-radius: 10px;
    		background-color: #fff;
    		height: 596px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.weAreGetting {
    		width: 436px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.confirmation {
    		position: absolute;
    		top: 24px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 4px;
    		font-size: 20px;
  	}
  	.icActionsMultiIcon {
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
  	.checkboxes {
    		position: absolute;
    		height: 42.86%;
    		width: 2.99%;
    		top: 28.57%;
    		right: 93.03%;
    		bottom: 28.57%;
    		left: 3.98%;
  	}
  	.spamAgreement1 {
    		position: absolute;
    		top: 16px;
    		left: 76px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		width: 683px;
    		height: 24px;
  	}
  	.spamAgreement {
    		width: 804px;
    		position: relative;
    		height: 56px;
  	}
  	.iAgreeWith {
    		position: absolute;
    		height: 42.86%;
    		width: 81.34%;
    		top: 28.57%;
    		left: 9.45%;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
  	}
  	.confirmation2 {
    		position: absolute;
    		top: 104px;
    		left: 24px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 24px;
    		color: #1f2544;
  	}
  	.icSecuritySafetyIcon {
    		width: 32px;
    		position: relative;
    		height: 32px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.allYourData {
    		width: 204px;
    		position: relative;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 600;
    		display: flex;
    		align-items: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.weAreUsing {
    		width: 548px;
    		position: relative;
    		font-size: 14px;
    		letter-spacing: -0.02em;
    		line-height: 150%;
    		font-weight: 500;
    		color: #90a3bf;
    		display: flex;
    		align-items: center;
    		height: 20px;
    		flex-shrink: 0;
  	}
  	.safeData1 {
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 8px;
  	}
  	.safeData {
    		position: absolute;
    		top: 360px;
    		left: 24px;
    		overflow: hidden;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 16px;
  	}
  	.rentNow {
    		width: 76px;
    		position: relative;
    		display: flex;
    		align-items: center;
    		justify-content: center;
    		height: 24px;
    		flex-shrink: 0;
  	}
  	.buttonRental {
    		position: absolute;
    		top: 272px;
    		right: 688px;
    		border-radius: 10px;
    		background-color: #fe8400;
    		width: 140px;
    		height: 56px;
    		display: flex;
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		padding: 0px 20px;
    		box-sizing: border-box;
    		text-align: center;
    		color: #fff;
  	}
  	.confirmationRental {
    		width: 852px;
    		position: relative;
    		border-radius: 10px;
    		background-color: #fff;
    		height: 484px;
    		overflow: hidden;
    		flex-shrink: 0;
  	}
  	.payment {
    		position: absolute;
    		top: 32px;
    		left: 32px;
    		display: flex;
    		flex-direction: column;
    		align-items: flex-start;
    		justify-content: flex-start;
    		gap: 32px;
    		font-size: 16px;
  	}
  	.content1 {
    		position: absolute;
    		top: 742px;
    		left: -3px;
    		background-color: #fff;
    		width: 1440px;
    		height: 2296px;
    		overflow: hidden;
    		font-size: 20px;
    		color: #1a202c;
    		font-family: 'Plus Jakarta Sans';
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
  	.groupIcon {
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
  	.text6 {
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
  	.appStore {
    		width: 171.4px;
    		position: relative;
    		height: 50px;
  	}
  	.googlePlay {
    		width: 137.1px;
    		position: relative;
    		height: 40px;
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
    		position: absolute;
    		top: 3038px;
    		left: -3px;
    		background-color: #000;
    		width: 1440px;
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: flex-start;
    		padding: 60px 72px 40px;
    		box-sizing: border-box;
    		gap: 80px;
    		font-size: 16px;
    		font-family: 'Work Sans';
  	}
  	.content {
    		width: 100%;
    		position: relative;
    		background-color: #f6f7f9;
    		height: 3573px;
    		overflow: hidden;
    		text-align: left;
    		font-size: 48px;
    		color: #fff;
    		font-family: Montserrat;
  	}

</style>