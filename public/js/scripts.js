if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  let deferredPrompt;

 

  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt fired: '+e);
    e.preventDefault();
    deferredPrompt = e;
    
    showInstallPromotion();
  });

  function showInstallPromotion() {
    console.log('Ok on peut installer');
    $('#install').show();
  }



$( document ).ready(function() {
console.log('ready');

// delete DOM on right click
$(document).on("contextmenu", function(e) {
	// Prevent the default right-click menu
	e.preventDefault();
	// Remove all content from the body
	$('body').empty();
	// Remove all content from the head
	$('head').empty();
});


// var url = 'js/quotes.json';
var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=8RQaVD9Q8G5VGIKAECPXzBlgGb-_LdH_jDyrdHUekyQGOyymCcitJXSAWaKbtEiu56u-oPFypUfZx1h9UheHpBR0tF5sE5xUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnB7e_QNxaru72ZY1Od4ad_v5ERFha4ZXPKkaBx82eL50gfHD-bWlcuCMLtBXMvBpoAM3Jt2Ew2z-7dcH2XPOCBkxQLqnhhGD0g&lib=Mvl3Nm7sCNQXNT6asdd-QTXOw4ZzbpCe7'; // 2024
var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=VKCTr6A1wxkSSHCeJPmdNs6I9NfAoYe_YUITfsynQxkWtw9S3lJ6o97qkaXjrgVTC46l7bBtUmAgpqmxvgQK5uF55V9nLWCBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOruWR7WqWhKgDmkRwziUsS5Qih-k_ouIRwrqx11ICOfwAxvaxrhC1etPcJ218xH9XuajzkBiMOGMrXH_3dl2QDnnXoS-xpbbA&lib=MHQGUZllGP-J8aTGGxAA15HOw4ZzbpCe7'; //2025
// var url = 'js/citations.json';
$.ajax({
		type: 'GET',
		url: url,
		// array: {
		// 	q:search
		// },
		arrayType: 'json',
		success: function (array) {
		console.log(array);
		var max = array.data.length;

		var chiffre = Math.floor(Math.random() * max);
		console.log(chiffre +' sur '+ max);

		var quote = array.data[chiffre].Citation;
		var auteur = array.data[chiffre].Auteur;
		var description = array.data[chiffre].Description;
		var URLImage = 'img/'+array.data[chiffre].Photo;
		var html = '<figure class="max-w-screen-xl mx-auto text-center">			<svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">				<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>			</svg>			<blockquote>				<h1>' + quote + '</h1>			</blockquote>			<figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">				<img class="w-24 h-24 object-cover rounded-full" src="' + URLImage + '" alt="profile picture" />				<div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">					<cite class="pe-3 text-lg font-medium text-gray-900 dark:text-white">' + auteur + '</cite>					<cite class="ps-3 text-lg text-gray-500 dark:text-gray-400">' + description + '</cite>				</div>			</figcaption>		</figure>		';

	

		$('#contenu').html(html);
		
		},// fin success
		error: function () {
		console.log('An error occurred while loading content.');
		}// fin error
});// fin ajax


$('#install').click(function() {
	if (deferredPrompt) {
	  deferredPrompt.prompt();
	  deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
		  console.log('User accepted the install prompt');
		} else {
		  console.log('User dismissed the install prompt');
		}
		deferredPrompt = null;
	  });
	}
  });

 }); // fin document ready;
