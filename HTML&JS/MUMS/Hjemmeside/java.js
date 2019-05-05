// JavaScript Document
//Aktiv Menu Farve
$( window ).load( function() {
	MenuPunktAktiv();
	$( '#Formular01' ).submit( Valider );
});
	function MenuPunktAktiv()
{
	var current =  $( location ).attr( 'href' );

	if( current.search( ".html" ) == -1 )
	{
		current = current + "index.html";
	}	
	
	$( '#container a' ).each( function(){
		if( current.toLowerCase() == $( this ).prop( 'href' ).toLowerCase() )
		{
			$( this ).addClass( "active" );
		}
	});
}

//Autoplay Slideshow
// først laver vi en variabel, som tager fat i forsidebilledets ID
var forsideImg = document.getElementById("forsideImg");

// Derefter laver vi et array med stien til det antal billeder vi ønsker i slideshowet 
// (stien behøver ikke at være den samme, så du kan hente eksterne billeder ind i arrayet, så længe de er samme størrelse).
var forsideImgArray = ["images/slide2.png","images/slide3.png","images/slide1.png"];
// Her er det vigtigt at det første billede i arrayet ikke er det samme som det i HTML koden, for så bliver det gentaget.
// Sæt i stedet for det oprindelige billede fra HTML koden, til at være det sidste i dit array.

// Her laver vi en variabel, som sætter startbilledet til det første i vores billedearray, altså plads nummer 0
var forsideImgIndex = 0;

// Nu laver vi den funktion, som skal få billederne til at skifte
function changeForsideImg(){
	
	// Her finder vi stien til det første billede i vores array, altså billede 1 i arrayet på plads 0 (forsideImgIndex er 0).
	forsideImg.setAttribute("src",forsideImgArray[forsideImgIndex]); 
	
	// lægger én til værdien af variablen forsideImgIndex, så vi tager fat i det næste billede næste gang funktionen kører.
	forsideImgIndex++; 
	
	// hvis vi har nået til det sidste billede i vores array, skifter vi forsideImgIndex til 0 igen, så vi starter forfra på første billede
	if(forsideImgIndex >= forsideImgArray.length){
		forsideImgIndex = 0; 
	}
}

// HUSK! setInterval funktionen skal være i millisekunder

// her sætter vi interval mellem skift af billeder til 3 sekunder
var intervalHandle = setInterval(changeForsideImg,3000);


// swiper gallery
var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
	
// validering
$( window ).load( function() {
	$( '#Formular01' ).submit( Valider );
});
function Valider()
	{
		var AntalFejl = 0;
		var FejlBesked1 = "";
		var FejlBesked2 = "";
		var FejlBesked3 = "";
		
		$( '#InputNavn, #InputTelefon, #InputMail' ).css( 'background-color', 'transparent' );
		
		if( $( '#InputNavn' ).val() == "" )
		{
			AntalFejl += 1;
			FejlBesked1 = "Write your name!";
			$( '#InputNavn' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
		}
		else
		{
			var regexpbogstaver = /^[a-zA-Z ]+$/;
			if( !regexpbogstaver.test( $( '#InputNavn' ).val() ) )
			{
				AntalFejl += 1;
				FejlBesked1 = "Only space and letters!";
				$( '#InputNavn' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
			}
			else
			{
				$( '#InputNavn' ).animate({backgroundColor:'#0F0'}, { queue: false, duration : 2000 })
			}
		}
//Mail
			if ( $( '#InputMail' ).val() == "" )
			{
				AntalFejl +=1;
				FejlBesked2 = "Write your mail!";
				$( '#InputMail' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
			}
			else
			{
				var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-z_]+?\.[a-zA-Z]{2,3}$/;
				if( !regexpmail.test( $( '#InputMail' ).val() ) )
				{
					AntalFejl +=1;
					FejlBesked2 = "Mail not valid!";
					$( '#InputMail' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
			}
			else
			{
				$( '#InputMail' ).animate({backgroundColor:'#0F0'}, { queue: false, duration : 2000 })
			}
			}
//Mail slut		
//Telefon
			if( $( '#InputTelefon' ).val() == "" )
			{
				AntalFejl += 1;
				FejlBesked3 = "Write your phone number!";
				$( '#InputTelefon' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
			}
			else
			{
				var regexptal = /^[0-9]+$/;
				if( !regexptal.test( $( '#InputTelefon' ).val() ) )
				{
					AntalFejl += 1;
					FejlBesked3 += "Only numbers!";
					$( '#InputTelefon' ).animate({backgroundColor:'#F00'}, { queue: false, duration : 2000 })
				}
				else
				{
					$( '#InputTelefon' ).animate({backgroundColor:'#0F0'}, { queue: false, duration : 2000 })
				}
			}

			
			if( AntalFejl == 0 )
			{
				return true;
				
			}
			else
			{
				$( '#FejlBesked1' ).html( FejlBesked1 );
				$( '#FejlBesked2' ).html( FejlBesked2 );
				$( '#FejlBesked3' ).html( FejlBesked3 );
				return false;
			}
		}
//Validering slut