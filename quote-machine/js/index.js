$(document).ready(function(){
    $(".btn").on("click", function getquote(){
        var a = ["'I love you the more in that I believe you had liked me for my own sake and for nothing else.'","I'm gonna make him an offer he can't refuse.",  "'But man is not made for defeat. A man can be destroyed but not defeated.'", "Frankly, my dear, I don't give a damn.", "You talking to me?", "My mama always said life was like a box of chocolates. You never know what you're gonna get.", "Keep your friends close, but your enemies closer.", "They call it a Royale with cheese.", "The greatest trick the devil ever pulled was convincing the world he didn't exist.", "I just want you to know that you’re very special… and the only reason I’m telling you is that I don’t know if anyone else ever has.", 'Hey dad, you wanna hear something funny? There was a man who was drowning, and a boat came, and the man on the boat said "Do you need help?" and the man said "God will save me". Then another boat came and he tried to help him, but he said "God will save me", then he drowned and went to Heaven. Then the man told God, "God, why didn\'t you save me?" and God said "I sent you two boats, you dummy!"', "Christopher Gardner: [after playing basket ball] Hey. Don't ever let somebody tell you... You can't do something. Not even me. All right?Chris: All right.Christopher Gardner: You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period."];
      var autho = ["-John Keats", "-Ernest", "-The Godfather", "-Gone With Wind", "-Taxi Driver", "-Forrest Gump", "The Godfather 2", "-Pulp Fiction", "The Usual Suspects", "-The Perks of being a Wallflower", "-The Pursuit of Happiness", "-The Pursuit of Happiness"]
      var b = Math.floor(Math.random() * a.length);
      var c = a[b];
      var d = autho[b];
     $(".quote").text(c);
      $(".author").text(d);
     
    });
});