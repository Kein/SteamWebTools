W.$('accept_ssa').checked=true;
//W.$('verify_country_only').checked=true;

if(W.location.search.indexOf('purchasetype=gift')>-1){
	if(!W.$('send_self')){
		var curSteamId64;
		if(curSteamId64=document.cookie.match(/steamRememberLogin=(\d{17})/)){
			curSteamId64 = curSteamId64[1];
			var acid=parseInt(curSteamId64.substr(-10),10)-7960265728;
			W.$J('#current_friend_choice').after('<div class="cart_send_choice checkout_content"><input class="send_choice_radio" type="radio" id="send_self" name="send_method" onchange="if(this.checked)SelectGiftRecipient('+acid+',\'\');CheckFriendDisplay();"><label for="send_self" class="send_choice_txt"> '+t('toInventory')+'</label></div>');
		}
	}
	W.$('send_self').checked=true;
	W.$('send_self').onchange();
}

