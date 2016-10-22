javascript:
(function(){

var namelist = [""];
for (var i = 0; i < webMessengerRecentMessages.children.length; i++) {
	var msg = webMessengerRecentMessages.children[i];
	if (msg.classList.contains("webMessengerMessageGroup")) {
		var tname = msg.children[1].children[1].children[1].children[0].children[0].innerText;
		if (namelist.indexOf(tname) === -1) {
			namelist.push(tname);
		}
	}
}
alert("We found the following user name.\nLet's change it.\n"+namelist.join("\n"));
while (true) {
	var lists = "Input the user's number that you want to change it.\nOr click Cancel.\n\n";
	for (var i = 1; i < namelist.length; i++) {
		lists+=i+". "+namelist[i]+"\n";
	}
	var user = 0;
	while (user !== null && (user <= 0 || user > namelist.length)) {
		user = prompt(lists);
	}
	if (user === null) {
		break;
	}
	var item = 0;
	while (item !== null && item != 1 && item != 2 && item != 3) {
		item = prompt("Change "+namelist[user]+"'s Name or Profile Picture.\n1 for Name.\n2 for Picture.\n3 for Both.\nOr click Cancel.");
	}
	if (item === null) {
		continue;
	}
	if (item == 1 || item == 3) {
		var nname = prompt("Input "+namelist[user]+"'s new Name.\nOr click Cancel.");
		if (nname !== null) {
			for (var i = 0; i < webMessengerRecentMessages.children.length; i++) {
				var msg = webMessengerRecentMessages.children[i];
				if (msg.classList.contains("webMessengerMessageGroup") && msg.children[1].children[1].children[1].children[0].children[0].innerText == namelist[user]) {
					msg.children[1].children[1].children[1].children[0].children[0].innerText = nname;
				}
			}
			namelist[user] = nname;
		}
	}
	if (item == 2 || item == 3) {
		var npic = prompt("Input "+namelist[user]+"'s new Picture url.\nEmpty string for default picture.\nOr click Cancel.");
		if (npic !== null) {
			if (npic === "") {
				npic = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
			}
			for (var i = 0; i < webMessengerRecentMessages.children.length; i++) {
				var msg = webMessengerRecentMessages.children[i];
				if (msg.classList.contains("webMessengerMessageGroup") && msg.children[1].children[1].children[1].children[0].children[0].innerText == namelist[user]) {
					msg.children[1].children[0].children[0].children[0].src = npic;
				}
			}
		}
	}
}
alert("Exit.");

})();
